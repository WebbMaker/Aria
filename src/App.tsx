import React from 'react';
import { motion } from 'motion/react';
import { Battery, Volume2, Waves, ArrowRight, Play, CheckCircle2 } from 'lucide-react';
import designImage from './assets/images/regenerated_image_1778949585303.png';
import lifestyleCityImage from './assets/images/regenerated_image_1778950257743.png';
import lifestyleStudioImage from './assets/images/regenerated_image_1778950271256.png';

const GlassHeader = () => (
    <header className="fixed top-0 w-full z-50 px-4 md:px-6 py-4">
        <div className="max-w-7xl mx-auto rounded-full bg-white/[0.03] backdrop-blur-[20px] border border-white/10 shadow-[0_4px_30px_rgba(0,0,0,0.1)] flex items-center justify-between px-6 md:px-8 py-3">
            <div className="text-2xl font-black tracking-widest text-white">ARIA</div>
            <nav className="hidden md:flex gap-8 text-sm font-medium text-white/70">
                <a href="#features" className="hover:text-white transition-colors">Specyfikacja</a>
                <a href="#design" className="hover:text-white transition-colors">Design</a>
                <a href="#lifestyle" className="hover:text-white transition-colors">Lifestyle</a>
            </nav>
            <button className="bg-white text-black px-6 py-2 rounded-full text-sm font-bold hover:bg-white/90 transition-transform hover:scale-105 active:scale-95">
                Kup teraz
            </button>
        </div>
    </header>
);

const GlowBackground = () => (
    <div className="fixed inset-0 z-[-1] overflow-hidden bg-[#050505]">
        <div className="absolute top-[-20%] left-[-10%] w-[70%] h-[70%] rounded-full bg-purple-600/20 blur-[150px] mix-blend-screen animate-[pulse_8s_ease-in-out_infinite]" />
        <div className="absolute bottom-[-20%] right-[-10%] w-[60%] h-[60%] rounded-full bg-indigo-600/20 blur-[150px] mix-blend-screen animate-[pulse_10s_ease-in-out_infinite]" />
        <div className="absolute top-[30%] left-[30%] w-[40%] h-[40%] rounded-full bg-blue-500/10 blur-[120px] mix-blend-screen" />
    </div>
);

const Hero = () => {
    return (
        <section className="relative min-h-screen flex items-center justify-center pt-24 overflow-hidden px-4 md:px-6">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-tr from-white/10 via-purple-400/20 to-blue-400/10 blur-[100px] rounded-full z-0" />
            
            <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center relative z-10 w-full">
                <motion.div 
                    initial={{ opacity: 0, x: -30 }} // slightly gentler animation
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1, ease: 'easeOut' }}
                    className="flex flex-col gap-6 md:gap-8 pt-10 md:pt-0"
                >
                    <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-white/5 border border-white/10 w-fit backdrop-blur-md">
                        <span className="relative flex h-2.5 w-2.5 shadow-[0_0_8px_rgba(74,222,128,0.8)] rounded-full">
                          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                          <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-400"></span>
                        </span>
                        <span className="text-white/80 text-xs md:text-sm font-medium tracking-wide">Inteligentne ANC nowej generacji</span>
                    </div>
                    <h1 className="text-5xl md:text-6xl lg:text-8xl font-black text-transparent bg-clip-text bg-gradient-to-br from-white via-white/90 to-white/30 leading-[1.1] tracking-tight drop-shadow-sm">
                        Usłysz czystą<br/>doskonałość.
                    </h1>
                    <p className="text-lg md:text-xl text-white/50 max-w-md leading-relaxed font-light">
                        Doświadcz niezrównanej głębi dźwięku i całkowitego odcięcia od hałasu dzięki słuchawkom Aria.
                    </p>
                    <div className="flex flex-wrap gap-4 mt-2">
                        <button className="bg-white text-black px-8 py-4 rounded-full font-bold flex items-center gap-2 hover:bg-white/90 transition-all hover:gap-4 hover:pr-6 active:scale-95 shadow-[0_0_20px_rgba(255,255,255,0.2)]">
                            Kup teraz <ArrowRight size={20} />
                        </button>
                        <button className="px-8 py-4 rounded-full font-bold flex items-center gap-2 text-white bg-white/5 border border-white/10 hover:bg-white/10 backdrop-blur-md transition-all active:scale-95">
                            <Play size={20} className="fill-white" /> Zobacz wideo
                        </button>
                    </div>
                </motion.div>
                
                <motion.div 
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.3, ease: 'easeOut' }}
                    className="relative flex justify-center items-center h-[400px] md:h-[600px] mt-10 md:mt-0"
                >
                    {/* Glowing orb specifically for the multiply blend mode to work on dark bg */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] md:w-[450px] h-[350px] md:h-[450px] bg-gradient-to-br from-indigo-100 to-purple-200 rounded-full blur-[50px] opacity-70" />
                    <motion.img 
                        animate={{ y: [-10, 10, -10] }}
                        transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
                        src="/zdjęcia/Aria.png?v=2"
                        alt="Aria Headphones" 
                        className="object-contain w-[120%] h-auto max-w-none relative z-10 md:scale-110 drop-shadow-2xl mix-blend-multiply transition-transform duration-500 ease-out"
                    />
                </motion.div>
            </div>
            
            {/* Scroll Indicator */}
            <motion.div 
                animate={{ opacity: [0.3, 1, 0.3], y: [0, 8, 0] }}
                transition={{ repeat: Infinity, duration: 2 }}
                className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-2 text-white/30"
            >
                <span className="text-xs font-medium tracking-widest uppercase">Przewiń</span>
                <div className="w-[1px] h-12 bg-gradient-to-b from-white/30 to-transparent" />
            </motion.div>
        </section>
    );
};

