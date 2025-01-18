import { motion, useAnimation } from 'framer-motion';
import { useEffect, useState } from 'react';
import { ArrowRight, GamepadIcon, Target, Users, Baby } from 'lucide-react';
interface BlockProps {
  title: string;
  description: string;
  color: string;
  icon: React.ElementType;
}

const Block = ({ 
  title,
  description,
  color,
  icon: Icon,
}: BlockProps) => {
    const controls = useAnimation();
    const [isHovered, setIsHovered] = useState(false);
    const [isAnimating, setIsAnimating] = useState(false);
  
    useEffect(() => {
      const animateBlock = async () => {
        while (true) {
          setIsAnimating(true);
          await controls.start({ y: -20, transition: { duration: 0.5 } });
          await new Promise(resolve => setTimeout(resolve, 500));
          await controls.start({ y: 0, transition: { duration: 0.5, type: "spring", stiffness: 300 } });
          setIsAnimating(false);
          await new Promise(resolve => setTimeout(resolve, 30000));
        }
      };
      animateBlock();
    }, [controls]);

  return (
    <motion.div
      className={`relative p-4  sm:p-6 cursor-pointer overflow-hidden ${color}`}
      initial={{ height: '140px' }}
      animate={{ 
        height: isHovered || isAnimating ? '200px' : '140px',
        y: isHovered || isAnimating ? -60 : 0
      }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      <motion.div 
        className="flex flex-col h-full"
        animate={controls}
      >
        <div className="flex items-center gap-3 mb-2">
          <Icon className="w-6 sm:w-8 h-6 sm:h-8" strokeWidth={1.5} />
          <h3 className="text-lg sm:text-2xl font-bold">{title}</h3>
        </div>
        <p className="text-base sm:text-lg font-medium opacity-90 mb-6">{description}</p>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ 
            opacity: isHovered || isAnimating ? 1 : 0,
            y: isHovered || isAnimating ? 0 : 20
          }}
          transition={{ 
            duration: 0.4,
            type: "spring",
            stiffness: 260,
            damping: 20
          }}
          className="w-full mt-auto"
        >
          <button className="w-full bg-[#4361ee] text-white py-3 px-6 rounded-lg flex items-center justify-between hover:bg-[#3651d4] transition-colors">
            <span className="text-md sm:text-lg font-semibold">View All 2 Activities</span>
            <ArrowRight className="w-5 sm:w-6 h-5 sm:h-6" />
          </button>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

const ActivityBlock = () => {
  return (
    <>
     
      <section className="">
          <div className="w-full ">
            <video 
              playsInline 
              autoPlay 
              muted 
              loop 
              poster="https://playarena.in/wp-content/uploads/2024/08/pixel_cover.jpg"
              className="h-[398px] w-full object-cover"
            >
              <source 
                src="https://playarena.in/wp-content/uploads/2024/08/pixel-10sec-2.mp4" 
                type="video/mp4" 
              
              />
            </video>
          </div>
     
        <div className="mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 ">
            <Block
              title="Prime"
              description="Strategy and action sports for the squad"
              color="bg-[#edffb3]"
              icon={GamepadIcon}
            />
            <Block
              title="Studio"
              description="Short format, big thrills served à la carte"
              color="bg-[#e8e8e8]"
              icon={Target}
            />
            <Block
              title="Union"
              description="Classic favourites for the recreational sport"
              color="bg-[#B3F0FF]"
              icon={Users}
            />
            <Block
              title="Junior"
              description="Toddler-sized fun for little champs"
              color="bg-[#e8e8e8]"
              icon={Baby}
            />
            <Block
              title="Pixel"
              description="Toddler-sized fun for little champs"
              color="bg-[#d1ebd8]"
              icon={Baby}
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default ActivityBlock;