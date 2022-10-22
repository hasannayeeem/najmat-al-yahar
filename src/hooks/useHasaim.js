import { useEffect, useState } from "react"
import { useLocation } from "react-router-dom";

const useHasaim = () => {
    const lc = useLocation();
    const [hasaim, setHasaim] = useState([]);
    useEffect( () =>{
        fetch('hasaim.json')
        .then(res => res.json())
        .then(data => setHasaim(data));
        
    },[hasaim,  setHasaim])
    return [hasaim, setHasaim, lc?.pathname];
}
export default useHasaim;