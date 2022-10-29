import { useEffect, useState } from "react"

const useHasaim = () => {
    const [hasaim, setHasaim] = useState([]);
    useEffect( () =>{
        fetch('hasaim.json')
        .then(res => res.json())
        .then(data => setHasaim(data));
        
    },[hasaim,  setHasaim])
    return [hasaim, setHasaim];
}
export default useHasaim;