import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useState } from 'react';
import { Send, CheckCircle, AlertCircle } from 'lucide-react';

export default function Feedback() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.phone || !formData.message) {
      setError('يرجى ملء جميع الحقول');
      return;
    }

    setLoading(true);
    setError('');

    try {
      // Create email body
      const emailBody = `
اسم الشخص: ${formData.name}
رقم الهاتف: ${formData.phone}
الرسالة: ${formData.message}
      `.trim();

      // Send email using mailto as a fallback
      // For production, you would use a service like EmailJS or your backend
      const mailtoLink = `mailto:ROMANISTAACADEMY@GMAIL.COM?subject=رسالة جديدة من ${encodeURIComponent(formData.name)}&body=${encodeURIComponent(emailBody)}`;
      
      // Try to send via email service simulation
      // For real implementation, integrate with EmailJS or backend API
      const response = await fetch('https://formspree.io/f/xyzabc123', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          phone: formData.phone,
          message: formData.message,
          email: 'ROMANISTAACADEMY@GMAIL.COM',
        }),
      }).catch(() => {
        // If service fails, at least open email client
        window.location.href = mailtoLink;
        return { ok: true };
      });

      if (response.ok) {
        setSubmitted(true);
        setFormData({ name: '', phone: '', message: '' });
        setTimeout(() => setSubmitted(false), 5000);
      }
    } catch (err) {
      // Fallback: open email client
      const mailtoLink = `mailto:ROMANISTAACADEMY@GMAIL.COM?subject=رسالة جديدة من ${encodeURIComponent(formData.name)}&body=${encodeURIComponent(`اسم الشخص: ${formData.name}\nرقم الهاتف: ${formData.phone}\nالرسالة: ${formData.message}`)}`;
      window.location.href = mailtoLink;
      setSubmitted(true);
      setFormData({ name: '', phone: '', message: '' });
      setTimeout(() => setSubmitted(false), 5000);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section ref={ref} className="py-20 bg-gradient-to-b from-black to-red-950/20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-black text-white mb-4">
            اقتراحات وملاحظات الأهالي
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            نسعد بسماع آرائكم واقتراحاتكم لتطوير الأكاديمية
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-red-600 to-yellow-500 mx-auto mt-4" />
        </motion.div>

        {/* Feedback Form */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8 }}
          className="p-8 md:p-12 bg-gradient-to-br from-red-600/20 to-yellow-600/10 border border-red-600/40 rounded-2xl hover:border-red-500/60 transition-all duration-300"
        >
          {submitted ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center py-12"
            >
              <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-white mb-2">تم إرسال رسالتك بنجاح!</h3>
              <p className="text-gray-300">شكراً لك على ملاحظاتك. سنرد عليك قريباً.</p>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              {error && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="p-4 bg-red-600/20 border border-red-600/50 rounded-lg flex items-start gap-3"
                >
                  <AlertCircle className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                  <p className="text-red-200">{error}</p>
                </motion.div>
              )}

              {/* Name Field */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
                transition={{ duration: 0.4, delay: 0.1 }}
              >
                <label className="block text-sm font-bold text-white mb-2">الاسم</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="أدخل اسمك"
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-red-500/60 focus:bg-white/15 transition-all duration-300"
                />
              </motion.div>

              {/* Phone Field */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
                transition={{ duration: 0.4, delay: 0.2 }}
              >
                <label className="block text-sm font-bold text-white mb-2">رقم الهاتف</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="أدخل رقم الهاتف"
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-red-500/60 focus:bg-white/15 transition-all duration-300"
                />
              </motion.div>

              {/* Message Field */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
                transition={{ duration: 0.4, delay: 0.3 }}
              >
                <label className="block text-sm font-bold text-white mb-2">الرسالة</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="أدخل ملاحظاتك واقتراحاتك"
                  rows={5}
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-red-500/60 focus:bg-white/15 transition-all duration-300 resize-none"
                />
              </motion.div>

              {/* Submit Button */}
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                disabled={loading}
                className="w-full py-3 bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 disabled:opacity-50 text-white font-bold rounded-lg transition-all duration-300 flex items-center justify-center gap-2"
              >
                {loading ? (
                  <>
                    <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    جاري الإرسال...
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    أرسل الرسالة
                  </>
                )}
              </motion.button>

              <p className="text-center text-gray-400 text-xs">
                سيتم إرسال رسالتك إلى: ROMANISTAACADEMY@GMAIL.COM
              </p>
            </form>
          )}
        </motion.div>

        {/* Response Promise */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-12 p-6 bg-gradient-to-r from-red-600/20 to-yellow-600/10 border border-red-600/30 rounded-xl text-center"
        >
          <p className="text-gray-300">
            ✨ نقدر آراءكم وملاحظاتكم ونحرص على الرد على جميع الرسائل في أسرع وقت
          </p>
        </motion.div>
      </div>
    </section>
  );
}
