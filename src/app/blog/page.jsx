import PostCard from "@/components/postCard/postCard"
import { serverAction } from "@/lib/action";
import { getPosts } from "@/lib/data";

const getData = async ()=>{
    const res = await fetch("http://localhost:3000/api/blog")
    if(!res.ok) {
        throw new Error("Something went wrong")
    }
    return res.json();
}

export const metadata = {
    title:"blog page",
    description:"blog description"
}

const Blog = async () => {
    // fetching with api - getData & with db - getPost
    const posts = await getData();
    return (
        <div className="flex justify-between flex-wrap mt-10 gap-1">
            {/* USING SERVER ACTIONS */}
            {/* <form action={serverAction} className="text-black">
                <input type="text" name="title" id="" />
                <input type="text" name="desc" id="" />
                <input type="text" name="slug" id="" />
                <input type="text" name="userId" id="" />
                <button>create</button>
            </form> */}
            {
                posts.map((post)=>{
                    return <PostCard post={post} key={post}/>
                })
            }
        </div>
    )
}
export default Blog;