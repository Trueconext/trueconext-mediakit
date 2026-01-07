import { Eye, Users, Music2, Instagram, Youtube } from 'lucide-react';
import { motion } from 'motion/react';

interface StatsProps {
  language: 'en' | 'es';
}

export function Stats({ language }: StatsProps) {
  const content = {
    es: {
      title: 'ALCANCE',
      monthlyViews: 'Vistas Mensuales',
      fanbase: 'Seguidores',
    },
    en: {
      title: 'REACH',
      monthlyViews: 'Monthly Views',
      fanbase: 'Followers',
    },
  };

  const stats = [
    { icon: Eye, value: '2.8M', label: content[language].monthlyViews },
    { icon: Music2, platform: 'TikTok', value: '1.7M', color: 'text-purple-400' },
    { icon: Instagram, platform: 'Instagram', value: '1.3M', color: 'text-pink-400' },
    { icon: Youtube, platform: 'YouTube', value: '730', color: 'text-red-400' },
  ];

  return (
    <section className="py-12 px-4 relative">
      <div className="max-w-5xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-black text-center mb-8 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent"
        >
          {content[language].title}
        </motion.h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="bg-black/30 backdrop-blur-md rounded-xl p-4 border border-purple-500/20 hover:border-purple-500/40 transition-all text-center"
            >
              <stat.icon className={`w-6 h-6 mx-auto mb-2 ${stat.color || 'text-purple-400'}`} />
              <div className="text-2xl md:text-3xl font-black text-white">
                {stat.value}
              </div>
              <div className="text-xs text-gray-400 mt-1">
                {stat.label || stat.platform}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}