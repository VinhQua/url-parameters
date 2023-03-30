import { useParams } from "react-router-dom"

const Employee = ()=>{
    const {name} = useParams();
    return(
        <div className="display">
            <h3>Employee: {name}</h3>
        </div> 
    )
}
export default Employee