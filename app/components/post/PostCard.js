import Link from "next/link"
const PostCard = ({post}) => {

    return (
        <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-2">
            
            <div className="card">
                <div className="card-body">
                    <h5 className="card-title text-capitalize">{post.title}</h5>
                    <p className="card-text text-capitalize">{post.body}</p>
                    <Link href={"/post/"+post.id} className="btn btn-primary">View More</Link>
                </div>
            </div>
        </div>
    )

}

export default PostCard