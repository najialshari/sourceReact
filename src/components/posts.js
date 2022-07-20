import { useEffect, useState } from "react"

const Posts = () => {

    const [posts, setPosts] = useState([])

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/posts")
            .then(result => result.json())
            .then(data => setPosts(data))

            .catch("error")

    }, [])

    return (
        <>
            <div className="d-flex justify-content-center flex-wrap ">
                {posts.map((post, i) => {
                    return (
                        <div key={i + 200} className="col-3 border rounded m-3 p-3">
                            <h3 key={i}>{post.title}</h3>
                            <article key={i + 100}>{post.body} </article>
                        </div>)
                }
                )}
            </div>
        </>

    )

}
export default Posts