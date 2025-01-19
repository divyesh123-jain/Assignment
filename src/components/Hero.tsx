
import { motion } from 'framer-motion';
import { Button } from "@/components/ui/button";
import { Cake } from 'lucide-react';
import { Briefcase } from 'lucide-react';
import { Heart } from 'lucide-react';

const Hero = () => {
  return (
    <>
      <div className="container md:pt-4 md:p-[110px] mx-auto">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl sm:text-5xl md:text-6xl font-bold text-black mb-8"
        >
          Play, Your Way
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-base sm:text-lg md:text-xl text-gray-700 max-w-3xl mb-16"
        >
          When it comes to get-togethers, the more is always the merrier. You bring the people, we'll take care of the rest. Call us for customized birthdays, farewells, anniversaries and other events or group packages with entertainment, music and a fantastic range of F&B to choose from.
        </motion.p>

        {/* Cards Section */}
        <div className="grid grid-cols-1  sm:grid-cols-2 gap-8 lg:grid-cols-3">
          {/* Birthday Bashes Card */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className=" rounded-lg  flex flex-col"
          >
            <div className='flex flex-row ' >
            <Cake className="w-12 h-12 mb-4" />
            <h2 className="text-xl sm:text-2xl font-semibold mb-4 sm:mt-3 mx-2">Birthday Bashes</h2>
            </div>
            <img src="https://playarena.in/wp-content/uploads/2024/12/BIRTHDAY-1.webp" alt="Birthday Bashes" className="w-full h-40 object-cover mb-4 rounded"/>
            <p className="text-gray-600 MB-6 flex-grow">
              Thrilling activities, exciting games, and delicious food—our custom packages ensure unforgettable experiences for all ages!
            </p>
            <Button variant="outline" className="w-full mt-auto">
              Find out more
            </Button>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="rounded-lg   flex flex-col"
          >
            <div className='flex flex-row ' >
            <Briefcase className="w-12 h-12 mb-4" />
            <h2 className="text-xl sm:text-2xl font-semibold mb-4 sm:mt-2 mx-2">Corporate Events</h2>
            </div>
            <img src="https://playarena.in/wp-content/uploads/2024/12/corporate-1-1.webp" alt="Corporate Events" className="w-full h-40 object-cover mb-4 rounded"/>
            <p className="text-gray-600 mb-6 flex-grow">
              Nothing like a game to get the teamwork going. Talk to us to find out more about our corporate packages for offsites, team building activities, leadership meets, outbound learning and more.
            </p>
            <Button variant="outline" className="w-full mt-auto">
              Find out more
            </Button>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className=" rounded-lg  flex flex-col"
          >
             <div className='flex flex-row ' >
            <Heart className="w-12 h-12 mb-4" />
            <h2 className="text-xl sm:text-2xl font-semibold mb-4 sm:mt-2 mx-2">Play Dates</h2>
            </div>
            <img src="https://playarena.in/wp-content/uploads/2024/12/PERFECT-DATE-1.webp" alt="Play Dates" className="w-full h-40 object-cover mb-4 rounded"/>
            <p className="text-gray-600 mb-6 flex-grow">
              Experience Play Dates, any day of the week, enjoy this special offer and quality time with your partner. Perfect for fun and connection!
            </p>
            <Button variant="outline" className="w-full mt-auto">
              Find out more
            </Button>
          </motion.div>
        </div>
      </div>
    </>
  )
}

export default Hero
