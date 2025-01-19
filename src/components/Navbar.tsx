import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { MapPin } from 'lucide-react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    
    return (
        <>
            <nav className="bg-black fixed top-0 left-0 right-0 z-[100] h-[80px] text-white">
                <div className="mx-4 md:mx-[40px] lg:mx-[186px] px-4 md:px-[40px]">
                    <div className="flex items-center justify-between h-[80px]">
                        {/* Logo */}
                        <img 
                            src="https://playarena.in/wp-content/themes/playarena.in/img/logo.svg" 
                            alt="Play Arena" 
                            className="h-[40px] md:h-[50px] w-auto"
                        />

                        {/* Mobile menu button */}
                        <button
                            className="lg:hidden text-white focus:outline-none"
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        >
                            {isMobileMenuOpen ? <X className="w-7 h-7"/> : <Menu className="w-7 h-7"/>}
                        </button>

                        {/* Desktop Navigation */}
                        <div className="hidden lg:flex items-center justify-center space-x-8">
                            <Button variant="ghost" className="text-lg font-medium">Play</Button>
                            <Button variant="ghost" className="text-lg font-medium">Participate</Button>
                            <Button variant="ghost" className="text-lg font-medium">Host</Button>
                            <Button variant="ghost" className="text-lg font-medium">F&B</Button>
                            <MapPin className="w-7 h-7 cursor-pointer hover:text-gray-300 transition-colors" />
                        </div>
                    </div>

                    {/* Mobile Navigation */}
                    {isMobileMenuOpen && (
                        <div className="lg:hidden absolute top-[80px] left-0 right-0 bg-black border-t border-gray-800">
                            <div className="px-4 py-6 space-y-4">
                                <Button variant="ghost" className="w-full text-center justify-center text-lg font-medium">
                                    Play
                                </Button>
                                <Button variant="ghost" className="w-full text-center justify-center text-lg font-medium">
                                    Participate
                                </Button>
                                <Button variant="ghost" className="w-full text-center justify-center text-lg font-medium">
                                    Host
                                </Button>
                                <Button variant="ghost" className="w-full text-center justify-center text-lg font-medium">
                                    F&B
                                </Button>
                                <div className="flex justify-center py-2">
                                    <MapPin className="w-7 h-7" />
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </nav>
        </>
    );
}

export default Navbar
