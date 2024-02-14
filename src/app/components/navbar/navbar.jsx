"use client"

import { useState } from "react";
import NavLink from "./NavLink";
import Link from "next/link";
import Image from "next/image";
import './navbar.css'
import { handleLogout } from "@/lib/action";

export default function Navbar({ session }) {
    const navLinks = [
        {
            name: "Home",
            path: "/"
        },
        {
            name: "About",
            path: "/about"
        },
        {
            name: "Contact",
            path: "/contact"
        },
        {
            name: "Blog",
            path: "/blog"
        }
    ]
    const [menu, setMenu] = useState(false)
    return (
        <div className="flex justify-between py-8">
            <Link className="text-xl p-0" href="/">LOGO</Link>
            {/* menu */}
            <button className="Menu" onClick={() => setMenu(prev => !prev)}><Image src={menu ? "/closeMenu.png" : "/menu.png"} alt="error" width={20} height={20} /></button>
            {
                menu && <div className="Menu flex flex-col gap-2 bg-gray-900 py-2 pr-1 mr-2 absolute top-20 text-sm text-right rounded" style={{ right: '0vw' }}>
                    {
                        navLinks.map((link) => {
                            return <NavLink key={link.name} menu={menu} item={{ name: link.name, path: link.path }} />
                        })
                    }
                </div>
            }
            <div className="space-x-12 dlink">
                {
                    navLinks.map((link) => {
                        return <NavLink key={link.name} item={{ name: link.name, path: link.path }} />
                    })
                }
                {session?.user? (
                    <>
                        {session.user.isAdmin && <NavLink item={{ name: "Admin", path: "/admin" }} />}
                        <form className="inline" action={handleLogout}>
                            <button className="p-1 bg-white text-black rounded">Logout</button>
                        </form>
                    </>
                ) : (
                    <NavLink item={{ name: "Login", path: "/login" }} />
                )
                }
            </div>
        </div>
    )
}