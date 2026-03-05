import { motion, useScroll, useTransform, AnimatePresence } from "motion/react";
import { 
  Globe, 
  Instagram, 
  Linkedin, 
  Mail, 
  ExternalLink, 
  Sparkles, 
  Palette, 
  Camera, 
  Layout, 
  Smile,
  ArrowRight,
  ArrowLeft,
  Github
} from "lucide-react";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { BrowserRouter, Routes, Route, Link, useParams, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { FaBehance } from "react-icons/fa";
function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

const eye1 = new URL('./images/eye 1.png', import.meta.url).href;
const dspjp1 = new URL('./images/dspjp2.png', import.meta.url).href;
const dsp1 = new URL('./images/dsp1.png', import.meta.url).href;
const dsp2 = new URL('./images/dsp2.png', import.meta.url).href;
const dsp3 = new URL('./images/dsp3.png', import.meta.url).href;
const hhtxani = new URL('./images/HHTXANI.png', import.meta.url).href;
const hht2 = new URL('./images/hht2.png', import.meta.url).href;
const hht3 = new URL('./images/hht3.png', import.meta.url).href;
const WH06 = new URL('./images/WH06.png', import.meta.url).href;
const wh1 = new URL('./images/wh1.png', import.meta.url).href;
const wh2 = new URL('./images/wh2.png', import.meta.url).href;
const wh3 = new URL('./images/wh3.png', import.meta.url).href;
const Kulfi = new URL('./images/kulfi.png', import.meta.url).href;
const kulfi1 = new URL('./images/kulfi1.png', import.meta.url).href;
const kulfi2 = new URL('./images/kulfi2.png', import.meta.url).href;
const kulfi3 = new URL('./images/kulfi3.png', import.meta.url).href;
const kulfi4 = new URL('./images/kulfi4.png', import.meta.url).href;
const calendar = new URL('./images/cal.png', import.meta.url).href;
const cal1 = new URL('./images/cal1.png', import.meta.url).href;
const cal2 = new URL('./images/cal2.png', import.meta.url).href;
const cal3 = new URL('./images/cal3.png', import.meta.url).href;
const breakup = new URL('./images/brkup baby.png', import.meta.url).href;
const bb1 = new URL('./images/bb1.png', import.meta.url).href;
const bb2 = new URL('./images/bb2.png', import.meta.url).href;
const bb3 = new URL('./images/bb3.png', import.meta.url).href;

const PROJECTS = [
  {
    id: "devi-sri-prasad",
    title: "Devi Sri Prasad | Dadasaheb Phalke Award",
    category: "Visual Design",
    color: "bg-brand-yellow",
    image: dspjp1,
    description: "A prestigious visual design campaign celebrating Devi Sri Prasad's Dadasaheb Phalke Award achievement. The design focuses on high-energy visuals that reflect the artist's musical style.",
    gallery: [
      dsp1,
      dsp2,
      dsp3
    ]
  },
  {
    id: "hip-hop-tamizha",
    title: "Hip-Hop Tamizha | Return of Dragon",
    category: "Concert Promotions",
    color: "bg-brand-pink",
    image: hhtxani,
    description: "Promotional campaign for the 'Return of Dragon' concert tour. The visual language is inspired by urban hip-hop culture and traditional dragon motifs.",
    gallery: [
      hht2,
      hht3
    ]
  },
  {
    id: "welcome-home",
    title: "Welcome Home | Short Film Poster",
    category: "Poster Campaign",
    color: "bg-brand-green",
    image: WH06,
    description: "A minimalist yet impactful poster campaign for the short film 'Welcome Home'. The design uses negative space to create a sense of mystery and domestic tension.",
    gallery: [
      wh1,
      wh2,wh3
    ]
  },
  {
    id: "kulfi-branding",
    title: "Kulfi Branding | Lavish Kulfi",
    category: "Social Media Branding",
    color: "bg-brand-blue",
    image: Kulfi,
    description: "Vibrant social media branding for 'Lavish Kulfi'. The goal was to make the product look as delicious as it tastes through playful typography and bright colors.",
    gallery: [
      kulfi1, kulfi2 , kulfi3, kulfi4
    ]
  },
  {
    id: "calendar-design",
    title: "Calendar|Short Film Design",
    category: "Design Campaign",
    color: "bg-brand-orange",
    image: calendar,
    description: "Comprehensive design campaign for the short film 'Calendar'. This included title sequences, promotional materials, and a unique physical calendar tie-in.",
    gallery: [
      cal1,cal2,cal3
    ]
  },
  {
    id: "cover-art",
    title: "Cover Art | Breakup Baby",
    category: "Album Cover",
    color: "bg-brand-yellow",
    image: breakup,
    description: "Emotional and raw album cover design for the single 'Breakup Baby'. The artwork captures the bittersweet feeling of moving on through textured visuals.",
    gallery: [
      bb1,bb2,bb3
    ]
  }
];

const Marquee = ({ text, className }: { text: string; className?: string }) => (
  <div className={cn("overflow-hidden whitespace-nowrap py-2 md:py-4 bg-brand-yellow text-brand-black border-y-4 border-brand-black", className)}>
    <motion.div 
      initial={{ x: 0 }}
      animate={{ x: "-50%" }}
      transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      className="inline-block"
    >
      <span className="text-2xl md:text-4xl font-goofy uppercase mx-2 md:mx-4">{text}</span>
      <span className="text-2xl md:text-4xl font-goofy uppercase mx-2 md:mx-4">{text}</span>
      <span className="text-2xl md:text-4xl font-goofy uppercase mx-2 md:mx-4">{text}</span>
      <span className="text-2xl md:text-4xl font-goofy uppercase mx-2 md:mx-4">{text}</span>
    </motion.div>
  </div>
);

const Navbar = () => (
  <nav className="fixed top-0 left-0 w-full z-50 p-4 md:p-6 flex justify-between items-center pointer-events-none">
    <Link to="/" className="pointer-events-auto">
      <motion.div 
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className="bg-brand-yellow text-brand-black px-3 md:px-6 py-1 md:py-2 font-goofy text-sm md:text-xl border-2 md:border-4 border-brand-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] md:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] cursor-pointer hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all"
      >
        JAYASOORYA J
      </motion.div>
    </Link>
    <div className="flex gap-2 md:gap-4 pointer-events-auto">
      <Link to="/#work" className="bg-white text-brand-black px-3 md:px-4 py-1 md:py-2 text-xs md:text-base font-bold border-2 md:border-4 border-brand-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] md:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all">WORK</Link>
      <Link to="/#about" className="bg-brand-pink text-white px-3 md:px-4 py-1 md:py-2 text-xs md:text-base font-bold border-2 md:border-4 border-brand-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] md:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all">ABOUT</Link>
    </div>
  </nav>
);

const ScrollToTop = () => {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const element = document.getElementById(hash.replace("#", ""));
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      window.scrollTo(0, 0);
    }
  }, [pathname, hash]);

  return null;
};

