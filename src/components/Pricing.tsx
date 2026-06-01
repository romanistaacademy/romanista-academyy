import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

export default function Pricing() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });

  const packages = [
    {
      name: 'اشتراك التمرين الواحد',
      price: 7,
      description: 'للتمرين الواحد',
      popular: false,
    },
    {
      name: 'حسم خاص للأخوة',
      price: 5,
      description: 'للتمرين الواحد',
      popular: true,
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section id="pricing" ref={ref} className="py-20 bg-black">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-black text-white mb-4">
            الاشتراكات والأسعار
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            اختر الخطة المناسبة لك وابدأ رحلتك نحو كونك نجماً
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-red-600 to-yellow-500 mx-auto mt-4" />
        </motion.div>

        {/* Pricing Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto"
        >
          {packages.map((pkg, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -10 }}
              className={`relative rounded-2xl overflow-hidden transition-all duration-300 ${
                pkg.popular
                  ? 'ring-2 ring-red-500 shadow-2xl shadow-red-600/50'
                  : 'border border-white/20'
              }`}
            >
              {/* Card Background */}
              <div className={`absolute inset-0 -z-10 ${
                pkg.popular
                  ? 'bg-gradient-to-br from-red-600/30 to-yellow-600/10'
                  : 'bg-gradient-to-br from-white/10 to-white/5'
              }`} />

              {/* Popular Badge */}
              {pkg.popular && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="absolute top-6 right-6 bg-gradient-to-r from-red-600 to-red-700 text-white px-4 py-1 rounded-full text-sm font-bold"
                >
                  الأكثر شهرة
                </motion.div>
              )}

              <div className="p-8 backdrop-blur-md">
                {/* Package Name */}
                <h3 className="text-2xl font-bold text-white mb-2">{pkg.name}</h3>
                <p className="text-gray-400 text-sm mb-6">{pkg.description}</p>

                {/* Price */}
                <div className="mb-8">
                  <span className="text-5xl font-black bg-gradient-to-r from-red-500 to-yellow-500 bg-clip-text text-transparent">
                    ${pkg.price}
                  </span>
                  <span className="text-gray-400 text-lg"> /للتمرين الواحد</span>
                </div>

                {/* CTA Button */}
                <motion.a
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  href="https://romanista-regestration-776263.netlify.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-full block text-center py-3 rounded-xl font-bold transition-all duration-300 mb-8 ${
                    pkg.popular
                      ? 'bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white'
                      : 'bg-white/10 hover:bg-white/20 text-white border border-white/30'
                  }`}
                >
                  سجل الآن
                </motion.a>

                {/* Features List */}
  
              </div>
            </motion.div>
          ))}
        </motion.div>


      </div>
    </section>
  );
}
