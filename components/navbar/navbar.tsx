import Image from "next/image";
import Link from "next/link";
import Navlink from "@/components/navbar/navlink";

const Navbar = () => {
    return (
        <div className="fixed top-0 w-full bg-white shadow-sm z-20">
            <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between p-2">
                <Link href="/" className="text-2xl font-semibold text-gray-800">
                    <Image
                        src="/logo.png"
                        alt="Logo"
                        width={150}
                        height={60}
                        priority
                    />
                </Link>

                <Navlink/>
            </div>
        </div>
    );
}

export default Navbar;