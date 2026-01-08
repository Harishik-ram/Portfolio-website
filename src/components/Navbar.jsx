import { cn } from "@/lib/utils";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const navItems = [
    { name: "Home", href: "#hero" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
];

export const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <>
            <nav className={cn(
                "fixed top-0 left-0 w-full transition-all duration-300 z-50 px-4",
                isScrolled
                    ? "py-3 bg-background/80 backdrop-blur-md shadow-sm border-b border-border"
                    : "py-5"
            )}>
                <div className="container mx-auto flex items-center justify-between">
                    {/* Logo/Brand */}
                    <a
                        href="#hero"
                        className="text-xl font-bold text-primary flex items-center hover:text-primary/80 transition-colors duration-300"
                        onClick={() => setIsMenuOpen(false)}
                    >
                        <span className="text-glow">
                            <span className="text-foreground font-bold">Harishik</span>
                            <span className="text-primary"> Portfolio</span>
                        </span>
                    </a>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex space-x-8">
                        {navItems.map((item, index) => (
                            <a
                                key={index}
                                href={item.href}
                                className="text-foreground/80 hover:text-primary transition-colors duration-300 font-medium px-3 py-2 rounded-lg hover:bg-primary/5"
                            >
                                {item.name}
                            </a>
                        ))}
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        className="md:hidden p-2 text-foreground z-50 hover:bg-primary/10 rounded-lg transition-colors"
                        aria-label={isMenuOpen ? "Close menu" : "Open menu"}
                    >
                        {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </nav>

            {/* Mobile Menu Overlay */}
            <div className={cn(
                "fixed inset-0 bg-background/95 backdrop-blur-md flex flex-col items-center justify-center z-40 transition-all duration-300",
                "md:hidden",
                isMenuOpen
                    ? "opacity-100 pointer-events-auto"
                    : "opacity-0 pointer-events-none"
            )}>
                <div className="flex flex-col space-y-6 text-2xl">
                    {navItems.map((item, index) => (
                        <a
                            key={index}
                            href={item.href}
                            className="text-foreground/80 hover:text-primary transition-colors duration-300 font-medium py-3 px-6 rounded-lg hover:bg-primary/10"
                            onClick={() => setIsMenuOpen(false)}
                        >
                            {item.name}
                        </a>
                    ))}
                </div>
            </div>
        </>
    );
};
