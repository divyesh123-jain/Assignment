import { motion } from 'framer-motion';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Calendar } from 'lucide-react';
import { useEffect } from 'react';

const Booking = () => {
    const slides = [
        { text: "For the love of play", icon: "☎" },
        { text: "For the love of play", icon: "✤" },
        { text: "For the love of play", icon: "❋" },
        { text: "For the love of play", icon: "✦" },
        { text: "For the love of play", icon: "✖" },
        { text: "For the love of play", icon: "☎" }
    ];

    useEffect(() => {
        const styleSheet = document.createElement("style");
        styleSheet.textContent = `
            @keyframes scroll {
                0% {
                    transform: translateX(0);
                }
                100% {
                    transform: translateX(-50%);
                }
            }

            .animate-scroll {
                animation: scroll 30s linear infinite;
            }

            .animate-scroll:hover {
                animation-play-state: paused;
            }
        `;
        document.head.appendChild(styleSheet);

        return () => {
            document.head.removeChild(styleSheet);
        };
    }, []);

    return (
        <>
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
                            className="max-w-2xl mb-16"
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
                    </div>
                </div>
            </section>

            <div className="w-full bg-[#e8faa3] py-2 overflow-hidden">
                <div className="embla relative w-full mx-auto overflow-hidden">
                    <div className="flex whitespace-nowrap animate-scroll hover:pause">
                        <div className="flex">
                            {slides.map((slide, index) => (
                                <div
                                    key={`first-${index}`}
                                    className="flex items-center gap-3 px-6"
                                >
                                    <span className="text-black text-lg font-medium">
                                        {slide.text}
                                    </span>
                                    <div className="w-6 h-6 rounded-full border-2 border-black flex items-center justify-center">
                                        <span className="text-sm text-black">{slide.icon}</span>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className="flex">
                            {slides.map((slide, index) => (
                                <div
                                    key={`second-${index}`}
                                    className="flex items-center gap-3 px-6"
                                >
                                    <span className="text-black text-lg font-medium">
                                        {slide.text}
                                    </span>
                                    <div className="w-6 h-6 rounded-full border-2 border-black flex items-center justify-center">
                                        <span className="text-sm text-black">{slide.icon}</span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Booking;