import { petroleumFetchData } from "@/redux/features/petroleumDataSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";

const Background = () => {
    const dispatch = useAppDispatch();
    const { data, loading, error } = useAppSelector((state) => state.petroleumReducer);
  
    const handleFetchData = () => {
      dispatch(petroleumFetchData({ oils: ['EPC45G', 'EPC20B'] }));
    };
    return <>
    <h1>I am the wonderful background</h1>

<div>
      <button onClick={handleFetchData} disabled={loading}>
        {loading ? 'Cargando...' : 'Cargar Datos'}
      </button>
      {error && <p>Error: {error}</p>}
      {data && data.map((dat) => {
        return <div>
        <h4>{dat.curve}</h4>
        <p>{dat.productName}</p>
        <p>{dat.periodAndValue.map((pyv) => {
            return <div>
                <p>
                    {pyv.x}
                </p>
                <p>
                    {pyv.y}
                </p>
            </div>
        })}</p>
        </div>
      })}
    </div>
    </>
}

export default Background;