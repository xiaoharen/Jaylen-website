import {HashRouter, Routes, Route} from "react-router-dom";
import Index from "../App.jsx";
import Admin from "../components/reading/admin/admin.jsx";
import Login from "../components/reading/user/login.jsx";

function route() {
    return (
        <HashRouter>
            <Routes>
                <Route path="/" element={<Index/>}></Route>
                <Route path="/admin" element={<Admin/>}></Route>
                <Route path="/login" element={<Login/>}></Route>
            </Routes>
        </HashRouter>
    );
}

export default route;