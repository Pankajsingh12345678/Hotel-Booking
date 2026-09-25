import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { assets } from "../assets/assets";
import {
    useClerk,
    useUser,
    UserButton,
} from "@clerk/clerk-react";

const BookIcon = () => (
    <svg
        className="w-4 h-4 text-gray-700"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        fill="none"
        viewBox="0 0 24 24"
    >
        <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M5 19V4a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v13H7a2 2 0 0 0-2 2Zm0 0a2 2 0 0 0 2 2h12M9 3v14m7 0v4"
        />
    </svg>
);

const Navbar = () => {
    const navigate = useNavigate();
    const location = useLocation();

    const { openSignIn } = useClerk();
    const { user } = useUser();

    const [isScrolled, setIsScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const navLinks = [
        {
            name: "Home",
            path: "/",
        },
        {
            name: "Hotels",
            path: "/rooms",
        },
        {
            name: "Experience",
            path: "/",
        },
        {
            name: "About",
            path: "/",
        },
    ];

    /* ================= SCROLL EFFECT ================= */

    useEffect(() => {
        const handleScroll = () => {
            if (location.pathname !== "/") {
                setIsScrolled(true);
            } else {
                setIsScrolled(window.scrollY > 10);
            }
        };

        // Run once when page/route changes
        handleScroll();

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, [location.pathname]);

    /* ================= RESIZE EFFECT ================= */

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 768) {
                setIsMenuOpen(false);
            }
        };

        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    /* ================= CLOSE MOBILE MENU ================= */

    const closeMobileMenu = () => {
        setIsMenuOpen(false);
    };

    return (
        <nav
            className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
                isScrolled
                    ? "bg-white shadow-md"
                    : "bg-transparent"
            }`}
        >
            {/* ================= NAVBAR ================= */}

            <div
                className={`w-full flex items-center justify-between px-4 md:px-16 lg:px-24 xl:px-32 transition-all duration-500 ${
                    isScrolled
                        ? "py-3 md:py-4"
                        : "py-4 md:py-6"
                }`}
            >
                {/* ================= LOGO ================= */}

                <Link
                    to="/"
                    onClick={closeMobileMenu}
                    className="flex items-center"
                >
                    <img
                        src={assets.logo}
                        alt="Logo"
                        className="h-9 w-auto object-contain"
                    />
                </Link>

                {/* ================= DESKTOP NAVIGATION ================= */}

                <div className="hidden md:flex items-center gap-4 lg:gap-8">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            to={link.path}
                            className={`group flex flex-col gap-0.5 transition-colors ${
                                isScrolled
                                    ? "text-gray-800"
                                    : "text-white"
                            }`}
                        >
                            <span>{link.name}</span>

                            <span
                                className={`h-0.5 w-0 group-hover:w-full transition-all duration-300 ${
                                    isScrolled
                                        ? "bg-gray-800"
                                        : "bg-white"
                                }`}
                            />
                        </Link>
                    ))}

                    {/* Dashboard */}

                    {user && (
                        <button
                            type="button"
                            onClick={() => navigate("/owner")}
                            className={`border px-4 py-1.5 text-sm font-light rounded-full cursor-pointer transition-all ${
                                isScrolled
                                    ? "border-gray-800 text-gray-800 hover:bg-gray-800 hover:text-white"
                                    : "border-white text-white hover:bg-white hover:text-blue-600"
                            }`}
                        >
                            Dashboard
                        </button>
                    )}
                </div>

                {/* ================= DESKTOP RIGHT ================= */}

                <div className="hidden md:flex items-center gap-4">
                    {/* Search */}

                    <button
                        type="button"
                        aria-label="Search"
                    >
                        <img
                            src={assets.searchIcon}
                            alt="Search"
                            className={`h-7 transition-all duration-500 ${
                                isScrolled ? "invert" : ""
                            }`}
                        />
                    </button>

                    {/* User / Login */}

                    {user ? (
                        <UserButton>
                            <UserButton.MenuItems>
                                <UserButton.Action
                                    label="My Bookings"
                                    labelIcon={<BookIcon />}
                                    onClick={() =>
                                        navigate(
                                            "/my-bookings"
                                        )
                                    }
                                />
                            </UserButton.MenuItems>
                        </UserButton>
                    ) : (
                        <button
                            type="button"
                            onClick={openSignIn}
                            className="bg-black text-white px-8 py-2.5 rounded-full ml-4 hover:bg-gray-800 transition-all duration-300"
                        >
                            Login
                        </button>
                    )}
                </div>

                {/* ================= MOBILE RIGHT ================= */}

                <div className="md:hidden flex items-center gap-3">
                    {/* Mobile User */}

                    {user && (
                        <UserButton>
                            <UserButton.MenuItems>
                                <UserButton.Action
                                    label="My Bookings"
                                    labelIcon={<BookIcon />}
                                    onClick={() =>
                                        navigate(
                                            "/my-bookings"
                                        )
                                    }
                                />
                            </UserButton.MenuItems>
                        </UserButton>
                    )}

                    {/* Mobile Menu Button */}

                    <button
                        type="button"
                        aria-label="Open menu"
                        onClick={() =>
                            setIsMenuOpen(true)
                        }
                    >
                        <img
                            src={assets.menuIcon}
                            alt="Open menu"
                            className={`h-5 ${
                                isScrolled
                                    ? "invert"
                                    : ""
                            }`}
                        />
                    </button>
                </div>
            </div>

            {/* ================= MOBILE MENU ================= */}

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
                    className="absolute top-5 right-5"
                    onClick={closeMobileMenu}
                >
                    <img
                        src={assets.closeIcon}
                        alt="Close menu"
                        className="h-6"
                    />
                </button>

                {/* Mobile Logo */}

                <Link
                    to="/"
                    onClick={closeMobileMenu}
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
                        onClick={closeMobileMenu}
                        className="text-lg font-medium text-white"
                    >
                        {link.name}
                    </Link>
                ))}

                {/* Mobile Dashboard */}

                {user && (
                    <button
                        type="button"
                        className="border border-white text-white px-5 py-2 text-sm rounded-full"
                        onClick={() => {
                            closeMobileMenu();
                            navigate("/owner");
                        }}
                    >
                        Dashboard
                    </button>
                )}

                {/* Mobile My Bookings / Login */}

                {user ? (
                    <button
                        type="button"
                        className="bg-white text-blue-600 px-8 py-2.5 rounded-full"
                        onClick={() => {
                            closeMobileMenu();
                            navigate("/my-bookings");
                        }}
                    >
                        My Bookings
                    </button>
                ) : (
                    <button
                        type="button"
                        className="bg-black text-white px-8 py-2.5 rounded-full"
                        onClick={() => {
                            closeMobileMenu();
                            openSignIn();
                        }}
                    >
                        Login
                    </button>
                )}
            </div>
        </nav>
    );
};

export default Navbar;
