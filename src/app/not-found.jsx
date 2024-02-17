import Link from "next/link"

export default function PageNotFound() {
    return (
        <div>
            <h2 className="text-center">Page Not Found</h2>
            <p>Sorry, the page you are looking for does not exist</p>
            <Link href='/'>Back to Home</Link>
        </div>
    )
}