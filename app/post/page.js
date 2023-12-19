import Link from "next/link";
import PostCard from "../components/post/PostCard"

const baseUrl = "https://jsonplaceholder.typicode.com"


const Post = async (req) => {

    const searchParams = req.searchParams;
     console.log(searchParams);
    const response = await fetch(baseUrl+`/posts?_page=${searchParams.page}&_limit=${searchParams.limit??12}`)
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
                        <li className="page-item"><Link className="page-link" href="?page=1">1</Link></li>
                        <li className="page-item"><Link className="page-link" href="?page=2">2</Link></li>
                        <li className="page-item"><Link className="page-link" href="?page=3">3</Link></li>
                        <li className="page-item"><Link className="page-link" href="?page=4">4</Link></li>
                        <li className="page-item"><Link className="page-link" href="?page=5">5</Link></li>
                        <li className="page-item"><Link className="page-link" href="?page=6">6</Link></li>

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