import Image from "next/image"
import './contact.css'

export const metadata = {
    title:"contact page",
    description:"Contact description"
}

export default function Contact() {
    return (
        <div className="flex mt-16 flex-wrap">
            <div className="w-1/2 min-w-52 m-auto">
                <Image className="m-auto" src="/contact.png" width={500} height={500} />
            </div>
            <div className="w-1/2 formWidth m-auto">
                <form action="" className="m-auto">
                    <input type="text" placeholder="Name and Surname" name="" id="" />
                    <input type="text" placeholder="Email Address" name="" id="" />
                    <input type="text" placeholder="Phone Number(optional)"/>
                    <textarea name="" id="" cols="15" placeholder="Message" rows="10"></textarea>
                    <button className="bg-blue-800 p-3 rounded w-full">Send</button>
                </form>
            </div>
        </div>
    )
}