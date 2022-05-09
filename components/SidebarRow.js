import Image from "next/image"

export default function SidebarRow({ src, Icon, title }) {
    return <>
        <div className="flex p-2 rounded-full hover:bg-gray-200 items-center space-x-2 cursor-pointer">
            {src && (
                <Image
                    className="rounded-full shrink-0"
                    src={src}
                    width={30}
                    height={30}
                    layout='fixed'
                />
            )
            }

            {Icon && <Icon className='h-6 w-6 text-blue-500' />}
            <p className="hidden md:inline-flex">{title}</p>
        </div>
    </>
}