const Features = () => {
    const features = [
        { icon: <Volume2 className="text-purple-300" size={32} />, title: "Czysty Dźwięk", desc: "Zoptymalizowane przetworniki z tytanu dostarczają nieskazitelne wysokie i głębokie, potężne niskie tony." },
        { icon: <Battery className="text-indigo-300" size={32} />, title: "40h Baterii", desc: "Jedno ładowanie zapewnia do 40 godzin intensywnego odsłuchu z włączonym inteligentnym systemem ANC." },
        { icon: <Waves className="text-blue-300" size={32} />, title: "Dźwięk Przestrzenny", desc: "Zanurz się w wielowymiarowej scenie dźwiękowej, poczuj muzykę dokładnie tak, jak zaplanował to twórca." }
    ];

    return (
        <section id="features" className="py-24 px-4 md:px-6 relative z-10 w-full max-w-7xl mx-auto">
            <div className="grid md:grid-cols-3 gap-6 md:gap-8">
                {features.map((f, i) => (
                    <motion.div 
                        key={i}
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.7, delay: i * 0.15, ease: "easeOut" }}
                        className="bg-white/[0.03] backdrop-blur-[20px] border border-white/[0.08] p-8 md:p-10 rounded-3xl hover:bg-white/[0.05] transition-all relative overflow-hidden group hover:-translate-y-1 hover:shadow-[0_20px_40px_rgba(0,0,0,0.3)] duration-300"
                    >
                        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-white/[0.08] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                        <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-white/10 to-white/5 border border-white/10 flex items-center justify-center mb-8 shadow-inner relative z-10">
                            {f.icon}
                        </div>
                        <h3 className="text-2xl font-bold text-white mb-4 relative z-10">{f.title}</h3>
                        <p className="text-white/50 leading-relaxed font-light relative z-10">{f.desc}</p>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}

const DesignSection = () => {
    return (
        <section id="design" className="py-24 md:py-32 px-4 md:px-6 relative z-10">
            <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 md:gap-16 items-center">
                <motion.div 
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="relative rounded-3xl overflow-hidden group aspect-[4/3] bg-black/40 border border-white/10 backdrop-blur-xl shadow-2xl"
                >
                    <img src={designImage} 
                         alt="Design Aria" 
                         className="w-full h-full object-cover opacity-70 group-hover:opacity-90 group-hover:scale-105 transition-all duration-700 mix-blend-screen" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent pointer-events-none" />
                    <div className="absolute bottom-8 left-8 right-8 z-10">
                        <h3 className="text-2xl font-bold text-white mb-2">Projektowane bez kompromisów</h3>
                        <p className="text-white/60 font-light">Tytan, aluminium klasy lotniczej, wegańska skóra.</p>
                    </div>
                </motion.div>
                <div className="flex flex-col gap-6 md:gap-8">
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-br from-white to-white/50 leading-[1.1] mb-6">
                            Mistrzostwo<br/>formy i funkcji.
                        </h2>
                        <p className="text-lg md:text-xl text-white/50 leading-relaxed font-light mb-8">
                            Każdy łuk, każde spojenie i materiał w słuchawkach Aria został dobrany w sposób bezkompromisowy, aby zapewnić maksymalny komfort i trwałość, zachowując zjawiskową estetykę.
                        </p>
                    </motion.div>
                    
                    <ul className="flex flex-col gap-5 text-white/70">
                        {['Opcja Redukcji szumów oraz tryb kontaktu', 'Czułe 40mm tytanowe przetworniki', 'Matowe wykończenie odporne na zarysowania'].map((item, i) => (
                            <motion.li 
                                initial={{ opacity: 0, y: 10 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.4, delay: i * 0.1 }}
                                key={i} className="flex gap-4 items-center font-light text-lg"
                            >
                                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center">
                                    <CheckCircle2 className="text-purple-400" size={18} />
                                </div>
                                {item}
                            </motion.li>
                        ))}
                    </ul>
                </div>
            </div>
        </section>
    );
};

const Lifestyle = () => {
    return (
        <section id="lifestyle" className="py-24 relative z-10">
            <div className="max-w-7xl mx-auto px-4 md:px-6 mb-16 md:mb-20 text-center">
                <motion.h2 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-4xl md:text-5xl font-black text-white mb-6"
                >
                    Wszędzie z Tobą
                </motion.h2>
                <motion.p 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 }}
                    className="text-white/50 max-w-2xl mx-auto text-lg md:text-xl font-light leading-relaxed"
                >
                    Zgiełk miasta, zatłoczone biuro czy chwila samotności w studiu – Aria idealnie dostosowuje się do Twojego środowiska.
                </motion.p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6 max-w-7xl mx-auto px-4 md:px-6">
                 <motion.div 
                     initial={{ opacity: 0, y: 30 }}
                     whileInView={{ opacity: 1, y: 0 }}
                     viewport={{ once: true }}
                     transition={{ duration: 0.7 }}
                     className="rounded-[2.5rem] overflow-hidden aspect-square md:aspect-auto md:h-[600px] border border-white/10 relative group shadow-2xl"
                 >
                    <img src={lifestyleCityImage} 
                         title="Zastąp pikiem: lifestyle_city.png"
                         alt="City Lifestyle" 
                         className="w-full h-full object-cover opacity-90 group-hover:scale-105 transition-transform duration-1000 ease-out" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent opacity-80" />
                    <div className="absolute bottom-8 left-8 right-8">
                        <div className="inline-flex items-center backdrop-blur-md bg-white/10 px-5 py-2.5 rounded-full border border-white/20 mb-4 shadow-lg">
                            <span className="text-white text-sm font-semibold tracking-wide">Tryb Transparentny</span>
                        </div>
                        <h3 className="text-white text-3xl font-bold leading-tight">Pozostań w kontakcie z miastem.</h3>
                    </div>
                 </motion.div>
                 
                 <div className="grid grid-rows-2 gap-6">
                    <motion.div 
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7, delay: 0.1 }}
                        className="rounded-[2.5rem] overflow-hidden border border-white/10 relative group shadow-2xl"
                    >
                        <img src={lifestyleStudioImage} 
                             alt="Studio Lifestyle" 
                             title="Zastąp pikiem: lifestyle_studio_man.png"
                             className="w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-1000 ease-out" />
                         <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-90" />
                         <div className="absolute bottom-8 left-8 right-8 text-white">
                             <div className="text-xs font-bold tracking-widest text-white/50 mb-2 uppercase">Audiofile</div>
                             <h3 className="text-2xl font-bold">Stworzone dla profesjonalistów</h3>
                         </div>
                    </motion.div>
                    
                    <motion.div 
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7, delay: 0.2 }}
                        className="rounded-[2.5rem] overflow-hidden border border-white/10 relative group bg-gradient-to-br from-indigo-900/30 to-purple-900/40 backdrop-blur-xl p-8 flex flex-col justify-center items-center text-center shadow-2xl"
                    >
                         <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10 mix-blend-overlay"></div>
                         <motion.div 
                            initial={{ scale: 0.5, opacity: 0 }}
                            whileInView={{ scale: 1, opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.4, type: "spring", stiffness: 100 }}
                            className="text-7xl font-black text-transparent bg-clip-text bg-gradient-to-b from-white to-white/70 mb-4"
                         >
                            99%
                         </motion.div>
                         <div className="text-white/60 text-lg font-medium tracking-wide">Redukcji szumów otoczenia</div>
                         <div className="mt-6 flex flex-wrap justify-center gap-2">
                             {['Kawiarnia', 'Samolot', 'Biuro'].map((tag, i) => (
                                 <span key={i} className="text-xs px-3 py-1 rounded-full bg-white/5 border border-white/10 text-white/50">{tag}</span>
                             ))}
                         </div>
                    </motion.div>
                 </div>
            </div>
        </section>
    );
};

