import Image from "next/image"
import Link from "next/link"

export default function PostCard({post}) {
    return (
        <div className="w-80 m-4">
            <div className="flex">
                <div><Image src={post.img?post.img:"/blog.webp"} width={450} height={200} /></div>
                <div className="flex flex-col justify-center"><h6 className="-rotate-90 text-xs w-20">{post.createdAt?post.createdAt.slice(0,10):"2024-01-01"}</h6></div>
            </div>
            <div className="my-4">
                <h1 className="text-xl font-bold">{post.title}</h1>
                <p className="text-sm text-gray-500">{post.desc}</p>
                <Link style={{textDecoration:'underline'}} href={`/blog/${post.slug}`}>Read More</Link>
            </div>
        </div>
    )
}