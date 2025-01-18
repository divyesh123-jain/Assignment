import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { MapPin } from 'lucide-react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  return (
    <>
        <nav className="bg-black text-white p-4">
        <div className="container mx-auto flex justify-between items-center flex-wrap">
          <img src="https://playarena.in/wp-content/themes/playarena.in/img/logo.svg" alt="Play Arena" className="h-8" />
          <button
            className="md:hidden text-white focus:outline-none"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6"/> : <Menu className="w-6 h-6"/>}
          </button>
          <div className={`w-full md:flex md:items-center md:w-auto ${isMobileMenuOpen ? 'block' : 'hidden'}`}>
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
      </nav>
    </>
  )
}

export default Navbar
