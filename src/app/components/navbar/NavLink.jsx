"use client"

import Link from "next/link";
import { usePathname } from "next/navigation";


export default function NavLink({menu,item}) {
    const pathName = usePathname();
    return <Link className={pathName===item.path?(!menu)?"bg-white px-2 py-1 text-black rounded-full":"bg-black w-16 py-1":""} href={item.path} key={item.name}>{item.name}</Link>
}