import { Video, ImageIcon, Music, Calendar, Award, Megaphone } from 'lucide-react';
import { motion } from 'motion/react';

interface ServicesProps {
  language: 'en' | 'es';
}

export function Services({ language }: ServicesProps) {
  const content = {
    es: {
      title: 'SERVICIOS',
      services: [
        { icon: Video, title: 'Reels & Videos', description: 'Contenido viral optimizado' },
        { icon: ImageIcon, title: 'Posts Patrocinados', description: 'Publicaciones personalizadas' },
        { icon: Music, title: 'Coreografías', description: 'Bailes únicos para tu marca' },
        { icon: Megaphone, title: 'Embajadora', description: 'Representación a largo plazo' },
        { icon: Calendar, title: 'Eventos', description: 'Presencia en lanzamientos' },
        { icon: Award, title: 'Desafíos Virales', description: 'Challenges de baile' },
      ],
    },
    en: {
      title: 'SERVICES',
      services: [
        { icon: Video, title: 'Reels & Videos', description: 'Optimized viral content' },
        { icon: ImageIcon, title: 'Sponsored Posts', description: 'Custom publications' },
        { icon: Music, title: 'Choreographies', description: 'Unique dances for your brand' },
        { icon: Megaphone, title: 'Ambassador', description: 'Long-term representation' },
        { icon: Calendar, title: 'Events', description: 'Launch appearances' },
        { icon: Award, title: 'Viral Challenges', description: 'Dance challenges' },
      ],
    },
  };

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

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {content[language].services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="bg-black/30 backdrop-blur-md rounded-xl p-4 border border-purple-500/20 hover:border-purple-500/40 transition-all group"
            >
              <div className="bg-purple-600/20 rounded-xl w-12 h-12 flex items-center justify-center mb-3 group-hover:bg-purple-600/30 transition-all">
                <service.icon className="w-5 h-5 text-purple-400" />
              </div>
              <h3 className="text-base font-bold text-white mb-1">{service.title}</h3>
              <p className="text-gray-400 text-xs leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}