const CTA = () => {
    return (
        <section className="py-24 md:py-32 px-4 md:px-6 relative z-10 flex justify-center">
            <motion.div 
                initial={{ opacity: 0, y: 40, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8 }}
                className="w-full max-w-5xl bg-gradient-to-br from-white/[0.08] to-white/[0.02] border border-white/10 backdrop-blur-[30px] rounded-[3rem] p-10 md:p-20 text-center shadow-2xl relative overflow-hidden group"
            >
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[60%] h-[1px] bg-gradient-to-r from-transparent via-white/50 to-transparent group-hover:w-[80%] transition-all duration-700" />
                
                <h2 className="text-4xl md:text-5xl lg:text-7xl font-black text-white mb-6 md:mb-8 relative z-10">Gotowy na zmianę?</h2>
                <p className="text-lg md:text-xl text-white/60 mb-10 max-w-xl mx-auto font-light leading-relaxed relative z-10">
                    Kup słuchawki Aria teraz i zyskaj darmową dostawę oraz bezproblemowy 30-dniowy okres próbny na przetestowanie ich w swoich warunkach.
                </p>
                <button className="bg-white text-black px-10 md:px-14 py-4 md:py-5 rounded-full text-lg font-bold hover:bg-white/90 transition-transform hover:scale-105 active:scale-95 shadow-[0_0_40px_rgba(255,255,255,0.3)] hover:shadow-[0_0_60px_rgba(255,255,255,0.5)] relative z-10">
                    Kup teraz - 1290 PLN
                </button>
            </motion.div>
        </section>
    );
};

