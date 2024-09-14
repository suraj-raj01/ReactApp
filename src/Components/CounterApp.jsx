import { useDispatch,useSelector } from "react-redux";
import { decreament, increament } from "../Slice";
import { Button } from "react-bootstrap";
const CounterApp = () =>{
    const dispatch = useDispatch();
    const count = useSelector((state)=>state.counter.count)
    return(
        <>
        <center><h1>CounterApp</h1></center>
        <div id="hero">
            <h3 style={{fontWeight:'600'}}>Count : {count}</h3>
            <div style={{
                display:'flex',
                gap:"10px"
            }}>
            <Button variant="outline-primary" onClick={()=>{dispatch(increament())}}>Increament</Button>
            <Button variant="outline-primary" onClick={()=>{dispatch(decreament())}}>Decreament</Button>
            </div>
        </div>
        </>
    )
}
export default CounterApp;