import { getPost, getUser } from "@/lib/data";
import Image from "next/image"
import { Suspense } from "react"

const getData = async (params) => {
    console.log(params)
    const res = await fetch(`http://localhost:3000/api/blog/${params}`)
    if (!res.ok) {
        new Error("Something went wrong")
    }
    return res.json();
}

export const generateMetadata = async ({params})=>{
    const {slug} = params;

    const post = await getPost(slug);
    return {
        title:post.title,
        description:post.desc
    }
}

const BlogId = async ({ params }) => {
    // const post = await getPost(params.slug);
    // using api
    const post = await getData(params.slug);
    const user = await getUser(post.userId);
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <div className="flex flex-wrap mt-10 gap-12">
                <div className="w-1/3 min-w-52">
                    <Image src={post.img?post.img:"/blog.webp"} width={500} height={200} />
                </div>
                <div>
                    <h1 className="text-4xl font-bold">{post.title}</h1>
                    <div className="flex gap-8 my-4 text-sm text-gray-500 items-center">
                        <div>
                            <Image className="rounded-full" src="/noavatar.png" width={40} height={40} />
                        </div>
                        <div>
                            <h1>Author</h1>
                            <h1 className="text-white">{user.username}</h1>
                        </div>
                        <div>
                            <h1>Published</h1>
                            <h1 className="text-white">{post.createdAt?post.createdAt.slice(0,10):"01.01.2024"}</h1>
                        </div>
                    </div>
                    <p>{post.desc}</p>
                </div>
            </div>
        </Suspense>
    )
}
export default BlogId;