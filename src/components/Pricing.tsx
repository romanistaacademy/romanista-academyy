import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

export default function Pricing() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });

  const packages = [
    {
      name: 'الاشتراك الشهري',
      price: 40,
      period: 'شهري',
      popular: false,
    },
    {
      name: 'الاشتراك الشهري',
      price: 35,
      period: 'شهري للأخوة',
      popular: true,
    },
    {
      name: 'الاشتراك اليومي',
      price: 7,
      period: 'يومي',
      popular: false,
    },
    {
      name: 'الاشتراك اليومي',
      price: 5,
      period: 'يومي للأخوة',
      popular: false,
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
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
    <section id="pricing" ref={ref} className="py-20 bg-gradient-to-b from-black to-black">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-black text-white mb-4">
            الأسعار والباقات
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            اختر الباقة المناسبة لك والانضمام إلى أكاديمية الرومانيستا
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-red-600 to-orange-500 mx-auto mt-4" />
        </motion.div>

        {/* Pricing Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {packages.map((pkg, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -10 }}
              className={`relative overflow-hidden rounded-2xl p-8 transition-all duration-300 ${ 
                pkg.popular 
                  ? 'md:scale-105 border-2 border-red-500/80 bg-gradient-to-br from-red-600/20 to-orange-600/10' 
                  : 'border border-white/20 bg-gradient-to-br from-white/10 to-white/5'
              }`}
            >
              {/* Popular Badge */}
              {pkg.popular && (
                <div className="absolute top-0 right-0 bg-gradient-to-l from-red-600 to-orange-600 text-white px-4 py-1 rounded-bl-xl font-bold text-sm">
                  الأكثر شهرة ✨
                </div>
              )}

              {/* Package Name */}
              <h3 className="text-2xl font-bold text-white mb-2">
                {pkg.name}
              </h3>

              {/* Price */}
              <div className="mb-8">
                <span className="text-5xl font-black bg-gradient-to-r from-red-500 to-orange-500 bg-clip-text text-transparent">
                  ${pkg.price}
                </span>
                <span className="text-gray-400 ml-2 text-sm">/{pkg.period}</span>
              </div>

              {/* CTA Button */}
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="https://romanista-regestration-776263.netlify.app/"
                target="_blank"
                rel="noopener noreferrer"
                className={`block w-full py-3 rounded-lg font-bold text-center transition-all ${ 
                  pkg.popular
                    ? 'bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white shadow-lg shadow-red-600/50'
                    : 'bg-white/10 hover:bg-white/20 text-white border border-white/20'
                }`}
              >
                سجل الآن
              </motion.a>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
