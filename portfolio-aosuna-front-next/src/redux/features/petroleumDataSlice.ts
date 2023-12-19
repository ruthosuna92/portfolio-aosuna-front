// redux/apiSlice.ts
import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';

interface FetchDataParams {
    oils: string[];
  }
  

interface ApiResponse {
  // Define la estructura de tu respuesta de la API según tu caso
  curve: string,
  productName: string,
  seriesDescription: string,
  units: string,
  periodAndValue: Array<{ x: number; y: number }>;
}

export const petroleumFetchData = createAsyncThunk<ApiResponse[], FetchDataParams>(
  'api/fetchData',
  async ({ oils }, { getState }) => {
    try {
        const queryParams = new URLSearchParams();

        oils.forEach((oil) => {
          queryParams.append('oil', oil);
        });
        const url = `http://localhost:8080/valuesOfPetroleum?${queryParams.toString()}`;
      const response = await fetch(url);

      if (!response.ok) {
        // Puedes manejar errores de respuesta aquí
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const data = await response.json();
      return data;
    } catch (error:any) {
      throw new Error(error.message);
    }
  }
);

const petroleumDataSlice = createSlice({
  name: 'petroleumApi',
  initialState: {
    data: null as ApiResponse[] | null,
    loading: false,
    error: null as string | null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(petroleumFetchData.pending, (state) => {
        state.loading = true;
      })
      .addCase(petroleumFetchData.fulfilled, (state, action: PayloadAction<ApiResponse[]>) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(petroleumFetchData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error ? action.error.message || null : null;
      });
  },
});

export default petroleumDataSlice.reducer;
