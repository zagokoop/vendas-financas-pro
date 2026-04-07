/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { 
  CheckCircle2, 
  TrendingUp, 
  Wallet, 
  PieChart, 
  Calendar, 
  ArrowRight, 
  ShieldCheck, 
  Zap, 
  Gift, 
  ChevronDown, 
  ChevronUp,
  CreditCard,
  Target,
  Clock,
  AlertCircle,
  X,
  Star
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer, 
  Cell,
  PieChart as RePieChart,
  Pie
} from 'recharts';
import { cn } from '@/src/lib/utils';

// --- Mock Data for Dashboard Preview ---
const monthlyData = [
  { name: 'Jan', income: 4500, expenses: 3200 },
  { name: 'Fev', income: 5200, expenses: 3100 },
  { name: 'Mar', income: 4800, expenses: 4200 },
  { name: 'Abr', income: 6100, expenses: 3500 },
];

const categoryData = [
  { name: 'Aluguel', value: 1500, color: '#10b981' },
  { name: 'Alimentação', value: 800, color: '#34d399' },
  { name: 'Lazer', value: 400, color: '#6ee7b7' },
  { name: 'Saúde', value: 300, color: '#a7f3d0' },
];

// --- Components ---

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={cn(
      "fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6 py-4",
      isScrolled ? "bg-black/80 backdrop-blur-md border-b border-white/10" : "bg-transparent"
    )}>
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="flex items-center gap-2">
          <div className="bg-emerald-500 p-1.5 rounded-lg">
            <TrendingUp className="text-black w-6 h-6" />
          </div>
          <span className="text-xl font-bold tracking-tighter text-white">FINANÇAS<span className="text-emerald-500">PRO</span></span>
        </div>
        <a 
          href="#oferta" 
          className="hidden md:block bg-emerald-500 hover:bg-emerald-400 text-black font-bold py-2 px-6 rounded-full transition-all transform hover:scale-105"
        >
          Começar Agora
        </a>
      </div>
    </nav>
  );
};

const Hero = () => (
  <section className="relative pt-32 pb-20 px-6 overflow-hidden">
    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-10 opacity-20">
      <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-emerald-500/30 blur-[120px] rounded-full" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-emerald-500/20 blur-[120px] rounded-full" />
    </div>
    
    <div className="max-w-5xl mx-auto text-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <span className="inline-block py-1 px-3 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-sm font-medium mb-6">
          Acesso Vitalício Disponível
        </span>
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-white leading-tight mb-6 tracking-tight">
          Assuma o Controle Total do Seu Dinheiro em <span className="text-emerald-500">Poucos Minutos</span>
        </h1>
        <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto mb-10 leading-relaxed">
          Um sistema simples e inteligente que organiza sua vida financeira, elimina dívidas e mostra exatamente para onde seu dinheiro está indo. Mesmo que hoje você esteja perdido.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a 
            href="https://pay.kiwify.com.br/FlyHtvX" 
            className="w-full sm:w-auto bg-emerald-500 hover:bg-emerald-400 text-black text-lg font-bold py-4 px-10 rounded-xl transition-all transform hover:scale-105 flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(16,185,129,0.3)]"
          >
            QUERO ORGANIZAR MINHA VIDA AGORA
            <ArrowRight className="w-5 h-5" />
          </a>
        </div>
        
        <div className="mt-12 flex flex-wrap justify-center gap-8 text-gray-500 text-sm font-medium">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-emerald-500" />
            Garantia de 7 dias
          </div>
          <div className="flex items-center gap-2">
            <Zap className="w-4 h-4 text-emerald-500" />
            Acesso Imediato
          </div>
          <div className="flex items-center gap-2">
            <Star className="w-4 h-4 text-emerald-500" />
            +5.000 Alunos
          </div>
        </div>
      </motion.div>
    </div>
  </section>
);

