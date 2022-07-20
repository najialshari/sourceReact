import { useEffect, useState } from "react"

const Photos = () => {

    const [posts, setPosts] = useState([])

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/photos")
            .then(result => result.json())
            .then(data => setPosts(data))

            .catch("error")

    }, [])

    return (
        <>
            <div className="d-flex justify-content-center flex-wrap ">
                {posts.map((post, i) => {
                    return (
                        <div key={i} className="card  m-4" style={{ width: "300px" }}>
                            <img src={post.url} className="card-image-top" key={i + 100} alt="..." />
                            <div className="card-body" key={i + 200}>
                                <h5 className="card-title" key={i + 300}>{post.title}</h5>
                            </div>
                        </div>)
                }
                )}
            </div>
        </>
    )
}
export default Photos