import { useEffect, useState } from "react"

const Comments = () => {
    const [comments, setComments] = useState([])

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/comments")
            .then(result => result.json())
            .then(data => setComments(data))

            .catch("error")

    }, [])
    
    return (
        <>
            <div className="ms-3 ">
                {comments.map((comment, i) => {
                    return (
                        <div key={i + 200} className="mb-3">
                            <h5 key={i}>{comment.name}</h5>
                            <h6 key={i}>{comment.email}</h6>
                            <article key={i + 100}>{comment.body} </article>
                        </div>)
                }
                )}
            </div>
        </>


    )


}

export default Comments