import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Trophy, Users, Target, Award } from 'lucide-react';

export default function About() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });

  const achievements = [
    {
      icon: Trophy,
      title: 'تأسيس الأكاديمية',
      description: 'تأسست عام 2016 بهدف اكتشاف المواهب الشابة',
    },
    {
      icon: Award,
      title: 'إنجازات مميزة',
      description: 'بطولة كوبا للأكاديميات 2017 - المركز الأول',
    },
    {
      icon: Users,
      title: 'فريق احترافي',
      description: 'طاقم تدريبي وإداري مميز وفريد من نوعه',
    },
    {
      icon: Target,
      title: 'رؤيتنا',
      description: 'نقل اللاعبين إلى مستوى النجومية والاحترافية',
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
    <section id="about" ref={ref} className="py-20 bg-black">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-black text-white mb-4">
            نبذة عن الأكاديمية
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-red-600 to-yellow-500 mx-auto" />
        </motion.div>

        {/* Main Content */}
        <div className="grid md:grid-cols-2 gap-12 mb-16 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <p className="text-gray-300 leading-relaxed text-lg">
              أكاديمية الرومانيستا هي أكاديمية احترافية لتدريب كرة القدم تهدف إلى اكتشاف المواهب الشابة وتنمية قدراتهم ومهاراتهم الكروية ونقلهم إلى مستوى النجومية والاحترافية.
            </p>

            <p className="text-gray-300 leading-relaxed text-lg">
              توفر أكاديميتنا برامج تدريب مميزة للاعبين من عمر 5 سنوات حتى 16 سنة، كما تعمل على توفير بيئة صحية وتعليمية آمنة للشباب.
            </p>

            <p className="text-gray-300 leading-relaxed text-lg">
              تأسست عام 2016 وتكللت مسيرتها بالنجاح والتميز وخرجت أهم اللاعبين إلى الأندية والمنتخبات بإشراف طاقم تدريبي وإداري مميز وفريد.
            </p>

            <p className="text-gray-300 leading-relaxed text-lg">
              حققت أكاديميتنا العديد من البطولات على مستوى لبنان، وأهم هذه البطولات بطولة كوبا للأكاديميات عام 2017 حيث حققت أكاديميتنا المركز الأول بعد تغلبها على أفضل الأكاديميات آنذاك.
            </p>

            <p className="text-gray-300 leading-relaxed text-lg">
              تظهر أكاديميتنا تميزاً على صعيد مدينة صيدا وعلى صعيد لبنان، حيث يتوافد اللاعبون من مختلف المناطق للانضمام إلى أكاديمية الرومانيستا.
            </p>
          </motion.div>

          {/* Image/Visual */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative w-full h-96 bg-gradient-to-br from-red-600/30 to-yellow-600/20 rounded-2xl border border-red-600/50 overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-br from-red-600/20 via-transparent to-yellow-600/10 group-hover:from-red-600/30 transition-all duration-500" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <h3 className="text-4xl font-black text-red-500 mb-4">ROMANISTA</h3>
                  <p className="text-xl text-gray-300">نصنع نجوم المستقبل</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Achievements Grid */}
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid md:grid-cols-4 gap-6"
        >
          {achievements.map((achievement, index) => {
            const Icon = achievement.icon;
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -10 }}
                className="p-6 bg-gradient-to-br from-red-600/10 to-yellow-600/10 border border-red-600/30 rounded-xl hover:border-red-500/60 transition-all duration-300 text-center"
              >
                <Icon className="w-12 h-12 mx-auto mb-4 text-red-500" />
                <h3 className="text-lg font-bold text-white mb-2">{achievement.title}</h3>
                <p className="text-gray-400 text-sm">{achievement.description}</p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
