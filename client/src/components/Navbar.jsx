import React from "react";
import { Link } from "react-router-dom";
import { assets } from "../assets/assets";

const Navbar = () => {
    const navLinks = [
        { name: "Home", path: "/" },
        { name: "Hotels", path: "/rooms" },
        { name: "Experience", path: "/" },
        { name: "About", path: "/" },
    ];

    const [isScrolled, setIsScrolled] = React.useState(false);
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);

    React.useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10);
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <nav
            className={`fixed top-0 left-0 w-full z-50  transition-all duration-500 ${
                isScrolled ? "shadow-md" : ""
            }`}
        >
            <div
                className={`w-full flex items-center justify-between px-4 md:px-16 lg:px-24 xl:px-32 transition-all duration-500 ${
                    isScrolled
                        ? "py-3 md:py-4"
                        : "py-4 md:py-6"
                }`}
            >
                {/* Logo */}
                <Link to="/" className="flex items-center">
                    <img
                        src={assets.logo}
                        alt="Logo"
                        className="h-9 w-auto object-contain"
                    />
                </Link>

                {/* Desktop Navigation */}
                <div className="hidden md:flex items-center gap-4 lg:gap-8">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            to={link.path}
                            className="group flex flex-col gap-0.5 text-white"
                        >
                            <span>{link.name}</span>

                            <span className="h-0.5 w-0 bg-white group-hover:w-full transition-all duration-300" />
                        </Link>
                    ))}

                    {/* New Launch */}
                    <button
                        type="button"
                        className="border border-white text-white px-4 py-1.5 text-sm font-light rounded-full cursor-pointer hover:bg-white hover:text-blue-600 transition-all"
                    >
                        Dashboard
                    </button>
                </div>

                {/* Desktop Right */}
                <div className="hidden md:flex items-center gap-4">
                    {/* Search Icon */}
                    <button
                        type="button"
                        aria-label="Search"
                        className="text-white"
                    >

                        <img src={assets.searchIcon} alt="search" className={`${isScrolled && 'invert'} h-7 transition-all duration-500`} />
                    </button>

                    {/* Login */}
                    <button
                        type="button"
                        className="bg-black text-white px-8 py-2.5 rounded-full ml-4 hover:bg-gray-800 transition-all duration-300"
                    >
                        Login
                    </button>
                </div>

                {/* Mobile Menu Button */}
                <button
                    type="button"
                    aria-label="Open menu"
                    onClick={() => setIsMenuOpen(true)}
                    className="md:hidden text-white"
                >
                   <img onClick={()=> setIsMenuOpen(!isMenuOpen)} src={assets.menuIcon} alt="" className={`${isScrolled && "invert"} h-4`} />
                </button>
            </div>

            {/* Mobile Menu */}
            <div
                className={`fixed inset-0 bg-blue-600 min-h-screen flex flex-col items-center justify-center gap-6 md:hidden transition-transform duration-500 ${
                    isMenuOpen
                        ? "translate-x-0"
                        : "translate-x-full"
                }`}
            >
                {/* Close Button */}
                <button
                    type="button"
                    aria-label="Close menu"
                    className="absolute top-5 right-5 text-white"
                    onClick={() => setIsMenuOpen(false)}
                >
                    <img src={assets.closeIcon} alt="close-menu" className="h-6.5" />
                </button>

                {/* Mobile Logo */}
                <Link
                    to="/"
                    onClick={() => setIsMenuOpen(false)}
                    className="absolute top-5 left-5"
                >
                    <img
                        src={assets.logo}
                        alt="Logo"
                        className="h-8 w-auto object-contain"
                    />
                </Link>

                {/* Mobile Links */}
                {navLinks.map((link) => (
                    <Link
                        key={link.name}
                        to={link.path}
                        onClick={() => setIsMenuOpen(false)}
                        className="text-lg font-medium text-white"
                    >
                        {link.name}
                    </Link>
                ))}

                {/* Mobile New Launch */}
                <button
                    type="button"
                    className="border border-white text-white px-5 py-2 text-sm rounded-full"
                    onClick={() => setIsMenuOpen(false)}
                >
                    Dashboard
                </button>

                {/* Mobile Login */}
                <button
                    type="button"
                    className="bg-black text-white px-8 py-2.5 rounded-full"
                    onClick={() => setIsMenuOpen(false)}
                >
                    Login
                </button>
            </div>
        </nav>
    );
};

export default Navbar;
