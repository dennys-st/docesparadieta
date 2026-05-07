import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import {
  Heart, Sparkles, Clock, Leaf, ShieldCheck, Download, Lock, Zap,
  CheckCircle2, XCircle, Star, Play, ChefHat, BookOpen, Cookie, ArrowRight
} from "lucide-react";
import ebookMockup from "@/assets/ebook-mockup.png";
import dessertsImg from "@/assets/desserts-spread.jpg";

// 🔗 EDITE AQUI: Link de checkout da Braip
const CHECKOUT_URL = "https://ev.braip.com/ref?pl=pla5kopx&ck=chey6onr&af=afi8j0q823";

// 💰 EDITE AQUI: Preços
const PRICE_FROM = "R$ 55,90";
const PRICE_NOW = "R$ 33,90";

const goCheckout = () => {
  if (CHECKOUT_URL.startsWith("[")) {
    window.location.href = "#oferta";
  } else {
    window.location.href = CHECKOUT_URL;
  }
};

const scrollToOffer = () => {
  const element = document.getElementById("oferta");
  if (element) {
    element.scrollIntoView({ behavior: "smooth" });
  }
};

const CTAButton = ({ children, size = "lg", className = "", pulse = false, isCheckout = false }: { children: React.ReactNode; size?: "lg" | "xl"; className?: string; pulse?: boolean; isCheckout?: boolean }) => (
  <button
    onClick={isCheckout ? goCheckout : scrollToOffer}
    className={`group inline-flex items-center justify-center gap-2 bg-gradient-cta text-accent-foreground font-bold rounded-full shadow-cta hover:shadow-glow hover:scale-[1.03] active:scale-[0.98] transition-smooth uppercase tracking-wide ${
      size === "xl"
        ? "px-8 py-5 text-base sm:text-lg w-full sm:w-auto"
        : "px-6 py-4 text-sm sm:text-base w-full sm:w-auto"
    } ${pulse ? "animate-pulse-cta" : ""} ${className}`}
  >
    {children}
    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-smooth shrink-0" />
  </button>
);

const SecureMicro = ({ className = "" }: { className?: string }) => (
  <div className={`flex flex-wrap items-center justify-center gap-x-4 gap-y-1.5 text-[11px] sm:text-xs text-muted-foreground ${className}`}>
    <span className="inline-flex items-center gap-1.5"><Lock className="w-3.5 h-3.5 text-sage" /> Pagamento 100% seguro</span>
    <span className="inline-flex items-center gap-1.5"><ShieldCheck className="w-3.5 h-3.5 text-sage" /> Plataforma Braip</span>
    <span className="inline-flex items-center gap-1.5"><Download className="w-3.5 h-3.5 text-sage" /> Acesso imediato</span>
  </div>
);

const SectionTitle = ({ eyebrow, children }: { eyebrow?: string; children: React.ReactNode }) => (
  <div className="text-center max-w-3xl mx-auto mb-10 md:mb-16">
    {eyebrow && (
      <span className="inline-block px-4 py-1.5 rounded-full bg-sage-soft text-chocolate text-[10px] sm:text-xs font-bold uppercase tracking-widest mb-4">
        {eyebrow}
      </span>
    )}
    <h2 className="text-[28px] leading-[1.15] sm:text-4xl md:text-5xl font-display font-bold text-chocolate">
      {children}
    </h2>
  </div>
);

// Reusable placeholder wrapper for images/videos/testimonials — replace the inner content with real assets
const Placeholder = ({ label, className = "", children }: { label: string; className?: string; children?: React.ReactNode }) => (
  <div className={`relative rounded-3xl border-2 border-dashed border-primary/30 bg-cream/60 overflow-hidden ${className}`}>
    {children}
    <div className="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-chocolate/85 text-cream text-[10px] font-bold uppercase tracking-widest backdrop-blur-sm">
      {label}
    </div>
  </div>
);

