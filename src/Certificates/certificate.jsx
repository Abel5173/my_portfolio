import Gallery from "react-photo-gallery";
import { motion } from "framer-motion";
import img1 from "../assets/images/1.png";
import img2 from "../assets/images/2.png";
import img3 from "../assets/images/5.png";
import img4 from "../assets/images/6.jpg";
import img5 from "../assets/images/7.jpg";
import img6 from "../assets/images/8.jpg";

const photos = [
  { src: img1, width: 4, height: 3 },
  { src: img2, width: 4, height: 3 },
  { src: img3, width: 3, height: 4, rotate: true },
  { src: img4, width: 3, height: 4, rotate: true },
  { src: img5, width: 3, height: 4, rotate: true },
  { src: img6, width: 4, height: 4, rotate: true },
];

const CertificatesGallery = () => {
  return (
    <section id="certificates" className="bg-[#0a0a23] py-8">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-green-800 mb-6">
          Certificates
        </h2>
        <Gallery
          photos={photos}
          renderImage={({ photo, index }) => (
            <motion.div
              key={index}
              className="overflow-hidden rounded-lg shadow-lg m-2"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              whileHover={{ scale: 1.1, rotate: 2 }}
              whileTap={{ scale: 0.95 }}
            >
              <motion.img
                src={photo.src}
                alt={`Certificate ${index + 1}`}
                className={`w-full h-60 object-cover ${
                  photo.rotate ? "rotate-90" : ""
                }`}
                style={{
                  transform: photo.rotate ? "rotate(90deg)" : "none",
                }}
                initial={{ x: "-100%" }}
                animate={{ x: 0 }}
                transition={{ type: "spring", stiffness: 50 }}
              />
            </motion.div>
          )}
        />
      </div>
    </section>
  );
};

export default CertificatesGallery;
