import { motion } from 'framer-motion';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Calendar } from 'lucide-react';

const Booking = () => {
  return (
    <section className="bg-black text-white py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-[1200px] mx-auto">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-6xl md:text-7xl lg:text-8xl font-bold mb-6"
          >
            Book your slots
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-lg text-gray-300 mb-12"
          >
            To find special offers, occupancy rates and free time
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="max-w-2xl  mb-16"
          >
            <div className="flex">
              <div className="flex-1 bg-[#e8ffa3] rounded-lg overflow-hidden relative">
                <div className="flex items-center">
                  <Input 
                    type="text"
                    placeholder="Friday, 17 January 2025"
                    className="w-full h-12 px-4 bg-transparent text-black placeholder-black/70 border-none focus:outline-none text-lg"
                    readOnly
                  />
                  <Button 
                    className="h-full w-12 text-black"
                    variant="ghost"
                  >
                    <Calendar className="w-10 h-10" />
                  </Button>
                </div>
              </div>
            </div>
          </motion.div>

          <div className="flex flex-wrap justify-center items-center gap-8 text-[#e8ffa3]">
            {Array(5).fill("For the love of play").map((text, index) => (
              <div key={index} className="flex items-center gap-3">
                <span className="text-lg font-medium">{text}</span>
                <div className="w-6 h-6 rounded-full border-2 border-[#e8ffa3] flex items-center justify-center">
                  <span className="text-sm">★</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Booking;