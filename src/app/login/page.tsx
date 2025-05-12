import TextInput from "@/ui/input/input";
import WelcomeContainer from "@/ui/welcome/welcomeContainer";

const Login = () => {
    return(
        <WelcomeContainer>
            <div className="flex flex-col">
                <TextInput label="Name"/>
            </div>
        </WelcomeContainer>
    )
}

export default Login;