import { createFileRoute } from "@tanstack/react-router";
import {
  ShoppingBag,
  Play,
  Truck,
  ArrowRight,
  Heart,
  MessageCircle,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Leaf,
  ShieldCheck,
  Sparkles,
} from "lucide-react";

import heroCinnamon from "@/assets/hero-cinnamon.png";
import aboutBottle from "@/assets/about-bottle.png";
import peppermint from "@/assets/peppermint.png";
import lemon from "@/assets/lemon.png";
import bergamot from "@/assets/bergamot.png";
import jasmine from "@/assets/jasmine.png";
import gardenia from "@/assets/gardenia.png";
import chamomile from "@/assets/chamomile.png";
import avatar1 from "@/assets/avatar1.jpg";
import avatar2 from "@/assets/avatar2.jpg";

export const Route = createFileRoute("/")({
  component: Index,
});

const products = [
  { name: "PURE VIRGIN COCONUT OIL (250ML)", img: peppermint, desc: "Perfect for daily skincare, hair nourishment, massage therapy, and healthy cooking." },
  { name: "PURE VIRGIN COCONUT OIL (500ML)", img: lemon, desc: "An ideal family-size bottle for everyday beauty and wellness routines." },
  { name: "COLD-PRESSED COCONUT OIL (1L)", img: bergamot, desc: "Premium quality coconut oil for homes, salons, wellness practitioners, and businesses." },
  { name: "HAIR GROWTH BLEND", img: jasmine, desc: "Specially formulated to nourish dry scalp, reduce breakage, and strengthen natural hair." },
  { name: "BABY CARE COCONUT OIL", img: gardenia, desc: "Gentle, chemical-free care for delicate baby skin and scalp." },
  { name: "WHOLESALE PACK", img: chamomile, desc: "Designed for retailers, distributors, salons, and wellness businesses." },
];

const partners = ["Retail Stores", "Beauty Clinics", "Spas", "Wellness Brands", "Distributors"];

function Index() {
  return (
    <div className="min-h-screen bg-background text-ink">
      <Nav />
      <Hero />
      <FeatureBanner />
      <WhyTrust />
      <Products />
      <About />
      <Partners />
      <Testimonials />
      <Newsletter />
      <Footer />
    </div>
  );
}

