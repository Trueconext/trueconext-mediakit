import { Sparkles, Heart, Zap } from 'lucide-react';
import { motion } from 'motion/react';

interface AboutProps {
  language: 'en' | 'es';
}

export function About({ language }: AboutProps) {
  const content = {
    es: {
      title: 'SOBRE VALEVZG',
      description:
        'Bailarina vibrante y sensación viral que ha conquistado Instagram y TikTok con sus coreografías electrizantes y energía contagiosa. Sus videos combinan ritmos latinos con un toque contemporáneo, cautivando a miles de seguidores en la comunidad digital de danza.',
      traits: ['Divertido', 'Energético', 'Lifestyle'],
    },
    en: {
      title: 'ABOUT',
      description:
        'Vibrant dancer and viral sensation who has conquered Instagram and TikTok with electrifying choreographies and contagious energy. Her videos combine Latin rhythms with a contemporary twist, captivating thousands of followers in the digital dance community.',
      traits: ['Fun', 'Energetic', 'Lifestyle'],
    },
  };

  const styleIcons = [
    { icon: Sparkles, label: content[language].traits[0] },
    { icon: Zap, label: content[language].traits[1] },
    { icon: Heart, label: content[language].traits[2] },
  ];

  return (
    <section className="py-12 px-4 relative">
      <div className="max-w-4xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-black text-center mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent"
        >
          {content[language].title}
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-black/30 backdrop-blur-md rounded-2xl p-6 border border-purple-500/20 mb-6"
        >
          <p className="text-base text-gray-300 leading-relaxed text-center">
            {content[language].description}
          </p>
        </motion.div>

        {/* Style Tags */}
        <div className="flex flex-wrap gap-3 justify-center">
          {styleIcons.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-purple-600/20 backdrop-blur-sm rounded-xl px-4 py-2 border border-purple-500/20 flex items-center gap-2"
            >
              <item.icon className="w-4 h-4 text-purple-400" />
              <span className="text-white text-sm font-medium">{item.label}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}