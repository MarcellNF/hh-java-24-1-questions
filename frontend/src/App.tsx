import './App.css'
import RegistrationPage from "./RegistrationPage.tsx";
import {useState} from "react";
import {AppUser} from "./AppUser.ts";
import {Route, Routes} from "react-router-dom";
import Home from "./Home.tsx";

function App() {
    const [appUser, setAppUser] = useState<AppUser | undefined>(undefined)

    function registration(username: string, password: string) {
        setAppUser({
            username: username,
            email: "example@example.com"
        })
        console.log(`registering ${username} with password ${password}`);
    }

    return (
        <Routes>
            <Route path={"/"} element={<Home username={appUser?.username}/>}/>
            <Route path={"/registration"} element={<RegistrationPage handleRegistration={registration}/>}/>
        </Routes>
    )
}

export default App
