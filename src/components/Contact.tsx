import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Phone, MessageCircle, Mail } from 'lucide-react';

export default function Contact() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });

  const contactMethods = [
    {
      icon: Phone,
      title: 'اتصل بنا',
      description: 'للحصول على استفسارات سريعة',
      action: 'اتصل الآن',
      link: 'tel:76888392',
      value: '76888392',
    },
    {
      icon: MessageCircle,
      title: 'WhatsApp',
      description: 'تواصل معنا عبر الواتساب',
      action: 'أرسل رسالة',
      link: 'https://wa.me/96176888392',
      value: '+961 76 888 392',
    },
    {
      icon: Mail,
      title: 'البريد الإلكتروني',
      description: 'أرسل لنا استفسارك',
      action: 'أرسل بريد',
      link: 'mailto:ROMANISTAACADEMY@GMAIL.COM',
      value: 'ROMANISTAACADEMY@GMAIL.COM',
    },
  ];

  return (
    <section id="contact" ref={ref} className="py-20 bg-gradient-to-b from-black to-red-950/20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-black text-white mb-4">
            تواصل معنا
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            نحن هنا للإجابة على أسئلتك والرد على استفساراتك
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-red-600 to-yellow-500 mx-auto mt-4" />
        </motion.div>

        {/* Contact Methods Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.6 }}
          className="grid md:grid-cols-3 gap-8 mb-16"
        >
          {contactMethods.map((method, index) => {
            const Icon = method.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="p-8 bg-gradient-to-br from-red-600/20 to-yellow-600/10 border border-red-600/40 rounded-2xl hover:border-red-500/60 transition-all duration-300 text-center"
              >
                <Icon className="w-12 h-12 text-red-500 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-white mb-2">{method.title}</h3>
                <p className="text-gray-400 text-sm mb-4">{method.description}</p>
                <p className="text-gray-300 font-bold mb-6 text-sm break-all">{method.value}</p>
                <motion.a
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  href={method.link}
                  target={method.link.startsWith('http') ? '_blank' : undefined}
                  rel={method.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="inline-block px-6 py-2 bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white font-bold rounded-lg transition-all duration-300"
                >
                  {method.action}
                </motion.a>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Response Time Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="p-8 bg-gradient-to-r from-red-600/20 to-yellow-600/10 border border-red-600/30 rounded-2xl text-center"
        >
          <h3 className="text-2xl font-bold text-white mb-4">⏱️ وقت الاستجابة</h3>
          <p className="text-gray-300">
            نحرص على الرد على جميع الاستفسارات في أسرع وقت ممكن. معظم الرسائل يتم الرد عليها في غضون 24 ساعة.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
