import { motion } from 'motion/react';
import { ArrowRight, TrendingUp, Users, Target } from 'lucide-react';

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative overflow-hidden sovereign-gradient text-on-primary py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-5xl md:text-6xl lg:text-7xl font-headline font-bold tracking-tight mb-6 leading-tight"
            >
              Aprende a <span className="text-secondary-fixed">ganhar dinheiro</span> nas redes sociais
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-lg md:text-xl text-on-primary-container mb-10 max-w-2xl"
            >
              Estratégias testadas e comprovadas para transformar seguidores em clientes e escalar o teu negócio digital.
            </motion.p>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <a 
                href="https://chat.whatsapp.com/GCscCCrngEM1u7jgwKcmjf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-secondary-fixed text-primary px-8 py-4 rounded-full font-bold text-lg hover:bg-white transition-colors"
              >
                Começar agora <ArrowRight size={20} />
              </a>
            </motion.div>
          </div>
        </div>
        
        {/* Abstract shapes */}
        <div className="absolute top-0 right-0 -translate-y-1/4 translate-x-1/4 w-[800px] h-[800px] bg-primary-container rounded-full blur-3xl opacity-50 pointer-events-none"></div>
      </section>

      {/* Benefícios Section */}
      <section className="py-24 bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-headline font-bold text-primary mb-4">Porquê escolher a nossa mentoria?</h2>
            <p className="text-on-surface-variant max-w-2xl mx-auto">Focamo-nos em resultados reais e estratégias aplicáveis ao teu nicho de mercado.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <TrendingUp className="w-8 h-8 text-secondary" />,
                title: 'Crescimento Acelerado',
                desc: 'Técnicas avançadas para aumentar o teu alcance e engajamento de forma orgânica.'
              },
              {
                icon: <Target className="w-8 h-8 text-secondary" />,
                title: 'Estratégia Focada',
                desc: 'Sem perda de tempo. Ações direcionadas para atrair o público certo e qualificado.'
              },
              {
                icon: <Users className="w-8 h-8 text-secondary" />,
                title: 'Comunidade Exclusiva',
                desc: 'Acesso a um grupo de networking com outros empreendedores focados no mesmo objetivo.'
              }
            ].map((item, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white p-8 rounded-3xl shadow-sm border border-surface-container-low hover:shadow-md transition-shadow"
              >
                <div className="w-16 h-16 bg-surface-container-low rounded-2xl flex items-center justify-center mb-6">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold font-headline text-primary mb-3">{item.title}</h3>
                <p className="text-on-surface-variant leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Autoridade Section */}
      <section className="py-24 bg-surface-container-low">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="lg:w-1/2">
              <div className="relative">
                <div className="aspect-[4/5] rounded-3xl overflow-hidden bg-surface-container">
                  <img 
                    src="https://images.unsplash.com/photo-1556761175-5973dc0f32d7?q=80&w=1632&auto=format&fit=crop" 
                    alt="Afonso Manuel" 
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="absolute -bottom-8 -right-8 bg-primary text-on-primary p-8 rounded-3xl max-w-xs hidden md:block">
                  <p className="font-headline font-bold text-3xl text-secondary-fixed mb-1">+500</p>
                  <p className="text-sm text-on-primary-container">Alunos transformados através da nossa metodologia.</p>
                </div>
              </div>
            </div>
            <div className="lg:w-1/2">
              <h2 className="text-3xl md:text-4xl font-headline font-bold text-primary mb-6">Quem é o Afonso Manuel?</h2>
              <p className="text-lg text-on-surface-variant mb-6 leading-relaxed">
                Especialista em Marketing Digital com anos de experiência no mercado. A minha missão é simplificar o processo de vendas online e ajudar empreendedores a construírem negócios sólidos através das redes sociais.
              </p>
              <p className="text-lg text-on-surface-variant mb-8 leading-relaxed">
                Não acredito em fórmulas mágicas, mas sim em trabalho consistente, estratégia bem definida e execução impecável.
              </p>
              <a 
                href="/sobre"
                className="inline-flex items-center font-bold text-primary hover:text-secondary transition-colors"
              >
                Conhecer a minha história <ArrowRight size={20} className="ml-2" />
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
