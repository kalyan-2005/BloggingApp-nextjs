"use client"

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  const handle1 = () => {
    router.push('/about')
  }
  const handle2 = () => {
    router.push('/contact')
  }
  return (
    <div className="flex mt-10 flex-wrap-reverse">
      <div className="min-w-72 m-auto w-1/2">
        <h1 style={{ fontSize: '4.8vw', fontWeight: 'bolder' }}>Creative Thoughts Agency</h1>
        <p className="mb-10">Lorem ipsum dolor sit amet consectetur dolor recusandae, soluta maxime harum dolorem eum ex rerum quod voluptate suscipit cupiditate!</p>
        <div className="flex space-x-2">
          <button className="p-3 text-white w-32 rounded bg-blue-600 text-center" onClick={handle1}>Learn More</button>
          <button className="p-3 text-black w-32 rounded bg-white text-center" onClick={handle2}>Contact</button>
        </div>
        <Image src="/brands.png" alt="" width={400} height={200} />
      </div>
      <div className="min-w-72 m-auto w-1/2">
        <Image className="m-auto" src="/hero.gif" alt="" width={550} height={550} />
      </div>
    </div>
  );
}
