import { auth } from "@/lib/auth";
import Navbar from "./navbar"
import { getUserFromDb } from "@/lib/action";

export const UpperNavbar = async() => {
    const session = await auth();
    return (
        <Navbar session={session}/>
    )
}