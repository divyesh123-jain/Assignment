import { motion } from 'framer-motion';
import { Button } from "@/components/ui/button";
import { ArrowRight } from 'lucide-react';

const Membership = () => {
  const features = [
    {
      title: "SKIP THE QUEUE",
      description: "No ticketing. Just load your card and go play.",
      icon: "👑"
    },
    {
      title: "TREATS ON US",
      description: "Get exclusive offers across our F&B outlets",
      icon: "🎁"
    },
    {
      title: "BIG DISCOUNTS",
      description: "The more you load the bigger your discounts",
      icon: "💰"
    }
  ];

  return (
    <section className="bg-[#f5f5f5] py-24 relative overflow-hidden">
      <div 
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage: 'radial-gradient(circle at 0% 0%, #4361ee 0%, transparent 50%), radial-gradient(circle at 100% 100%, #4361ee 0%, transparent 50%)',
        }}
      />
      
      <div className="container mx-auto px-4 relative">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-6xl font-bold mb-6 leading-tight"
              >
                Play like<br />
                a Pro
              </motion.h2>
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="text-xl text-gray-600 mb-8"
              >
                We call this our Royalty Programme.
              </motion.p>
              <motion.div
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Button 
                  className="h-14 px-8 bg-blue-600 hover:bg-blue-700 text-white text-lg"
                >
                  Become a member
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </motion.div>
            </div>
            
            <div className="grid grid-cols-1 gap-8">
              {features.map((feature, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow"
                >
                  <div className="flex items-start gap-6">
                    <span className="text-4xl">{feature.icon}</span>
                    <div>
                      <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                      <p className="text-gray-600">{feature.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Membership;