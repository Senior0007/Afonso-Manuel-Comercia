import { motion } from 'motion/react';
import { CheckCircle2 } from 'lucide-react';

export default function Sobre() {
  return (
    <div className="flex flex-col">
      {/* Header */}
      <section className="bg-surface-container-low py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-headline font-bold text-primary mb-6"
          >
            A Minha História
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-lg text-on-surface-variant max-w-2xl mx-auto"
          >
            De iniciante a especialista, descobre como construí um negócio sólido no digital e como te posso ajudar a fazer o mesmo.
          </motion.p>
        </div>
      </section>

      {/* Content */}
      <section className="py-24 bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="prose prose-lg prose-slate"
            >
              <h2 className="font-headline text-3xl text-primary font-bold mb-6">O Início da Jornada</h2>
              <p className="text-on-surface-variant leading-relaxed mb-6">
                Tudo começou com uma simples vontade de ter mais liberdade. Como muitos, enfrentei dificuldades no início. As redes sociais pareciam um labirinto de algoritmos e tendências passageiras.
              </p>
              <p className="text-on-surface-variant leading-relaxed mb-6">
                Após investir milhares de horas em estudo, testes e aplicação prática, desenvolvi uma metodologia clara que me permitiu não só entender o jogo, mas dominá-lo.
              </p>
              
              <h3 className="font-headline text-2xl text-primary font-bold mt-10 mb-4">Missão, Visão e Valores</h3>
              <ul className="space-y-4 list-none pl-0">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-secondary shrink-0 mt-1" />
                  <div>
                    <strong className="block text-primary">Missão</strong>
                    <span className="text-on-surface-variant">Capacitar empreendedores a alcançarem a independência financeira através do marketing digital estratégico.</span>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-secondary shrink-0 mt-1" />
                  <div>
                    <strong className="block text-primary">Visão</strong>
                    <span className="text-on-surface-variant">Ser a referência número um em mentoria de negócios digitais em Portugal, reconhecido pelos resultados reais dos alunos.</span>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-secondary shrink-0 mt-1" />
                  <div>
                    <strong className="block text-primary">Valores</strong>
                    <span className="text-on-surface-variant">Transparência, foco em resultados, inovação constante e compromisso absoluto com o sucesso do cliente.</span>
                  </div>
                </li>
              </ul>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="sticky top-32"
            >
              <img 
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1740&auto=format&fit=crop" 
                alt="Trabalho de equipa" 
                className="rounded-3xl shadow-xl"
                referrerPolicy="no-referrer"
              />
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
