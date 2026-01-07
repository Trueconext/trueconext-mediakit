import { useState } from 'react';
import { Send, Mail, CheckCircle } from 'lucide-react';
import { motion } from 'motion/react';

interface ContactProps {
  language: 'en' | 'es';
}

export function Contact({ language }: ContactProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const content = {
    es: {
      title: '¿LISTO PARA COLABORAR?',
      namePlaceholder: 'Tu nombre',
      emailPlaceholder: 'Tu email',
      messagePlaceholder: 'Cuéntanos sobre tu proyecto...',
      sendButton: 'Enviar',
      sending: 'Enviando...',
      successMessage: '¡Mensaje enviado!',
      managedBy: 'Representada por',
    },
    en: {
      title: 'READY TO COLLABORATE?',
      namePlaceholder: 'Your name',
      emailPlaceholder: 'Your email',
      messagePlaceholder: 'Tell us about your project...',
      sendButton: 'Send',
      sending: 'Sending...',
      successMessage: 'Message sent!',
      managedBy: 'Managed by',
    },
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const subject = `Colaboración con ValeriaVZG - ${formData.name}`;
    const body = `Nombre: ${formData.name}%0D%0AEmail: ${formData.email}%0D%0A%0D%0AMensaje:%0D%0A${formData.message}`;
    const mailtoLink = `mailto:admin@trueconext.com?subject=${encodeURIComponent(subject)}&body=${body}`;

    window.location.href = mailtoLink;

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      setFormData({ name: '', email: '', message: '' });

      setTimeout(() => {
        setIsSuccess(false);
      }, 5000);
    }, 1000);
  };

  return (
    <section className="py-12 px-4 relative pb-20">
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-6"
        >
          <h2 className="text-3xl md:text-4xl font-black mb-2 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            {content[language].title}
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-black/30 backdrop-blur-md rounded-2xl p-6 border border-purple-500/20 mb-4"
        >
          {isSuccess ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center py-8"
            >
              <CheckCircle className="w-16 h-16 text-green-400 mx-auto mb-4" />
              <p className="text-xl font-bold text-white">
                {content[language].successMessage}
              </p>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="text"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                placeholder={content[language].namePlaceholder}
                className="w-full bg-black/30 border border-purple-500/20 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-purple-500 transition-colors text-sm"
              />

              <input
                type="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                placeholder={content[language].emailPlaceholder}
                className="w-full bg-black/30 border border-purple-500/20 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-purple-500 transition-colors text-sm"
              />

              <textarea
                required
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                placeholder={content[language].messagePlaceholder}
                rows={4}
                className="w-full bg-black/30 border border-purple-500/20 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-purple-500 transition-colors resize-none text-sm"
              />

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-bold py-3 px-6 rounded-xl transition-all transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 text-sm"
              >
                {isSubmitting ? (
                  content[language].sending
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    {content[language].sendButton}
                  </>
                )}
              </button>
            </form>
          )}
        </motion.div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="flex items-center justify-center gap-2 text-gray-400 mb-1 text-sm">
            <Mail className="w-3 h-3" />
            <a
              href="mailto:admin@trueconext.com"
              className="hover:text-purple-400 transition-colors"
            >
              admin@trueconext.com
            </a>
          </div>
          <p className="text-xs text-gray-500">
            {content[language].managedBy}{' '}
            <a
              href="https://trueconext.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-purple-400 hover:text-purple-300 transition-colors font-medium"
            >
              TrueConext
            </a>
          </p>
        </motion.div>
      </div>
    </section>
  );
}