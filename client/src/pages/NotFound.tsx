import { Button } from "@/components/ui/button";
import { Link } from "wouter";

/**
 * Página NotFound - Barbearia Beta
 * Design: Luxo Minimalista Contemporâneo
 */

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      {/* Header */}
      <header className="bg-background border-b border-border py-4">
        <div className="container">
          <Link href="/">
            <h1 className="text-2xl font-bold text-accent cursor-pointer hover:opacity-80 transition-opacity">
              Barbearia Beta
            </h1>
          </Link>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 flex items-center justify-center py-12">
        <div className="container text-center max-w-2xl">
          <h1 className="text-7xl font-bold text-accent mb-6">404</h1>
          <h2 className="text-4xl font-bold text-white mb-4">Página não encontrada</h2>
          <p className="text-xl text-gray-300 mb-8">
            Desculpe, a página que você está procurando não existe ou foi movida. Volte para a página inicial e navegue novamente.
          </p>
          <Link href="/">
            <Button className="btn-gold text-lg px-8 py-4">
              Voltar para Home
            </Button>
          </Link>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-card border-t border-border py-8">
        <div className="container text-center text-gray-500">
          <p>&copy; 2026 Barbearia Beta. Todos os direitos reservados.</p>
        </div>
      </footer>
    </div>
  );
}
