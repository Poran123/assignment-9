import { createContext, useState } from "react";
import auth from "./firebase.config";

export const OnLoadContext = createContext(null);

export default function OnloadContext({children}){
    const [loadingState, setloadingState] = useState(true);
    const contextVal = {auth, loadingState, setloadingState};
    
    return (
        <OnLoadContext.Provider value={contextVal}>
            {children}
        </OnLoadContext.Provider>
    );
}