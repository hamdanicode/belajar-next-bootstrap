// import { useRouter } from "next/router"
// import { useState } from "react";
import PostCard from "../components/post/PostCard"

const baseUrl = "https://jsonplaceholder.typicode.com"


const Post = async (req) => {
     
    const response = await fetch(baseUrl+`/posts?_page=1&_limit=12`)
    const posts= await response.json()
    return (
        <div className="container my-3" >
            <h2 className="mb-2">Posts</h2>
            <div className="row">
                {posts.map((p) => {
                    return <PostCard key={p.id} post={p} />
                })}
            </div>
            <div>
                <nav aria-label="Page navigation example">
                    <ul className="pagination">
                        <li className="page-item">
                            <a className="page-link" href="#" aria-label="Previous">
                                <span aria-hidden="true">&laquo;</span>
                            </a>
                        </li>
                        <li className="page-item"><a className="page-link" href="page=1">1</a></li>
                        <li className="page-item"><a className="page-link" href="page=2">2</a></li>
                        <li className="page-item"><a className="page-link" href="#">3</a></li>
                        <li className="page-item">
                            <a className="page-link" href="#" aria-label="Next">
                                <span aria-hidden="true">&raquo;</span>
                            </a>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    )
}

export default Post