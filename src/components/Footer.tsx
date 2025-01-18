import { Instagram, Youtube, Facebook, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-black text-white pt-16 pb-4">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Newsletter Section */}
          <div className="lg:col-span-1">
            <h2 className="text-3xl font-bold mb-2">Never miss</h2>
            <h2 className="text-3xl font-bold mb-4">an update</h2>
            <p className="text-gray-400 mb-4">Subscribe to our Newsletter</p>
            <form className="flex items-center">
              <input
                type="email"
                placeholder="Enter Email ID"
                className="flex-grow p-3 rounded-l-lg bg-white/10 text-white placeholder-gray-400 focus:outline-none border border-gray-700"
              />
              <button className="bg-blue-600 hover:bg-blue-700 px-4 py-3 rounded-r-lg transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="white" className="w-5 h-5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </form>
          </div>

          {/* Address Section */}
          <div className="lg:col-span-1">
            <h3 className="text-lg font-bold mb-4">Play Arena Sports & Adventure Pvt. Ltd.</h3>
            <p className="text-sm text-gray-400 mb-4">
              Sy#75, Hosa Road, off Sarjapur Road,<br />
              opp Silverwood Regency Apartments,<br />
              Kasavanahalli, Bangalore 560035
            </p>
            <div className="flex space-x-4 mb-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Instagram className="w-6 h-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Youtube className="w-6 h-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Facebook className="w-6 h-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Linkedin className="w-6 h-6" />
              </a>
            </div>
          </div>

          {/* Play Links */}
          <div className="lg:col-span-1">
            <h3 className="text-lg font-bold mb-4">Play</h3>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors">Prime</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Pixel</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Studio</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Union</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Junior</a></li>
            </ul>
          </div>

          {/* Contact Links */}
          <div className="lg:col-span-1">
            <div className="mb-8">
              <h3 className="text-lg font-bold mb-4">Food & Beverages</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Food Court</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Restaurant</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-4">Contact</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="tel:990009992" className="hover:text-white transition-colors">99000 999 22</a></li>
                <li><a href="mailto:info@playarena.in" className="hover:text-white transition-colors">info@playarena.in</a></li>
              </ul>
            </div>
          </div>
        </div>

        {/* Copyright and Legal */}
        <div className="border-t border-gray-800 mt-12 pt-4">
          <div className="flex flex-col sm:flex-row justify-between items-center text-sm text-gray-400">
            <p>Copyright © 2025. All rights reserved.</p>
            <div className="flex gap-4 mt-4 sm:mt-0">
              <a href="#" className="hover:text-white transition-colors">Disclaimer</a>
              <span>|</span>
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;