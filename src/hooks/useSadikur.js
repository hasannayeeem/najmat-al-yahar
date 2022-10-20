import { useEffect, useState } from "react"

const useSadikur = () =>{
    const [sadikur, setSadikur] = useState([]);
    useEffect( () =>{
        fetch('sadikur.json')
        .then(res => res.json())
        .then(data => setSadikur(data));
        
    },[sadikur,  setSadikur]);
    return [sadikur, setSadikur];
}
export default useSadikur;