import { useEffect, useState } from "react"

const Users = () => {

    const [posts, setPosts] = useState([])

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users")
            .then(result => result.json())
            .then(data => setPosts(data))

            .catch("error")
            // eslint-disable-next-line
        }, [])
    return (
        <>
            <div className="d-flex justify-content-center flex-wrap ">

                {posts.map((post, i) => {
                    return (
                        <ul className="list-group m-3 col-3" key={i}>
                            <li className="list-group-item" key={i+100}>
                                <h5 key={i + 200}>{post.name}</h5>
                                {post.email}
                            </li>
                            <li className="list-group-item" key={i + 300}>{post.phone} </li>
                            <li className="list-group-item" key={i + 400}>{post.website} </li>
                            <li className="list-group-item" key={i + 500}>{post.company.name} </li>
                            <li className="list-group-item" key={i + 600}>
                             {/* eslint-disable-next-line */}
                                <a key={i + 700} className="me-3" href="#">Card Link</a>
                             {/* eslint-disable-next-line */}
                                <a key={i + 800} href="#">Another Link</a>
                            </li>
                        </ul>

                    )
                }
                )}
            </div>

        </>

    )

}
export default Users