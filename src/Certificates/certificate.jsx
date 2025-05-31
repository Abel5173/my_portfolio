import ImageGallery from 'react-image-gallery';
import 'react-image-gallery/styles/css/image-gallery.css';
import { motion } from 'framer-motion';
import img1 from '../assets/images/1.png';
import img2 from '../assets/images/2.png';
import img3 from '../assets/images/5.png';
import img4 from '../assets/images/6.jpg';
import img5 from '../assets/images/7.jpg';
import img6 from '../assets/images/8.jpg';

const images = [
  { original: img1, thumbnail: img1 },
  { original: img2, thumbnail: img2 },
  { original: img3, thumbnail: img3 },
  { original: img4, thumbnail: img4 },
  { original: img5, thumbnail: img5 },
  { original: img6, thumbnail: img6 },
];

const CertificatesGallery = () => {
  return (
    <section id="certificates" className="bg-[#0a0a23] py-8">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-green-800 mb-6">
          Certificates
        </h2>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <ImageGallery
            items={images}
            showPlayButton={false}
            showFullscreenButton={true}
            showThumbnails={true}
            showBullets={true}
            slideDuration={400}
            additionalClass="rounded-lg shadow-lg"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default CertificatesGallery;
