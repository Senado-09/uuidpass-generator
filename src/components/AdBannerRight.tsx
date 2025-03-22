import { useState, useEffect } from "react";
import { motion } from "framer-motion";

// Liste des slides avec les liens d'images
const slides = [
  { id: 1, imageUrl: "src/assets/1.jpg" },
  { id: 2, imageUrl: "src/assets/2.jpg" },
  { id: 3, imageUrl: "src/assets/1.jpg" },
];

const AdBannerRight = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-64 h-full overflow-hidden border rounded-lg">
      {slides.map((slide, index) => (
        <motion.div
          key={slide.id}
          className="absolute w-full h-full flex items-center justify-center"
          initial={{ opacity: 0, x: 100 }}
          animate={index === currentIndex ? { opacity: 1, x: 0 } : { opacity: 0, x: -100 }}
          transition={{ duration: 0.5 }}
        >
          <img src={slide.imageUrl} alt={`Publicité ${slide.id}`} className="w-full h-full object-cover" />
        </motion.div>
      ))}
    </div>
  );
};

export default AdBannerRight;
