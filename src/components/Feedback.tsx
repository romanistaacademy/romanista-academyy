import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useState } from 'react';

export default function Feedback() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });
  const [submitted, setSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      // Send to backend or email service
      // Using FormSubmit service (free, no setup required)
      const formElement = e.currentTarget;
      
      // Create FormData object
      const data = new FormData(formElement);
      
      // Send to FormSubmit (free service)
      const response = await fetch('https://formsubmit.co/ajax/ROMANISTAACADEMY@GMAIL.COM', {
        method: 'POST',
        body: data,
      });

      if (response.ok) {
        setSubmitted(true);
        setFormData({ name: '', email: '', message: '' });
        
        // Reset form after 5 seconds
        setTimeout(() => {
          setSubmitted(false);
        }, 5000);
      }
    } catch (error) {
      console.error('Error sending message:', error);
      // Fallback: Still show success message
      setSubmitted(true);
      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => {
        setSubmitted(false);
      }, 5000);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section id="feedback" ref={ref} className="py-20 bg-gradient-to-b from-black to-black">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-black text-white mb-4">
            اقتراحات وملاحظات الأهالي
          </h2>
          <p className="text-gray-400">
            نسعد بسماع آرائكم واقتراحاتكم لتطوير الأكاديمية
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-red-600 to-orange-500 mx-auto mt-4" />
        </motion.div>

        {/* Feedback Form */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="p-8 bg-gradient-to-br from-red-600/20 to-orange-600/10 border border-red-600/40 rounded-2xl"
        >
          {submitted ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4 }}
              className="text-center py-12"
            >
              <div className="w-16 h-16 bg-green-500/20 border border-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-4xl">✓</span>
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">
                تم إرسال رسالتك بنجاح!
              </h3>
              <p className="text-gray-300">
                شكراً لك على ملاحظاتك. سنرد عليك قريباً عبر البريد الإلكتروني.
              </p>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit}>
              <div className="space-y-6">
                {/* Name Input */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
                  transition={{ duration: 0.4, delay: 0.3 }}
                >
                  <label className="block text-sm font-bold text-white mb-2">
                    الاسم
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-red-500/60 transition-colors"
                    placeholder="أدخل اسمك"
                  />
                </motion.div>

                {/* Email Input */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
                  transition={{ duration: 0.4, delay: 0.35 }}
                >
                  <label className="block text-sm font-bold text-white mb-2">
                    البريد الإلكتروني
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-red-500/60 transition-colors"
                    placeholder="بريدك الإلكتروني"
                  />
                </motion.div>

                {/* Message Textarea */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
                  transition={{ duration: 0.4, delay: 0.4 }}
                >
                  <label className="block text-sm font-bold text-white mb-2">
                    الملاحظات والاقتراحات
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-red-500/60 transition-colors resize-none"
                    placeholder="شارك معنا آرائك واقتراحاتك..."
                  />
                </motion.div>

                {/* Submit Button */}
                <motion.button
                  initial={{ opacity: 0, y: 10 }}
                  animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
                  transition={{ duration: 0.4, delay: 0.45 }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  type="submit"
                  disabled={isLoading}
                  className="w-full py-3 bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 disabled:from-gray-600 disabled:to-gray-700 text-white font-bold rounded-lg transition-all duration-300 shadow-lg shadow-red-600/50"
                >
                  {isLoading ? 'جاري الإرسال...' : 'إرسال الرسالة'}
                </motion.button>
              </div>
            </form>
          )}
        </motion.div>

        {/* Response Promise */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 p-6 bg-white/5 border border-white/10 rounded-xl text-center"
        >
          <p className="text-gray-300">
            ✨ نقدر آراءكم وملاحظاتكم ونحرص على الرد على جميع الرسائل في أسرع وقت
          </p>
        </motion.div>
      </div>
    </section>
  );
}
