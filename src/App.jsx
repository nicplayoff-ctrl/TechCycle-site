import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Mail, Menu, Play } from "lucide-react";

const products = [
  {
    name: "Freio Shimano MT200",
    link: "https://meli.la/2aWem2z",
    images: [
      "https://images.unsplash.com/photo-1703406344749-228603394688?auto=format&fit=crop&w=900&q=85",
    ],
    description: "Pinça de freio hidráulico Shimano MT200 para mais controle na trilha.",
  },
  {
    name: "Suporte de Peito GoPro",
    link: "https://meli.la/25o1oEZ",
    images: [
      "file_00000000df6c71f7bacd6fb9a37b24c7",
      "/images/goprosuporte.png",
    ],
    description: "Suporte de peito com GoPro para gravar seus rolês em primeira pessoa.",
  },
  {
    name: "Bike Aro 29",
    link: "https://meli.la/1gWf9FL",
    images: [
      "https://images.unsplash.com/photo-1576435728678-68d0fbf94e91?auto=format&fit=crop&w=900&q=85",
    ],
    description: "Bike aro 29 para pedal, trilha e conteúdo.",
  },
  {
    name: "Capacete MTB",
link: "https://meli.la/1nXmWpy",
    images: [
      "file_00000000d918720e93828dbaa4f9af49",
      "/images/CAPACETEMTBPOC.png",
    ],
    description: "Capacete MTB premium com visual moderno.",
  },
];

const videos = [
  "Review Completo: Freio Hidráulico",
  "Como Escolher a Bike Perfeita",
  "Top 5 Acessórios Essenciais",
  "Manutenção Básica da Bike",
];

const socialLinks = [
  { label: "Facebook", href: "https://www.facebook.com/profile.php?id=100040945336312" },
  { label: "Instagram", href: "https://www.instagram.com/j_nicolas_doni/" },
  { label: "YouTube", href: "https://www.youtube.com/c/NicOff" },
  { label: "WhatsApp", href: "https://wa.me/553784116165?text=Salve%20Nic!%20Vim%20do%20grupo/site" },
];

const productCardAnimation = {
  initial: { opacity: 0, y: 35 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
};

function ButtonLink({ href = "#", children, outline = false }) {
  const baseClass = "inline-flex h-14 min-w-44 items-center justify-center rounded-lg px-8 text-sm font-black transition";
  const variantClass = outline
    ? "border-2 border-cyan-400 bg-black/30 text-cyan-300 shadow-[0_0_18px_rgba(0,229,255,.20)] hover:bg-cyan-400 hover:text-black hover:shadow-[0_0_30px_rgba(0,229,255,.55)]"
    : "bg-cyan-400 text-black shadow-[0_0_35px_rgba(0,229,255,.55)] hover:bg-white hover:shadow-[0_0_45px_rgba(255,255,255,.45)]";

  return (
    <a href={href} className={`${baseClass} ${variantClass}`}>
      {children}
    </a>
  );
}

function SectionTitle({ title, subtitle }) {
  return (
    <div className="mx-auto mb-20 max-w-3xl text-center">
      <h2 className="text-5xl font-black tracking-tight text-cyan-400 drop-shadow-[0_0_18px_rgba(0,229,255,.65)] md:text-6xl">
        {title}
      </h2>
      {subtitle ? <p className="mt-6 text-base leading-8 text-zinc-500 md:text-lg">{subtitle}</p> : null}
    </div>
  );
}

function FacebookIcon({ className }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M22 12a10 10 0 1 0-11.56 9.88v-6.99H7.9V12h2.54V9.8c0-2.5 1.5-3.89 3.78-3.89 1.09 0 2.23.2 2.23.2v2.46H15.2c-1.24 0-1.63.77-1.63 1.56V12h2.77l-.44 2.89h-2.33v6.99A10 10 0 0 0 22 12z" />
    </svg>
  );
}