const ProjectDetail = () => {
  const { id } = useParams();
  const project = PROJECTS.find(p => p.id === id);

  if (!project) return (
    <div className="h-screen flex items-center justify-center">
      <h1 className="text-4xl font-goofy">PROJECT NOT FOUND!</h1>
    </div>
  );

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen pt-24 pb-12 px-6 max-w-7xl mx-auto"
    >
      <Link to="/" className="inline-flex items-center gap-2 text-brand-pink font-goofy mb-8 hover:translate-x-[-4px] transition-transform">
        <ArrowLeft size={24} /> BACK TO HOME
      </Link>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-start mb-12">
        <div>
          <motion.span 
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            className="text-brand-pink font-goofy uppercase text-lg md:text-xl tracking-widest block mb-2"
          >
            {project.category}
          </motion.span>
          <motion.h1 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-7xl font-display font-black uppercase leading-tight mb-4 md:mb-6"
          >
            {project.title}
          </motion.h1>
          <motion.p 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-lg md:text-xl lg:text-2xl text-slate-400 leading-relaxed"
          >
            {project.description}
          </motion.p>
        </div>

        <motion.div 
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.3 }}
          className={cn("aspect-[4/3] border-2 md:border-4 border-brand-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] md:shadow-[16px_16px_0px_0px_rgba(0,0,0,1)] overflow-hidden", project.color)}
        >
          <img 
            src={project.image} 
            alt={project.title}
            className="w-full h-full object-cover mix-blend-multiply opacity-90"
            referrerPolicy="no-referrer"
          />
        </motion.div>
      </div>

      <div className="space-y-6 md:space-y-8">
        <h2 className="text-3xl md:text-4xl font-goofy text-brand-yellow uppercase">Project Gallery</h2>
        <div className="grid grid-cols-1 gap-6 md:gap-8">
          {project.gallery.map((img, idx) => (
            <motion.div 
              key={idx}
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              className="border-2 md:border-4 border-white shadow-[4px_4px_0px_0px_rgba(255,255,255,1)] md:shadow-[8px_8px_0px_0px_rgba(255,255,255,1)] bg-white p-2 md:p-4"
            >
              <img 
                src={img} 
                alt={`${project.title} gallery ${idx}`}
                className="w-full h-auto grayscale hover:grayscale-0 transition-all duration-700"
                referrerPolicy="no-referrer"
              />
            </motion.div>
          ))}
        </div>
      </div>

      <div className="mt-16 md:mt-24 text-center">
        <h3 className="text-3xl md:text-4xl font-display font-black uppercase mb-6">Liked this project?</h3>
        <motion.a 
          whileHover={{ scale: 1.05, rotate: 1 }}
          whileTap={{ scale: 0.95 }}
          href="mailto:jeswinjoshwa@gmail.com"
          className="inline-flex items-center gap-3 md:gap-4 bg-brand-yellow text-brand-black px-8 md:px-12 py-4 md:py-6 text-xl md:text-2xl font-goofy border-2 md:border-4 border-brand-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] md:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]"
        >
          LET'S WORK TOGETHER <ArrowRight />
        </motion.a>
      </div>
    </motion.div>
  );
};

