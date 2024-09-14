import { BrowserRouter,Route,Routes } from "react-router-dom";
import Layout from "./Components/Layout";
import Home from "./Components/Home";
import CounterApp from "./Components/CounterApp";
import ThemeApp from "./Components/ThemeApp";
import ToDoList from "./Components/ToDoList";

const App = () =>{
    return(
      <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout/>}>
            <Route index element={<Home/>}/>
            <Route path="home" element={<Home/>}/>
            <Route path="counterapp" element={<CounterApp/>}/>
            <Route path="themeapp" element={<ThemeApp/>}/>
            <Route path="todolist" element={<ToDoList/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
      </>
    )
}
export default App;