function InstagramIcon({ className }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M7 2C4.2 2 2 4.2 2 7v10c0 2.8 2.2 5 5 5h10c2.8 0 5-2.2 5-5V7c0-2.8-2.2-5-5-5H7zm0 2h10c1.7 0 3 1.3 3 3v10c0 1.7-1.3 3-3 3H7c-1.7 0-3-1.3-3-3V7c0-1.7 1.3-3 3-3zm11.5 1a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zM12 7a5 5 0 1 0 0 10 5 5 0 0 0 0-10zm0 2a3 3 0 1 1 0 6 3 3 0 0 1 0-6z" />
    </svg>
  );
}

function YouTubeIcon({ className }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M21.8 8s-.2-1.4-.8-2c-.8-.8-1.7-.8-2.1-.9C15.9 5 12 5 12 5s-3.9 0-6.9.1c-.4 0-1.3 0-2.1.9-.6.6-.8 2-.8 2S2 9.6 2 11.2v1.5C2 14.4 2.2 16 2.2 16s.2 1.4.8 2c.8.8 1.9.8 2.4.9 1.7.2 6.6.2 6.6.2s3.9 0 6.9-.1c.4 0 1.3 0 2.1-.9.6-.6.8-2 .8-2s.2-1.6.2-3.2v-1.5C22 9.6 21.8 8 21.8 8zM10 15V9l5 3-5 3z" />
    </svg>
  );
}

function SocialButton({ label, href }) {
  const iconClass = "h-5 w-5";

  return (
    <a
      href={href}
      aria-label={label}
      title={label}
      className="grid h-12 w-12 place-items-center rounded-md bg-zinc-800 text-white transition hover:bg-cyan-400 hover:text-black"
    >
      {label === "Facebook" ? <FacebookIcon className={iconClass} /> : null}
      {label === "Instagram" ? <InstagramIcon className={iconClass} /> : null}
      {label === "YouTube" ? <YouTubeIcon className={iconClass} /> : null}
      {label === "WhatsApp" ? <Mail className={iconClass} aria-hidden="true" /> : null}
    </a>
  );
}

function ProductImage({ product }) {
  const [imageIndex, setImageIndex] = React.useState(0);
  const currentImage = product.images[imageIndex];

  React.useEffect(() => {
    setImageIndex(0);
  }, [product.name]);

  return (
    <img
      src={currentImage}
      alt={product.name}
      loading="lazy"
      decoding="async"
      className="h-full w-full object-cover object-top opacity-90 transition-all duration-700 group-hover:scale-110 group-hover:brightness-110 group-hover:contrast-110 group-hover:opacity-100"
      onError={() => {
        setImageIndex((current) => {
          const nextIndex = current + 1;
          return nextIndex < product.images.length ? nextIndex : current;
        });
      }}
    />
  );
}

function assertLandingPageData() {
  console.assert(products.length === 4, "A página deve exibir 4 produtos premium.");
  console.assert(
    products.every((product) => product.name && product.link && Array.isArray(product.images) && product.images.length > 0 && product.description),
    "Todo produto precisa ter nome, link, pelo menos uma imagem e descrição."
  );
  console.assert(
    products.every((product) => product.images.every((image) => image.startsWith("https://") || image.startsWith("file_") || image.startsWith("data:image/") || image.startsWith("/images/"))),
    "Todas as imagens dos produtos devem usar URLs HTTPS públicas ou arquivos locais enviados na conversa."
  );
  console.assert(
    products.every((product) => product.link === "#" || product.link.startsWith("https://")),
    "Todos os links externos dos produtos devem usar HTTPS."
  );
  console.assert(videos.length === 4, "A seção de conteúdo exclusivo deve exibir 4 vídeos.");
  console.assert(socialLinks.length === 4, "O rodapé deve exibir 4 links sociais/contato.");
  console.assert(
    socialLinks.every((item) => item.label && item.href),
    "Todo link social precisa ter nome e URL."
  );
  console.assert(typeof ButtonLink === "function", "ButtonLink precisa ser um componente válido.");
  console.assert(
    products.every((product) => product.images[0]),
    "Todo produto precisa ter uma imagem principal."
  );
  console.assert(
    products.filter((product) => product.images.length > 1).length >= 2,
    "Produtos com imagens locais precisam ter imagem alternativa caso o navegador não carregue o arquivo local."
  );
}

