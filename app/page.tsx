import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import ScrollReveal from "@/components/ScrollReveal"
import LogoStrip from "@/components/LogoStrip"
import WerkwijzePanel from "@/components/WerkwijzePanel"
import CasesSlider from "@/components/CasesSlider"
import FaqAccordion from "@/components/FaqAccordion"
import StatsCounter from "@/components/StatsCounter"
import BeforeAfterSlider from "@/components/BeforeAfterSlider"

export const metadata: Metadata = {
  title: "Groeimaten | Marketing voor Keuken- en Badkamerbedrijven",
  description: "Groeimaten helpt keuken- en badkamerbedrijven groeien met bewezen strategie. Van advertentie tot kwalitatieve afspraak die ook écht opdaagt.",
}

const faqItems = [
  {
    question: "Werken jullie ook voor andere sectoren dan keuken en badkamer?",
    answer: "Nee. Wij werken uitsluitend voor keuken- en badkamerbedrijven. Die focus is onze kracht: we kennen jouw klant, jouw sector en jouw uitdagingen als geen ander.",
  },
  {
    question: "Hoe snel zie ik resultaat?",
    answer: "Bij Meta Ads zijn de eerste leads er vaak al binnen de eerste week. Google &amp; AI Ranking duurt 3–6 maanden voor structurele groei. We zijn altijd eerlijk over wat je wanneer kunt verwachten.",
  },
  {
    question: "Wat kost het globaal?",
    answer: "Dat hangt af van jouw situatie. Advertentiebeheer start vanaf €800 per maand, een website vanaf €3.000 eenmalig. We bespreken dit altijd in een gratis gesprek, geen verrassingen achteraf.",
  },
  {
    question: "Werken jullie ook met kleinere showrooms?",
    answer: "Ja, zolang je de ambitie hebt om te groeien zijn wij de juiste partner. Grootte maakt niet uit. Focus en wil om te groeien wel.",
  },
  {
    question: "Wat maakt jullie anders dan een gewoon marketingbureau?",
    answer: "Wij kennen de keuken- en badkamermarkt als geen ander. Geen leercurve, geen generieke aanpak. Dag 1 aan de slag. Een generiek bureau leert jouw markt misschien na maanden. Wij zijn er al.",
  },
]

const ArrowRight = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
    <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)

