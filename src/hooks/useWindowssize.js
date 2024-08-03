import { useEffect,useState } from "react";

const useWindowssize =()=>{

    const [windowsSize,setWindowsSize] = useState({
        width: undefined,
        height: undefined
    })

    useEffect(()=>{

        const handleResize=()=>{
            setWindowsSize({
                width:window.innerWidth,
                height:window.innerHeight
            })
        }
        handleResize();

        window.addEventListener("resize",handleResize);

        return ()=>  window.removeEventListener("resize",handleResize);

    },[])
    return windowsSize;

}
export default useWindowssize