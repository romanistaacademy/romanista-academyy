import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

export default function AgeGroups() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  const ageGroups = [
    '2010', '2011', '2012', '2013', '2014',
    '2015', '2016', '2017', '2018', '2019',
    '2020', '2021'
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.4 },
    },
  };

  return (
    <section id="age-groups" ref={ref} className="py-20 bg-gradient-to-b from-black to-red-950/20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-black text-white mb-4">
            الفئات العمرية
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            برامج تدريب متخصصة للاعبين من عمر 5 سنوات حتى 16 سنة
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-red-600 to-yellow-500 mx-auto mt-4" />
        </motion.div>

        {/* Age Groups Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4"
        >
          {ageGroups.map((age, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ scale: 1.1, y: -5 }}
              whileTap={{ scale: 0.95 }}
              className="group cursor-pointer"
            >
              <div className="relative p-6 bg-gradient-to-br from-red-600/20 to-yellow-600/10 border border-red-600/40 rounded-xl text-center hover:border-red-500/80 hover:from-red-600/30 hover:to-yellow-600/20 transition-all duration-300 overflow-hidden">
                {/* Gradient overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-red-500/0 to-yellow-500/0 group-hover:from-red-500/10 group-hover:to-yellow-500/10 transition-all duration-300" />
                
                <div className="relative z-10">
                  <p className="text-3xl font-black text-transparent bg-gradient-to-r from-red-500 to-yellow-500 bg-clip-text group-hover:from-yellow-500 group-hover:to-red-500 transition-all duration-300">
                    {age}
                  </p>
                  <p className="text-xs text-gray-400 mt-2">فئة عمرية</p>
                </div>

                {/* Football icon */}
                <div className="absolute -bottom-2 -right-2 w-12 h-12 text-red-600/20 group-hover:text-red-500/40 transition-all duration-300 text-4xl">
                  ⚽
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Info Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 p-8 bg-gradient-to-r from-red-600/20 to-yellow-600/10 border border-red-600/30 rounded-2xl text-center"
        >
          <h3 className="text-2xl font-bold text-white mb-4">برنامج تدريب متقدم</h3>
          <p className="text-gray-300">
            جميع الفئات العمرية تتدرب تحت إشراف مدربين محترفين باستخدام أحدث التقنيات التدريبية الحديثة
          </p>
        </motion.div>
      </div>
    </section>
  );
}
