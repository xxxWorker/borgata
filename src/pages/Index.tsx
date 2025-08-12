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
        <section id="top" className="relative min-h-[70vh] flex items-center">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: "url('/images/borgata-hero.jpg')" }}
            aria-hidden
          />
          <div className="absolute inset-0 bg-gradient-to-tr from-secondary/90 via-secondary/70 to-primary/20" aria-hidden />

          <div className="container relative z-10 py-20">
            <div className="inline-flex items-center gap-2 rounded-full px-3 py-1 bg-secondary/80 text-secondary-foreground text-xs uppercase tracking-wider">
              Медиа продакшн
            </div>
            <h1 className="mt-6 font-display text-5xl md:text-7xl font-extrabold leading-[1.05] animate-fade-in">
              Создаём киношный образ вашего бренда
            </h1>
            <p className="mt-4 max-w-2xl text-lg md:text-xl text-muted-foreground animate-fade-in">
              Реклама, клипы и бренд-видео полного цикла: от идеи и сценария до постпродакшна.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <a href="#portfolio"><Button variant="hero" size="lg" className="hover-scale">Смотреть портфолио</Button></a>
              <a href="#contact"><Button variant="outline" size="lg" className="hover-scale">Рассчитать стоимость</Button></a>
            </div>
          </div>
        </section>

        {/* SERVICES */}
        <section id="services" className="container py-16 md:py-24">
          <div className="mb-8 md:mb-12">
            <h2 className="font-display text-3xl md:text-4xl font-bold">Что мы делаем</h2>
            <p className="mt-2 text-muted-foreground">Фокус на качестве картинки, темпе и драматургии.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="hover-scale">
              <CardHeader>
                <CardTitle className="flex items-center gap-3"><Camera />Видео продакшн</CardTitle>
                <CardDescription>Промо- и бренд-видео, корпоративные фильмы.</CardDescription>
              </CardHeader>
              <CardContent className="text-sm text-muted-foreground">Планирование, съёмка, свет, звук — всё под ключ.</CardContent>
            </Card>
            <Card className="hover-scale">
              <CardHeader>
                <CardTitle className="flex items-center gap-3"><Clapperboard />Рекламные ролики</CardTitle>
                <CardDescription>Перфоманс- и имиджевые кампании.</CardDescription>
              </CardHeader>
              <CardContent className="text-sm text-muted-foreground">Креатив, сценарии, кастинг, локации, продакшн.</CardContent>
            </Card>
            <Card className="hover-scale">
              <CardHeader>
                <CardTitle className="flex items-center gap-3"><Sparkles />Постпродакшн</CardTitle>
                <CardDescription>Монтаж, цветокор, звук, VFX.</CardDescription>
              </CardHeader>
              <CardContent className="text-sm text-muted-foreground">Передаём историю через ритм, цвет и звук.</CardContent>
            </Card>
          </div>
        </section>

        {/* PORTFOLIO */}
        <section id="portfolio" className="container py-16 md:py-24">
          <div className="mb-8 md:mb-12">
            <h2 className="font-display text-3xl md:text-4xl font-bold">Портфолио</h2>
            <p className="mt-2 text-muted-foreground">Фрагменты недавних проектов.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            <figure className="rounded-lg overflow-hidden group hover-scale">
              <img src="/images/portfolio-1.jpg" alt="Кадр рекламного ролика — предметная съёмка с красной подсветкой" loading="lazy" className="w-full h-full object-cover" />
            </figure>
            <figure className="rounded-lg overflow-hidden group hover-scale">
              <img src="/images/portfolio-2.jpg" alt="Кадр клипа — силуэт танцовщицы в красном свете" loading="lazy" className="w-full h-full object-cover" />
            </figure>
            <figure className="rounded-lg overflow-hidden group hover-scale">
              <img src="/images/portfolio-3.jpg" alt="Бэкстейдж — камера на риге, мониторы режиссёра" loading="lazy" className="w-full h-full object-cover" />
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
