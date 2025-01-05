import Link from "next/link"

const Navbar = () => {
    return (
        <header className="w-full">
            <div className="min-h-full">
                <nav className="bg-gray-800">
                    <div className="w-full mx-auto px-4 sm:px-6 lg:px-8 max-w-[2000px]">
                        <div className="flex h-16 items-center justify-between">
                            <div className="flex items-center">
                                <div className="block">
                                    <div className="flex items-baseline space-x-2 sm:space-x-4">
                                        <Link href="/" className="rounded-md px-2 sm:px-1 py-2 text-sm sm:text-xl lg:text-1xl font-bold text-gray-300 hover:bg-gray-700 hover:text-white">
                                            Dashboard
                                        </Link>
                                        <Link href="/education" className="rounded-md px-2 sm:px-1 py-2 text-sm sm:text-xl lg:text-1xl font-bold text-gray-300 hover:bg-gray-700 hover:text-white">
                                            Education
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            <div className="flex items-center">
                                <Link href="/contact" className="rounded-md px-3 sm:px-6 py-1.5 text-sm sm:text-base font-bold text-black hover:bg-gray-100 bg-gray-100">
                                    Profile
                                </Link>
                            </div>
                        </div>
                    </div>
                </nav>
            </div>
        </header>
    )
}

export default Navbar