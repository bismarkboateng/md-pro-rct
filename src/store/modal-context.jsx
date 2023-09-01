import { createContext, useState } from "react";


const ModalContext = createContext({
    isSignInModalOpen: false,
    onSignInClickHandler: () => {},
})


export const ModalContextProvider = (props) => {
    const [isSignInModalOpen, setIsSignInModalOpen] = useState(false);

    const  onSignInClickHandler = () => {
        setIsSignInModalOpen(prevState => !prevState)
    }

    return (
        <ModalContext.Provider
            value = {{
                isSignInModalOpen: isSignInModalOpen,
                onSignInClickHandler: onSignInClickHandler,
            }}
        >
            {props.children}
        </ModalContext.Provider>
    )
}

export default ModalContext;