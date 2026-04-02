import { motion } from 'motion/react';
import { ArrowRight, BookOpen, LineChart, Rocket } from 'lucide-react';

export default function Servicos() {
  const services = [
    {
      icon: <BookOpen className="w-10 h-10 text-secondary" />,
      title: 'Mentoria Individual',
      desc: 'Acompanhamento 1-para-1 focado nas necessidades específicas do teu negócio. Desenhamos uma estratégia à medida para alcançares os teus objetivos mais rapidamente.',
      features: ['Sessões semanais', 'Análise de perfil', 'Plano de ação personalizado']
    },
    {
      icon: <LineChart className="w-10 h-10 text-secondary" />,
      title: 'Acompanhamento Contínuo',
      desc: 'Suporte constante para garantir que aplicas a estratégia corretamente. Ajustamos o rumo conforme os resultados e as mudanças no mercado.',
      features: ['Suporte via WhatsApp', 'Revisão de métricas', 'Ajustes estratégicos']
    },
    {
      icon: <Rocket className="w-10 h-10 text-secondary" />,
      title: 'Estratégia Digital Completa',
      desc: 'Desenvolvimento de um ecossistema digital robusto, desde a atração de leads até à conversão final, maximizando o teu retorno sobre o investimento.',
      features: ['Funis de venda', 'Estratégia de conteúdo', 'Otimização de conversão']
    }
  ];

  return (
    <div className="flex flex-col">
      <section className="bg-primary text-on-primary py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-headline font-bold mb-6"
          >
            Os Nossos Serviços
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-lg text-on-primary-container max-w-2xl mx-auto"
          >
            Soluções desenhadas para diferentes fases do teu negócio. Escolhe o caminho ideal para o teu crescimento.
          </motion.p>
        </div>
      </section>

      <section className="py-24 bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {services.map((service, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white p-10 rounded-3xl shadow-sm border border-surface-container-low flex flex-col h-full"
              >
                <div className="mb-8">{service.icon}</div>
                <h3 className="text-2xl font-bold font-headline text-primary mb-4">{service.title}</h3>
                <p className="text-on-surface-variant mb-8 flex-grow">{service.desc}</p>
                
                <ul className="space-y-3 mb-8">
                  {service.features.map((feature, j) => (
                    <li key={j} className="flex items-center text-sm font-medium text-primary">
                      <div className="w-1.5 h-1.5 rounded-full bg-secondary mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <a 
                  href="https://chat.whatsapp.com/GCscCCrngEM1u7jgwKcmjf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center w-full bg-surface-container-low text-primary px-6 py-3 rounded-xl font-bold hover:bg-primary hover:text-white transition-colors mt-auto"
                >
                  Saber mais <ArrowRight size={18} className="ml-2" />
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
