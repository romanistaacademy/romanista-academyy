import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Check } from 'lucide-react';

export default function Pricing() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });

  const packages = [
    {
      name: 'تمرين واحد أسبوعياً',
      price: 7,
      description: 'الاشتراك الأساسي',
      features: [
        'جلسة تدريب واحدة أسبوعياً',
        'مشرف متخصص',
        'بيئة تدريب آمنة',
        'تقييم دوري للأداء',
      ],
      popular: false,
    },
    {
      name: 'اشتراك العائلة',
      price: 5,
      description: 'للأخوة والأخوات',
      features: [
        'سعر مخصص للعائلة',
        'جلسات تدريب منتظمة',
        'تدريب متقدم',
        'متابعة شاملة للتطور',
        'أولوية في الفعاليات',
      ],
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
                  <span className="text-gray-400 text-lg">/شهر</span>
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
                <div className="space-y-4">
                  {pkg.features.map((feature, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: -10 }}
                      animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -10 }}
                      transition={{ duration: 0.4, delay: 0.2 + i * 0.1 }}
                      className="flex items-start gap-3"
                    >
                      <Check className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-300 text-sm">{feature}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 p-8 bg-gradient-to-r from-red-600/20 to-yellow-600/10 border border-red-600/30 rounded-2xl text-center"
        >
          <p className="text-gray-300 mb-4">
            ✨ جميع الأسعار تشمل الحصول على شهادة اعتماد بعد إكمال البرنامج
          </p>
          <p className="text-gray-400 text-sm">
            للاستفسارات والعروض الخاصة، يرجى التواصل معنا
          </p>
        </motion.div>
      </div>
    </section>
  );
}
