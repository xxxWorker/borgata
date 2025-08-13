import { useEffect, useMemo } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { ArrowLeft, CheckCircle, Clock, Zap, DollarSign } from "lucide-react";

const Commercial = () => {
  useEffect(() => {
    document.title = "Коммерческая страница — Borgata";
  }, []);

  const structuredData = useMemo(() => ({
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Borgata — Медиа продакшн услуги",
    "description": "Полный цикл видеопродакшна: от концепции до релиза",
    "provider": {
      "@type": "Organization",
      "name": "Borgata"
    }
  }), []);

  return (
    <div className="min-h-screen bg-background">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      
      {/* Header */}
      <header className="sticky top-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border/30">
        <div className="container py-4 flex items-center justify-between">
          <a href="/" className="flex items-center gap-2 story-link">
            <ArrowLeft size={20} />
            <span className="font-display text-xl font-bold">Borgata</span>
          </a>
          <a href="/#contact">
            <Button variant="hero" size="sm">
              Связаться с нами
            </Button>
          </a>
        </div>
      </header>

      <main className="container py-12 space-y-16">
        {/* Hero */}
        <section className="text-center max-w-4xl mx-auto">
          <h1 className="font-display text-4xl md:text-6xl font-bold mb-6">
            Услуги и <span className="text-primary">прайс</span>
          </h1>
          <p className="text-xl text-muted-foreground mb-8">
            Прозрачные условия, фиксированные сроки, предсказуемый результат
          </p>
        </section>

        {/* Service Packages */}
        <section>
          <h2 className="font-display text-3xl font-bold mb-8 text-center">Пакеты услуг</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-border/50 hover-scale">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Zap className="text-primary" size={24} />
                  Стандарт
                </CardTitle>
                <div className="text-2xl font-bold">от 300₽</div>
                <p className="text-sm text-muted-foreground">За секунду контента</p>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center gap-2">
                  <CheckCircle size={16} className="text-primary" />
                  <span className="text-sm">Сценарий и раскадровка</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle size={16} className="text-primary" />
                  <span className="text-sm">Съёмка до 8 часов</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle size={16} className="text-primary" />
                  <span className="text-sm">Базовый монтаж</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle size={16} className="text-primary" />
                  <span className="text-sm">1 правка</span>
                </div>
              </CardContent>
            </Card>

            <Card className="border-primary border-2 hover-scale">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <DollarSign className="text-primary" size={24} />
                  Премиум
                </CardTitle>
                <div className="text-2xl font-bold">от 800₽</div>
                <p className="text-sm text-muted-foreground">За секунду контента</p>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center gap-2">
                  <CheckCircle size={16} className="text-primary" />
                  <span className="text-sm">Всё из пакета "Стандарт"</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle size={16} className="text-primary" />
                  <span className="text-sm">Профессиональный свет</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle size={16} className="text-primary" />
                  <span className="text-sm">Цветокоррекция</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle size={16} className="text-primary" />
                  <span className="text-sm">Звуковой дизайн</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle size={16} className="text-primary" />
                  <span className="text-sm">До 3 правок</span>
                </div>
              </CardContent>
            </Card>

            <Card className="border-border/50 hover-scale">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Clock className="text-primary" size={24} />
                  Полный цикл
                </CardTitle>
                <div className="text-2xl font-bold">от 1500₽</div>
                <p className="text-sm text-muted-foreground">За секунду контента</p>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center gap-2">
                  <CheckCircle size={16} className="text-primary" />
                  <span className="text-sm">Всё из пакета "Премиум"</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle size={16} className="text-primary" />
                  <span className="text-sm">Кастинг актёров</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle size={16} className="text-primary" />
                  <span className="text-sm">Подбор локаций</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle size={16} className="text-primary" />
                  <span className="text-sm">VFX и анимация</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle size={16} className="text-primary" />
                  <span className="text-sm">Неограниченные правки</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Timeline & Process */}
        <section>
          <h2 className="font-display text-3xl font-bold mb-8 text-center">Этапы работы</h2>
          <div className="grid md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-primary font-bold">1</span>
              </div>
              <h3 className="font-semibold mb-2">Пре-продакшн</h3>
              <p className="text-sm text-muted-foreground">Концепция, сценарий, планирование. 3-7 дней</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-primary font-bold">2</span>
              </div>
              <h3 className="font-semibold mb-2">Продакшн</h3>
              <p className="text-sm text-muted-foreground">Съёмочный процесс. 1-3 дня</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-primary font-bold">3</span>
              </div>
              <h3 className="font-semibold mb-2">Постпродакшн</h3>
              <p className="text-sm text-muted-foreground">Монтаж, цветокоррекция, звук. 5-10 дней</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-primary font-bold">4</span>
              </div>
              <h3 className="font-semibold mb-2">Доставка</h3>
              <p className="text-sm text-muted-foreground">Финальные файлы, адаптации. 1-2 дня</p>
            </div>
          </div>
        </section>

        {/* Brief Form */}
        <section className="max-w-2xl mx-auto">
          <h2 className="font-display text-3xl font-bold mb-8 text-center">Получить расчёт</h2>
          <Card className="border-border/50">
            <CardHeader>
              <CardTitle>Заполните бриф</CardTitle>
              <p className="text-muted-foreground">Ответим с подробным расчётом в течение дня</p>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="name">Имя</Label>
                  <Input id="name" placeholder="Ваше имя" />
                </div>
                <div>
                  <Label htmlFor="contact">Контакт</Label>
                  <Input id="contact" placeholder="Email или Telegram" />
                </div>
              </div>
              
              <div>
                <Label htmlFor="content-type">Тип контента</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Выберите тип" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="commercial">Рекламный ролик</SelectItem>
                    <SelectItem value="music-video">Музыкальный клип</SelectItem>
                    <SelectItem value="reels">Короткие видео (reels)</SelectItem>
                    <SelectItem value="show">Шоу/программа</SelectItem>
                    <SelectItem value="post">Только постпродакшн</SelectItem>
                    <SelectItem value="film">Кино/документалка</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Label htmlFor="budget">Бюджетная вилка</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Ориентировочный бюджет" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="50-150">50-150 тыс. ₽</SelectItem>
                    <SelectItem value="150-500">150-500 тыс. ₽</SelectItem>
                    <SelectItem value="500-1000">500 тыс. - 1 млн ₽</SelectItem>
                    <SelectItem value="1000+">Более 1 млн ₽</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Label htmlFor="deadline">Дедлайн</Label>
                <Input id="deadline" type="date" />
              </div>

              <div>
                <Label htmlFor="references">Референсы</Label>
                <Textarea 
                  id="references" 
                  placeholder="Ссылки на референсы, описание задач, пожелания..."
                  rows={4}
                />
              </div>

              <Button className="w-full" size="lg">
                Отправить бриф
              </Button>
            </CardContent>
          </Card>
        </section>
      </main>
    </div>
  );
};

export default Commercial;