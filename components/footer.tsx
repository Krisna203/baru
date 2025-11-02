import Link from "next/link";
import Image from "next/image";


    const Footer = () => {
    return (
        <footer className="bg-gray-900">

            <div className="max-w-sreen-xl mx-auto px-4 w-full py-10 md:py-8 ">
                <div className="grid md:grid-cols-4 gap-10">
                    <div>
                        <Link href="/" className="mb-2 block px-5">
                            <Image
                                src="/logo.png"
                                alt="Logo"
                                width={200}
                                height={60}
                                priority
                            />
                        </Link>
                        <div className="grid grid-rows-2 pl-2 text-gray-400">
                            <i className="ri-home-office-fill text-xl">  Lorem ipsum dolor sit amet.</i>
                            <i className="ri-whatsapp-line text-l"> +62 812-3456-7890</i>
                            <h2></h2>
                            <h2>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Modi sit atque mollitia perspiciatis dolorem odio.</h2>  
                        </div>
                        
                    </div>
                    <div>
                        <div className="flex gap-20">
                            <div className="flex-1 md:flex-none pl-20">
                                <h4 className="mb-8 text-xl font-semibold text-white">
                                    Links
                                </h4>
                                <ul className="list-item space-y-5 text-gray-400">
                                    <li>
                                        <Link href="#home">Home</Link>
                                    </li>
                                    <li>
                                        <Link href="#about">About</Link>
                                    </li>
                                    <li>
                                        <Link href="#service">Service</Link>
                                    </li>
                                    <li>
                                        <Link href="#contact-us">Contact Us</Link>
                                    </li>
                                </ul>
                            </div>                        
                        </div>
                    </div>
                    <div>
                        <div className="flex gap-20">
                            <div className="flex-1 md:flex-none pl-20">
                                <h4 className="mb-7 text-xl font-semibold text-white">
                                    Legal
                                </h4>
                                <ul className="list-item space-y-5 text-gray-400">
                                    <li>
                                        <Link href="#">Legal</Link>
                                    </li>
                                    <li>
                                        <Link href="#">Term & Condition</Link>
                                    </li>
                                    <li>
                                        <Link href="#">Privacy Policy</Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    
                </div>
            </div>
            <div className="max-w-sreen-xl mx-auto px-2 border-t border-gray-500 py-2 text-center text-base text-gray-500">
                Copyright 2025 | PT ANUGERAH KREASINDO ABADI SEJAHTERA | All rights reserved
            </div>
        </footer>
    );
}

export default Footer;