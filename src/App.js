import './App.css';
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import {Route, Routes} from "react-router-dom";
import Home from "./components/Home/home";
import About from "./pages/About/about";
import Pool from "./pages/Pool/pool";
import Trainer from "./pages/Tarainer/trainer";
import Contact from "./pages/Contact/contact";

function App() {
    return (
        <>
            <Header/>
            <Routes>
                <Route path={"/"} element={<Home/>}/>
                <Route path={"/about"} element={<About/>}/>
                <Route path={"/pool"} element={<Pool/>}/>
                <Route path={"/trainer"} element={<Trainer/>}/>
                <Route path={"/contact"} element={<Contact/>}/>
            </Routes>
            <Footer/>
        </>
    );
}

export default App;
