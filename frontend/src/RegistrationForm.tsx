import {FormEvent, useState} from "react";
import {useNavigate} from "react-router-dom";

type RegistrationFormProps = {
    handleRegistration: (username: string, password: string) => void
}

export default function RegistrationForm(props: Readonly<RegistrationFormProps>){
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    function handleSubmit(event: FormEvent<HTMLFormElement>){
        event.preventDefault();
        props.handleRegistration(username, password)
        navigate("/");
    }

    return (
        <form onSubmit={handleSubmit}>
            <label>Username</label>
            <input onChange={(e) => setUsername(e.target.value)} required/>
            <label>Password</label>
            <input onChange={(e) => setPassword(e.target.value)} type="password"/>
            <button>register</button>
        </form>
    );
}