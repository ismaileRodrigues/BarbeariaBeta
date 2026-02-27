import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Scissors } from "lucide-react";
import { useState } from "react";
import { Link } from "wouter";
import { toast } from "sonner";

/**
 * Página de Agendamento - Barbearia Beta
 * Design: Luxo Minimalista Contemporâneo
 * Integração: WhatsApp para confirmação de agendamento
 */

export default function Agendamento() {
  const [formData, setFormData] = useState({
    barbeiro: "",
    data: "",
    hora: "",
    nome: "",
  });

  const barbeiros = ["Carlos", "Vinícius", "Lucas"];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Validar campos
    if (!formData.barbeiro || !formData.data || !formData.hora || !formData.nome) {
      toast.error("Por favor, preencha todos os campos");
      return;
    }

    // Formatar data
    const [ano, mes, dia] = formData.data.split('-');
    const dataFormatada = `${dia}/${mes}/${ano}`;

    // Montar mensagem
    const mensagem = `Olá! Gostaria de agendar um horário na Barbearia Beta:\n\n*Barbeiro:* ${formData.barbeiro}\n*Data:* ${dataFormatada}\n*Horário:* ${formData.hora}\n*Nome:* ${formData.nome}\n\nAguardo confirmação. Obrigado!`;

    // Codificar e redirecionar para WhatsApp
    const mensagemCodificada = encodeURIComponent(mensagem);
    const linkWhatsApp = `https://wa.me/5541997457028?text=${mensagemCodificada}`;

    window.open(linkWhatsApp, '_blank');
    
    // Limpar formulário
    setFormData({
      barbeiro: "",
      data: "",
      hora: "",
      nome: "",
    });

    toast.success("Redirecionando para WhatsApp...");
  };

  // Data mínima é hoje
  const hoje = new Date().toISOString().split('T')[0];

  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-background border-b border-border">
        <div className="container flex items-center justify-between py-4">
          <Link href="/">
            <div className="flex items-center gap-2 cursor-pointer hover:opacity-80 transition-opacity">
              <Scissors className="w-8 h-8 text-accent" />
              <h1 className="text-2xl font-bold text-accent">Barbearia Beta</h1>
            </div>
          </Link>
          <Link href="/">
            <Button variant="outline">Voltar</Button>
          </Link>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 py-12">
        <div className="container max-w-2xl">
          <h1 className="text-4xl font-bold text-center mb-4">Agende seu Horário</h1>
          <div className="h-1 w-24 bg-accent mx-auto mb-12"></div>

          <Card className="card-elegant p-8">
            <p className="text-gray-300 text-center mb-8">
              Selecione o barbeiro, a data e o horário desejado. Preencha seus dados e clique em "Agendar via WhatsApp" para enviar sua solicitação.
            </p>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Seleção de Barbeiro */}
              <div>
                <label htmlFor="barbeiro" className="block text-sm font-semibold text-white mb-2">
                  Escolha o Barbeiro *
                </label>
                <select
                  id="barbeiro"
                  name="barbeiro"
                  value={formData.barbeiro}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-background border border-border rounded-lg text-white focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent/20 transition-colors"
                >
                  <option value="">Selecione um barbeiro...</option>
                  {barbeiros.map(barbeiro => (
                    <option key={barbeiro} value={barbeiro}>
                      {barbeiro}
                    </option>
                  ))}
                </select>
              </div>

              {/* Data */}
              <div>
                <label htmlFor="data" className="block text-sm font-semibold text-white mb-2">
                  Data *
                </label>
                <input
                  type="date"
                  id="data"
                  name="data"
                  value={formData.data}
                  onChange={handleChange}
                  min={hoje}
                  required
                  className="w-full px-4 py-3 bg-background border border-border rounded-lg text-white focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent/20 transition-colors"
                />
              </div>

              {/* Hora */}
              <div>
                <label htmlFor="hora" className="block text-sm font-semibold text-white mb-2">
                  Horário *
                </label>
                <input
                  type="time"
                  id="hora"
                  name="hora"
                  value={formData.hora}
                  onChange={handleChange}
                  min="09:00"
                  max="19:30"
                  step="1800"
                  required
                  className="w-full px-4 py-3 bg-background border border-border rounded-lg text-white focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent/20 transition-colors"
                />
              </div>

              {/* Nome */}
              <div>
                <label htmlFor="nome" className="block text-sm font-semibold text-white mb-2">
                  Seu Nome *
                </label>
                <input
                  type="text"
                  id="nome"
                  name="nome"
                  value={formData.nome}
                  onChange={handleChange}
                  placeholder="Digite seu nome completo"
                  required
                  className="w-full px-4 py-3 bg-background border border-border rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent/20 transition-colors"
                />
              </div>

              {/* Botão Submit */}
              <Button type="submit" className="btn-gold w-full text-lg py-3">
                Agendar via WhatsApp
              </Button>
            </form>

            <p className="text-sm text-gray-400 text-center mt-6">
              Nota: Ao clicar no botão, você será redirecionado para o WhatsApp para enviar a mensagem de agendamento pré-preenchida.
            </p>
          </Card>

          {/* Informações Adicionais */}
          <div className="mt-12 grid md:grid-cols-2 gap-6">
            <Card className="card-elegant p-6">
              <h3 className="text-xl font-bold text-white mb-3">Horário de Funcionamento</h3>
              <div className="space-y-2 text-gray-300">
                <p><span className="text-accent">Segunda a Sexta:</span> 9h - 19h</p>
                <p><span className="text-accent">Sábado:</span> 9h - 18h</p>
                <p><span className="text-accent">Domingo:</span> Fechado</p>
              </div>
            </Card>

            <Card className="card-elegant p-6">
              <h3 className="text-xl font-bold text-white mb-3">Informações Úteis</h3>
              <div className="space-y-2 text-gray-300">
                <p>✓ Agendamento confirmado via WhatsApp</p>
                <p>✓ Chegue 5 minutos antes</p>
                <p>✓ Aceitamos cartão e dinheiro</p>
              </div>
            </Card>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-card border-t border-border py-8 mt-12">
        <div className="container text-center text-gray-500">
          <p>&copy; 2026 Barbearia Beta. Todos os direitos reservados.</p>
        </div>
      </footer>
    </div>
  );
}
