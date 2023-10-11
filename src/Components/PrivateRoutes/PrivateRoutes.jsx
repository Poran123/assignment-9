import { useContext, useEffect } from "react";
import { OnLoadContext }  from "../../OnloadContext";
import { onAuthStateChanged } from "firebase/auth";
import { Navigate } from "react-router-dom";

export default function PrivateRoutes({children}){
    return children;
    const {auth, loadingState, setloadingState} = useContext(OnLoadContext);

    useEffect(()=>{
        const unSubscribe = onAuthStateChanged(auth, usr=>{
                if(usr){
                    setloadingState(false);
                    return children;
                }
                return <Navigate to='/login/'></Navigate>;
            });
        return ()=>unSubscribe();
    }, []);
}