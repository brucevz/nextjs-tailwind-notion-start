import Link from "next/link";

function Navigation() {
    return (
        <>
            <div className=" bg-white">

                        <nav className="hidden md:flex space-x-10">
                            <Link href="/" className="text-base font-medium text-gray-500 hover:text-gray-900">
                                Home
                            </Link>
                            <Link href="/blog" className="text-base font-medium text-gray-500 hover:text-gray-900">
                                Blog
                            </Link>


                        </nav>
            </div>

        </>
    )
}

export default Navigation
