import { motion } from 'framer-motion';
import { Heart } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = [
    { title: 'الرئيسية', href: '#hero' },
    { title: 'عن الأكاديمية', href: '#about' },
    { title: 'الفئات العمرية', href: '#age-groups' },
    { title: 'الأسعار', href: '#pricing' },
    { title: 'الموقع', href: '#location' },
    { title: 'التواصل', href: '#contact' },
  ];

  const socialLinks = [
    { icon: '📸', url: 'https://www.instagram.com/romanista_fa' },
    { icon: '▶️', url: 'http://www.youtube.com/@romanista_fa' },
    { icon: '👥', url: 'https://www.facebook.com/Romanista11' },
    { icon: '🎵', url: 'https://www.tiktok.com/@romanista_fa' },
  ];

  return (
    <footer className="bg-black border-t border-red-600/30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Logo & Description */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="col-span-1"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-red-600 to-orange-500 rounded-lg flex items-center justify-center font-bold text-white">
                R
              </div>
              <div>
                <p className="text-sm font-bold text-white">ROMANISTA</p>
                <p className="text-xs text-gray-400">الرومانيستا</p>
              </div>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              أكاديمية احترافية لتدريب كرة القدم تهدف إلى اكتشاف المواهب الشابة وتنمية قدراتهم.
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="col-span-1"
          >
            <h3 className="text-lg font-bold text-white mb-4">روابط سريعة</h3>
            <ul className="space-y-2">
              {footerLinks.slice(0, 3).map((link) => (
                <li key={link.title}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-red-500 transition-colors text-sm"
                  >
                    {link.title}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* More Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="col-span-1"
          >
            <h3 className="text-lg font-bold text-white mb-4">معلومات</h3>
            <ul className="space-y-2">
              {footerLinks.slice(3).map((link) => (
                <li key={link.title}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-red-500 transition-colors text-sm"
                  >
                    {link.title}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="col-span-1"
          >
            <h3 className="text-lg font-bold text-white mb-4">تواصل معنا</h3>
            <div className="space-y-3 text-sm">
              <div>
                <p className="text-gray-400">الهاتف:</p>
                <a href="tel:76888392" className="text-red-500 hover:text-red-400 font-bold">
                  76888392
                </a>
              </div>
              <div>
                <p className="text-gray-400">البريد:</p>
                <a href="mailto:ROMANISTAACADEMY@GMAIL.COM" className="text-red-500 hover:text-red-400 font-bold break-all">
                  ROMANISTAACADEMY@GMAIL.COM
                </a>
              </div>
              <div>
                <p className="text-gray-400">الموقع:</p>
                <p className="text-white font-bold">صيدا - ملعب الفوكس</p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Divider */}
        <div className="border-t border-red-600/30 my-8" />

        {/* Bottom Footer */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row justify-between items-center gap-6"
        >
          {/* Copyright */}
          <div className="text-center md:text-right text-gray-400 text-sm">
            <p>
              © {currentYear} أكاديمية الرومانيستا لكرة القدم. جميع الحقوق محفوظة.
            </p>
            <p className="mt-2 flex items-center justify-center md:justify-start gap-1">
              صُنع بـ <Heart className="w-4 h-4 text-red-500 fill-red-500" /> من أجل الكرة الملكية
            </p>
          </div>

          {/* Social Links */}
          <div className="flex gap-4">
            {socialLinks.map((social, index) => (
              <motion.a
                key={index}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2, y: -3 }}
                whileTap={{ scale: 0.9 }}
                className="w-10 h-10 bg-gradient-to-br from-red-600/30 to-orange-600/10 border border-red-600/40 rounded-lg flex items-center justify-center text-xl hover:border-red-500/60 transition-all duration-300"
                title="Social Media"
              >
                {social.icon}
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Top Link */}
      <motion.a
        whileHover={{ scale: 1.1, y: -3 }}
        whileTap={{ scale: 0.9 }}
        href="#hero"
        className="fixed bottom-8 right-8 w-12 h-12 bg-gradient-to-br from-red-600 to-orange-500 rounded-full flex items-center justify-center text-white font-bold text-xl hover:shadow-lg hover:shadow-red-600/50 transition-all duration-300 z-40"
        title="العودة للأعلى"
      >
        ↑
      </motion.a>
    </footer>
  );
}
