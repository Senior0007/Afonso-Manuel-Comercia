import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-primary text-on-primary py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-lg bg-surface flex items-center justify-center text-primary font-headline font-bold text-xl">
                AM
              </div>
              <span className="font-headline font-bold text-xl tracking-tight">
                Afonso Manuel
              </span>
            </div>
            <p className="text-on-primary-container max-w-xs">
              Estratégias de marketing digital para escalar o seu negócio e dominar as redes sociais.
            </p>
          </div>
          
          <div>
            <h3 className="font-headline font-bold text-lg mb-4 text-secondary-fixed">Navegação</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-on-primary-container hover:text-white transition-colors">Início</Link></li>
              <li><Link to="/sobre" className="text-on-primary-container hover:text-white transition-colors">Sobre Mim</Link></li>
              <li><Link to="/servicos" className="text-on-primary-container hover:text-white transition-colors">Serviços</Link></li>
              <li><Link to="/metodologia" className="text-on-primary-container hover:text-white transition-colors">Metodologia</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-headline font-bold text-lg mb-4 text-secondary-fixed">Contacto</h3>
            <ul className="space-y-2">
              <li>
                <a 
                  href="https://chat.whatsapp.com/GCscCCrngEM1u7jgwKcmjf" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-on-primary-container hover:text-white transition-colors"
                >
                  Grupo VIP WhatsApp
                </a>
              </li>
              <li className="text-on-primary-container">
                geral@afonsomanuel.pt
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-primary-container text-center text-on-primary-container text-sm">
          <p>&copy; {new Date().getFullYear()} Afonso Manuel Comercial. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
}
