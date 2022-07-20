import { useRef } from "react";
import { Link, useNavigate } from "react-router-dom"

const Navbar = () => {

    const navi = useNavigate()
    const filterRef = useRef()

    const handleSearch = () => {

        filterRef.current.value &&  navi('/search/' + filterRef.current.value)

    }
    return (
        <div className="nav bg-light d-flex  align-items-baseline py-2 shadow-sm" >

            <Link to="/" className="navbar-brand mx-3" >Soures HW</Link>
            <Link to="/Posts" className="link bg-warning ">Posts</Link>
            <Link to="/Photos" className="link bg-dark ">Photos</Link>
            <Link to="/Users" className="link bg-secondary">Users</Link>

            <div className="d-flex col justify-content-end search">
                <input ref={filterRef} type="search" className="form-control " placeholder="search comments ..." style={{ width: "250px" }} />
                <button className="btn btn-outline-success mx-2" onClick={handleSearch}>Search</button>
            </div>

        </div>
    )
}
export default Navbar
