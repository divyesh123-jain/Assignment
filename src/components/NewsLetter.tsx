import { motion } from 'framer-motion';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Send } from 'lucide-react';

const NewsLetter = () => {
  return (
   <>
       <section className="bg-black text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4"
          >
            Never miss<br />an update
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="mb-8 text-base sm:text-lg"
          >
            Subscribe to our Newsletter
          </motion.p>
          <div className="max-w-md mx-auto flex flex-col sm:flex-row gap-2">
            <Input 
              type="email" 
              placeholder="Enter Email ID" 
              className="bg-white text-black flex-1"
            />
            <Button className="bg-white text-black hover:bg-gray-100 flex-shrink-0">
              <Send className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </section>
   </>
  )
}

export default NewsLetter