const Footer = () => (
    <footer className="border-t border-white/5 bg-black/50 backdrop-blur-xl py-12 px-6 relative z-10">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="flex flex-col items-center md:items-start gap-2">
                <div className="text-2xl font-black tracking-widest text-white/50">ARIA</div>
                <div className="text-white/30 text-xs">Aria Audio Technologies Inc.</div>
            </div>
            <div className="flex flex-wrap justify-center gap-6 md:gap-8 text-white/40 text-sm font-medium">
                <a href="#" className="hover:text-white transition-colors">Sklep</a>
                <a href="#" className="hover:text-white transition-colors">Regulamin</a>
                <a href="#" className="hover:text-white transition-colors">Polityka prywatności</a>
                <a href="#" className="hover:text-white transition-colors">Pomoc</a>
            </div>
            <div className="text-white/20 text-sm font-light">
                © 2026 Aria Audio. Wszelkie prawa zastrzeżone.
            </div>
        </div>
    </footer>
);

export default function App() {
  return (
    <div className="min-h-screen bg-[#050505] font-sans selection:bg-purple-500/40 selection:text-white">
        <GlowBackground />
        <GlassHeader />
        <Hero />
        <Features />
        <DesignSection />
        <Lifestyle />
        <CTA />
        <Footer />
        
    </div>
  );
}

