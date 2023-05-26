import SlideControls from "./SlideControls";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Carousel() {
  const images = [
    "https://dummyimage.com/200x200/000/333",
    "https://dummyimage.com/800x400/000/333",
    "https://dummyimage.com/200x400/666/333",
    "https://dummyimage.com/600x1200/000/333",
    "https://dummyimage.com/600x400/000/333",
    "https://dummyimage.com/600x400/000/333",
  ];
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    const newIndex = currentSlide + 1;
    setCurrentSlide(newIndex >= images.length ? 0 : newIndex);
  };

  const prevSlide = () => {
    const newIndex = currentSlide - 1;
    setCurrentSlide(newIndex < 0 ? images.length - 1 : newIndex);
  };

  return (
    <div>
      <div className="h-96 w-3/4 mx-auto  relative overflow-hidden">
        <AnimatePresence initial={false} custom={currentSlide}>
          <motion.img
            key={currentSlide}
            src={images[currentSlide]}
            className="w-full h-full object-cover rounded"
            alt=""
            custom={currentSlide}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.5 }}
          />
        </AnimatePresence>
        <div className="absolute w-full flex justify-center  bottom-1">
          <SlideControls controls={{ prevSlide, nextSlide }} />
        </div>
      </div>
    </div>
  );
}
