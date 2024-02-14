import Image from "next/image"

export const metadata = {
    title:"about page",
    description:"about description"
}

export default function About() {
    return (
        <div className="flex flex-wrap-reverse mt-16">
            <div className="min-w-72 w-1/2 flex m-auto flex-col justify-center">
                <h1 style={{fontWeight:'bold'}} className="text-blue-600 mb-6">About Agency</h1>
                <h1 style={{fontSize:'3vw',fontWeight:'bolder'}}>We create digital ideas that are bigger, bolder, braver and better</h1>
                <p className="my-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum nemo, voluptates dolore consequuntur ipsam alias placeat rerum vitae, aut assumenda veniam, repudiandae minima et eaque provident molestias fuga ducimus. Ullam.</p>
                <div style={{fontSize:'13px'}} className="flex font-bold justify-between">
                    <div>
                        <h1 className="text-blue-600 text-xl">10 K+</h1>
                        <p>Years of experience</p>
                    </div>
                    <div>
                        <h1 className="text-blue-600 text-xl">234 K+</h1>
                        <p>People reached</p>
                    </div>
                    <div>
                        <h1 className="text-blue-600 text-xl">5 K+</h1>
                        <p>Services and plugins</p>
                    </div>
                </div>
            </div>
            <div className="w-1/2 m-auto">
                <Image className="m-auto" src="/about.png" alt="" width={500} height={500} />
            </div>
        </div>
    )
}