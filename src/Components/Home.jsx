import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const Home = () =>{
    const navigate = useNavigate();
    const counterApp = () =>{
        navigate("/counterapp")
    }
    const themeApp = () =>{
        navigate("/themeapp")
    }
    const todoApp = () =>{
        navigate("/todolist")
    }
    return(
        <>
        <center><h1>Home Page</h1></center>
        <div id="home">
            <Button variant="outline-primary" onClick={counterApp}>Counter App</Button>
            <Button variant="outline-primary" onClick={themeApp}>Theme App</Button>
            <Button variant="outline-primary" onClick={todoApp}>ToDo App</Button>
        </div>
        </>
    )
}

export default Home;