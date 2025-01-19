import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { MapPin } from 'lucide-react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  return (
    <>
        <nav className="bg-black fixed top-0 left-0 right-0 z-[100] text-white ">
        <div className="container  px-[40px] h-[80px] mx-[176px] flex justify-between items-center flex-wrap">
            <div className="flex h-[80px] w-[1080px] p-[15px] justify-between gap-8 relative">
          <img src="https://playarena.in/wp-content/themes/playarena.in/img/logo.svg" alt="Play Arena" className="h-[50px] w-[98px]" />
          <button
            className="md:hidden text-white focus:outline-none"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6"/> : <Menu className="w-6 h-6"/>}
          </button>
          <div className={`w-full md:flex md:items-center md:font-[36px] md:justify-end md:mx-[176px] md:w-auto ${isMobileMenuOpen ? 'block' : 'hidden'}`}>
            <div className="flex flex-col md:flex-row md:gap-4 mt-4 md:mt-0">
              <Button variant="ghost" className="w-full md:w-auto">Play</Button>
              <Button variant="ghost" className="w-full md:w-auto">Participate</Button>
              <Button variant="ghost" className="w-full md:w-auto">Host</Button>
              <Button variant="ghost" className="w-full md:w-auto">F&B</Button>
            </div>
            <div className="flex justify-center mt-4 md:mt-0 md:ml-4">
              <MapPin className="w-6 h-6" />
            </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  )
}

export default Navbar
