import { useParams } from "react-router-dom"
import Comments from "./comments"

const Search = () => {
    //filter come from route list :filter
    const { filter } = useParams()

    return (
        <>
        <h3 className="text-center">You searched for: "{filter}"</h3>
        {filter === "comments" ? <Comments /> : <h5>No Data Found</h5>}
        </>    
    )
}
export default Search