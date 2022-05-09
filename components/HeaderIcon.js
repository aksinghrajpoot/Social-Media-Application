export default function HeaderIcon({Icon, active}) {
    return <>
    <div className="flex items-center cursor-pointer  px-[15px] py-2 md:px-6 md:py-3 rounded-xl hover:bg-gray-100 active:border-b-2 active:border-green-500 group">
        <Icon className={`h-5 sm:h-6 text-gray-600 group-hover:text-green-500 ${active && 'text-green-500'}`} />
    </div>
    </>
}