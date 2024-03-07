import RegistrationForm from "./RegistrationForm.tsx";

type RegistrationPageProps = {
    handleRegistration: (username: string, password: string) => void
}

export default function RegistrationPage(props: Readonly<RegistrationPageProps>){
    return(
        <RegistrationForm handleRegistration={props.handleRegistration}/>
    );
}