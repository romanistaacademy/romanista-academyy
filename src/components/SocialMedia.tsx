import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

export default function SocialMedia() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });

  const socialLinks = [
    {
      name: 'Instagram',
      icon: '📸',
      url: 'https://www.instagram.com/romanista_fa',
      followers: '@romanista_fa',
      color: 'from-pink-600 to-red-600',
    },
    {
      name: 'YouTube',
      icon: '▶️',
      url: 'http://www.youtube.com/@romanista_fa',
      followers: '@romanista_fa',
      color: 'from-red-600 to-red-700',
    },
    {
      name: 'Facebook',
      icon: '👥',
      url: 'https://www.facebook.com/Romanista11',
      followers: 'Romanista',
      color: 'from-blue-600 to-blue-700',
    },
    {
      name: 'TikTok',
      icon: '🎵',
      url: 'https://www.tiktok.com/@romanista_fa',
      followers: '@romanista_fa',
      color: 'from-black to-gray-800',
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
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.4 },
    },
  };

  return (
    <section className="py-20 bg-black">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-black text-white mb-4">
            تابعنا على مواقع التواصل
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            شاهد آخر أخبار الأكاديمية والإنجازات والفيديوهات التدريبية
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-red-600 to-yellow-500 mx-auto mt-4" />
        </motion.div>

        {/* Social Cards Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {socialLinks.map((social, index) => (
            <motion.a
              key={index}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              variants={itemVariants}
              whileHover={{ y: -10, scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="group relative overflow-hidden rounded-2xl"
            >
              {/* Gradient Background */}
              <div className={`absolute inset-0 bg-gradient-to-br ${social.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10`} />
              <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-white/5 border border-white/20 group-hover:border-white/40 transition-all duration-300 -z-10" />

              <div className="p-8 text-center">
                {/* Icon */}
                <div className="text-5xl mb-4 transform group-hover:scale-125 transition-transform duration-300">
                  {social.icon}
                </div>

                {/* Platform Name */}
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-yellow-400 transition-colors">
                  {social.name}
                </h3>

                {/* Username */}
                <p className="text-sm text-gray-400 group-hover:text-gray-200 transition-colors mb-4">
                  {social.followers}
                </p>

                {/* CTA Button */}
                <motion.div
                  className="inline-block px-4 py-2 bg-white/10 group-hover:bg-white/20 border border-white/20 group-hover:border-white/40 rounded-lg text-white text-sm font-bold transition-all duration-300"
                >
                  تابع الآن
                </motion.div>
              </div>
            </motion.a>
          ))}
        </motion.div>

        {/* Engagement Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-16 p-8 bg-gradient-to-r from-red-600/20 to-yellow-600/10 border border-red-600/30 rounded-2xl"
        >
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <p className="text-3xl font-black bg-gradient-to-r from-red-500 to-yellow-500 bg-clip-text text-transparent">
                +5K
              </p>
              <p className="text-gray-400 mt-2">متابعون نشيطون</p>
            </div>
            <div>
              <p className="text-3xl font-black bg-gradient-to-r from-red-500 to-yellow-500 bg-clip-text text-transparent">
                +200
              </p>
              <p className="text-gray-400 mt-2">فيديو تدريبي</p>
            </div>
            <div>
              <p className="text-3xl font-black bg-gradient-to-r from-red-500 to-yellow-500 bg-clip-text text-transparent">
                يومي
              </p>
              <p className="text-gray-400 mt-2">محتوى جديد</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
