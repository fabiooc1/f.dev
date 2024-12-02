import { X } from "@phosphor-icons/react";
import { NavLinks } from "./NavLinks";
import { motion } from "framer-motion";

type MenuMobileProps = {
    setIsMenuOpen: (isMenuOpen: boolean) => void
}

export function MenuMobile({ setIsMenuOpen }: MenuMobileProps) {
    return (
        <>
            <motion.div
                className="fixed top-0 left-0 w-full h-full bg-black/50 z-40"
                onClick={() => setIsMenuOpen(false)}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
            />

            <motion.div
                className="h-full bg-white py-8 px-16 fixed top-0 right-0 z-50 shadow-2xl rounded-l-lg"
                initial={{ x: '100%' }}
                animate={{ x: 0 }}
                exit={{ x: '100%' }}
                transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            >
                <button
                    onClick={() => setIsMenuOpen(false)}
                    className="text-gray-800 rounded-full focus:outline-none"
                >
                    <X size={32} className="m-auto" />
                </button>

                <div className="mt-6 text-center" onClick={() => setIsMenuOpen(false)}>
                    <NavLinks className="flex flex-col gap-4" />
                </div>
            </motion.div>
        </>
    );
}
