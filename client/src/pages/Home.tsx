import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Scissors, Users, Clock, MapPin, Phone, Mail } from "lucide-react";
import { Link } from "wouter";

/**
 * Página Home - Barbearia Beta
 * Design: Luxo Minimalista Contemporâneo
 * Paleta: Preto profundo (#0a0a0a) com acentos em ouro (#d4af37)
 * Tipografia: Playfair Display (títulos), Poppins (corpo)
 */

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      {/* Header/Navigation */}
      <header className="sticky top-0 z-50 bg-background border-b border-border">
        <div className="container flex items-center justify-between py-4">
          <div className="flex items-center gap-2">
            <Scissors className="w-8 h-8 text-accent" />
            <h1 className="text-2xl font-bold text-accent">Barbearia Beta</h1>
          </div>
          <nav className="hidden md:flex gap-8">
            <a href="#inicio" className="hover:text-accent transition-colors">Início</a>
            <a href="#servicos" className="hover:text-accent transition-colors">Serviços</a>
            <a href="#equipe" className="hover:text-accent transition-colors">Equipe</a>
            <a href="#contato" className="hover:text-accent transition-colors">Contato</a>
          </nav>
          <Link href="/agendamento">
            <Button className="btn-gold">Agende Agora</Button>
          </Link>
        </div>
      </header>

      {/* Hero Section */}
      <section 
        id="inicio"
        className="relative h-screen flex items-center justify-center overflow-hidden"
        style={{
          backgroundImage: "url('https://d2xsxph8kpxj0f.cloudfront.net/310419663029093360/XvxPGrhZ42raEuGGqxiHVX/barbershop-hero-cFf4XdaZA4bc6Muthz6BnQ.webp')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        {/* Overlay escuro */}
        <div className="absolute inset-0 bg-black/60"></div>
        
        {/* Conteúdo */}
        <div className="container relative z-10 text-center">
          <h2 className="text-5xl md:text-7xl font-bold mb-6 text-white">
            Bem-vindo à Barbearia Beta
          </h2>
          <p className="text-xl md:text-2xl text-gray-200 mb-8 max-w-2xl mx-auto">
            Onde tradição encontra modernidade. Oferecemos cortes de cabelo e barba impecáveis em um ambiente acolhedor e estiloso.
          </p>
          <Link href="/agendamento">
            <Button className="btn-gold text-lg px-8 py-4">
              Agende seu Horário
            </Button>
          </Link>
        </div>
      </section>

      {/* Seção Por Que Escolher */}
      <section id="servicos" className="py-20 bg-background">
        <div className="container">
          <h2 className="text-4xl font-bold text-center mb-4 text-white">
            Por que escolher a Beta?
          </h2>
          <div className="h-1 w-24 bg-accent mx-auto mb-12"></div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {/* Card 1 */}
            <Card className="card-elegant">
              <div className="flex justify-center mb-4">
                <Users className="w-12 h-12 text-accent" />
              </div>
              <h3 className="text-2xl font-bold text-center mb-3 text-white">
                Profissionais Qualificados
              </h3>
              <p className="text-gray-300 text-center">
                Nossa equipe é formada por barbeiros experientes e apaixonados pelo que fazem.
              </p>
            </Card>

            {/* Card 2 */}
            <Card className="card-elegant">
              <div className="flex justify-center mb-4">
                <Scissors className="w-12 h-12 text-accent" />
              </div>
              <h3 className="text-2xl font-bold text-center mb-3 text-white">
                Ambiente Moderno
              </h3>
              <p className="text-gray-300 text-center">
                Um espaço pensado para o seu conforto, com design contemporâneo e acolhedor.
              </p>
            </Card>

            {/* Card 3 */}
            <Card className="card-elegant">
              <div className="flex justify-center mb-4">
                <Clock className="w-12 h-12 text-accent" />
              </div>
              <h3 className="text-2xl font-bold text-center mb-3 text-white">
                Atendimento Personalizado
              </h3>
              <p className="text-gray-300 text-center">
                Entendemos suas necessidades para entregar o resultado que você deseja.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Seção de Serviços */}
      <section className="py-20 bg-card">
        <div className="container">
          <h2 className="text-4xl font-bold text-center mb-4 text-white">
            Nossos Serviços
          </h2>
          <div className="h-1 w-24 bg-accent mx-auto mb-12"></div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="flex gap-4 p-6 bg-background rounded-lg border border-border hover:border-accent transition-colors">
              <Scissors className="w-8 h-8 text-accent flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-xl font-bold text-white mb-2">Corte de Cabelo</h3>
                <p className="text-gray-300">Cortes modernos e clássicos executados com precisão e expertise.</p>
              </div>
            </div>

            <div className="flex gap-4 p-6 bg-background rounded-lg border border-border hover:border-accent transition-colors">
              <Scissors className="w-8 h-8 text-accent flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-xl font-bold text-white mb-2">Design de Barba</h3>
                <p className="text-gray-300">Modelagem e design de barba com acabamento impecável.</p>
              </div>
            </div>

            <div className="flex gap-4 p-6 bg-background rounded-lg border border-border hover:border-accent transition-colors">
              <Scissors className="w-8 h-8 text-accent flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-xl font-bold text-white mb-2">Tratamento Capilar</h3>
                <p className="text-gray-300">Tratamentos especiais para saúde e brilho do cabelo.</p>
              </div>
            </div>

            <div className="flex gap-4 p-6 bg-background rounded-lg border border-border hover:border-accent transition-colors">
              <Scissors className="w-8 h-8 text-accent flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-xl font-bold text-white mb-2">Coloração</h3>
                <p className="text-gray-300">Coloração profissional com produtos de qualidade premium.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Seção da Equipe */}
      <section id="equipe" className="py-20 bg-background">
        <div className="container">
          <h2 className="text-4xl font-bold text-center mb-4 text-white">
            Nossa Equipe
          </h2>
          <div className="h-1 w-24 bg-accent mx-auto mb-12"></div>
          
          <div className="flex justify-center mb-12">
            <img 
              src="https://d2xsxph8kpxj0f.cloudfront.net/310419663029093360/XvxPGrhZ42raEuGGqxiHVX/barber-team-ZquHf4XLZovZ37JU2cNvzU.webp"
              alt="Equipe de barbeiros"
              className="rounded-lg shadow-lg max-w-4xl w-full"
            />
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {["Carlos", "Vinícius", "Lucas"].map((name) => (
              <Card key={name} className="card-elegant text-center">
                <h3 className="text-2xl font-bold text-white mb-2">{name}</h3>
                <p className="text-gray-300 mb-4">Barbeiro Especializado</p>
                <p className="text-sm text-gray-400">
                  Profissional experiente com paixão pela arte da barbearia moderna.
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Seção de Contato */}
      <section id="contato" className="py-20 bg-card">
        <div className="container">
          <h2 className="text-4xl font-bold text-center mb-4 text-white">
            Entre em Contato
          </h2>
          <div className="h-1 w-24 bg-accent mx-auto mb-12"></div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="flex flex-col items-center text-center">
              <MapPin className="w-12 h-12 text-accent mb-4" />
              <h3 className="text-xl font-bold text-white mb-2">Localização</h3>
              <p className="text-gray-300">Curitiba, PR</p>
            </div>

            <div className="flex flex-col items-center text-center">
              <Phone className="w-12 h-12 text-accent mb-4" />
              <h3 className="text-xl font-bold text-white mb-2">WhatsApp</h3>
              <a href="https://wa.me/5541997457028" className="text-accent hover:text-yellow-500 transition-colors">
                (41) 99745-7028
              </a>
            </div>

            <div className="flex flex-col items-center text-center">
              <Clock className="w-12 h-12 text-accent mb-4" />
              <h3 className="text-xl font-bold text-white mb-2">Horário</h3>
              <p className="text-gray-300">Seg-Sáb: 9h-19h</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-16 bg-accent">
        <div className="container text-center">
          <h2 className="text-4xl font-bold text-accent-foreground mb-4">
            Pronto para transformar seu visual?
          </h2>
          <p className="text-lg text-accent-foreground mb-8 opacity-90">
            Agende agora mesmo com um de nossos profissionais
          </p>
          <Link href="/agendamento">
            <Button className="bg-accent-foreground text-accent hover:bg-gray-100 text-lg px-8 py-4">
              Agendar Agora
            </Button>
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-background border-t border-border py-8">
        <div className="container text-center text-gray-500">
          <p>&copy; 2026 Barbearia Beta. Todos os direitos reservados.</p>
          <p className="text-sm mt-2">Design moderno e sofisticado para sua experiência</p>
        </div>
      </footer>
    </div>
  );
}
