import React,{ReactNode} from "react";

type WelcomeContainerProps = {
    children: ReactNode
}

const WelcomeContainer = ({children}: WelcomeContainerProps) => {
    return (
        <div className="flex flex-row h-screen">
            <img src="./welcome_image.jpg" alt="welcomeImage" className="w-2/3 grow"/>
            <div className="w-1/2">
                {children}
            </div>
        </div>
    )
}

export default WelcomeContainer;