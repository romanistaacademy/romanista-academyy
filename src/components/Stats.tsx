import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useState, useEffect } from 'react';

function AnimatedCounter({ end, inView }: { end: number; inView: boolean }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView) return;

    const duration = 2000;
    const startTime = Date.now();

    const timer = setInterval(() => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / duration, 1);
      setCount(Math.floor(progress * end));
    }, 30);

    return () => clearInterval(timer);
  }, [inView, end]);

  return <span>{count}</span>;
}

export default function Stats() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  const stats = [
    { value: 200, label: 'لاعب مسجل' },
    { value: 10, label: 'مدربين متخصصين' },
    { value: 50, label: 'بطولة مكتسبة' },
    { value: 10, label: 'سنوات الخبرة' },
  ];

  return (
    <section ref={ref} className="py-20 bg-gradient-to-b from-black via-black to-black">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-black text-white mb-4">
            إحصائيات الأكاديمية
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-red-600 to-orange-500 mx-auto" />
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -10, scale: 1.05 }}
              className="p-6 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-md border border-white/20 rounded-xl text-center hover:border-red-500/50 transition-all duration-300"
            >
              <p className="text-4xl md:text-5xl font-black bg-gradient-to-r from-red-500 to-orange-500 bg-clip-text text-transparent mb-2">
                <AnimatedCounter end={stat.value} inView={inView} />+
              </p>
              <p className="text-gray-400 text-sm md:text-base font-medium">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
