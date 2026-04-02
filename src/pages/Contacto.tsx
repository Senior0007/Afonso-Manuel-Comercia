import { motion } from 'motion/react';
import { MessageCircle, Mail, MapPin } from 'lucide-react';

export default function Contacto() {
  return (
    <div className="flex flex-col">
      <section className="bg-primary text-on-primary py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-headline font-bold mb-6"
          >
            Pronto para começar a tua jornada?
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-lg text-on-primary-container max-w-2xl mx-auto"
          >
            Entra em contacto connosco. Estamos prontos para ajudar a escalar o teu negócio.
          </motion.p>
        </div>
      </section>

      <section className="py-24 bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.a 
              href="https://chat.whatsapp.com/GCscCCrngEM1u7jgwKcmjf"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white p-10 rounded-3xl shadow-sm border border-surface-container-low text-center hover:shadow-md transition-all hover:-translate-y-1 group"
            >
              <div className="w-16 h-16 bg-[#25D366]/10 text-[#25D366] rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                <MessageCircle size={32} />
              </div>
              <h3 className="text-xl font-bold font-headline text-primary mb-3">Entrar no Grupo VIP</h3>
              <p className="text-on-surface-variant mb-6">Acesso direto à nossa comunidade no WhatsApp.</p>
              <span className="text-primary font-bold">Juntar agora &rarr;</span>
            </motion.a>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-white p-10 rounded-3xl shadow-sm border border-surface-container-low text-center"
            >
              <div className="w-16 h-16 bg-primary/5 text-primary rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Mail size={32} />
              </div>
              <h3 className="text-xl font-bold font-headline text-primary mb-3">Propostas Comerciais</h3>
              <p className="text-on-surface-variant mb-6">Para parcerias e assuntos empresariais.</p>
              <a href="mailto:geral@afonsomanuel.pt" className="text-primary font-bold hover:underline">geral@afonsomanuel.pt</a>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-white p-10 rounded-3xl shadow-sm border border-surface-container-low text-center"
            >
              <div className="w-16 h-16 bg-primary/5 text-primary rounded-2xl flex items-center justify-center mx-auto mb-6">
                <MapPin size={32} />
              </div>
              <h3 className="text-xl font-bold font-headline text-primary mb-3">Localização</h3>
              <p className="text-on-surface-variant mb-6">Atendimento 100% online para todo o mundo.</p>
              <span className="text-primary font-bold">Portugal</span>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
