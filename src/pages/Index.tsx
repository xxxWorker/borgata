import { useEffect, useMemo } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { 
  Camera, 
  Clapperboard, 
  Sparkles, 
  Users, 
  Video, 
  Mic,
  Play,
  ExternalLink,
  Mail,
  Phone,
  MessageCircle
} from "lucide-react";

const Index = () => {
  useEffect(() => {
    document.title = "Borgata — продакшн-сообщество";
  }, []);

  const orgJsonLd = useMemo(() => ({
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Borgata",
    url: typeof window !== 'undefined' ? window.location.origin : '',
    logo: "/favicon.ico",
    description: "Продакшн-сообщество. Рекламу, клипы, кино, шоу и ивенты — от идеи до постпродакшна",
    sameAs: []
  }), []);

  return (
    <div className="min-h-screen bg-background">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(orgJsonLd) }} />

      {/* Sticky Navigation */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border/30">
        <div className="container py-4">
          <nav className="flex items-center justify-between">
            <a href="#hero" className="font-display text-xl font-bold story-link">Borgata</a>
            <div className="hidden md:flex items-center gap-6 text-sm">
              <a href="#about" className="story-link">О нас</a>
              <a href="#services" className="story-link">Услуги</a>
              <a href="#portfolio" className="story-link">Портфолио</a>
              <a href="#reel" className="story-link">Шоурил</a>
              <a href="#team" className="story-link">Команда</a>
              <a href="#commercial" className="story-link">Коммерция</a>
              <a href="#contacts" className="story-link">Контакты</a>
            </div>
          </nav>
        </div>
      </header>

      <main>
        {/* HERO - 100vh/100vw */}
        <section id="hero" className="snap-section relative w-screen h-screen flex items-center justify-center overflow-hidden">
          <div
            className="absolute inset-0 bg-cover bg-center opacity-30"
            style={{ backgroundImage: "url('/images/borgata-hero.jpg')" }}
            aria-hidden
          />
          <div className="absolute inset-0 bg-gradient-to-br from-background/95 via-background/80 to-primary/20" aria-hidden />

          <div className="relative z-10 text-center max-w-5xl px-6">
            <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-extrabold leading-[0.9] text-glow mb-8">
              Borgata — <br />
              <span className="text-primary floating">продакшн-сообщество</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-4xl mx-auto leading-relaxed">
              Объединяем режиссёров, продюсеров и операторов. Делаем рекламу, клипы, кино, шоу и ивенты — от идеи до постпродакшна.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <a href="#reel">
                <Button variant="hero" size="lg" className="hover-scale pulse-glow">
                  <Play className="mr-2" size={20} />
                  Смотреть шоурил
                </Button>
              </a>
              <a href="/commercial">
                <Button variant="outline" size="lg" className="hover-scale border-primary/30 hover:border-primary">
                  <ExternalLink className="mr-2" size={16} />
                  Коммерческая страница
                </Button>
              </a>
            </div>
          </div>
        </section>

        {/* ABOUT - О нас */}
        <section id="about" className="snap-section min-h-screen flex items-center py-24">
          <div className="container">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="font-display text-4xl md:text-5xl font-bold mb-8 animate-slide-up">О нас</h2>
              <p className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed">
                Продакшн Borgata — это уникальное сообщество единомышленников. Наши ценности: оригинальность, сотрудничество и страсть к искусству.
              </p>
              <a href="/about">
                <Button variant="outline" size="lg" className="hover-scale">
                  Подробнее об участниках и процессах
                </Button>
              </a>
            </div>
          </div>
        </section>

        {/* SERVICES - Услуги */}
        <section id="services" className="snap-section min-h-screen flex items-center py-24">
          <div className="container">
            <div className="text-center mb-16">
              <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">Услуги</h2>
              <p className="text-xl text-muted-foreground">
                Полный спектр видеопродакшна под ключ
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
              <Card className="hover-scale border-border/50 bg-card/50 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    <Camera className="text-primary" />
                    Рекламные ролики
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">Имиджевые и перфоманс-кампании для брендов</p>
                  <a href="/services/commercial" className="text-primary story-link text-sm">
                    Детали и кейсы →
                  </a>
                </CardContent>
              </Card>

              <Card className="hover-scale border-border/50 bg-card/50 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    <Mic className="text-primary" />
                    Музыкальные клипы
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">Креативные концепции для музыкантов</p>
                  <a href="/services/music-video" className="text-primary story-link text-sm">
                    Детали и кейсы →
                  </a>
                </CardContent>
              </Card>

              <Card className="hover-scale border-border/50 bg-card/50 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    <Video className="text-primary" />
                    Короткие видео
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">Reels, Stories, вирусный контент</p>
                  <a href="/services/reels" className="text-primary story-link text-sm">
                    Детали и кейсы →
                  </a>
                </CardContent>
              </Card>

              <Card className="hover-scale border-border/50 bg-card/50 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    <Clapperboard className="text-primary" />
                    Шоу
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">Телевизионные и онлайн-программы</p>
                  <a href="/services/shows" className="text-primary story-link text-sm">
                    Детали и кейсы →
                  </a>
                </CardContent>
              </Card>

              <Card className="hover-scale border-border/50 bg-card/50 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    <Sparkles className="text-primary" />
                    Постпродакшн
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">Монтаж, цветокоррекция, VFX, звук</p>
                  <a href="/services/post" className="text-primary story-link text-sm">
                    Детали и кейсы →
                  </a>
                </CardContent>
              </Card>

              <Card className="hover-scale border-border/50 bg-card/50 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    <Users className="text-primary" />
                    Кино
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">Короткий метр, документальное кино</p>
                  <a href="/services/film" className="text-primary story-link text-sm">
                    Детали и кейсы →
                  </a>
                </CardContent>
              </Card>
            </div>

            <div className="text-center">
              <a href="/commercial">
                <Button variant="hero" size="lg" className="hover-scale">
                  Все услуги и прайс
                </Button>
              </a>
            </div>
          </div>
        </section>

        {/* PORTFOLIO - Портфолио тизер */}
        <section id="portfolio" className="snap-section min-h-screen flex items-center py-24">
          <div className="container">
            <div className="text-center mb-16">
              <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">Портфолио</h2>
              <p className="text-xl text-muted-foreground">
                Избранные работы нашего сообщества
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-6 mb-12">
              {[1, 2, 3, 4, 5, 6].map((i) => (
                <figure key={i} className="rounded-xl overflow-hidden group hover-scale border border-border/30">
                  <img 
                    src={`/images/portfolio-${i > 3 ? ((i - 4) % 3) + 1 : i}.jpg`}
                    alt={`Кадр из проекта ${i}`}
                    loading="lazy" 
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500" 
                  />
                </figure>
              ))}
            </div>

            <div className="text-center">
              <a href="/portfolio">
                <Button variant="outline" size="lg" className="hover-scale">
                  Смотрите больше работ в портфолио
                </Button>
              </a>
            </div>
          </div>
        </section>

        {/* SHOWREEL - Шоурил */}
        <section id="reel" className="snap-section min-h-screen flex items-center py-24">
          <div className="container">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="font-display text-4xl md:text-5xl font-bold mb-8">Шоурил</h2>
              
              <div className="relative rounded-xl overflow-hidden mb-8 bg-card border border-border/30">
                <div className="aspect-video bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
                  <div className="text-center">
                    <Play size={64} className="text-primary mx-auto mb-4" />
                    <p className="text-muted-foreground">
                      Шоурил будет загружен позже
                    </p>
                    {/* TODO: Embed video without autoplay */}
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <Button variant="hero" size="lg" className="hover-scale">
                  <ExternalLink className="mr-2" size={16} />
                  Открыть в полноэкранном режиме
                </Button>
                <a href="/reel">
                  <Button variant="outline" size="lg" className="hover-scale">
                    Ещё видео
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* TEAM - Команда тизер */}
        <section id="team" className="snap-section min-h-screen flex items-center py-24">
          <div className="container">
            <div className="text-center mb-16">
              <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">Команда</h2>
              <p className="text-xl text-muted-foreground">
                Творческие профессионалы с общими ценностями
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
              {[
                { name: "Алексей Режиссёров", role: "Режиссёр", focus: "Концепции и визуальные решения" },
                { name: "Мария Продюсер", role: "Продюсер", focus: "Организация съёмочного процесса" },
                { name: "Дмитрий Оператор", role: "Оператор", focus: "Кинематография и свет" },
                { name: "Анна Монтажёр", role: "Монтажёр", focus: "Ритм и драматургия" },
                { name: "Сергей Звукорежиссёр", role: "Звукорежиссёр", focus: "Звуковой дизайн" },
                { name: "Ольга Колорист", role: "Колорист", focus: "Цветокоррекция" }
              ].map((member, i) => (
                <div key={i} className="text-center">
                  <div className="w-24 h-24 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <Users size={32} className="text-primary" />
                    {/* TODO: Add real team photos */}
                  </div>
                  <h3 className="font-semibold text-lg mb-1">{member.name}</h3>
                  <p className="text-primary text-sm mb-2">{member.role}</p>
                  <p className="text-muted-foreground text-sm">{member.focus}</p>
                </div>
              ))}
            </div>

            <div className="text-center">
              <a href="/team">
                <Button variant="outline" size="lg" className="hover-scale">
                  Вся команда и партнёры
                </Button>
              </a>
            </div>
          </div>
        </section>

        {/* COMMERCIAL CTA */}
        <section id="commercial" className="snap-section min-h-screen flex items-center py-24 bg-gradient-to-br from-background via-secondary/10 to-background">
          <div className="container">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 rounded-full px-6 py-3 bg-primary/10 border border-primary/20 text-primary text-sm uppercase tracking-wider mb-8 pulse-glow">
                Коммерческое предложение
              </div>
              
              <h2 className="font-display text-4xl md:text-6xl font-bold mb-8 text-glow">
                Бриф, бюджет, сроки — <br />
                <span className="text-primary floating">обсудим прямо сейчас</span>
              </h2>
              
              <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed">
                Прозрачные условия, фиксированные сроки, предсказуемый результат. Работаем с проектами от 50 тысяч рублей.
              </p>
              
              <a href="/commercial">
                <Button variant="hero" size="lg" className="hover-scale pulse-glow text-lg px-8 py-4">
                  Перейти на коммерческую страницу
                </Button>
              </a>
            </div>
          </div>
        </section>

        {/* CONTACTS */}
        <section id="contacts" className="snap-section min-h-screen flex items-center py-24">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">Контакты</h2>
                <p className="text-xl text-muted-foreground">
                  Свяжитесь с нами удобным способом
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-12">
                {/* Contact Form */}
                <Card className="border-border/50">
                  <CardHeader>
                    <CardTitle>Отправить запрос</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <Label htmlFor="contact-name">Имя</Label>
                      <Input id="contact-name" placeholder="Как к вам обращаться?" />
                    </div>
                    <div>
                      <Label htmlFor="contact-email">Почта или Телеграм</Label>
                      <Input id="contact-email" placeholder="Для связи с вами" />
                    </div>
                    <div>
                      <Label htmlFor="contact-message">Сообщение</Label>
                      <Textarea 
                        id="contact-message" 
                        placeholder="Расскажите о вашем проекте..."
                        rows={4}
                      />
                    </div>
                    <Button className="w-full" size="lg">
                      Отправить запрос
                    </Button>
                  </CardContent>
                </Card>

                {/* Contact Info */}
                <div className="space-y-8">
                  <div>
                    <h3 className="font-semibold text-lg mb-4">Прямые контакты</h3>
                    <div className="space-y-3">
                      <a href="mailto:hello@borgata.studio" className="flex items-center gap-3 story-link">
                        <Mail size={20} className="text-primary" />
                        <span>hello@borgata.studio</span>
                      </a>
                      <a href="tel:+74951234567" className="flex items-center gap-3 story-link">
                        <Phone size={20} className="text-primary" />
                        <span>+7 (495) 123-45-67</span>
                      </a>
                      <a href="https://t.me/borgata_studio" className="flex items-center gap-3 story-link">
                        <MessageCircle size={20} className="text-primary" />
                        <span>@borgata_studio</span>
                      </a>
                    </div>
                  </div>

                  <div>
                    <h3 className="font-semibold text-lg mb-4">Социальные сети</h3>
                    <div className="space-y-3">
                      <a href="#" className="flex items-center gap-3 story-link">
                        <span>Instagram</span>
                        <ExternalLink size={16} />
                      </a>
                      <a href="#" className="flex items-center gap-3 story-link">
                        <span>YouTube</span>
                        <ExternalLink size={16} />
                      </a>
                      <a href="#" className="flex items-center gap-3 story-link">
                        <span>Vimeo</span>
                        <ExternalLink size={16} />
                      </a>
                    </div>
                  </div>

                  <div>
                    <h3 className="font-semibold text-lg mb-4">Офис</h3>
                    <p className="text-muted-foreground mb-2">
                      Москва, ул. Примерная, д. 123
                    </p>
                    <a href="#" className="text-primary story-link text-sm">
                      Показать на карте →
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="py-8 border-t border-border/30">
        <div className="container flex items-center justify-between text-sm text-muted-foreground">
          <span>© {new Date().getFullYear()} Borgata</span>
          <a className="story-link" href="#hero">Наверх</a>
        </div>
      </footer>
    </div>
  );
};

export default Index;
