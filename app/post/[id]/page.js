import ButtonBack from "@/app/components/post/ButtonBack";

const baseUrl = "https://jsonplaceholder.typicode.com";

const Page= async({params})=>{
    const result= await fetch(baseUrl+"/posts/"+params.id)
    const post=await result.json();
    return(
        <div className="container my-3">

            <ButtonBack />
            <h1 className="text-capitalize">{post.title}</h1>
            <p className="lead">
            {post.body}
            </p>
        </div>
    )
}

export default Page;