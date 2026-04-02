import { motion } from 'motion/react';

export default function Metodologia() {
  const steps = [
    {
      num: '01',
      title: 'Aprender',
      desc: 'A base de tudo. Vais dominar os fundamentos do marketing digital, entender como as plataformas funcionam e como o teu público-alvo se comporta online. Sem jargões complicados, apenas o que realmente importa.'
    },
    {
      num: '02',
      title: 'Aplicar',
      desc: 'Conhecimento sem ação não gera resultados. Nesta fase, colocamos a mão na massa. Vais implementar as estratégias desenhadas para o teu negócio, criar conteúdo que converte e estruturar os teus canais de venda.'
    },
    {
      num: '03',
      title: 'Ganhar',
      desc: 'A fase da colheita. Com a máquina a funcionar, o foco passa a ser a otimização e a escala. Analisamos métricas, ajustamos campanhas e maximizamos o teu lucro de forma consistente e previsível.'
    }
  ];

  return (
    <div className="flex flex-col">
      <section className="bg-surface-container-low py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-headline font-bold text-primary mb-6"
          >
            A Nossa Metodologia
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-lg text-on-surface-variant max-w-2xl mx-auto"
          >
            Um processo simples, testado e validado para transformar o teu conhecimento em resultados financeiros.
          </motion.p>
        </div>
      </section>

      <section className="py-24 bg-surface">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {steps.map((step, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex flex-col md:flex-row gap-8 items-start relative"
              >
                {/* Connector line */}
                {i !== steps.length - 1 && (
                  <div className="hidden md:block absolute left-[3.5rem] top-24 bottom-[-4rem] w-px bg-surface-container-highest"></div>
                )}
                
                <div className="shrink-0 w-28 h-28 bg-primary rounded-3xl flex items-center justify-center text-secondary-fixed font-headline font-bold text-4xl shadow-lg relative z-10">
                  {step.num}
                </div>
                
                <div className="pt-4">
                  <h2 className="text-3xl font-bold font-headline text-primary mb-4">{step.title}</h2>
                  <p className="text-lg text-on-surface-variant leading-relaxed">{step.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-24 text-center"
          >
            <a 
              href="https://chat.whatsapp.com/GCscCCrngEM1u7jgwKcmjf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex bg-primary text-on-primary px-10 py-4 rounded-full font-bold text-lg hover:bg-primary-container transition-colors"
            >
              Quero aplicar este método
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
