import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { MapPin, Phone } from 'lucide-react';

export default function Location() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <section id="location" ref={ref} className="py-20 bg-gradient-to-b from-black to-black">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-black text-white mb-4">
            موقع الأكاديمية
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-red-600 to-orange-500 mx-auto" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Location Card */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
            transition={{ duration: 0.8 }}
            whileHover={{ y: -5 }}
            className="p-8 bg-gradient-to-br from-red-600/20 to-orange-600/10 border border-red-600/40 rounded-2xl hover:border-red-500/60 transition-all duration-300"
          >
            <div className="flex items-start gap-4 mb-6">
              <MapPin className="w-8 h-8 text-red-500 flex-shrink-0" />
              <div>
                <h3 className="text-2xl font-bold text-white mb-2">الموقع</h3>
                <p className="text-gray-400">صيدا - لبنان</p>
              </div>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-xl p-6 mb-6">
              <p className="text-gray-300 font-medium mb-2">الملعب:</p>
              <p className="text-white text-lg font-bold">ملعب الفوكس</p>
              <p className="text-gray-400 text-sm mt-2">بجانب مقبرة الإنجليز</p>
            </div>

            <div className="flex items-center gap-3 mb-6">
              <Phone className="w-6 h-6 text-red-500" />
              <a href="tel:76888392" className="text-white font-bold hover:text-red-500 transition-colors">
                76888392
              </a>
            </div>

            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="https://www.google.com/maps/search/%D8%AC%D9%86%D9%88%D8%A8+%D9%84%D8%A8%D9%86%D8%A7%D9%86+%D8%B5%D9%8A%D8%AF%D8%A7"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-3 bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white font-bold rounded-xl text-center transition-all duration-300"
            >
              فتح على Google Maps
            </motion.a>
          </motion.div>

          {/* Map Embed */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
            transition={{ duration: 0.8 }}
            className="rounded-2xl overflow-hidden border border-red-600/40 shadow-2xl"
          >
            <iframe
              width="100%"
              height="400"
              frameBorder="0"
              scrolling="no"
              marginHeight={0}
              marginWidth={0}
              src="https://maps.google.com/maps?width=100%25&amp;height=400&amp;hl=ar&amp;q=%D8%B5%D9%8A%D8%AF%D8%A7%20%D9%84%D8%A8%D9%86%D8%A7%D9%86+(ROMANISTA)&amp;t=&amp;z=13&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
              title="موقع أكاديمية الرومانيستا"
              style={{ border: 0 }}
            />
          </motion.div>
        </div>

        {/* Directions Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-12 p-8 bg-gradient-to-r from-red-600/20 to-orange-600/10 border border-red-600/30 rounded-2xl"
        >
          <h3 className="text-xl font-bold text-white mb-4">🚗 تعليمات الوصول</h3>
          <p className="text-gray-300">
            يقع ملعب الفوكس في قلب مدينة صيدا، بالقرب من مقبرة الإنجليز. يمكنك الوصول بسهولة باستخدام GPS أو خريطة Google.
            الموقف متوفر بجانب الملعب مباشرة.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