const ProblemSection = () => (
  <section className="py-24 px-6 bg-zinc-950">
    <div className="max-w-7xl mx-auto">
      <div className="grid md:grid-cols-2 gap-16 items-center">
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 leading-tight">
            Você sente que o seu dinheiro simplesmente <span className="text-red-500">desaparece?</span>
          </h2>
          <div className="space-y-6">
            {[
              "Nunca sobra nada no final do mês?",
              "Não sabe exatamente quanto ganha ou gasta?",
              "Vive no ciclo vicioso de 'ganhar → gastar → repetir'?",
              "Sente ansiedade ao abrir o extrato do banco?"
            ].map((text, i) => (
              <div key={i} className="flex items-start gap-4">
                <div className="mt-1 bg-red-500/10 p-1 rounded-full">
                  <X className="w-4 h-4 text-red-500" />
                </div>
                <p className="text-lg text-gray-300">{text}</p>
              </div>
            ))}
          </div>
          
          <div className="mt-10 p-6 bg-emerald-500/5 border-l-4 border-emerald-500 rounded-r-xl">
            <p className="text-xl text-white font-medium italic">
              "O problema não é falta de dinheiro. É falta de controle."
            </p>
          </div>
        </div>
        
        <div className="relative">
          <div className="absolute inset-0 bg-emerald-500/20 blur-[100px] rounded-full" />
          <div className="relative bg-zinc-900 border border-white/10 rounded-3xl p-8 overflow-hidden shadow-2xl">
             <div className="flex justify-between items-center mb-8">
                <h3 className="text-white font-bold">Gastos Mensais</h3>
                <span className="text-red-400 text-sm font-mono">Excesso: R$ 1.240,00</span>
             </div>
             <div className="h-[300px] w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={monthlyData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#333" vertical={false} />
                    <XAxis dataKey="name" stroke="#666" fontSize={12} />
                    <YAxis stroke="#666" fontSize={12} />
                    <Tooltip 
                      contentStyle={{ backgroundColor: '#18181b', border: '1px solid #333', borderRadius: '8px' }}
                      itemStyle={{ color: '#fff' }}
                    />
                    <Bar dataKey="expenses" fill="#ef4444" radius={[4, 4, 0, 0]} />
                  </BarChart>
                </ResponsiveContainer>
             </div>
             <div className="mt-6 text-center">
                <p className="text-gray-400 text-sm">Visualização real do que acontece sem o Finanças Pro</p>
             </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const SolutionSection = () => (
  <section className="py-24 px-6 relative">
    <div className="max-w-7xl mx-auto text-center mb-20">
      <h2 className="text-sm font-bold text-emerald-500 uppercase tracking-widest mb-4">A Solução Definitiva</h2>
      <h3 className="text-4xl md:text-5xl font-extrabold text-white mb-6">
        💎 Finanças Pro — Sistema Financeiro Inteligente
      </h3>
      <p className="text-xl text-gray-400 max-w-3xl mx-auto">
        Um dashboard completo que te mostra exatamente o que você precisa ver para prosperar financeiramente.
      </p>
    </div>

    <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8">
      {[
        { 
          icon: <Wallet className="w-8 h-8" />, 
          title: "Controle de Receitas", 
          desc: "Registre todas as suas entradas de forma simples e categorizada." 
        },
        { 
          icon: <TrendingUp className="w-8 h-8" />, 
          title: "Relatórios Automáticos", 
          desc: "Gráficos que geram insights imediatos sobre sua saúde financeira." 
        },
        { 
          icon: <PieChart className="w-8 h-8" />, 
          title: "Organização Inteligente", 
          desc: "Saiba exatamente quanto gasta com lazer, moradia, saúde e mais." 
        },
        { 
          icon: <Calendar className="w-8 h-8" />, 
          title: "Planejamento Mensal", 
          desc: "Defina metas e acompanhe seu progresso dia após dia." 
        },
        { 
          icon: <Target className="w-8 h-8" />, 
          title: "Foco em Dívidas", 
          desc: "Ferramentas específicas para você sair do vermelho de uma vez por todas." 
        },
        { 
          icon: <ShieldCheck className="w-8 h-8" />, 
          title: "Segurança Total", 
          desc: "Seus dados organizados em um sistema privado e intuitivo." 
        }
      ].map((feature, i) => (
        <motion.div 
          key={i}
          whileHover={{ y: -10 }}
          className="p-8 bg-zinc-900/50 border border-white/5 rounded-2xl hover:border-emerald-500/30 transition-all"
        >
          <div className="bg-emerald-500/10 w-16 h-16 rounded-xl flex items-center justify-center text-emerald-500 mb-6">
            {feature.icon}
          </div>
          <h4 className="text-xl font-bold text-white mb-3">{feature.title}</h4>
          <p className="text-gray-400 leading-relaxed">{feature.desc}</p>
        </motion.div>
      ))}
    </div>
  </section>
);

const DashboardPreview = () => (
  <section className="py-24 px-6 bg-zinc-950 overflow-hidden">
    <div className="max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Veja o Sistema por Dentro</h2>
        <p className="text-gray-400">Interface intuitiva projetada para clareza e rapidez.</p>
      </div>
      
      <div className="relative group">
        <div className="absolute -inset-1 bg-gradient-to-r from-emerald-500 to-emerald-800 rounded-[2.5rem] blur opacity-20 group-hover:opacity-40 transition duration-1000 group-hover:duration-200"></div>
        <div className="relative bg-zinc-900 border border-white/10 rounded-[2rem] p-4 md:p-8 shadow-2xl">
          {/* Mock Dashboard UI */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* Sidebar Mock */}
            <div className="hidden lg:block lg:col-span-2 space-y-4 border-r border-white/5 pr-6">
              <div className="h-4 w-full bg-white/5 rounded" />
              <div className="h-4 w-3/4 bg-emerald-500/20 rounded" />
              <div className="h-4 w-full bg-white/5 rounded" />
              <div className="h-4 w-full bg-white/5 rounded" />
              <div className="h-4 w-2/3 bg-white/5 rounded" />
            </div>
            
            {/* Main Content Mock */}
            <div className="lg:col-span-10 space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="p-6 bg-zinc-800/50 rounded-2xl border border-white/5">
                  <p className="text-gray-400 text-xs uppercase font-bold mb-1">Saldo Atual</p>
                  <p className="text-2xl font-bold text-white">R$ 4.250,00</p>
                  <p className="text-emerald-500 text-xs mt-2">+12% este mês</p>
                </div>
                <div className="p-6 bg-zinc-800/50 rounded-2xl border border-white/5">
                  <p className="text-gray-400 text-xs uppercase font-bold mb-1">Entradas</p>
                  <p className="text-2xl font-bold text-emerald-400">R$ 6.100,00</p>
                </div>
                <div className="p-6 bg-zinc-800/50 rounded-2xl border border-white/5">
                  <p className="text-gray-400 text-xs uppercase font-bold mb-1">Saídas</p>
                  <p className="text-2xl font-bold text-red-400">R$ 1.850,00</p>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="p-6 bg-zinc-800/30 rounded-2xl border border-white/5">
                  <h4 className="text-white font-bold mb-6">Fluxo de Caixa</h4>
                  <div className="h-[200px]">
                    <ResponsiveContainer width="100%" height="100%">
                      <BarChart data={monthlyData}>
                        <XAxis dataKey="name" stroke="#666" fontSize={10} />
                        <Tooltip contentStyle={{ backgroundColor: '#18181b', border: 'none' }} />
                        <Bar dataKey="income" fill="#10b981" radius={[2, 2, 0, 0]} />
                        <Bar dataKey="expenses" fill="#ef4444" radius={[2, 2, 0, 0]} />
                      </BarChart>
                    </ResponsiveContainer>
                  </div>
                </div>
                <div className="p-6 bg-zinc-800/30 rounded-2xl border border-white/5">
                  <h4 className="text-white font-bold mb-6">Gastos por Categoria</h4>
                  <div className="h-[200px] flex items-center justify-center">
                    <ResponsiveContainer width="100%" height="100%">
                      <RePieChart>
                        <Pie
                          data={categoryData}
                          innerRadius={60}
                          outerRadius={80}
                          paddingAngle={5}
                          dataKey="value"
                        >
                          {categoryData.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={entry.color} />
                          ))}
                        </Pie>
                        <Tooltip />
                      </RePieChart>
                    </ResponsiveContainer>
                    <div className="space-y-2 ml-4">
                      {categoryData.map((cat, i) => (
                        <div key={i} className="flex items-center gap-2 text-[10px]">
                          <div className="w-2 h-2 rounded-full" style={{ backgroundColor: cat.color }} />
                          <span className="text-gray-400">{cat.name}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const Benefits = () => (
  <section className="py-24 px-6">
    <div className="max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">O Que Você Vai Conquistar</h2>
        <p className="text-gray-400">Mais do que números, estamos falando de liberdade.</p>
      </div>
      
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {[
          "Ter clareza TOTAL do seu dinheiro",
          "Parar de gastar sem perceber",
          "Conseguir guardar dinheiro todo mês",
          "Sair do vermelho muito mais rápido",
          "Sentir controle e segurança financeira",
          "Planejar viagens e sonhos com pé no chão"
        ].map((benefit, i) => (
          <div key={i} className="flex items-center gap-4 p-6 bg-zinc-900 rounded-xl border border-white/5">
            <div className="bg-emerald-500/20 p-2 rounded-lg">
              <CheckCircle2 className="w-6 h-6 text-emerald-500" />
            </div>
            <span className="text-white font-medium">{benefit}</span>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const Pricing = () => (
  <section id="oferta" className="py-24 px-6 bg-emerald-950/20 relative overflow-hidden">
    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-emerald-500 to-transparent" />
    
    <div className="max-w-4xl mx-auto">
      <div className="bg-zinc-900 border-2 border-emerald-500/50 rounded-[2.5rem] p-8 md:p-16 relative shadow-[0_0_50px_rgba(16,185,129,0.15)]">
        <div className="absolute top-0 right-12 -translate-y-1/2 bg-emerald-500 text-black text-xs font-black px-4 py-1.5 rounded-full uppercase tracking-widest">
          Oferta por Tempo Limitado
        </div>
        
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-black text-white mb-6 uppercase italic tracking-tighter">Finanças Pro</h2>
          <p className="text-gray-400 text-lg">Tudo o que você precisa para dominar suas finanças hoje.</p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-4">
            {[
              "Dashboard Profissional",
              "Controle de Receitas/Despesas",
              "Relatórios Automáticos",
              "Organização por Categorias",
              "Planejamento Mensal",
              "Acesso Vitalício"
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-3">
                <CheckCircle2 className="w-5 h-5 text-emerald-500 flex-shrink-0" />
                <span className="text-gray-300">{item}</span>
              </div>
            ))}
          </div>
          
          <div className="text-center md:text-right">
            <p className="text-gray-500 line-through text-xl mb-1">De: R$ 97,00</p>
            <div className="flex items-end justify-center md:justify-end gap-1 mb-6">
              <span className="text-gray-400 text-2xl font-bold mb-2">R$</span>
              <span className="text-7xl font-black text-emerald-500 tracking-tighter">29,90</span>
            </div>
            <p className="text-emerald-400/80 text-sm font-medium mb-8">Pagamento único. Sem mensalidades.</p>
          </div>
        </div>
        
        <div className="mt-12">
          <a 
            href="https://pay.kiwify.com.br/FlyHtvX" 
            className="block w-full bg-emerald-500 hover:bg-emerald-400 text-black text-xl font-black py-6 rounded-2xl transition-all transform hover:scale-[1.02] text-center shadow-[0_10px_30px_rgba(16,185,129,0.3)] uppercase tracking-tight"
          >
            QUERO ORGANIZAR MINHA VIDA FINANCEIRA AGORA
          </a>
          <div className="mt-6 flex justify-center items-center gap-6 opacity-50 grayscale">
             <CreditCard className="w-8 h-8 text-white" />
             <div className="h-4 w-px bg-white/20" />
             <ShieldCheck className="w-8 h-8 text-white" />
          </div>
        </div>
      </div>
      
      {/* Bonuses */}
      <div className="mt-16 grid md:grid-cols-3 gap-6">
        {[
          { title: "Guia: Sair do Vermelho", icon: <AlertCircle /> },
          { title: "Planilha de Metas", icon: <Target /> },
          { title: "Checklist Organização", icon: <Gift /> }
        ].map((bonus, i) => (
          <div key={i} className="bg-zinc-900/50 border border-white/5 p-6 rounded-2xl flex flex-col items-center text-center">
            <div className="text-emerald-500 mb-4">{bonus.icon}</div>
            <span className="text-emerald-500 text-[10px] font-bold uppercase tracking-widest mb-1">Bônus Grátis</span>
            <h5 className="text-white font-bold text-sm">{bonus.title}</h5>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  
  const faqs = [
    { q: "Não sei mexer em planilhas ou sistemas, vou conseguir?", a: "Sim! O Finanças Pro foi desenhado para ser extremamente simples e intuitivo. Se você sabe usar o WhatsApp, sabe usar nosso sistema." },
    { q: "Quanto tempo preciso dedicar por dia?", a: "Menos de 5 minutos. O sistema é automatizado para que você apenas insira os valores e ele faça todo o trabalho pesado." },
    { q: "O acesso é vitalício?", a: "Sim, você paga uma única vez e tem acesso para sempre, incluindo todas as atualizações futuras." },
    { q: "E se eu não gostar?", a: "Você tem 7 dias de garantia incondicional. Se não se adaptar, devolvemos 100% do seu dinheiro sem perguntas." }
  ];

  return (
    <section className="py-24 px-6">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold text-white text-center mb-12">Dúvidas Frequentes</h2>
        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <div key={i} className="border border-white/10 rounded-2xl overflow-hidden">
              <button 
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full flex justify-between items-center p-6 text-left bg-zinc-900 hover:bg-zinc-800 transition-colors"
              >
                <span className="text-white font-bold">{faq.q}</span>
                {openIndex === i ? <ChevronUp className="text-emerald-500" /> : <ChevronDown className="text-emerald-500" />}
              </button>
              <AnimatePresence>
                {openIndex === i && (
                  <motion.div 
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="bg-zinc-900/50 px-6 pb-6 text-gray-400"
                  >
                    {faq.a}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Footer = () => (
  <footer className="py-12 px-6 border-t border-white/5">
    <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
      <div className="flex items-center gap-2">
        <div className="bg-emerald-500 p-1 rounded">
          <TrendingUp className="text-black w-4 h-4" />
        </div>
        <span className="text-lg font-bold text-white">FINANÇAS PRO</span>
      </div>
      <p className="text-gray-500 text-sm">© 2026 Finanças Pro. Todos os direitos reservados.</p>
      <div className="flex gap-6 text-gray-500 text-sm">
        <a href="#" className="hover:text-emerald-500 transition-colors">Termos de Uso</a>
        <a href="#" className="hover:text-emerald-500 transition-colors">Privacidade</a>
      </div>
    </div>
  </footer>
);

export default function App() {
  return (
    <div className="min-h-screen bg-black text-zinc-100 font-sans selection:bg-emerald-500 selection:text-black">
      <Navbar />
      <main>
        <Hero />
        <ProblemSection />
        <SolutionSection />
        <DashboardPreview />
        <Benefits />
        <Pricing />
        <FAQ />
        
        {/* Final CTA */}
        <section className="py-24 px-6 text-center bg-zinc-950">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-8">
              Ou você continua sem controle... <br/>
              <span className="text-emerald-500">Ou começa hoje a organizar sua vida.</span>
            </h2>
            <a 
              href="https://pay.kiwify.com.br/FlyHtvX" 
              className="inline-flex items-center gap-3 bg-emerald-500 hover:bg-emerald-400 text-black text-xl font-black py-6 px-12 rounded-2xl transition-all transform hover:scale-105 shadow-[0_10px_30px_rgba(16,185,129,0.3)] uppercase"
            >
              Quero Garantir Meu Acesso
              <ArrowRight />
            </a>
            <div className="mt-8 flex justify-center items-center gap-2 text-gray-500">
              <Clock className="w-4 h-4" />
              <span className="text-sm">Oferta expira em breve</span>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
