import './App.css';
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import {Route, Routes} from "react-router-dom";
import Home from "./components/Home/home";
import Pool from "./pages/Pool/pool";
import Trainer from "./pages/Tarainer/trainer";
import Services from "./pages/Services/services";
import AboutUS from "./pages/About";
import SignInUp from "./pages/Registr/sign-in-up";

function App() {
    return (
        <>
            <Header/>
            <Routes>
                <Route path={"/"} element={<Home/>}/>
                <Route path={"/about"} element={<AboutUS/>}/>
                <Route path={"/pool"} element={<Pool/>}/>
                <Route path={"/services"} element={<Services/>}/>
                <Route path={"/trainer"} element={<Trainer/>}/>
                <Route path={"/registration"} element={<SignInUp/>}/>
            </Routes>
            <Footer/>
        </>
    );
}

export default App;
