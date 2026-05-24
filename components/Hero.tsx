import React, { useRef, useState, useEffect } from 'react';
import { ArrowRight, PlayCircle, Sparkles, Star, Zap, ArrowLeft } from 'lucide-react';
import { IMAGES } from '../constants';
import { ViewState } from '../types';

interface HeroProps {
  onNavigate: (view: ViewState) => void;
}

export const Hero: React.FC<HeroProps> = ({ onNavigate }) => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  // Flatten images for the collage
  const allImages = Object.values(IMAGES);

  // Create columns with specific image sets to vary the visual rhythm
  // Using 3x repetition to ensure smooth infinite scrolling
  const col1 = [...allImages.slice(0, 5), ...allImages.slice(0, 5), ...allImages.slice(0, 5)];
  const col2 = [...allImages.slice(5, 10), ...allImages.slice(5, 10), ...allImages.slice(5, 10)];
  const col3 = [...allImages.slice(10, 14), ...allImages.slice(10, 14), ...allImages.slice(10, 14)];
  const col4 = [...allImages.slice(14, 19), ...allImages.slice(14, 19), ...allImages.slice(14, 19)];
  const col5 = [...allImages.slice(0, 6).reverse(), ...allImages.slice(0, 6).reverse(), ...allImages.slice(0, 6).reverse()];

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const scrollToContent = () => {
    scrollRef.current?.scrollIntoView({ behavior: 'smooth' });
  };
  
  const scrollLeft = () => {
      scrollContainerRef.current?.scrollBy({ left: -400, behavior: 'smooth' });
  };
  
  const scrollRight = () => {
      scrollContainerRef.current?.scrollBy({ left: 400, behavior: 'smooth' });
  };

  return (
    <div className="relative w-full h-full overflow-y-auto scrollbar-hide snap-y snap-mandatory bg-dark-bg">
        <style>{`
            @keyframes marqueeUp {
                0% { transform: translateY(0); }
                100% { transform: translateY(-33.33%); }
            }
            @keyframes marqueeDown {
                0% { transform: translateY(-33.33%); }
                100% { transform: translateY(0); }
            }
        `}</style>

        {/* Global Cursor Light Follower */}
        <div 
            className="fixed top-0 left-0 w-[800px] h-[800px] bg-heritage-500/15 rounded-full blur-[120px] pointer-events-none z-[5] mix-blend-screen transition-transform duration-75 ease-out"
            style={{ 
                transform: `translate(${mousePos.x - 400}px, ${mousePos.y - 400}px)`,
                willChange: 'transform'
            }}
        />

        {/* SECTION 1: HERO LANDING */}
        <section className="relative w-full h-screen snap-start overflow-hidden bg-dark-bg">
            {/* Background Layers */}
            <div className="absolute inset-0 z-0 overflow-hidden">
                {/* 1. Deep Rotating Conic Gradient */}
                <div className="absolute -top-[50%] -left-[50%] w-[200%] h-[200%] animate-spin-slow opacity-50 md:opacity-40">
                    <div className="w-full h-full bg-[conic-gradient(from_0deg,#020617_0deg,#d97706_50deg,#020617_100deg,#312e81_180deg,#d97706_260deg,#020617_360deg)] blur-[100px] mix-blend-screen"></div>
                </div>

                {/* 2. Infinite Blurred Artifact Collage */}
                {/* Rotated and scaled container to create depth and remove edges */}
                <div className="absolute inset-0 z-0 opacity-40 pointer-events-none overflow-hidden">
                    <div className="absolute -inset-[50%] w-[200%] h-[250%] flex justify-center gap-4 md:gap-8 transform -rotate-[15deg] scale-110 origin-center">
                        
                        {/* Column 1: Narrow & Fast - Background texture */}
                        <div className="flex flex-col gap-4 w-24 md:w-40 animate-[marqueeUp_45s_linear_infinite]">
                            {col1.map((img, i) => (
                                <div key={i} className="w-full aspect-[2/3] rounded-lg overflow-hidden opacity-50">
                                    <img src={img} className="w-full h-full object-cover grayscale blur-[3px] scale-110" alt="" />
                                </div>
                            ))}
                        </div>

                        {/* Column 2: Wide & Slow - Featured subtle elements */}
                        <div className="flex flex-col gap-8 w-64 md:w-[400px] animate-[marqueeDown_65s_linear_infinite] mt-[-200px]">
                            {col2.map((img, i) => (
                                <div key={i} className="w-full aspect-video rounded-2xl overflow-hidden opacity-70">
                                    <img src={img} className="w-full h-full object-cover grayscale blur-[4px] scale-105" alt="" />
                                </div>
                            ))}
                        </div>

                        {/* Column 3: Medium & Medium Speed */}
                        <div className="flex flex-col gap-6 w-48 md:w-64 animate-[marqueeUp_55s_linear_infinite]">
                            {col3.map((img, i) => (
                                <div key={i} className="w-full aspect-square rounded-xl overflow-hidden opacity-60">
                                    <img src={img} className="w-full h-full object-cover grayscale blur-[2px] scale-110" alt="" />
                                </div>
                            ))}
                        </div>

                        {/* Column 4: Extra Wide & Very Slow - Deep background */}
                        <div className="flex flex-col gap-10 w-80 md:w-[500px] animate-[marqueeDown_90s_linear_infinite] mt-[-400px]">
                            {col4.map((img, i) => (
                                <div key={i} className="w-full aspect-[3/4] rounded-3xl overflow-hidden opacity-40">
                                    <img src={img} className="w-full h-full object-cover grayscale blur-[5px] scale-105" alt="" />
                                </div>
                            ))}
                        </div>

                        {/* Column 5: Narrow & Fast - Foreground speed */}
                        <div className="flex flex-col gap-5 w-32 md:w-56 animate-[marqueeUp_50s_linear_infinite] mt-[100px]">
                            {col5.map((img, i) => (
                                <div key={i} className="w-full aspect-[9/16] rounded-xl overflow-hidden opacity-50">
                                    <img src={img} className="w-full h-full object-cover grayscale blur-[3px] scale-110" alt="" />
                                </div>
                            ))}
                        </div>

                    </div>
                </div>

                {/* 3. Floating Orbs (Foreground Lighting) */}
                <div className="absolute top-[20%] left-[20%] w-[40vw] h-[40vw] bg-heritage-500/10 rounded-full blur-[120px] animate-pulse-slow mix-blend-screen"></div>
                <div className="absolute bottom-[20%] right-[10%] w-[50vw] h-[50vw] bg-indigo-900/20 rounded-full blur-[100px] animate-pulse-slow mix-blend-screen" style={{animationDelay: '2s'}}></div>

                {/* 4. Noise Texture (Frosted Glass Effect) */}
                <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-15 mix-blend-overlay contrast-150 brightness-100"></div>
                
                {/* 5. Vignette & Fade */}
                <div className="absolute inset-0 bg-dark-bg/40 bg-gradient-to-t from-dark-bg via-transparent to-dark-bg/60 pointer-events-none"></div>
                <div className="absolute inset-0 bg-gradient-to-r from-dark-bg/90 via-transparent to-dark-bg/90 pointer-events-none"></div>
            </div>

            {/* Content */}
            <div className="relative z-10 h-full flex flex-col justify-center px-6 md:px-20 lg:px-32 max-w-[1600px] mx-auto pointer-events-none">
                <div className="border-l-2 border-heritage-500/50 pl-8 md:pl-12 backdrop-blur-md bg-white/[0.03] py-10 max-w-2xl animate-fade-in-up transition-all duration-500 rounded-r-2xl border-y border-y-transparent border-r-transparent shadow-[0_0_40px_rgba(0,0,0,0.2)] pointer-events-auto relative overflow-hidden group">
                    <div className="absolute inset-0 bg-gradient-to-r from-heritage-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    
                    <h2 className="text-heritage-500 text-sm tracking-[0.5em] uppercase mb-6 flex items-center gap-4 animate-fade-in relative z-10">
                        <span className="w-8 h-[1px] bg-heritage-500"></span>
                        沉浸式数字文博平台
                    </h2>
                    <h1 className="text-7xl md:text-8xl lg:text-9xl font-black text-white mb-8 tracking-tighter leading-[0.9] mix-blend-overlay opacity-90 drop-shadow-2xl relative z-10">
                        云博<span className="text-heritage-500">·</span>境
                    </h1>
                    <p className="text-slate-200 text-lg font-light leading-relaxed mb-10 max-w-lg tracking-wide drop-shadow-lg relative z-10">
                        当历史遇见未来智能。通过高保真数字孪生技术，跨越时空，触碰文明的灵魂。
                        <br/>
                        <span className="text-heritage-500/80 text-sm mt-2 block font-mono">#AI修复 #WebAR #8K超清</span>
                    </p>
                    
                    <div className="flex flex-wrap gap-4 relative z-10">
                        <button 
                            onClick={() => onNavigate('gallery')}
                            className="group relative px-8 py-4 bg-heritage-500 text-white font-bold tracking-widest overflow-hidden shadow-[0_0_30px_rgba(217,119,6,0.3)] hover:shadow-[0_0_50px_rgba(217,119,6,0.5)] transition-all"
                        >
                            <span className="relative z-10 flex items-center gap-2">
                                开启境域 <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform"/>
                            </span>
                            <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
                        </button>
                        
                        <button className="px-8 py-4 border border-white/20 text-white font-medium tracking-widest hover:bg-white/5 transition-all flex items-center gap-3 backdrop-blur-sm">
                            <PlayCircle size={20} />
                            影像赏析
                        </button>
                    </div>
                </div>
            </div>

            {/* Animated Scroll Indicator */}
            <div 
                onClick={scrollToContent}
                className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 z-10 cursor-pointer group pointer-events-auto"
            >
                <span className="text-[10px] tracking-[0.3em] uppercase text-white/50 group-hover:text-white transition-colors">Scroll to Explore</span>
                <div className="w-[30px] h-[50px] border border-white/30 rounded-full flex justify-center pt-2 group-hover:border-white transition-colors">
                    <div className="w-1 h-2 bg-heritage-500 rounded-full animate-bounce"></div>
                </div>
            </div>
        </section>

        {/* SECTION 2: INTRO & RECOMMENDATIONS */}
        <section ref={scrollRef} className="relative w-full min-h-screen bg-dark-bg snap-start flex flex-col justify-center py-20 overflow-hidden">
             
             {/* Dynamic Background */}
             <div className="absolute inset-0 pointer-events-none">
                 <div className="absolute top-[10%] right-[-10%] w-[800px] h-[800px] bg-heritage-500/5 rounded-full blur-[150px] animate-pulse-slow"></div>
                 <div className="absolute bottom-[-10%] left-[-20%] w-[1000px] h-[1000px] bg-indigo-900/10 rounded-full blur-[200px] animate-pulse-slow" style={{animationDelay: '3s'}}></div>
                 <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-100 contrast-150"></div>
             </div>

             <div className="relative z-10 w-full max-w-[1600px] mx-auto px-6 md:px-20 lg:px-32">
                 <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
                     <div>
                         <span className="text-heritage-500 font-mono text-xs tracking-widest mb-4 block">ABOUT THE REALM</span>
                         <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
                             重塑 <span className="text-transparent bg-clip-text bg-gradient-to-r from-heritage-500 to-amber-200">文化记忆</span> 的<br/>数字方舟
                         </h2>
                         <p className="text-slate-400 leading-relaxed mb-8">
                             云博·境不仅是一个数字博物馆，它是连接过去与未来的桥梁。我们利用最前沿的光场扫描、物理渲染 (PBR) 和生成式 AI 技术，将濒临消失的文化遗产永久保存于云端。在这里，每一件文物都拥有自己的"数字灵魂"，等待着与您的跨时空对话。
                         </p>
                         <div className="flex gap-8">
                             <div>
                                 <h4 className="text-3xl font-bold text-white mb-1">50+</h4>
                                 <p className="text-xs text-slate-500 uppercase tracking-wider">合作博物馆</p>
                             </div>
                             <div>
                                 <h4 className="text-3xl font-bold text-white mb-1">12k+</h4>
                                 <p className="text-xs text-slate-500 uppercase tracking-wider">数字藏品</p>
                             </div>
                             <div>
                                 <h4 className="text-3xl font-bold text-white mb-1">8K</h4>
                                 <p className="text-xs text-slate-500 uppercase tracking-wider">超清分辨率</p>
                             </div>
                         </div>
                     </div>
                     <div className="relative">
                         <div className="absolute -inset-4 bg-heritage-500/10 rounded-2xl blur-xl rotate-3"></div>
                         <div className="relative rounded-2xl overflow-hidden border border-white/10 aspect-video group">
                             <div 
                                 className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                                 style={{ backgroundImage: `url('${IMAGES.poster_underwater}')` }}
                             ></div>
                             <div className="absolute inset-0 bg-black/40 group-hover:bg-transparent transition-colors"></div>
                             <div className="absolute bottom-6 left-6">
                                <div className="flex items-center gap-2 mb-2">
                                    <div className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></div>
                                    <span className="text-xs font-bold text-white uppercase tracking-wider">Live Preview</span>
                                </div>
                                <h3 className="text-xl font-bold text-white">南海一号水下考古现场</h3>
                             </div>
                             <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                 <div className="w-16 h-16 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center border border-white/30">
                                     <PlayCircle size={32} className="text-white fill-white/20" />
                                 </div>
                             </div>
                         </div>
                     </div>
                 </div>

                 {/* Exhibition Scroll */}
                 <div>
                     <div className="flex justify-between items-end mb-10">
                         <div>
                             <span className="text-heritage-500 font-mono text-xs tracking-widest mb-2 block">CURATED SELECTIONS</span>
                             <h3 className="text-3xl font-bold text-white">本周推荐展览</h3>
                         </div>
                         <div className="flex gap-4">
                             <button onClick={scrollLeft} className="w-10 h-10 rounded-full bg-white/5 hover:bg-white/10 flex items-center justify-center border border-white/10 transition-colors">
                                 <ArrowLeft size={16} className="text-slate-300" />
                             </button>
                             <button onClick={scrollRight} className="w-10 h-10 rounded-full bg-white/5 hover:bg-white/10 flex items-center justify-center border border-white/10 transition-colors">
                                 <ArrowRight size={16} className="text-slate-300" />
                             </button>
                         </div>
                     </div>
                     
                     <div 
                         ref={scrollContainerRef}
                         className="flex gap-6 overflow-x-auto pb-8 snap-x snap-mandatory scrollbar-hide -mx-6 px-6 md:-mx-20 md:px-20 lg:-mx-32 lg:px-32"
                     >
                         {[
                             { title: "敦煌：千年一瞬", tag: "AR 修复", img: IMAGES.poster_dunhuang, icon: Sparkles, desc: "重现莫高窟第220窟壁画剥落前的辉煌盛景。" },
                             { title: "三星堆神树", tag: "3D 全景", img: IMAGES.poster_sanxingdui, icon: Zap, desc: "360度全景解析青铜神树的铸造工艺与祭祀场景。" },
                             { title: "紫禁城夜宴", tag: "沉浸式 VR", img: IMAGES.poster_forbidden, icon: Star, desc: "体验从未开放的夜间景色，聆听宫廷旧事。" },
                             { title: "水下考古", tag: "深海探测", img: IMAGES.poster_underwater, icon: PlayCircle, desc: "跟随水下机器人视角，潜入800年前的沉船现场。" },
                         ].map((item, i) => (
                             <div 
                                 key={i} 
                                 onClick={() => onNavigate('explore')} 
                                 className="min-w-[300px] md:min-w-[400px] snap-center group cursor-pointer relative rounded-2xl overflow-hidden glass-panel border border-white/10 hover:border-heritage-500/30 transition-all duration-300 hover:-translate-y-2"
                             >
                                 <div className="relative aspect-[16/9] overflow-hidden">
                                     <div 
                                         className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                                         style={{ backgroundImage: `url('${item.img}')` }}
                                     ></div>
                                     <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors"></div>
                                     <div className="absolute top-4 right-4 bg-black/60 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/10">
                                         <span className="text-[10px] font-bold text-white flex items-center gap-1.5">
                                             <item.icon size={12} className="text-heritage-500" /> {item.tag}
                                         </span>
                                     </div>
                                 </div>
                                 <div className="p-6 bg-gradient-to-b from-transparent to-black/80">
                                     <h4 className="text-xl font-bold text-white group-hover:text-heritage-500 transition-colors mb-2">{item.title}</h4>
                                     <p className="text-sm text-slate-400 mb-4 line-clamp-2">{item.desc}</p>
                                     <div className="flex items-center text-xs font-bold text-heritage-500 uppercase tracking-wider gap-2 opacity-0 group-hover:opacity-100 transition-opacity transform translate-y-2 group-hover:translate-y-0">
                                         立即体验 <ArrowRight size={14} />
                                     </div>
                                 </div>
                             </div>
                         ))}
                         {/* Spacer for right padding in scroll view */}
                         <div className="min-w-[1px] h-1"></div>
                     </div>
                 </div>
             </div>
        </section>
    </div>
  );
};