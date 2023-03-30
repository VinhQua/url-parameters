import { useParams } from "react-router-dom"

const ID = ()=>{
    const {id}=useParams();
    return(
        <div className="display">
            <h3>Ids : {id}</h3>
        </div>
    )
}
export default ID