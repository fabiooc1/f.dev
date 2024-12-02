import { List } from "@phosphor-icons/react";
import { NavLinks } from "./NavLinks";
import { useEffect, useState } from "react";
import { MenuMobile } from "./MenuMobile";

export function Header() {
    const [isScrolling, setisScrolling] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    function handleScroll() {
        setisScrolling(window.scrollY > 0);
    }

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
    }, []);

    return (
        <>
            <header className={`
                fixed px-20 py-2 tablet:px-10 mobile:px-4 w-full flex items-center justify-between z-50 transition-all duration-500 ease-in-out
                ${isScrolling ? 'bg-gray-300/20 backdrop-blur-md shadow-md h-[10vh]' : 'bg-transparent h-[20vh]'}
            `}>
                <a href="#hero" className="font-black text-6xl">f.dev</a>

                <button className="hidden tablet:flex mobile:flex ">
                    <List onClick={() => setIsMenuOpen(true)} size={32} />
                </button>

                <NavLinks
                    className="flex gap-6 tablet:hidden mobile:hidden"
                />
            </header>

            {isMenuOpen && (
                <MenuMobile setIsMenuOpen={setIsMenuOpen} />
            )}
        </>
    )
}