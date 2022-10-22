import { useEffect, useState } from "react"

const useServices = () =>{
    const [services, setServices] = useState([]);
    useEffect( () =>{
        fetch('card.json')
        .then(res => res.json())
        .then(data => setServices(data));
        
    },[services,  setServices]);
    return [services, setServices];
}
export default useServices;