import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ArrowRight } from 'lucide-react';

export default function Registration() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <section id="registration" ref={ref} className="py-20 bg-gradient-to-b from-black to-black">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-black text-white mb-4">
            الانضمام للأكاديمية
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-red-600 to-orange-500 mx-auto" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="p-8 bg-gradient-to-br from-red-600/20 to-orange-600/10 border border-red-600/40 rounded-2xl"
        >
          <p className="text-gray-300 text-lg mb-8 leading-relaxed">
            انضم إلى مئات اللاعبين الذين اختاروا أكاديمية الرومانيستا لتطوير مهاراتهم وتحقيق أحلامهم في كرة القدم
          </p>

          <div className="grid md:grid-cols-2 gap-4 mb-12">
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
                initial={{ opacity: 0, x: -20 }}
                animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                transition={{ duration: 0.6, delay: 0.3 + index * 0.05 }}
                className="flex items-center gap-3"
              >
                <span className="text-red-500 text-lg">{benefit}</span>
              </motion.div>
            ))}
          </div>

          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="https://romanista-regestration-776263.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 w-full py-4 bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white font-bold rounded-xl transition-all duration-300 shadow-lg shadow-red-600/50"
          >
            ابدأ الآن
            <ArrowRight className="w-5 h-5" />
          </motion.a>
        </motion.div>

        {/* Step Guide */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 grid md:grid-cols-3 gap-6"
        >
          {[
            { step: 1, title: 'ملء البيانات', desc: 'أدخل معلوماتك الشخصية' },
            { step: 2, title: 'اختيار الباقة', desc: 'اختر الاشتراك المناسب' },
            { step: 3, title: 'ابدأ التدريب', desc: 'اجعل أحلامك حقيقة!' },
          ].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
              className="p-6 bg-white/5 border border-white/20 rounded-xl text-center hover:border-red-500/50 transition-all"
            >
              <div className="w-12 h-12 bg-gradient-to-r from-red-600 to-orange-600 rounded-full flex items-center justify-center text-white font-bold text-lg mx-auto mb-4">
                {item.step}
              </div>
              <h3 className="text-lg font-bold text-white mb-2">{item.title}</h3>
              <p className="text-gray-400 text-sm">{item.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
