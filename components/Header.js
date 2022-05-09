import Image from "next/image";
import HeaderIcon from "./HeaderIcon";
import {
    BellIcon,
    ChatIcon,
    ChevronDownIcon,
    HomeIcon,
    UserGroupIcon,
    ViewGridIcon
}
    from '@heroicons/react/solid'

import {
    FlagIcon,
    PlayIcon,
    SearchIcon,
    ShoppingCartIcon
}
    from '@heroicons/react/outline'

    import {signOut, useSession } from "next-auth/react"



export default function Header() {
    const { data: session, status } = useSession()
    return <>
        <div className="sticky h-[55px] bg-white top-0 z-50 flex items-center p-[7px] lg:px-4 shadow-md">
            {/* Left Element */}
            <div className="flex items-center">
                <Image src='/circle-logo.svg' width={32} height={32} layout='fixed' />
                <div className="flex items-center bg-gray-200 ml-2 py-[7px] px-[7px] rounded-3xl">
                    <SearchIcon className="w-4 h-4 text-gray-500 items-center" />
                    <input type='text' placeholder="Search nexthub" className="hidden ml-2 sm:flex outline-none bg-transparent" />
                </div>

            </div>

            {/* Center Element */}
            <div className="flex items-center justify-center flex-grow">
                <div className="flex items-center space-x-0 sm:space-x-2 md:space-x-3">
                    <HeaderIcon active Icon={HomeIcon} />
                    <HeaderIcon Icon={FlagIcon} />
                    <HeaderIcon Icon={PlayIcon} />
                    <HeaderIcon Icon={ShoppingCartIcon} />
                    <HeaderIcon Icon={UserGroupIcon} />

                </div>
            </div>

            {/* Right Element */}
            <div className="flex items-center sm:space-x-2 justify-end">
               {/* Profile Pic */}
               <Image 
               onClick={signOut}
               className="rounded-full"
               src={session.user.image}
               width={40}
               height={40}
               object='fill'
               />


               <p className="hidden md:flex whitespace-nowrap font-semibold pr-3">
                   {session.user.name}
               </p>
               <ViewGridIcon className="icon" />
               <ChatIcon className="icon" />
               <BellIcon className="icon" />
               <ChevronDownIcon className="icon" />

            </div>
        </div>
    </>
}