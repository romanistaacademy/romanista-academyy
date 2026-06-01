import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ArrowLeft } from 'lucide-react';

export default function Registration() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <section id="registration" ref={ref} className="py-20 bg-black">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-black text-white mb-4">
            التسجيل في الأكاديمية
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            ابدأ رحلتك مع أكاديمية الرومانيستا الآن
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-red-600 to-yellow-500 mx-auto mt-4" />
        </motion.div>

        {/* Registration Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8 }}
          className="relative rounded-2xl overflow-hidden shadow-2xl"
        >
          {/* Gradient Background */}
          <div className="absolute inset-0 bg-gradient-to-br from-red-600/30 via-black to-yellow-600/10 -z-10" />
          <div className="absolute inset-0 border border-red-600/50 -z-10" />

          <div className="p-8 md:p-12 backdrop-blur-md">
            {/* Main CTA Content */}
            <div className="text-center mb-12">
              <motion.div
                initial={{ scale: 0.5 }}
                animate={inView ? { scale: 1 } : { scale: 0.5 }}
                transition={{ duration: 0.6 }}
                className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-red-600 to-yellow-500 rounded-full mb-6 shadow-lg shadow-red-600/50"
              >
                <span className="text-3xl">⚽</span>
              </motion.div>

              <h3 className="text-3xl md:text-4xl font-black text-white mb-4">
                جاهز لتصبح نجماً؟
              </h3>

              <p className="text-gray-300 max-w-2xl mx-auto mb-8 text-lg">
                انضم إلى مئات اللاعبين الذين اختاروا أكاديمية الرومانيستا لتطوير مهاراتهم وتحقيق أحلامهم في كرة القدم
              </p>

              {/* Key Benefits */}
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-8">
                {[
                  '✓ تدريب احترافي',
                  '✓ مدربون معتمدون',
                  '✓ برامج متطورة',
                  '✓ بيئة آمنة',
                  '✓ متابعة دورية',
                  '✓ شهادات معترفة',
                ].map((benefit, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
                    transition={{ duration: 0.4, delay: 0.2 + index * 0.1 }}
                    className="text-gray-300 text-sm md:text-base font-medium"
                  >
                    {benefit}
                  </motion.div>
                ))}
              </div>
            </div>

            {/* CTA Button */}
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="https://romanista-regestration-776263.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 w-full py-4 md:py-5 bg-gradient-to-r from-red-600 via-red-600 to-red-700 hover:from-red-700 hover:via-red-700 hover:to-red-800 text-white font-bold text-lg rounded-xl transition-all duration-300 shadow-lg shadow-red-600/50 mb-6"
            >
              <span>سجل الآن</span>
              <ArrowLeft className="w-5 h-5" />
            </motion.a>

            {/* Additional Info */}
            <p className="text-center text-gray-400 text-sm">
              📋 يمكنك ملء نموذج التسجيل الكامل على منصتنا الآمنة
            </p>
          </div>
        </motion.div>

        {/* Quick Steps */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-12 grid md:grid-cols-3 gap-6"
        >
          {[
            {
              number: '1',
              title: 'انقر على التسجيل',
              description: 'اضغط على زر سجل الآن أعلاه',
            },
            {
              number: '2',
              title: 'ملء البيانات',
              description: 'أكمل نموذج التسجيل ببيانات لاعبك',
            },
            {
              number: '3',
              title: 'ابدأ التدريب',
              description: 'تواصل معنا وابدأ رحلتك اليوم',
            },
          ].map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
              className="p-6 bg-gradient-to-br from-white/10 to-white/5 border border-white/20 rounded-xl text-center hover:border-red-500/50 transition-all duration-300"
            >
              <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r from-red-600 to-yellow-500 rounded-full font-bold text-white mb-4">
                {step.number}
              </div>
              <h4 className="text-lg font-bold text-white mb-2">{step.title}</h4>
              <p className="text-gray-400 text-sm">{step.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
