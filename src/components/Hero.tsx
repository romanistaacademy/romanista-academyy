import { motion } from 'framer-motion';
import { ArrowDown } from 'lucide-react';

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8 },
    },
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 lg:pt-0"
    >
      {/* Animated Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-red-950 via-black to-black opacity-80" />
        
        {/* Animated particles */}
        <div className="absolute w-96 h-96 bg-red-600 rounded-full mix-blend-screen filter blur-3xl opacity-20 -top-40 -right-40 animate-pulse" />
        <div className="absolute w-96 h-96 bg-yellow-600 rounded-full mix-blend-screen filter blur-3xl opacity-10 -bottom-40 -left-40 animate-pulse" style={{ animationDelay: '1s' }} />
      </div>

      {/* Content */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
      >
        {/* Main Title */}
        <motion.div variants={itemVariants} className="mb-6">
          <h1 className="text-5xl md:text-7xl font-black text-white mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
            ROMANISTA
          </h1>
          <p className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-red-500 to-yellow-500 bg-clip-text text-transparent">
            أكاديمية الرومانيستا لكرة القدم
          </p>
        </motion.div>

        {/* Subtitle */}
        <motion.p
          variants={itemVariants}
          className="text-lg md:text-xl text-gray-300 mb-8 max-w-2xl mx-auto"
        >
          نصنع نجوم المستقبل
        </motion.p>

        {/* Description */}
        <motion.p
          variants={itemVariants}
          className="text-sm md:text-base text-gray-400 mb-12 max-w-2xl mx-auto leading-relaxed"
        >
          أكاديمية احترافية لتدريب كرة القدم تهدف إلى اكتشاف المواهب الشابة وتنمية قدراتهم ومهاراتهم الكروية ونقلهم إلى مستوى النجومية والاحترافية
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16"
        >
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="https://romanista-regestration-776263.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white font-bold rounded-xl transition-all duration-300 shadow-lg shadow-red-600/50"
          >
            سجل الآن
          </motion.a>
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="#about"
            className="px-8 py-4 bg-white/10 backdrop-blur-md border border-white/20 text-white font-bold rounded-xl hover:bg-white/20 transition-all duration-300"
          >
            تعرف على الأكاديمية
          </motion.a>
        </motion.div>

        {/* Statistics Cards */}
        <motion.div
          variants={itemVariants}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-2xl mx-auto"
        >
          {[
            { value: '+100', label: 'لاعب' },
            { value: '+10', label: 'مدربين' },
            { value: '+50', label: 'بطولة' },
            { value: '+10', label: 'سنوات خبرة' },
          ].map((stat, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -5 }}
              className="p-4 bg-white/10 backdrop-blur-md border border-white/20 rounded-lg hover:bg-white/15 transition-all"
            >
              <p className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-red-500 to-yellow-500 bg-clip-text text-transparent">
                {stat.value}
              </p>
              <p className="text-xs md:text-sm text-gray-400 mt-1">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <ArrowDown className="text-red-500" size={24} />
      </motion.div>
    </section>
  );
}
