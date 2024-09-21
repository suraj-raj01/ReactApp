import { Button, Form,} from "react-bootstrap";
import  {changeColor1,changeColor2,changeColor3,changeColor} from '../Slice'
import { useDispatch,useSelector } from "react-redux";
import { useState } from "react";
const ThemeApp = () =>{
    const dispatch = useDispatch();
    const color = useSelector((state)=>state.bgcolor.color)
    const [clr,setClr] = useState("");
    return(
        <>
        <center><h1>ThemeApp</h1></center>
        <div id="hero" style={{backgroundColor:color}}>
            {/*  for change color */}
            <div style={{display:'flex',gap:'5px'}}>
            <Form>
            <Form.Control
                placeholder="enter color"
                type="text" value={clr} onChange={(e)=>{setClr(e.target.value)}}
            />
            </Form>
            <Button variant="outline-primary" onClick={()=>{dispatch(changeColor(clr))}}>change</Button>
            </div>

            {/* <Button variant="info" onClick={()=>{dispatch(changeColor1())}}>ChangeColor1</Button>
            <Button variant="info" onClick={()=>{dispatch(changeColor2())}}>ChangeColor2</Button>
            <Button variant="info" onClick={()=>{dispatch(changeColor3())}}>ChangeColor3</Button> */}
        </div>
        </>
    )
}
export default ThemeApp;