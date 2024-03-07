import {Link} from "react-router-dom";
import axios from "axios";

type HomeProps = {
    username: string,
}

export default function Home(props: Readonly<HomeProps>) {

    function fetchHello(){
        axios.get("/api/test/harry")
            .then((r) => console.log(r.data))
    }

    return (
        <>
            {props.username && <h1>Welcome, {props.username}</h1>}
            {!props.username && <Link to={"/registration"}>Go to register</Link>}
            <button onClick={fetchHello}>Hello</button>
        </>
    );
}