function Nav() {
  return (
    <header className="sticky top-0 z-50 bg-background/90 backdrop-blur border-b border-border/60">
      <div className="mx-auto max-w-[1200px] px-6 h-20 flex items-center justify-between">
        <a href="/" className="text-sm font-bold tracking-[0.2em] text-ink">JASDA STORES</a>
        <nav className="hidden md:flex items-center gap-8 text-[13px] text-ink/80">
          {["Home", "Shop", "About Us", "Contact"].map((l, i) => (
            <span key={l} className="flex items-center gap-8">
              <a href="#" className="hover:text-ink">{l}</a>
              {i < 3 && <span className="text-muted-foreground/40">/</span>}
            </span>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <button className="rounded-[10px] border border-ink/80 px-5 py-2 text-[13px] font-medium text-ink hover:bg-ink hover:text-white transition-colors">
            Sign In
          </button>
          <button aria-label="Cart" className="grid h-10 w-10 place-items-center rounded-[10px] bg-ink text-white">
            <ShoppingBag className="h-4 w-4" />
          </button>
        </div>
      </div>
    </header>
  );
}

function GreenDot({ className = "" }: { className?: string }) {
  return <span className={`absolute rounded-full bg-brand ${className}`} />;
}

function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="mx-auto max-w-[1200px] px-6 pt-14 pb-24 grid lg:grid-cols-2 gap-10 items-center relative">
        <GreenDot className="h-2 w-2 top-6 left-1/3" />
        <GreenDot className="h-3 w-3 top-32 right-10" />
        <GreenDot className="h-2 w-2 bottom-24 left-8" />
        <GreenDot className="h-2 w-2 bottom-10 right-1/2" />
        <svg className="absolute bottom-0 left-0 w-72 h-32 text-brand/70 pointer-events-none" viewBox="0 0 300 120" fill="none">
          <path d="M0 100 C 80 20, 200 20, 290 90" stroke="currentColor" strokeWidth="1.5" fill="none" />
        </svg>

        <div className="fade-up relative z-10">
          <h1 className="text-5xl md:text-6xl lg:text-[68px] leading-[1.05] font-extrabold tracking-tight text-ink">
            Pure Cold Pressed<br />Coconut Oil
          </h1>
          <p className="mt-6 max-w-md text-[14px] leading-relaxed text-muted-foreground">
            Experience the purity of nature with JASDA Cold-Pressed Coconut Oil. Carefully extracted to preserve every nutrient, our oil deeply moisturizes dry skin, nourishes natural hair, and supports everyday wellness—without chemicals or additives.
          </p>
          <div className="mt-8 flex items-center gap-6">
            <button className="rounded-[10px] bg-ink px-8 py-4 text-[12px] font-semibold tracking-[0.15em] text-white hover:scale-[1.02] transition-transform">
              SHOP COLLECTION
            </button>
            <button className="flex items-center gap-3 text-[13px] font-medium text-ink">
              <span className="grid h-9 w-9 place-items-center rounded-full bg-brand text-white">
                <Play className="h-4 w-4 fill-white" />
              </span>
              Our Story
            </button>
          </div>
          <p className="mt-6 text-[11px] font-medium tracking-wide text-ink/70">
            ✓ 100% Cold-Pressed • Chemical-Free • Made in Nigeria
          </p>
          <div className="mt-6 inline-flex items-start gap-3 rounded-2xl bg-white shadow-[0_10px_40px_-10px_rgba(0,0,0,0.1)] px-4 py-3 max-w-sm">
            <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-brand/10 text-brand">
              <MessageCircle className="h-4 w-4" />
            </span>
            <p className="text-[11px] leading-relaxed text-muted-foreground">
              Naturally rich in Vitamin E and healthy fatty acids for deeply nourished skin and hair.
            </p>
          </div>
        </div>

        <div className="relative flex justify-center lg:justify-end">
          <div className="relative">
            <img
              src={heroCinnamon}
              alt="JASDA cold-pressed coconut oil bottle"
              className="float-bottle relative z-10 w-[420px] max-w-full drop-shadow-[0_40px_40px_rgba(0,0,0,0.15)]"
              width={1024}
              height={1024}
            />
            <div className="absolute top-20 -left-4 z-20 flex items-center gap-2 rounded-xl bg-brand px-3 py-2 text-white shadow-lg">
              <Truck className="h-4 w-4" />
              <div className="text-[10px] leading-tight">
                <div className="font-bold">Fast Delivery</div>
                <div>Nationwide</div>
              </div>
            </div>
            <div className="absolute top-24 right-0 z-20 grid h-10 w-10 place-items-center rounded-full bg-yellow-300 text-lg shadow-lg">
              😊
            </div>
            <GreenDot className="h-2 w-2 top-2 right-16" />
            <GreenDot className="h-2 w-2 bottom-20 -left-2" />
          </div>
        </div>
      </div>
    </section>
  );
}

function FeatureBanner() {
  return (
    <section className="mx-auto max-w-[1000px] px-6 -mt-8 mb-24">
      <div className="relative rounded-[20px] bg-ink text-white px-10 py-8 flex items-center gap-6">
        <h3 className="text-xl md:text-2xl font-semibold leading-snug flex-1">
          Nature's Most Trusted<br />Moisturizer
        </h3>
        <p className="hidden md:block flex-1 text-[12px] leading-relaxed text-white/70 max-w-xs">
          JASDA Cold-Pressed Coconut Oil is rich in natural antioxidants and essential fatty acids that deeply hydrate the skin, strengthen hair, and promote healthy scalp care for the entire family.
        </p>
        <button aria-label="Learn more" className="grid h-14 w-14 shrink-0 place-items-center rounded-full bg-brand text-white hover:scale-105 transition-transform">
          <ArrowRight className="h-6 w-6" />
        </button>
      </div>
    </section>
  );
}

function WhyTrust() {
  const cards = [
    { icon: Leaf, title: "100% Cold-Pressed", desc: "Every bottle is naturally extracted without excessive heat, preserving essential nutrients and purity." },
    { icon: ShieldCheck, title: "Chemical-Free", desc: "No artificial fragrances, preservatives, mineral oils, or harmful additives." },
    { icon: Sparkles, title: "Made for African Skin & Hair", desc: "Specially suited for dry climates, textured hair, and everyday family wellness." },
  ];
  return (
    <section className="mx-auto max-w-[1100px] px-6 pb-24">
      <h2 className="text-center text-3xl md:text-4xl font-semibold text-ink">Why Thousands Trust JASDA</h2>
      <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
        {cards.map((c) => (
          <article key={c.title} className="rounded-[18px] bg-white p-8 shadow-[0_10px_30px_-12px_rgba(0,0,0,0.1)] text-center">
            <span className="mx-auto grid h-12 w-12 place-items-center rounded-full bg-brand/10 text-brand">
              <c.icon className="h-5 w-5" />
            </span>
            <h3 className="mt-4 text-sm font-bold tracking-wide text-ink">{c.title}</h3>
            <p className="mt-3 text-[12px] leading-relaxed text-muted-foreground">{c.desc}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

function Products() {
  return (
    <section className="mx-auto max-w-[1100px] px-6 pb-24">
      <h2 className="text-center text-3xl md:text-4xl font-semibold text-ink">Discover Our Collection</h2>
      <p className="mt-3 text-center text-[13px] text-muted-foreground max-w-lg mx-auto">
        Premium coconut oil solutions crafted for skincare, haircare, wellness, and everyday living.
      </p>
      <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
        {products.map((p) => (
          <article
            key={p.name}
            className="group flex flex-col items-center text-center rounded-[18px] bg-white p-6 shadow-[0_4px_20px_-8px_rgba(0,0,0,0.08)] hover:shadow-[0_20px_40px_-12px_rgba(0,0,0,0.15)] hover:-translate-y-1 transition-all"
          >
            <div className="h-52 flex items-center justify-center">
              <img src={p.img} alt={p.name} loading="lazy" width={512} height={512} className="h-full w-auto object-contain" />
            </div>
            <h3 className="mt-4 text-[13px] font-bold tracking-[0.15em] text-ink">{p.name}</h3>
            <p className="mt-2 text-[11px] leading-relaxed text-muted-foreground max-w-[220px]">{p.desc}</p>
            <div className="mt-4 flex items-center gap-3 text-[12px]">
              <button className="font-semibold text-ink hover:text-brand">Explore Product</button>
              <span className="text-muted-foreground">|</span>
              <span className="text-muted-foreground">$32.99</span>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

function About() {
  return (
    <section className="mx-auto max-w-[1100px] px-6 pb-24 grid lg:grid-cols-2 gap-16 items-center">
      <div className="relative flex justify-center">
        <img
          src={aboutBottle}
          alt="JASDA coconut oil bottle"
          loading="lazy"
          width={1024}
          height={1024}
          className="float-bottle w-[380px] max-w-full drop-shadow-[0_30px_40px_rgba(0,0,0,0.15)]"
        />
        <div className="absolute top-6 -left-2 flex items-center gap-2 rounded-xl bg-white shadow-lg px-3 py-2">
          <span className="grid h-6 w-6 place-items-center rounded-full bg-brand/10 text-brand">
            <MessageCircle className="h-3 w-3" />
          </span>
          <p className="text-[10px] text-muted-foreground max-w-[120px] leading-tight">Authentic, chemical-free wellness made in Nigeria</p>
        </div>
        <div className="absolute bottom-16 -right-4 flex items-center gap-2 rounded-xl bg-white shadow-lg px-3 py-2">
          <img src={avatar1} alt="" className="h-6 w-6 rounded-full object-cover" />
          <p className="text-[10px] text-muted-foreground max-w-[140px] leading-tight">Cold-pressed with traditional care and modern quality</p>
        </div>
        <Heart className="absolute top-0 left-1/3 h-6 w-6 fill-red-500 text-red-500" />
      </div>
      <div>
        <h2 className="text-3xl md:text-4xl font-semibold text-ink">Rooted in Nature. Built on Trust.</h2>
        <p className="mt-6 text-[13px] leading-relaxed text-muted-foreground max-w-md">
          JASDA STORES LTD is a Nigerian wellness brand committed to producing premium cold-pressed coconut oil using carefully selected coconuts and traditional extraction methods.
        </p>
        <p className="mt-4 text-[13px] leading-relaxed text-muted-foreground max-w-md">
          We believe everyone deserves access to authentic, chemical-free products that truly work. From skincare and haircare to wellness and nutrition, our mission is to restore confidence in natural African solutions through quality, transparency, and community impact.
        </p>
        <button className="mt-8 rounded-[10px] bg-ink px-8 py-3 text-[12px] font-semibold tracking-[0.15em] text-white hover:scale-[1.02] transition-transform">
          LEARN MORE
        </button>
      </div>
    </section>
  );
}

function Partners() {
  return (
    <section className="mx-auto max-w-[1100px] px-6 pb-24">
      <h2 className="text-center text-3xl md:text-4xl font-semibold text-ink">Trusted By</h2>
      <div className="mt-12 flex flex-wrap items-center justify-between gap-8 opacity-60">
        {partners.map((p) => (
          <span key={p} className="text-lg font-semibold tracking-tight text-ink/70">{p}</span>
        ))}
      </div>
    </section>
  );
}

function Testimonials() {
  const items = [
    { name: "Sarah A.", img: avatar1, text: "My skin has never felt this soft. Within two weeks my dry patches disappeared completely." },
    { name: "Chioma E.", img: avatar2, text: "I use it on my daughter's hair and scalp every week. The results have been amazing." },
    { name: "Emmanuel O.", img: avatar1, text: "Finally found a genuine cold-pressed coconut oil that actually delivers on its promise." },
  ];
  return (
    <section className="mx-auto max-w-[1100px] px-6 pb-24">
      <h2 className="text-center text-3xl md:text-4xl font-semibold text-ink">Loved by Families Across Nigeria</h2>
      <p className="mt-3 text-center text-[13px] text-muted-foreground">Real experiences from customers who have made JASDA part of their everyday wellness routine.</p>
      <div className="mt-12 grid md:grid-cols-3 gap-8">
        {items.map((t) => (
          <article key={t.name} className="rounded-[18px] bg-white p-8 shadow-[0_10px_30px_-12px_rgba(0,0,0,0.12)] text-center">
            <img src={t.img} alt={t.name} className="mx-auto h-14 w-14 rounded-full object-cover" />
            <h3 className="mt-4 text-sm font-semibold text-ink">{t.name}</h3>
            <p className="mt-4 text-[12px] leading-relaxed text-muted-foreground">{t.text}</p>
            <p className="mt-3 text-[13px] tracking-widest text-yellow-500">★★★★★</p>
          </article>
        ))}
      </div>
    </section>
  );
}

function Newsletter() {
  return (
    <section className="mx-auto max-w-[1100px] px-6 pb-16">
      <div className="rounded-[20px] bg-white shadow-[0_10px_40px_-15px_rgba(0,0,0,0.1)] p-8 md:p-10 grid md:grid-cols-2 gap-6 items-center">
        <div>
          <h3 className="text-2xl md:text-3xl font-semibold text-ink">Join the JASDA Wellness Community</h3>
          <p className="mt-2 text-[12px] text-muted-foreground">Be the first to discover wellness tips, skincare routines, exclusive offers, and new product launches.</p>
        </div>
        <form className="flex items-center gap-3">
          <input
            type="email"
            placeholder="Enter your email"
            className="flex-1 rounded-[10px] bg-secondary px-4 py-3 text-[13px] outline-none focus:ring-2 focus:ring-brand"
          />
          <button type="submit" className="rounded-[10px] bg-ink px-6 py-3 text-[12px] font-semibold tracking-[0.15em] text-white hover:scale-[1.02] transition-transform">
            SUBSCRIBE
          </button>
        </form>
      </div>
    </section>
  );
}

function Footer() {
  const cols: { title: string; links: string[] }[] = [
    { title: "Navigation", links: ["Home", "Shop", "About", "Blog", "Impact", "Contact"] },
    { title: "Support", links: ["FAQs", "Shipping", "Returns", "Wholesale", "Privacy Policy"] },
    { title: "Contact", links: ["📍 Nigeria", "📧 jasdastores@gmail.com", "📱 +234 XXX XXX XXXX"] },
  ];
  return (
    <footer className="bg-black text-white/80 mt-8">
      <div className="mx-auto max-w-[1200px] px-6 py-16 grid md:grid-cols-4 gap-10">
        <div>
          <h4 className="text-brand font-bold tracking-[0.2em] text-sm">JASDA STORES LTD</h4>
          <p className="mt-4 text-[12px] leading-relaxed text-white/60 max-w-[240px]">
            Creating healthier communities through premium cold-pressed coconut oil and natural wellness products.
          </p>
          <div className="mt-6 flex items-center gap-4 text-brand">
            <Facebook className="h-4 w-4" />
            <Twitter className="h-4 w-4" />
            <Instagram className="h-4 w-4" />
            <Linkedin className="h-4 w-4" />
          </div>
        </div>
        {cols.map((col) => (
          <div key={col.title}>
            <h5 className="text-[12px] font-bold tracking-[0.15em] text-white">{col.title}</h5>
            <ul className="mt-4 space-y-3 text-[12px] text-white/70">
              {col.links.map((l) => (
                <li key={l}><a href="#" className="hover:text-white">{l}</a></li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="border-t border-white/10 py-5 text-center text-[11px] text-white/50">
        © 2026 JASDA Stores Ltd. All rights reserved.
      </div>
    </footer>
  );
}