const Home = () => {
  const { scrollYProgress } = useScroll();
  const rotate = useTransform(scrollYProgress, [0, 1], [0, 360]);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex flex-col items-center justify-center overflow-hidden px-4 md:px-6 pt-20">
        <div className="absolute top-1/4 left-10 w-32 h-32 bg-brand-pink rounded-full blur-3xl opacity-20 md:opacity-30 animate-float" />
        <div className="absolute bottom-1/4 right-10 w-48 h-48 bg-brand-green rounded-full blur-3xl opacity-20 md:opacity-30 animate-float-delayed" />
        
        <motion.div
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5, type: "spring" }}
          className="text-center z-10"
        >
          <h1 className="text-5xl sm:text-7xl md:text-9xl font-display font-extrabold leading-none tracking-tighter mb-4">
            VISUAL <br /> 
            <span className="text-brand-yellow italic">STORY</span>TELLER
          </h1>
          <p className="text-lg md:text-2xl font-medium max-w-2xl mx-auto mb-8 text-slate-400 px-4">
            I make things look <span className="text-brand-pink font-goofy">COOL</span> and sometimes a bit <span className="text-brand-green font-goofy">GOOFY</span>. 
            Based in India, creating for the world.
          </p>
          
          <div className="flex flex-wrap justify-center gap-4 md:gap-6">
            <motion.button 
              whileHover={{ scale: 1.05, rotate: -2 }}
              whileTap={{ scale: 0.95 }}
              className="bg-brand-yellow text-brand-black px-6 md:px-8 py-3 md:py-4 text-xl md:text-2xl font-goofy border-2 md:border-4 border-brand-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] md:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] flex items-center gap-3"
            >
              HIRE ME! <ArrowRight />
            </motion.button>
            
            <div className="flex gap-3 md:gap-4 items-center">
              <motion.a 
                whileHover={{ y: -5, rotate: 10 }}
                href="https://www.behance.net/jayasooryaj" 
                className="p-3 md:p-4 bg-white text-brand-black border-2 md:border-4 border-brand-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] md:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"
              >
                <FaBehance size={20} className="md:w-6 md:h-6" />
              </motion.a>
              <motion.a 
                whileHover={{ y: -5, rotate: -10 }}
                href="http://instagram.com/jeswinjoshwa" 
                className="p-3 md:p-4 bg-brand-pink text-white border-2 md:border-4 border-brand-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] md:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"
              >
                <Instagram size={20} md:size={24} />
              </motion.a>
            </div>
          </div>
        </motion.div>

        {/* Floating Elements - Hidden on small mobile */}
        <motion.div 
          style={{ rotate }}
          className="absolute -bottom-20 -left-20 w-48 md:w-64 h-48 md:h-64 border-4 md:border-8 border-brand-yellow/20 rounded-full pointer-events-none hidden sm:block"
        />
        <motion.div 
          style={{ rotate: rotate }}
          className="absolute top-40 -right-10 w-32 md:w-40 h-32 md:h-40 border-4 md:border-8 border-brand-pink/20 rounded-xl pointer-events-none hidden sm:block"
        />
      </section>

      <Marquee text="Graphic Design • Visual Identity • UI/UX • Branding • Poster Design • Digital Art • " />

      {/* About Section (moved here so About appears before Works) */}
      <section id="about" className="py-12 md:py-20 bg-brand-yellow text-brand-black overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 md:px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-20 items-center">
          <div className="relative max-w-md mx-auto lg:max-w-none">
            <div className="absolute -top-6 md:-top-10 -left-6 md:-left-10 w-16 md:w-20 h-16 md:h-20 bg-brand-pink border-2 md:border-4 border-brand-black rounded-full z-10 flex items-center justify-center animate-float">
              <Smile size={32} md:size={40} />
            </div>
            <div className="border-2 md:border-4 border-white shadow-[4px_4px_0px_0px_rgba(255,255,255,1)] md:shadow-[8px_8px_0px_0px_rgba(255,255,255,1)] bg-white p-2 md:p-4 rotate-3">
              <img 
                src={eye1} 
                alt="Jayasoorya J" 
                className="w-full h-auto grayscale hover:grayscale-0 transition-all duration-500"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute -bottom-6 md:-bottom-10 -right-6 md:-right-10 w-32 md:w-40 h-32 md:h-40 bg-brand-green border-2 md:border-4 border-brand-black flex items-center justify-center -rotate-6 z-10 font-goofy text-center p-2 md:p-4 text-sm md:text-base">
              DESIGN <br /> ADDICT
            </div>
          </div>
          
          <div>
            <h2 className="text-5xl md:text-8xl font-display font-black uppercase mb-6 md:mb-8 leading-none">
              WHO IS <br /> <span className="text-white drop-shadow-[2px_2px_0px_rgba(0,0,0,1)] md:drop-shadow-[4px_4px_0px_rgba(0,0,0,1)]">THIS GUY?</span>
            </h2>
            <div className="space-y-4 md:space-y-6 text-lg md:text-2xl font-medium leading-relaxed">
              <p>
                Hey! I'm <span className="font-goofy">Jayasoorya @ jeswin</span>, a visual designer who loves to blend creativity with a touch of madness. 
                I don't just design; I create visual experiences that stick.
              </p>
              <p>
                Currently a student in India, I've been honing my skills in branding, 
                poster design, and UI/UX. I believe that good design should be functional, 
                but great design should be <span className="italic underline decoration-brand-pink decoration-2 md:decoration-4 underline-offset-4">memorable</span>.
              </p>
              
              <div className="grid grid-cols-2 gap-4 md:gap-6 pt-6 md:pt-8">
                <div className="flex items-center gap-2 md:gap-3">
                  <div className="p-2 md:p-3 bg-brand-pink border-2 border-brand-black rounded-lg">
                    <Palette size={20} md:size={24} />
                  </div>
                  <span className="font-bold text-sm md:text-base">Branding</span>
                </div>
                <div className="flex items-center gap-2 md:gap-3">
                  <div className="p-2 md:p-3 bg-brand-green border-2 border-brand-black rounded-lg">
                    <Layout size={20} md:size={24} />
                  </div>
                  <span className="font-bold text-sm md:text-base">UI/UX</span>
                </div>
                <div className="flex items-center gap-2 md:gap-3">
                  <div className="p-2 md:p-3 bg-brand-blue border-2 border-brand-black rounded-lg">
                    <Camera size={20} md:size={24} />
                  </div>
                  <span className="font-bold text-sm md:text-base">Photography</span>
                </div>
                <div className="flex items-center gap-2 md:gap-3">
                  <div className="p-2 md:p-3 bg-brand-orange border-2 border-brand-black rounded-lg">
                    <Sparkles size={20} md:size={24} />
                  </div>
                  <span className="font-bold text-sm md:text-base">Creativity</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="work" className="py-12 md:py-20 px-4 md:px-6 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-8 md:mb-12 gap-6 md:gap-8">
          <div>
            <h2 className="text-5xl md:text-8xl font-display font-black uppercase leading-none">
              Selected <br /> <span className="text-brand-pink">Works</span>
            </h2>
          </div>
          <div className="bg-brand-green text-brand-black p-4 md:p-6 border-2 md:border-4 border-brand-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] md:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] max-w-xs rotate-2">
            <p className="font-bold text-base md:text-lg">
              "Every pixel has a personality. I just help them express it."
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          {PROJECTS.map((project, index) => (
            <motion.div
              key={index}
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="group relative"
            >
              <Link to={`/project/${project.id}`} className="block">
                <div className={cn("aspect-[4/3] overflow-hidden border-2 md:border-4 border-brand-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] md:shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] transition-all group-hover:shadow-[10px_10px_0px_0px_rgba(0,0,0,1)] md:group-hover:shadow-[20px_20px_0px_0px_rgba(0,0,0,1)]", project.color)}>
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover mix-blend-multiply opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="mt-4 md:mt-6 flex justify-between items-start">
                  <div>
                    <span className="text-brand-pink font-goofy uppercase text-xs md:text-sm tracking-widest">{project.category}</span>
                    <h3 className="text-2xl md:text-3xl font-display font-bold mt-1 group-hover:text-brand-yellow transition-colors">{project.title}</h3>
                  </div>
                  <div className="bg-white text-brand-black p-2 md:p-3 border-2 border-brand-black rounded-full group-hover:bg-brand-yellow transition-colors shrink-0 ml-2">
                    <ArrowRight size={18} md:size={20} />
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </section>

      

      {/* Contact Section */}
      <section className="py-12 md:py-20 px-4 md:px-6 text-center relative overflow-hidden">
        <div className="max-w-4xl mx-auto z-10 relative">
          <h2 className="text-5xl md:text-9xl font-display font-black uppercase mb-8 md:mb-12 tracking-tighter">
            LET'S <br /> <span className="text-brand-green">TALK!</span>
          </h2>
          <p className="text-lg md:text-3xl mb-8 md:mb-12 text-slate-400 px-4">
            Got a project? Or just want to say hi? <br /> 
            My inbox is always open (and usually full of memes).
          </p>
          
          <motion.a 
            whileHover={{ scale: 1.05, rotate: 1 }}
            whileTap={{ scale: 0.95 }}
            href="mailto:jeswinjoshwa@gmail.com"
            className="inline-flex items-center gap-3 md:gap-4 bg-white text-brand-black px-8 md:px-12 py-4 md:py-6 text-xl md:text-5xl font-goofy border-2 md:border-4 border-brand-black shadow-[6px_6px_0px_0px_rgba(255,255,255,0.2)] md:shadow-[12px_12px_0px_0px_rgba(255,255,255,0.2)] hover:shadow-none hover:translate-x-1 md:hover:translate-x-2 hover:translate-y-1 md:hover:translate-y-2 transition-all mb-12 md:mb-20"
          >
            <Mail size={32} md:size={48} /> SAY HELLO
          </motion.a>
          
          <div className="flex justify-center gap-6 md:gap-8">
            <a href="https://www.linkedin.com/in/jayasooryaj" className="hover:text-brand-yellow transition-colors"><Linkedin size={28} md:size={32} /></a>
            <a href="http://instagram.com/jeswinjoshwa" className="hover:text-brand-pink transition-colors"><Instagram size={28} md:size={32} /></a>
            
          </div>
        </div>
        
        {/* Background Text */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[25vw] md:text-[20vw] font-black opacity-[0.02] md:opacity-[0.03] select-none pointer-events-none whitespace-nowrap">
          GET IN TOUCH • GET IN TOUCH •
        </div>
      </section>
    </div>
  );
};

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="min-h-screen selection:bg-brand-yellow selection:text-brand-black">
        <Navbar />
        <AnimatePresence mode="wait">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/project/:id" element={<ProjectDetail />} />
          </Routes>
        </AnimatePresence>

        {/* Footer */}
        <footer className="py-8 md:py-12 px-4 md:px-6 border-t-4 border-white/10 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="font-goofy text-lg md:text-xl">
            © {new Date().getFullYear()} JAYASOORYA J
          </div>
          <div className="flex flex-wrap justify-center gap-4 md:gap-8 font-bold text-slate-400 text-sm md:text-base">
            <Link to="/" className="hover:text-white transition-colors">BACK TO TOP</Link>
            <a href="https://www.behance.net/jayasooryaj" className="hover:text-white transition-colors">BEHANCE</a>
            <a href="https://www.linkedin.com/in/jayasooryaj" className="hover:text-white transition-colors">LINKEDIN</a>
          </div>
        </footer>
      </div>
    </BrowserRouter>
  );
}
