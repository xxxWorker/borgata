import { useEffect, useMemo } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Camera, Clapperboard, Sparkles } from "lucide-react";

const Index = () => {
  useEffect(() => {
    document.title = "Borgata — медиа продакшн";
  }, []);

  const orgJsonLd = useMemo(() => ({
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Borgata",
    url: typeof window !== 'undefined' ? window.location.origin : '',
    logo: "/favicon.ico",
    sameAs: []
  }), []);

  return (
    <div className="min-h-screen bg-background">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(orgJsonLd) }} />

      <header className="container py-6 flex items-center justify-between">
        <a href="#top" className="font-display text-2xl font-extrabold tracking-wide story-link">Borgata</a>
        <nav className="hidden md:flex items-center gap-8 text-sm">
          <a href="#services" className="story-link">Услуги</a>
          <a href="#portfolio" className="story-link">Портфолио</a>
          <a href="#about" className="story-link">О нас</a>
          <a href="#contact" className="story-link">Контакты</a>
        </nav>
      </header>

      <main>
        {/* HERO */}
        <section id="top" className="relative min-h-screen flex items-center hero-gradient">
          <div
            className="absolute inset-0 bg-cover bg-center opacity-40"
            style={{ backgroundImage: "url('/images/borgata-hero.jpg')" }}
            aria-hidden
          />
          <div className="absolute inset-0 bg-gradient-to-br from-background/95 via-background/80 to-primary/10" aria-hidden />

          <div className="container relative z-10 py-32">
            <div className="max-w-4xl">
              <div 
                className="inline-flex items-center gap-2 rounded-full px-4 py-2 bg-primary/20 border border-primary/30 text-primary text-sm uppercase tracking-wider pulse-glow stagger-fade"
                style={{ '--delay': '0s' } as any}
              >
                Премиальный медиа продакшн
              </div>
              
              <h1 
                className="mt-8 font-display text-6xl md:text-8xl lg:text-9xl font-extrabold leading-[0.9] text-glow stagger-fade"
                style={{ '--delay': '0.2s' } as any}
              >
                Создаём<br />
                <span className="text-primary floating">киношный</span><br />
                образ бренда
              </h1>
              
              <p 
                className="mt-8 max-w-3xl text-xl md:text-2xl text-muted-foreground leading-relaxed stagger-fade"
                style={{ '--delay': '0.4s' } as any}
              >
                Реклама, клипы и бренд-видео полного цикла: от креативной концепции и сценария до финального постпродакшна. Работаем с Sony FX, RED и Arri — снимаем в 4K и 8K.
              </p>
              
              <div 
                className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 text-sm stagger-fade"
                style={{ '--delay': '0.6s' } as any}
              >
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full bounce-subtle"></div>
                  <span className="text-muted-foreground">10+ лет опыта</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full bounce-subtle" style={{ animationDelay: '0.5s' }}></div>
                  <span className="text-muted-foreground">200+ проектов</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full bounce-subtle" style={{ animationDelay: '1s' }}></div>
                  <span className="text-muted-foreground">Полный цикл</span>
                </div>
              </div>
              
              <div 
                className="mt-12 flex flex-col sm:flex-row gap-6 stagger-fade"
                style={{ '--delay': '0.8s' } as any}
              >
                <a href="#portfolio">
                  <Button variant="hero" size="lg" className="hover-scale pulse-glow">
                    Смотреть портфолио
                  </Button>
                </a>
                <a href="#contact">
                  <Button variant="outline" size="lg" className="hover-scale border-primary/30 hover:border-primary">
                    Рассчитать стоимость
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* SERVICES */}
        <section id="services" className="container py-24 md:py-32">
          <div className="mb-16">
            <h2 className="font-display text-4xl md:text-5xl font-bold animate-slide-up">Что мы делаем</h2>
            <p className="mt-4 text-xl text-muted-foreground animate-slide-up" style={{ animationDelay: '0.1s' }}>
              Фокус на качестве картинки, темпе и драматургии. Каждый кадр — произведение искусства.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="hover-scale border-border/50 bg-card/50 backdrop-blur-sm animate-slide-up" style={{ animationDelay: '0.2s' }}>
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-xl">
                  <Camera className="text-primary" />Видео продакшн
                </CardTitle>
                <CardDescription className="text-base">Промо- и бренд-видео, корпоративные фильмы полного цикла.</CardDescription>
              </CardHeader>
              <CardContent className="text-muted-foreground">
                Планирование, съёмка, свет, звук — всё под ключ. Работаем с профессиональным оборудованием: Sony FX6, RED Komodo, Arri Alexa.
              </CardContent>
            </Card>
            <Card className="hover-scale border-border/50 bg-card/50 backdrop-blur-sm animate-slide-up" style={{ animationDelay: '0.3s' }}>
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-xl">
                  <Clapperboard className="text-primary" />Рекламные ролики
                </CardTitle>
                <CardDescription className="text-base">Перфоманс- и имиджевые кампании для брендов.</CardDescription>
              </CardHeader>
              <CardContent className="text-muted-foreground">
                Креатив, сценарии, кастинг, локации, продакшн. От концепции до релиза — создаём ролики, которые продают и запоминаются.
              </CardContent>
            </Card>
            <Card className="hover-scale border-border/50 bg-card/50 backdrop-blur-sm animate-slide-up" style={{ animationDelay: '0.4s' }}>
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-xl">
                  <Sparkles className="text-primary" />Постпродакшн
                </CardTitle>
                <CardDescription className="text-base">Монтаж, цветокоррекция, звук, VFX, анимация.</CardDescription>
              </CardHeader>
              <CardContent className="text-muted-foreground">
                Передаём историю через ритм, цвет и звук. DaVinci Resolve, Adobe After Effects, Pro Tools — инструменты кинематографа.
              </CardContent>
            </Card>
          </div>
        </section>

        {/* PORTFOLIO */}
        <section id="portfolio" className="container py-24 md:py-32">
          <div className="mb-16">
            <h2 className="font-display text-4xl md:text-5xl font-bold animate-slide-up">Портфолио</h2>
            <p className="mt-4 text-xl text-muted-foreground animate-slide-up" style={{ animationDelay: '0.1s' }}>
              Фрагменты недавних проектов. Каждый кадр рассказывает историю.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <figure className="rounded-xl overflow-hidden group hover-scale animate-slide-up border border-border/30" style={{ animationDelay: '0.2s' }}>
              <img 
                src="/images/portfolio-1.jpg" 
                alt="Кадр рекламного ролика — предметная съёмка с красной подсветкой" 
                loading="lazy" 
                className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500" 
              />
            </figure>
            <figure className="rounded-xl overflow-hidden group hover-scale animate-slide-up border border-border/30" style={{ animationDelay: '0.3s' }}>
              <img 
                src="/images/portfolio-2.jpg" 
                alt="Кадр клипа — силуэт танцовщицы в красном свете" 
                loading="lazy" 
                className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500" 
              />
            </figure>
            <figure className="rounded-xl overflow-hidden group hover-scale animate-slide-up border border-border/30" style={{ animationDelay: '0.4s' }}>
              <img 
                src="/images/portfolio-3.jpg" 
                alt="Бэкстейдж — камера на риге, мониторы режиссёра" 
                loading="lazy" 
                className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500" 
              />
            </figure>
          </div>
        </section>

        {/* ABOUT */}
        <section id="about" className="container py-16 md:py-24">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div>
              <h2 className="font-display text-3xl md:text-4xl font-bold">Borgata — команда визуальных рассказчиков</h2>
              <p className="mt-4 text-muted-foreground">Мы объединяем режиссуру, продакшн и пост, чтобы создавать истории, которые живут дольше кампаний.</p>
            </div>
            <div className="rounded-lg border p-6">
              <ul className="space-y-3 text-sm">
                <li>• Полный цикл: идея → продакшн → пост</li>
                <li>• Сильная режиссура и операторская работа</li>
                <li>• Тщательная цветокоррекция и звук</li>
              </ul>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section id="contact" className="py-16 md:py-24 bg-primary text-primary-foreground">
          <div className="container">
            <h2 className="font-display text-3xl md:text-4xl font-bold">Готовы обсудить ваш проект?</h2>
            <p className="mt-2 opacity-90">Напишите нам — ответим в течение дня.</p>
            <div className="mt-6 flex flex-col sm:flex-row gap-4">
              <a href="mailto:hello@borgata.studio"><Button variant="secondary" size="lg" className="hover-scale">hello@borgata.studio</Button></a>
              <a href="#top"><Button variant="hero" size="lg" className="hover-scale">К брифу</Button></a>
            </div>
          </div>
        </section>
      </main>

      <footer className="container py-8 text-sm text-muted-foreground flex items-center justify-between">
        <span>© {new Date().getFullYear()} Borgata</span>
        <a className="story-link" href="#top">Наверх</a>
      </footer>
    </div>
  );
};

export default Index;