export default function HomePage() {
  return (
    <>
      {/* HERO */}
      <section className="hero hero--fullscreen" id="home">
        <div className="hero__bg">
          <Image
            className="hero__bg-img"
            src="/images/hero.webp"
            alt="Groeimaten team aan het werk"
            fill
            priority
            sizes="100vw"
            style={{ objectFit: "cover" }}
          />
          <div className="hero__bg-overlay" />
        </div>
        <div className="container hero__inner">
          <div className="hero__content">
            <h1 className="hero__title reveal-up delay-1">
              Meer showroom&shy;afspraken.<br />
              <em>Elke maand.</em>
            </h1>
            <p className="hero__subtitle reveal-up delay-2">
              Groeimaten helpt keuken- en badkamerbedrijven groeien met bewezen strategie. Van advertentie tot kwalitatieve afspraak die ook écht opdaagt.
            </p>
            <div className="hero__actions reveal-up delay-3">
              <Link href="/contact" className="btn btn--blue btn--lg">
                Gratis strategiegesprek <ArrowRight />
              </Link>
              <Link href="/cases" className="btn btn--ghost btn--lg">Bekijk cases</Link>
            </div>
            <div className="hero__proof reveal-up delay-4">
              <div className="hero__proof-item">
                <span className="hero__proof-number">35+</span>
                <span className="hero__proof-label">merken geholpen groeien</span>
              </div>
              <div className="hero__proof-divider" aria-hidden="true" />
              <div className="hero__proof-item">
                <span className="hero__proof-number">100%</span>
                <span className="hero__proof-label">keuken &amp; badkamer specialist</span>
              </div>
              <div className="hero__proof-divider" aria-hidden="true" />
              <div className="hero__proof-item">
                <span className="hero__proof-number">5,0 ★</span>
                <span className="hero__proof-label">Google beoordeling</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* LOGO STRIP */}
      <LogoStrip />

      {/* SECTORSPECIALIST */}
      <section className="specialist-strip" aria-labelledby="specialist-heading">
        <div className="container">
          <div className="specialist-strip__inner">
            <div className="specialist-strip__eyebrow">Sector exclusief</div>
            <h2 className="specialist-strip__title" id="specialist-heading">
              Wij werken <em>uitsluitend</em> voor keuken- en badkamerbedrijven.<br />Geen uitzonderingen.
            </h2>
            <p className="specialist-strip__subtitle">
              Terwijl andere bureaus vandaag een bakkerij helpen en morgen een autogarage, doen wij maar één ding. Jouw branche. Elke dag. Dat is het verschil tussen een bureau dat jou begrijpt en één dat jou leert kennen.
            </p>
            <div className="specialist-strip__sectors">
              {[
                { icon: "home", label: "Keukenshowrooms" },
                { icon: "bath", label: "Badkamerzaken" },
                { icon: "grid", label: "Tegelbedrijven" },
                { icon: "star", label: "Premium segment" },
                { icon: "sun", label: "Midden- & hoogsegment" },
              ].map(({ label }) => (
                <div key={label} className="sector-pill">{label}</div>
              ))}
            </div>
            <div className="specialist-strip__no-list">
              {["Restaurants", "Kappers", "Webshops", "Autogarages", "Andere sectoren"].map((s) => (
                <div key={s} className="sector-pill sector-pill--no">
                  <span className="sector-pill__cross">✕</span> {s}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* IN DE MEDIA */}
      <section className="media-mention-section" aria-labelledby="media-heading">
        <div className="container">
          <div className="media-mention__inner">
            <ScrollReveal className="media-mention__visual">
              <div className="media-mention__frame">
                <Image src="/images/magazine-article.webp" alt="Groeimaten in K&D Magazine" width={480} height={320} loading="lazy" />
                <span className="media-mention__stamp">In de media</span>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={2} className="media-mention__content">
              <div className="media-mention__eyebrow">Erkend door de branche</div>
              <h2 className="media-mention__title" id="media-heading">
                Uitgelicht in<br /><em>K&amp;D Magazine</em>
              </h2>
              <p className="media-mention__text">
                Groeimaten werd door K&amp;D Magazine uitgelicht als dé specialist voor marketing in de keuken- en badkamersector. Een erkenning die bewijst dat onze aanpak werkt, niet alleen bij onze klanten, maar ook bij de sector zelf.
              </p>
              <blockquote className="media-mention__quote">"Met AI en marketing naar meer afspraken"</blockquote>
              <div className="media-mention__publication">
                <span>K&amp;D Magazine</span>
                <span className="media-mention__pub-dot" />
                <span>Keuken &amp; Bad vakblad</span>
                <span className="media-mention__pub-dot" />
                <Link href="/over-ons#media" style={{ color: "oklch(67% 0.09 75)", textDecoration: "none", fontWeight: 600 }}>
                  Lees het artikel →
                </Link>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* PAIN POINTS */}
      <section className="pain-section" id="probleem">
        <div className="container">
          <ScrollReveal className="pain-section__header">
            <h2 className="pain-section__title">Klinkt dit<br /><em>bekend?</em></h2>
            <p className="pain-section__intro">Veel keuken- en badkamerbedrijven lopen tegen dezelfde uitdagingen aan. De problemen zijn voorspelbaar. De oplossing niet.</p>
          </ScrollReveal>
          <div className="pain-grid">
            {[
              { n: "01", title: "Slechte leads die nooit komen opdagen", body: "Je krijgt aanvragen binnen, maar ze verschijnen nooit in de showroom. Tijdverspilling en frustratie, elke keer opnieuw." },
              { n: "02", title: "Onvoorspelbare instroom van klanten", body: "De ene maand druk, de andere maand stil. Geen structurele aanpak betekent geen structureel resultaat." },
              { n: "03", title: "Bureau dat jouw sector niet begrijpt", body: "Je werkt met een bureau dat ook bakkerijen en kappers bedient. Ze kennen jouw klant niet, en dat merk je aan de resultaten." },
              { n: "04", title: "Veel tijd kwijt aan slechte leads nabellen", body: "Uren per week aan de telefoon met mensen die toch niet komen. Tijd die je niet hebt en die je liever in je vak steekt." },
            ].map(({ n, title, body }, i) => (
              <ScrollReveal key={n} as="article" className="pain-card" delay={(i + 1) as 1 | 2 | 3 | 4}>
                <span className="pain-card__num" aria-hidden="true">{n}</span>
                <h3>{title}</h3>
                <p>{body}</p>
              </ScrollReveal>
            ))}
          </div>
          <ScrollReveal className="pain-cta">
            <Link href="/contact" className="btn btn--blue btn--lg">Plan een gratis strategiegesprek <ArrowRight /></Link>
          </ScrollReveal>
        </div>
      </section>

      {/* WERKWIJZE */}
      <section className="ww2" id="werkwijze">
        <div className="container">
          <ScrollReveal className="section-header">
            <span className="section-label">Onze werkwijze</span>
            <h2 className="section-title section-title--white">Van eerste gesprek<br /><em>tot meer klanten</em></h2>
            <p className="section-subtitle section-subtitle--light">Vier stappen. Eerlijk en transparant.</p>
          </ScrollReveal>
          <WerkwijzePanel />
          <ScrollReveal className="werkwijze-cta">
            <Link href="/contact" className="btn btn--blue btn--lg">Plan je gratis gesprek <ArrowRight /></Link>
          </ScrollReveal>
        </div>
      </section>

      {/* RESULTATEN */}
      <section className="resultaten-section" id="resultaten">
        <div className="resultaten-section__bg" aria-hidden="true" />
        <div className="container">
          <ScrollReveal className="resultaten-header">
            <h2 className="section-title section-title--white">Cijfers die<br />voor ons spreken</h2>
          </ScrollReveal>
          <ScrollReveal delay={1} className="stats-row">
            <div className="stat-item">
              <div className="stat-item__value">
                <StatsCounter target={100} suffix="%" />
              </div>
              <div className="stat-item__label">Sector specialist</div>
              <p className="stat-item__desc">Uitsluitend keuken &amp; badkamer. Nooit een andere sector.</p>
            </div>
            <div className="stat-item__sep" aria-hidden="true" />
            <div className="stat-item">
              <div className="stat-item__value">
                <StatsCounter target={35} suffix="+" />
              </div>
              <div className="stat-item__label">Merken geholpen groeien</div>
              <p className="stat-item__desc">Keuken- en badkamerbedrijven in heel Nederland.</p>
            </div>
            <div className="stat-item__sep" aria-hidden="true" />
            <div className="stat-item">
              <div className="stat-item__value"><span>5,0 ★</span></div>
              <div className="stat-item__label">Google beoordeling</div>
              <p className="stat-item__desc">5 reviews, allemaal 5 sterren.</p>
            </div>
          </ScrollReveal>
          <ScrollReveal delay={2} className="commitments">
            <p className="commitments__item">Een van de weinige specialisten in Nederland voor keuken- &amp; badkamerbedrijven</p>
            <p className="commitments__item">Volledige ontzorging: van strategie tot afspraken in je agenda</p>
            <p className="commitments__item">Directe communicatie, geen account managers, geen wachtrijen</p>
            <p className="commitments__item">Maandelijkse rapportages met concrete cijfers</p>
          </ScrollReveal>
          <ScrollReveal delay={3} className="werkwijze-photo" style={{ marginTop: "48px", marginBottom: "0" }}>
            <Image src="/images/founders-office.webp" alt="Jelle en Thomas van Groeimaten" width={1200} height={700} loading="lazy" />
          </ScrollReveal>
          <ScrollReveal className="resultaten-cta">
            <Link href="/cases" className="btn btn--blue btn--lg">Bekijk onze cases <ArrowRight /></Link>
          </ScrollReveal>
        </div>
      </section>

      {/* CASES SLIDER */}
      <section className="cases-slider" id="cases">
        <div className="container">
          <ScrollReveal className="section-header">
            <span className="section-label">Ons werk</span>
            <h2 className="section-title section-title--white">Uitgelichte<br /><em>cases</em></h2>
          </ScrollReveal>
          <CasesSlider />
          <ScrollReveal className="cases-cta">
            <Link href="/cases" className="btn btn--blue btn--lg">Bekijk alle cases <ArrowRight /></Link>
          </ScrollReveal>
        </div>
      </section>

      {/* VOOR EN NA */}
      <section className="voor-na" id="voor-na">
        <div className="container">
          <ScrollReveal className="section-header">
            <span className="section-label">Transformaties</span>
            <h2 className="section-title section-title--white">Voor &amp; na.<br /><em>Zie het verschil.</em></h2>
            <p className="section-subtitle section-subtitle--light">Van verouderde websites naar conversiegerichte showroom-ervaringen. Sleep de lijn om te vergelijken.</p>
          </ScrollReveal>
          <div className="vn-grid">
            <ScrollReveal delay={1}>
              <BeforeAfterSlider
                clientName="Stoop Keukens"
                description="Van generieke WordPress site naar conversiegerichte showroom-website. +500% meer kwalitatieve afspraken per maand."
              />
            </ScrollReveal>
            <ScrollReveal delay={2}>
              <BeforeAfterSlider
                clientName="Tegro"
                description="Compleet nieuw premium ontwerp met focus op kwaliteitsuitstraling en lokale vindbaarheid in Google & AI-zoekmachines."
              />
            </ScrollReveal>
            <ScrollReveal delay={3}>
              <BeforeAfterSlider
                clientName="Marquardt Amersfoort"
                description="Modern premium design dat aansluit bij het hoogsegment publiek van de showroom en meer kwalitatieve aanvragen genereert."
              />
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* REVIEWS */}
      <section className="reviews-marquee" id="testimonials">
        <div className="container reviews-marquee__top reveal-up">
          <div>
            <span className="section-label">Klantervaringen</span>
            <h2 className="reviews-marquee__title">Wat klanten<br /><em>over ons zeggen</em></h2>
          </div>
          <a href="https://www.google.com/search?q=Groeimaten+reviews" target="_blank" rel="noopener noreferrer" className="google-badge" aria-label="Bekijk onze Google reviews: 5,0 sterren">
            <svg className="google-badge__g" viewBox="0 0 24 24" width="20" height="20" aria-hidden="true">
              <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
              <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
              <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" fill="#FBBC05" />
              <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
            </svg>
            <div className="google-badge__info">
              <span className="google-badge__stars" aria-hidden="true">★★★★★</span>
              <span className="google-badge__text">5,0 · 5 reviews</span>
            </div>
          </a>
        </div>
        <div className="reviews-marquee__track-wrap">
          <div className="reviews-marquee__track" id="reviewsTrack">
            {[
              { name: "Kim Noach", meta: "een maand geleden", img: "/images/kim-noach.png", text: '"Zeer tevreden over het contact, hoe de samenwerking wordt onderhouden en de transparantie. Communicatie is erg fijn en er wordt snel geschakeld, hun manier van werken is innovatief en met doorzettingsvermogen. Erg fijn!"' },
              { name: "Martin Stoop", meta: "Stoop Keukens · een maand geleden", img: "/images/stoop-keukens.png", text: '"Vanaf februari is onze nieuwe website echt goed vindbaar geworden. De leads worden steeds kwalitatiever, we krijgen meer serieuze aanvragen en daar komen ook daadwerkelijk opdrachten uit voort. We merken echt duidelijke groei."' },
              { name: "Tegro BV", meta: "een maand geleden", img: "/images/tegro-review.png", text: '"Deze jonge enthousiaste ondernemers hebben onze website van Tegro ontwikkeld. Het resultaat mag er zijn. Het was een fijn traject waar op alle vlakken goed meegedacht werd. Ook het onderhoud van de site wordt met veel enthousiasme verzorgd."' },
              { name: "Mido Ibrahim", meta: "een maand geleden", img: "/images/mido-ibrahim.png", text: '"De samenwerking met Thomas en Jelle heb ik als heel prettig ervaren. Ze luisterden goed naar mijn wensen en dachten actief mee. Het eindresultaat is een mooie, professionele website die helemaal past bij wat ik voor ogen had."' },
            ].map((r, i) => (
              <div key={i} className="review-card">
                <svg className="review-card__quote" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
                  <path d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z" />
                  <path d="M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2h.75c0 2.25.25 4-2.75 4v3c0 1 0 1 1 1z" />
                </svg>
                <div className="review-card__stars" aria-label="5 sterren">
                  {[...Array(5)].map((_, j) => (
                    <svg key={j} className="review-card__star" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" fill="currentColor" />
                    </svg>
                  ))}
                </div>
                <p className="review-card__text">{r.text}</p>
                <div className="review-card__author">
                  <img src={r.img} alt={r.name} className="review-card__avatar" width={42} height={42} loading="lazy" />
                  <div>
                    <span className="review-card__name">{r.name}</span>
                    <span className="review-card__meta">{r.meta}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <ScrollReveal className="container reviews-marquee__stats">
          <div className="reviews-marquee__stat"><span className="reviews-marquee__stat-num">5,0</span><span className="reviews-marquee__stat-label">Google beoordeling</span></div>
          <div className="reviews-marquee__stat"><span className="reviews-marquee__stat-num">17+</span><span className="reviews-marquee__stat-label">Actieve klanten</span></div>
          <div className="reviews-marquee__stat"><span className="reviews-marquee__stat-num">82%</span><span className="reviews-marquee__stat-label">Gem. show-up rate</span></div>
          <div className="reviews-marquee__stat"><span className="reviews-marquee__stat-num">100%</span><span className="reviews-marquee__stat-label">Sectorspecialist</span></div>
        </ScrollReveal>
      </section>

      {/* FOUNDERS */}
      <section className="home-founders">
        <div className="container">
          <div className="home-founders__inner">
            <ScrollReveal className="home-founders__photo">
              <div className="about-photo-frame">
                <div className="about-photo-frame__glow" />
                <Image src="/images/founders-hero.webp" alt="Jelle Westerbroek en Thomas Ghobadi van Groeimaten" width={600} height={700} loading="lazy" />
              </div>
            </ScrollReveal>
            <ScrollReveal delay={2} className="home-founders__content">
              <span className="section-label">Het team</span>
              <h2 className="section-title section-title--white">Twee founders.<br />Één focus.</h2>
              <p>Jelle en Thomas richtten Groeimaten op met één doel: keuken- en badkamerbedrijven laten groeien met marketing die écht werkt. Geen groot bureau met honderd klanten. Directe communicatie, snelle uitvoering, echte resultaten.</p>
              <p>Een van de weinige specialisten in Nederland die uitsluitend voor deze sector werkt. Meer dan 35 merken gingen al voor.</p>
              <Link href="/over-ons" className="btn btn--outline">
                Leer ons kennen <ArrowRight />
              </Link>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="faq-section" id="faq">
        <div className="container">
          <ScrollReveal className="section-header">
            <span className="section-label">Veelgestelde vragen</span>
            <h2 className="section-title section-title--white">Alles wat je wil weten</h2>
          </ScrollReveal>
          <FaqAccordion items={faqItems} />
          <ScrollReveal className="faq-cta">
            <Link href="/contact" className="btn btn--blue btn--lg">Nog vragen? Neem contact op <ArrowRight /></Link>
          </ScrollReveal>
        </div>
      </section>

      {/* CTA */}
      <section className="cta-section" id="cta">
        <div className="cta-section__glow cta-section__glow--1" aria-hidden="true" />
        <div className="cta-section__glow cta-section__glow--2" aria-hidden="true" />
        <div className="container">
          <ScrollReveal className="cta-inner">
            <span className="section-label section-label--blue">Groei zonder grenzen</span>
            <h2 className="cta-title">Klaar om te groeien?</h2>
            <p className="cta-subtitle">Plan een gratis strategiegesprek. We kijken samen naar jouw situatie en vertellen je eerlijk wat we voor jou kunnen doen.</p>
            <Link href="/contact" className="btn btn--blue btn--xl">
              Plan een gratis strategiegesprek
              <svg width="18" height="18" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Link>
            <p className="cta-disclaimer">Geen verplichtingen. Wel eerlijk advies.</p>
          </ScrollReveal>
        </div>
      </section>
    </>
  )
}
