import { useContext, createContext, useState } from "react";


const InfoContext = createContext();

export const useInfo = ()=>{
    return useContext(InfoContext);
}

export const InfoContextProvider = ({children}) => {
    const [info, setInfo] = useState(false)

    return(
        <InfoContext.Provider value={{info, setInfo}}>
            {children}
        </InfoContext.Provider>
    )
}