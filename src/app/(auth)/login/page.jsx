import { LoginForm } from "@/components/loginForm";
import { auth, signIn } from "@/lib/auth";

const Login = async () => {
    const handleGithubLogin = async () => {
        "use server"
        await signIn('github')
    };
    return (
        <div className="mt-16 w-1/2 m-auto bg-gray-700 p-5 rounded">
            <LoginForm />
            <div className="w-3/4 m-auto flex justify-between">
                <form action={handleGithubLogin}>
                    <button className="bg-black p-4 rounded">Login with Github</button>
                </form>
                <form action={handleGithubLogin}>
                    <button className="bg-black p-4 rounded">Login with Google</button>
                </form>
            </div>
        </div>
    );
}
export default Login;