const Index = () => {
  const pains = [
    "Você tenta reduzir o açúcar, mas sente vontade de comer doce?",
    "Não sabe quais receitas fazer sem cair na mesmice?",
    "Acha difícil encontrar doces saudáveis que realmente tenham sabor?",
    "Quer opções práticas para preparar em casa sem complicação?",
  ];

  const contents = [
    { icon: Cookie, title: "Receitas doces sem açúcar para o dia a dia" },
    { icon: ChefHat, title: "Opções práticas para preparar em casa" },
    { icon: Heart, title: "Ideias para matar a vontade de doce sem exageros" },
    { icon: Sparkles, title: "Sobremesas para diferentes momentos da rotina" },
    { icon: BookOpen, title: "Receitas com explicação simples e direta" },
    { icon: Download, title: "Conteúdo digital com acesso rápido após a compra" },
  ];

  const benefits = [
    { icon: Leaf, title: "Menos açúcar, mais equilíbrio", text: "Inclua opções doces na sua rotina sem depender de receitas cheias de açúcar refinado.", stat: "01" },
    { icon: Zap, title: "Mais praticidade no dia a dia", text: "Receitas simples, com ingredientes acessíveis e passo a passo direto, sem complicação.", stat: "02" },
    { icon: Sparkles, title: "Mais variedade no cardápio", text: "Saia do básico e descubra dezenas de ideias para sobremesas, lanches e momentos especiais.", stat: "03" },
    { icon: Heart, title: "Mais prazer na alimentação", text: "Reduzir açúcar não precisa ser sofrimento. Coma doces gostosos de forma mais consciente.", stat: "04" },
  ];

  const forYou = [
    "Quer reduzir o açúcar sem abandonar os doces",
    "Busca receitas mais leves para fazer em casa",
    "Gosta de praticidade na cozinha",
    "Quer variar o cardápio com sobremesas diferentes",
    "Procura uma opção digital simples, acessível e fácil de usar",
    "Quer começar uma rotina alimentar mais equilibrada",
  ];

  const notForYou = [
    "Você procura uma promessa milagrosa",
    "Você espera cura de doenças ou resultados médicos",
    "Você não pretende preparar nenhuma receita",
    "Você não quer mudar nenhum hábito alimentar",
  ];

  const testimonials = [1, 2, 3];

  const guarantees = [
    { icon: Lock, title: "Pagamento seguro" },
    { icon: Download, title: "Produto digital" },
    { icon: Zap, title: "Acesso rápido" },
    { icon: Heart, title: "Suporte do produtor" },
  ];

  const faqs = [
    { q: "O produto é físico ou digital?", a: "É um produto digital. Você acessa o conteúdo online ou recebe as instruções de acesso após a compra." },
    { q: "Preciso saber cozinhar muito bem?", a: "Não. As receitas foram pensadas para serem simples e práticas." },
    { q: "As receitas são sem açúcar?", a: "Sim, a proposta do guia é apresentar receitas doces sem açúcar." },
    { q: "Como recebo o produto?", a: "Após a confirmação da compra, você receberá as informações de acesso pelo e-mail informado no pagamento." },
    { q: "O pagamento é seguro?", a: "Sim. A compra é feita por uma plataforma de pagamento segura." },
    { q: "Esse produto substitui acompanhamento médico ou nutricional?", a: "Não. O conteúdo é informativo e culinário. Em caso de restrições alimentares, diabetes ou condições de saúde, consulte um profissional." },
  ];

  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      {/* HEADER */}
      <header className="sticky top-0 z-50 backdrop-blur-md bg-cream/85 border-b border-border/50">
        <div className="container mx-auto px-4 py-3 flex items-center justify-between gap-3">
          <a href="#" className="flex items-center gap-2 shrink-0">
            <div className="w-9 h-9 rounded-full bg-gradient-cta flex items-center justify-center shadow-cta">
              <Cookie className="w-5 h-5 text-accent-foreground" />
            </div>
            <span className="font-display font-bold text-base sm:text-xl text-chocolate leading-none">Doces Sem Açúcar</span>
          </a>
          <a href="#oferta" className="inline-flex items-center gap-1.5 bg-gradient-cta text-accent-foreground font-bold px-4 sm:px-5 py-2.5 rounded-full shadow-cta hover:scale-105 transition-smooth text-xs sm:text-sm uppercase tracking-wide">
            <span className="hidden sm:inline">Quero minhas receitas</span>
            <span className="sm:hidden">Quero agora</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </header>

      {/* HERO */}
      <section className="bg-gradient-hero relative overflow-hidden">
        <div className="container mx-auto px-4 pt-10 pb-14 md:py-24 grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          <div className="space-y-5 md:space-y-6 text-center md:text-left order-2 md:order-1">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-card shadow-soft text-chocolate text-[11px] font-bold uppercase tracking-wider">
              <Leaf className="w-3.5 h-3.5 text-sage" /> Novo guia digital de receitas
            </span>
            <h1 className="text-[34px] leading-[1.05] sm:text-5xl md:text-6xl lg:text-7xl font-display font-bold text-chocolate">
              Doces gostosos<br />
              <span className="text-primary italic">sem culpa</span> e <span className="text-primary italic">sem açúcar</span>
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-foreground/75 leading-relaxed">
              Mais de uma dezena de receitas <strong className="text-chocolate">práticas, saborosas e equilibradas</strong> para matar a vontade de doce no dia a dia — sem abrir mão do prazer de comer bem.
            </p>

            <div className="flex flex-wrap gap-2 justify-center md:justify-start">
              {["✨ Práticas", "🍫 Saborosas", "🌿 Equilibradas", "📱 100% digital"].map((tag) => (
                <span key={tag} className="px-3 py-1.5 rounded-full bg-card shadow-soft text-xs font-semibold text-chocolate">{tag}</span>
              ))}
            </div>

            <div className="pt-2 flex flex-col items-center md:items-start gap-3">
              <CTAButton size="xl" pulse>Quero minhas receitas agora</CTAButton>
              <p className="text-xs sm:text-sm text-muted-foreground flex flex-wrap justify-center md:justify-start gap-x-4 gap-y-1">
                <span className="inline-flex items-center gap-1.5"><Download className="w-4 h-4 text-sage" /> Acesso digital</span>
                <span className="inline-flex items-center gap-1.5"><ChefHat className="w-4 h-4 text-sage" /> Receitas práticas</span>
                <span className="inline-flex items-center gap-1.5"><Lock className="w-4 h-4 text-sage" /> Compra 100% segura</span>
              </p>
              <div className="flex items-center gap-2 pt-1">
                <div className="flex gap-0.5">
                  {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-accent text-accent" />)}
                </div>
                <span className="text-xs text-muted-foreground">Aprovado por quem reduziu o açúcar do dia a dia</span>
              </div>
            </div>
          </div>
          <div className="relative flex items-center justify-center order-1 md:order-2">
            <div className="absolute inset-0 bg-gradient-cta opacity-25 blur-3xl rounded-full" />
            <img
              src={ebookMockup}
              alt="Mockup do e-book Doces Sem Açúcar"
              width={1024}
              height={1024}
              className="relative w-full max-w-[280px] sm:max-w-sm md:max-w-md drop-shadow-2xl"
              style={{ animation: "float 6s ease-in-out infinite" }}
            />
          </div>
        </div>
        <style>{`
          @keyframes float { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-12px)} }
          @keyframes pulseCta { 0%,100%{box-shadow:0 10px 30px -8px hsl(var(--accent)/0.45)} 50%{box-shadow:0 10px 40px -4px hsl(var(--accent)/0.7)} }
          .animate-pulse-cta { animation: pulseCta 2s ease-in-out infinite; }
        `}</style>
      </section>

      {/* PROBLEMA */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-4">
          <SectionTitle eyebrow="Reconhece isso?">
            Você sente que precisa escolher entre cuidar da saúde e comer algo gostoso?
          </SectionTitle>
          <p className="text-center text-lg text-muted-foreground max-w-2xl mx-auto -mt-8 mb-12">
            Muita gente acredita que reduzir o açúcar significa viver uma rotina sem graça. Mas dá para preparar doces saborosos com opções mais equilibradas e receitas pensadas para o dia a dia.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 max-w-6xl mx-auto">
            {pains.map((p, i) => (
              <Card key={i} className="p-6 bg-card border-border/60 shadow-soft hover:shadow-card transition-smooth rounded-2xl">
                <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center mb-4">
                  <span className="text-accent font-bold">{i + 1}</span>
                </div>
                <p className="text-foreground/90 leading-relaxed">{p}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* SOLUÇÃO */}
      <section className="py-16 md:py-28 bg-gradient-warm">
        <div className="container mx-auto px-4 grid md:grid-cols-2 gap-10 md:gap-12 items-center">
          <Placeholder label="📷 Substitua: imagem das receitas">
            <img src={dessertsImg} alt="Doces sem açúcar" loading="lazy" width={1280} height={896} className="w-full h-auto block" />
          </Placeholder>
          <div>
            <span className="inline-block px-4 py-1.5 rounded-full bg-card text-chocolate text-xs font-bold uppercase tracking-widest mb-4">A solução</span>
            <h2 className="text-[28px] sm:text-4xl md:text-5xl font-display font-bold text-chocolate leading-tight mb-6">
              O <span className="text-primary italic">Doces Sem Açúcar</span> foi criado para facilitar sua vida
            </h2>
            <p className="text-base sm:text-lg text-foreground/80 leading-relaxed mb-8">
              Dentro do e-book você encontra uma seleção de receitas doces sem açúcar para preparar em casa, com explicações simples e uma proposta clara: mostrar que uma rotina com menos açúcar também pode ser prazerosa.
            </p>
            <CTAButton>Quero começar hoje</CTAButton>
            <SecureMicro className="mt-4 !justify-start" />
          </div>
        </div>
      </section>

      {/* O QUE VOCÊ RECEBE */}
      <section className="py-16 md:py-28">
        <div className="container mx-auto px-4">
          <SectionTitle eyebrow="Conteúdo">O que você recebe ao acessar o guia</SectionTitle>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 max-w-6xl mx-auto">
            {contents.map(({ icon: Icon, title }, i) => (
              <Card key={i} className="p-6 sm:p-7 bg-card border-border/60 shadow-soft hover:shadow-card hover:-translate-y-1 transition-smooth rounded-2xl">
                <div className="w-12 h-12 rounded-xl bg-sage-soft flex items-center justify-center mb-5">
                  <Icon className="w-6 h-6 text-primary" />
                </div>
                <p className="font-display font-semibold text-lg text-chocolate leading-snug">{title}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* BENEFÍCIOS */}
      <section className="py-16 md:py-28 bg-cream-deep/40 relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: "radial-gradient(circle at 10% 10%, hsl(var(--accent)) 0%, transparent 30%), radial-gradient(circle at 90% 90%, hsl(var(--sage)) 0%, transparent 30%)" }} />
        <div className="container mx-auto px-4 relative">
          <SectionTitle eyebrow="Benefícios">Por que esse guia pode mudar sua rotina?</SectionTitle>
          <div className="grid sm:grid-cols-2 gap-5 sm:gap-6 max-w-5xl mx-auto">
            {benefits.map(({ icon: Icon, title, text, stat }, i) => (
              <Card key={i} className="group p-6 sm:p-8 bg-card border-border/60 shadow-soft hover:shadow-card hover:-translate-y-1 transition-smooth rounded-3xl relative overflow-hidden">
                <span className="absolute top-3 right-5 font-display font-extrabold text-5xl text-primary/10 select-none">{stat}</span>
                <div className="shrink-0 w-14 h-14 rounded-2xl bg-gradient-cta flex items-center justify-center shadow-cta mb-5 group-hover:scale-110 transition-smooth">
                  <Icon className="w-7 h-7 text-accent-foreground" />
                </div>
                <h3 className="font-display font-bold text-xl sm:text-2xl text-chocolate mb-2 leading-tight">{title}</h3>
                <p className="text-muted-foreground leading-relaxed">{text}</p>
              </Card>
            ))}
          </div>
          <div className="text-center mt-10 md:mt-14 flex flex-col items-center gap-3">
            <CTAButton size="xl">Quero todos esses benefícios</CTAButton>
            <SecureMicro />
          </div>
        </div>
      </section>

      {/* VÍDEO */}
      <section className="py-16 md:py-28">
        <div className="container mx-auto px-4">
          <SectionTitle eyebrow="Veja na prática">Veja como é simples transformar sua rotina</SectionTitle>
          <div className="max-w-4xl mx-auto">
            <Placeholder label="🎬 Substitua: vídeo de vendas (embed YouTube/Vimeo)" className="aspect-video shadow-card">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/40 to-chocolate" />
              <div className="absolute inset-0 flex items-center justify-center text-center text-cream px-4">
                <div>
                  <div className="w-20 h-20 rounded-full bg-cream/95 flex items-center justify-center mx-auto mb-4 shadow-glow">
                    <Play className="w-8 h-8 text-primary ml-1" fill="currentColor" />
                  </div>
                  <p className="font-display text-base sm:text-lg opacity-90">Espaço reservado para o vídeo de vendas</p>
                  <code className="text-[10px] sm:text-xs bg-cream/10 px-2 py-1 rounded mt-2 inline-block">{`<iframe src="..." />`}</code>
                </div>
              </div>
            </Placeholder>
            <p className="text-center text-muted-foreground mt-6 max-w-2xl mx-auto text-base sm:text-lg">
              Assista e entenda como o guia pode te ajudar a preparar doces deliciosos sem depender do açúcar tradicional.
            </p>
            <div className="text-center mt-8 flex flex-col items-center gap-3">
              <CTAButton>Quero acessar o guia</CTAButton>
              <SecureMicro />
            </div>
          </div>
        </div>
      </section>

      {/* PARA QUEM É / NÃO É */}
      <section className="py-16 md:py-28 bg-gradient-warm">
        <div className="container mx-auto px-4 grid md:grid-cols-2 gap-6 md:gap-8 max-w-6xl">
          <Card className="p-7 sm:p-10 bg-card rounded-3xl shadow-card border-2 border-sage/30">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-2xl bg-sage-soft flex items-center justify-center">
                <CheckCircle2 className="w-6 h-6 text-sage" />
              </div>
              <h3 className="font-display font-bold text-xl sm:text-2xl text-chocolate">Esse guia é para você que…</h3>
            </div>
            <ul className="space-y-3">
              {forYou.map((it, i) => (
                <li key={i} className="flex gap-3 items-start">
                  <CheckCircle2 className="w-5 h-5 text-sage shrink-0 mt-0.5" />
                  <span className="text-foreground/85">{it}</span>
                </li>
              ))}
            </ul>
          </Card>
          <Card className="p-7 sm:p-10 bg-card rounded-3xl shadow-card border-2 border-destructive/20">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-2xl bg-destructive/10 flex items-center justify-center">
                <XCircle className="w-6 h-6 text-destructive" />
              </div>
              <h3 className="font-display font-bold text-xl sm:text-2xl text-chocolate">Esse guia não é para você se…</h3>
            </div>
            <ul className="space-y-3">
              {notForYou.map((it, i) => (
                <li key={i} className="flex gap-3 items-start">
                  <XCircle className="w-5 h-5 text-destructive/80 shrink-0 mt-0.5" />
                  <span className="text-foreground/85">{it}</span>
                </li>
              ))}
            </ul>
          </Card>
        </div>
      </section>

      {/* DEPOIMENTOS */}
      <section className="py-16 md:py-28">
        <div className="container mx-auto px-4">
          <SectionTitle eyebrow="Prova social">Quem já testou, aprovou</SectionTitle>
          <div className="grid md:grid-cols-3 gap-5 sm:gap-6 max-w-6xl mx-auto px-4">
            <div className="rounded-2xl overflow-hidden shadow-soft hover:shadow-card transition-smooth bg-white flex items-center justify-center">
              <img src="https://i.postimg.cc/qv0z7HCT/depoimento-1.avif" alt="Depoimento 1" className="w-full h-auto" />
            </div>
            <div className="rounded-2xl overflow-hidden shadow-soft hover:shadow-card transition-smooth bg-white flex items-center justify-center">
              <img src="https://i.postimg.cc/XY3pv6y6/depoimento-2.avif" alt="Depoimento 2" className="w-full h-auto" />
            </div>
            <div className="rounded-2xl overflow-hidden shadow-soft hover:shadow-card transition-smooth bg-white flex items-center justify-center">
              <img src="https://i.postimg.cc/Vk1dNPbc/depoimento-3.avif" alt="Depoimento 3" className="w-full h-auto" />
            </div>
          </div>
        </div>
      </section>

      {/* OFERTA */}
      <section id="oferta" className="py-16 md:py-28 bg-chocolate text-cream relative overflow-hidden">
        <div className="absolute inset-0 opacity-15" style={{ backgroundImage: "radial-gradient(circle at 20% 30%, hsl(var(--accent)) 0%, transparent 40%), radial-gradient(circle at 80% 70%, hsl(var(--sage)) 0%, transparent 40%)" }} />
        <div className="container mx-auto px-4 relative">
          <div className="max-w-3xl mx-auto text-center mb-10">
            <span className="inline-block px-4 py-1.5 rounded-full bg-accent text-accent-foreground text-xs font-bold uppercase tracking-widest mb-5">
              Oferta especial
            </span>
            <h2 className="text-[28px] sm:text-4xl md:text-5xl font-display font-bold leading-tight mb-5">
              Comece hoje a preparar doces sem açúcar em casa
            </h2>
            <p className="text-base sm:text-lg text-cream/80">
              Acesse o guia digital Doces Sem Açúcar e descubra receitas práticas para deixar sua rotina mais saborosa, leve e equilibrada.
            </p>
          </div>

          <Card className="max-w-2xl mx-auto p-6 sm:p-10 md:p-12 bg-card text-foreground rounded-3xl shadow-glow border-2 border-accent/40 relative">
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-accent text-accent-foreground text-[11px] font-bold uppercase tracking-widest px-4 py-1.5 rounded-full shadow-cta whitespace-nowrap">
              🔥 Oferta por tempo limitado
            </div>

            <div className="flex items-center gap-4 mb-6 pb-6 border-b border-border">
              <img src={ebookMockup} alt="" width={80} height={80} loading="lazy" className="w-16 h-16 sm:w-20 sm:h-20 object-contain shrink-0" />
              <div>
                <p className="text-[11px] uppercase tracking-widest text-primary font-bold">Produto digital</p>
                <p className="font-display font-bold text-lg sm:text-xl text-chocolate leading-tight">E-book Doces Sem Açúcar</p>
                <p className="text-xs text-muted-foreground">Acesso vitalício • Entrega imediata</p>
              </div>
            </div>

            <div className="text-center mb-8">
              <p className="text-muted-foreground line-through text-base">De {PRICE_FROM}</p>
              <p className="text-xs sm:text-sm uppercase tracking-widest text-primary font-bold mt-1">Hoje por apenas</p>
              <p className="text-5xl md:text-7xl font-display font-extrabold text-chocolate mt-1 tracking-tight">{PRICE_NOW}</p>
              <p className="text-sm text-muted-foreground mt-2">à vista no PIX ou parcelado no cartão</p>
              <span className="inline-block mt-3 px-3 py-1 rounded-full bg-sage-soft text-chocolate text-[11px] font-bold uppercase tracking-wider">
                Você economiza 39% nesta oferta
              </span>
            </div>

            <ul className="space-y-3 mb-8 max-w-md mx-auto">
              {[
                "Acesso imediato ao e-book digital",
                "Dezenas de receitas doces sem açúcar",
                "Conteúdo simples, direto e fácil de seguir",
                "Acesso vitalício — leia quantas vezes quiser",
                "Compra 100% segura pela Braip",
              ].map((it, i) => (
                <li key={i} className="flex gap-3 items-start">
                  <CheckCircle2 className="w-5 h-5 text-sage shrink-0 mt-0.5" />
                  <span className="font-medium">{it}</span>
                </li>
              ))}
            </ul>

            <div className="text-center">
              <CTAButton size="xl" pulse isCheckout>Sim, quero minhas receitas agora</CTAButton>
              <p className="text-xs text-muted-foreground mt-4 flex items-center justify-center gap-1.5">
                <Lock className="w-3.5 h-3.5" />
                Você será direcionado para uma página segura de pagamento.
              </p>
              <SecureMicro className="mt-3" />
            </div>
          </Card>

          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-3 mt-10 text-cream/70 text-xs sm:text-sm">
            <span className="inline-flex items-center gap-2"><ShieldCheck className="w-4 h-4 text-accent" /> Ambiente protegido</span>
            <span className="inline-flex items-center gap-2"><Lock className="w-4 h-4 text-accent" /> Dados criptografados</span>
            <span className="inline-flex items-center gap-2"><Download className="w-4 h-4 text-accent" /> Acesso digital imediato</span>
            <span className="inline-flex items-center gap-2"><Heart className="w-4 h-4 text-accent" /> Suporte por e-mail</span>
          </div>
        </div>
      </section>

      {/* GARANTIA */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-4">
          <SectionTitle eyebrow="Confiança">Compra simples, segura e acesso digital</SectionTitle>
          <p className="text-center text-lg text-muted-foreground max-w-2xl mx-auto -mt-8 mb-12">
            Após a confirmação da compra, você recebe as instruções de acesso ao produto digital. Todo o processo de pagamento acontece em ambiente seguro.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 max-w-5xl mx-auto">
            {guarantees.map(({ icon: Icon, title }, i) => (
              <Card key={i} className="p-6 text-center bg-card border-border/60 shadow-soft rounded-2xl hover:shadow-card transition-smooth">
                <div className="w-14 h-14 rounded-2xl bg-sage-soft mx-auto flex items-center justify-center mb-4">
                  <Icon className="w-7 h-7 text-primary" />
                </div>
                <p className="font-display font-semibold text-chocolate">{title}</p>
              </Card>
            ))}
          </div>
          <p className="text-center text-xs text-muted-foreground mt-10 italic">
            [ADICIONAR INFORMAÇÃO DE GARANTIA, SE EXISTIR]
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 md:py-28 bg-cream-deep/40">
        <div className="container mx-auto px-4 max-w-3xl">
          <SectionTitle eyebrow="FAQ">Perguntas frequentes</SectionTitle>
          <Accordion type="single" collapsible className="space-y-3">
            {faqs.map((f, i) => (
              <AccordionItem key={i} value={`item-${i}`} className="bg-card border border-border/60 rounded-2xl px-6 shadow-soft">
                <AccordionTrigger className="text-left font-display font-semibold text-chocolate text-lg hover:no-underline py-5">
                  {f.q}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed pb-5">
                  {f.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="py-20 md:py-28 bg-gradient-hero">
        <div className="container mx-auto px-4 text-center max-w-3xl">
          <Sparkles className="w-10 h-10 text-accent mx-auto mb-6" />
          <h2 className="text-3xl md:text-5xl font-display font-bold text-chocolate leading-tight mb-6">
            Você não precisa abandonar os doces para cuidar melhor da sua alimentação
          </h2>
          <p className="text-lg text-muted-foreground mb-10">
            Comece hoje com receitas simples, gostosas e sem açúcar para deixar sua rotina mais equilibrada sem perder o prazer de comer bem.
          </p>
          <div className="flex flex-col items-center gap-3">
            <CTAButton size="xl" pulse>Quero acessar agora</CTAButton>
            <SecureMicro />
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-chocolate text-cream/80 py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-8 justify-between items-center md:items-start">
            <div className="text-center md:text-left">
              <div className="flex items-center gap-2 justify-center md:justify-start mb-2">
                <Cookie className="w-5 h-5 text-accent" />
                <span className="font-display font-bold text-cream text-lg">Doces Sem Açúcar</span>
              </div>
              <p className="text-sm">Produto digital • Compra segura</p>
            </div>
            <nav className="flex flex-wrap gap-6 text-sm justify-center">
              <a href="#" className="hover:text-cream transition-smooth">Política de Privacidade</a>
              <a href="#" className="hover:text-cream transition-smooth">Termos de Uso</a>
              <a href="#" className="hover:text-cream transition-smooth">Contato</a>
            </nav>
          </div>
          <div className="border-t border-cream/10 mt-8 pt-6 text-center text-xs text-cream/60">
            <p>Este produto não substitui orientação médica ou nutricional.</p>
            <p className="mt-2">© {new Date().getFullYear()} Doces Sem Açúcar. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
