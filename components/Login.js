import Image from "next/image"
import { signIn } from "next-auth/react"

export default function Login(){
    return <>
    <div className="flex flex-col h-screen place-items-center justify-center items-center space-y-4">
        <Image
        src="/circle-logo.svg"
        width={120}
        height={120}
        objectFit="contain"
        />
        <h1 onClick={signIn} className="py-3 px-5 cursor-pointer bg-blue-500 rounded-full text-white text-center">Login with Facebook</h1>
    </div>
    </>
}