assertLandingPageData();

export default function TechCycleLandingPage() {
  const [menuOpen, setMenuOpen] = React.useState(false);

  return (
    <>
<div className="fixed inset-0 -z-10 overflow-hidden bg-black">
  <div className="absolute left-[-10%] top-[-10%] h-[420px] w-[420px] rounded-full bg-cyan-500/20 blur-3xl animate-pulse"></div>

  <div className="absolute bottom-[-10%] right-[-10%] h-[420px] w-[420px] rounded-full bg-blue-500/20 blur-3xl animate-pulse"></div>

  <div className="absolute left-[35%] top-[40%] h-[260px] w-[260px] rounded-full bg-cyan-400/10 blur-3xl"></div>
</div>
    <div className="min-h-screen bg-[#050505] text-white">
      <header className="fixed left-0 top-0 z-50 w-full border-b border-white/10 bg-[#090909]/95 backdrop-blur-xl">
        <div className="mx-auto flex h-[74px] max-w-7xl items-center justify-between px-6 md:px-10">
          <a href="#home" className="text-2xl font-black tracking-tight text-cyan-400 drop-shadow-[0_0_14px_rgba(0,229,255,.9)]">
            TechCycle
          </a>

          <nav className="hidden items-center gap-9 text-sm font-semibold text-zinc-300 md:flex">
            <a className="transition hover:text-cyan-400" href="#home">Home</a>
            <a className="transition hover:text-cyan-400" href="#produtos">Produtos</a>
            <a className="transition hover:text-cyan-400" href="#youtube">YouTube</a>
            <a className="transition hover:text-cyan-400" href="#contato">Contato</a>
          </nav>

          <button
  type="button"
  onClick={() => setMenuOpen(!menuOpen)}
  className="grid h-11 w-11 place-items-center rounded-lg border border-cyan-400/40 text-cyan-400 shadow-[0_0_18px_rgba(0,229,255,.25)] md:hidden"
  aria-label="Abrir menu"
>
  <Menu className="h-7 w-7" aria-hidden="true" />
</button>
        </div>

{menuOpen ? (
  <nav className="border-t border-cyan-400/20 bg-black/95 px-6 py-5 md:hidden">
    <div className="grid gap-4 text-center text-sm font-black text-zinc-200">
      <a onClick={() => setMenuOpen(false)} className="rounded-lg border border-white/10 py-3 hover:border-cyan-400 hover:text-cyan-400" href="#home">
        Home
      </a>
      <a onClick={() => setMenuOpen(false)} className="rounded-lg border border-white/10 py-3 hover:border-cyan-400 hover:text-cyan-400" href="#produtos">
        Produtos
      </a>
      <a onClick={() => setMenuOpen(false)} className="rounded-lg border border-white/10 py-3 hover:border-cyan-400 hover:text-cyan-400" href="#youtube">
        YouTube
      </a>
      <a onClick={() => setMenuOpen(false)} className="rounded-lg border border-white/10 py-3 hover:border-cyan-400 hover:text-cyan-400" href="#contato">
        Contato
      </a>
    </div>
  </nav>
) : null}
</header>

      <main id="home" className="pt-[74px]">
        <section className="relative flex min-h-[460px] items-center justify-center overflow-hidden border-b border-cyan-500/30 md:min-h-[470px]">
          <div
            className="absolute inset-0 scale-110 bg-cover bg-center opacity-75 blur-[0.3px]"
            style={{ backgroundImage: "url('https://images.unsplash.com/photo-1458372257692-06dd3582e787?auto=format&fit=crop&w=1800&q=85')" }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/25 via-black/35 to-[#050505]" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/35 via-black/10 to-black/45" />
          <motion.div
            className="absolute left-[-30%] top-[18%] h-[2px] w-[42%] rotate-[-6deg] bg-gradient-to-r from-transparent via-cyan-300/70 to-transparent blur-[1px] shadow-[0_0_18px_rgba(34,211,238,.55)]"
            animate={{ x: ["0%", "330%"], opacity: [0, 0.35, 0] }}
            transition={{ duration: 7, repeat: Infinity, ease: "linear" }}
          />
          <motion.div
            className="absolute bottom-[22%] right-[-30%] h-[2px] w-[45%] rotate-[5deg] bg-gradient-to-r from-transparent via-cyan-400/60 to-transparent blur-[1px] shadow-[0_0_18px_rgba(34,211,238,.45)]"
            animate={{ x: ["0%", "-330%"], opacity: [0, 0.28, 0] }}
            transition={{ duration: 9, repeat: Infinity, ease: "linear" }}
          />

          <motion.div
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="relative z-10 px-6 text-center"
          >
            <h1 className="text-6xl font-black tracking-tight text-cyan-400 drop-shadow-[0_0_28px_rgba(0,229,255,.95)] md:text-8xl">
              TechCycle
            </h1>
            <p className="mt-6 text-2xl font-bold text-zinc-100 drop-shadow-[0_0_12px_rgba(255,255,255,.55)] md:text-4xl">
              Tecnologia <span className="mx-4 text-cyan-400">⚡</span> Performance <span className="mx-4 text-cyan-400">⚡</span> Liberdade
            </p>
            <div className="mt-10 flex flex-col items-center justify-center gap-5 sm:flex-row">
              <ButtonLink href="#produtos">
                Ver Promoções <ArrowRight className="ml-3 h-4 w-4" aria-hidden="true" />
              </ButtonLink>
              <ButtonLink href="https://t.me/+chdo8X-46BI1NTBh" outline>
                Entrar no Grupo VIP
              </ButtonLink>
            </div>
          </motion.div>
        </section>

        <section id="produtos" className="relative border-b border-cyan-500/20 bg-[#050505] px-6 py-28 md:px-10">
          <SectionTitle
            title="Produtos Premium"
            subtitle="Equipamentos de alta performance selecionados para ciclistas que buscam o melhor em tecnologia e qualidade"
          />

          <div className="mx-auto grid max-w-7xl gap-8 md:grid-cols-4">
            {products.map((product, index) => (
              <motion.a
                key={product.name}
                href={product.link}
                target={product.link === "#" ? undefined : "_blank"}
                rel={product.link === "#" ? undefined : "noreferrer"}
                initial={productCardAnimation.initial}
                whileInView={productCardAnimation.whileInView}
                viewport={productCardAnimation.viewport}
                transition={{ duration: 0.45, delay: index * 0.08 }}
                whileHover={{ y: -8 }}
                className="group relative flex flex-col overflow-hidden rounded-3xl border border-cyan-500/20 bg-zinc-950 shadow-[0_0_25px_rgba(0,0,0,.9)] transition-all duration-300 hover:-translate-y-2 hover:border-cyan-400/60 hover:shadow-[0_0_35px_rgba(0,255,255,0.28)]"
              >
                <div className="relative h-64 overflow-hidden bg-[radial-gradient(circle_at_top,rgba(0,229,255,.18),transparent_45%),linear-gradient(135deg,#0f172a,#050505,#111827)]">
                  <ProductImage product={product} />
                  <div className="absolute inset-x-0 bottom-0 h-24 bg-[radial-gradient(ellipse_at_30%_100%,rgba(34,211,238,.22),transparent_42%),radial-gradient(ellipse_at_70%_100%,rgba(255,255,255,.13),transparent_38%),linear-gradient(to_top,rgba(16,16,16,.98),rgba(16,16,16,.45),transparent)] blur-[0.2px]" />
                  <div className="absolute inset-x-0 bottom-0 h-12 bg-gradient-to-t from-[#101010] to-transparent" />
                </div>
                <div className="flex flex-1 flex-col p-5 pt-0">
                  <h3 className="mb-2 text-xl font-black text-white">{product.name}</h3>
                  <p className="mb-4 min-h-12 text-sm leading-6 text-zinc-400">{product.description}</p>
                  <div className="mt-auto flex h-12 items-center justify-center rounded-md bg-cyan-400 text-sm font-black text-black shadow-[0_0_26px_rgba(0,229,255,.55)] transition group-hover:bg-white">
                    COMPRAR AGORA
                  </div>
                </div>
              </motion.a>
            ))}
          </div>
        </section>

        <section id="youtube" className="border-b border-cyan-500/20 bg-[#151515] px-6 py-28 md:px-10">
          <SectionTitle
            title="Conteúdo Exclusivo"
            subtitle="Reviews detalhados, dicas de manutenção e análises técnicas dos melhores produtos de ciclismo. Inscreva-se no canal para não perder nenhum conteúdo!"
          />

          <div className="mx-auto grid max-w-7xl gap-8 md:grid-cols-4">
            {videos.map((video, index) => (
              <motion.div
                key={video}
                initial={productCardAnimation.initial}
                whileInView={productCardAnimation.whileInView}
                viewport={productCardAnimation.viewport}
                transition={{ duration: 0.45, delay: index * 0.08 }}
                className="group overflow-hidden rounded-xl border border-white/10 bg-[#101010] transition hover:border-cyan-400/60"
              >
                <div className="relative h-36 overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=700&q=80"
                    alt={video}
                    loading="lazy"
                    decoding="async"
                    className="h-full w-full object-cover opacity-35 transition duration-500 group-hover:scale-110 group-hover:opacity-55"
                  />
                  <div className="absolute inset-0 grid place-items-center">
                    <div className="grid h-20 w-20 place-items-center rounded-full bg-cyan-400 text-black shadow-[0_0_35px_rgba(0,229,255,.75)] transition group-hover:scale-110">
                      <Play className="ml-1 h-9 w-9 fill-black" aria-hidden="true" />
                    </div>
                  </div>
                </div>
                <h3 className="p-5 text-lg font-black text-white">{video}</h3>
              </motion.div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <ButtonLink href="https://www.youtube.com/c/NicOff">
              Inscreva-se no Canal <ArrowRight className="ml-3 h-4 w-4" aria-hidden="true" />
            </ButtonLink>
          </div>
        </section>

        <section id="contato" className="border-b border-cyan-500/20 bg-[#050505] px-6 py-28 text-center md:px-10">
          <SectionTitle
            title="Entre em Contato"
            subtitle="Tem dúvidas sobre nossos produtos? Entre em contato conosco através do WhatsApp ou email."
          />
          <div className="flex flex-col items-center justify-center gap-5 sm:flex-row">
            <ButtonLink href="https://wa.me/553784116165?text=Salve%20Nic!%20Vim%20do%20grupo/site">WhatsApp</ButtonLink>
            <ButtonLink href="https://t.me/+chdo8X-46BI1NTBh" outline>
              Grupo VIP
            </ButtonLink>
          </div>
        </section>
      </main>

      <footer className="bg-[#151515] px-6 py-16 md:px-10">
        <div className="mx-auto grid max-w-7xl gap-12 md:grid-cols-3">
          <div>
            <h3 className="mb-5 text-2xl font-black text-cyan-400">Sobre TechCycle</h3>
            <p className="max-w-sm text-base leading-8 text-zinc-500">
              Sua loja premium de tecnologia para ciclismo. Oferecemos os melhores produtos com qualidade garantida e preços competitivos.
            </p>
          </div>

          <div>
            <h3 className="mb-5 text-2xl font-black text-cyan-400">Links Rápidos</h3>
            <div className="grid gap-3 text-zinc-500">
              <a href="#produtos" className="hover:text-cyan-400">Produtos</a>
              <a href="#youtube" className="hover:text-cyan-400">YouTube</a>
              <a href="#contato" className="hover:text-cyan-400">Contato</a>
              <a href="#" className="hover:text-cyan-400">Política de Privacidade</a>
            </div>
          </div>

          <div>
            <h3 className="mb-5 text-2xl font-black text-cyan-400">Redes Sociais</h3>
            <div className="flex gap-4">
              {socialLinks.map((item) => (
                <SocialButton key={item.label} label={item.label} href={item.href} />
              ))}
            </div>
          </div>
        </div>

        <div className="mx-auto mt-14 max-w-7xl border-t border-white/10 pt-8 text-center text-sm text-zinc-600">
          © 2025 TechCycle. Todos os direitos reservados.
        </div>
            </footer>
    </div>
  </>
  );
}