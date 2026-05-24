import React from 'react';
import { IMAGES } from '../constants';
import { ArrowRight, Lock } from 'lucide-react';

export const ExhibitionView: React.FC = () => {
    return (
        <div className="w-full h-full flex flex-col justify-center relative pt-20">
            {/* Horizontal Scroll Container */}
            <div className="w-full h-[70vh] flex items-center gap-8 overflow-x-auto px-[10vw] scrollbar-hide snap-x snap-mandatory py-10" style={{scrollBehavior: 'smooth'}}>
                
                {/* Card 1: Tang Dynasty */}
                <div className="group relative flex-shrink-0 w-[85vw] md:w-[28vw] min-w-[320px] h-full snap-center rounded-[2rem] overflow-hidden border border-white/10 bg-[#0a0a0a] cursor-pointer transition-all duration-500 hover:border-heritage-500/50 hover:shadow-[0_0_50px_rgba(217,119,6,0.15)]">
                    <div className="absolute inset-0">
                        <img alt="Tang Dynasty" className="w-full h-full object-cover opacity-60 group-hover:opacity-100 group-hover:scale-110 transition-all duration-1000 ease-out" src={IMAGES.avatar_libai} />
                        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-90 group-hover:opacity-70 transition-opacity duration-500"></div>
                    </div>
                    <div className="absolute bottom-0 left-0 w-full p-10 flex flex-col items-start transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                        <span className="text-heritage-500 text-xs font-bold tracking-[0.3em] uppercase mb-3 border border-heritage-500/30 px-3 py-1 rounded-full bg-black/40 backdrop-blur-sm">Special Exhibit</span>
                        <h3 className="text-4xl md:text-5xl font-black text-white mb-4 leading-tight">大唐<br/>风华</h3>
                        <p className="text-slate-300 text-sm md:text-base font-light line-clamp-3 mb-8 opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500 delay-100 max-w-[90%]">
                            穿越时空，与李白对饮，重回盛世长安。体验极致的东方美学与诗意生活。
                        </p>
                        <div className="flex items-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-200">
                            <button className="bg-heritage-500 text-white pl-6 pr-5 py-3.5 rounded-full shadow-[0_0_20px_rgba(217,119,6,0.4)] hover:shadow-[0_0_30px_rgba(217,119,6,0.6)] hover:bg-heritage-600 transition-all flex items-center gap-2 group/btn">
                                <span className="font-bold text-sm tracking-widest">进入展厅</span>
                                <ArrowRight size={18} className="group-hover/btn:translate-x-1 transition-transform" />
                            </button>
                        </div>
                    </div>
                    <div className="absolute top-8 right-8 mix-blend-overlay">
                        <span className="text-8xl font-thin text-white opacity-20 group-hover:opacity-40 transition-opacity">01</span>
                    </div>
                </div>

                {/* Card 2: Silk Road */}
                <div className="group relative flex-shrink-0 w-[85vw] md:w-[28vw] min-w-[320px] h-full snap-center rounded-[2rem] overflow-hidden border border-white/10 bg-[#0a0a0a] cursor-pointer transition-all duration-500 hover:border-heritage-500/50">
                    <div className="absolute inset-0">
                        <img alt="Silk Road" className="w-full h-full object-cover opacity-60 group-hover:opacity-100 group-hover:scale-110 transition-all duration-1000 ease-out" src={IMAGES.vase_blue} />
                        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-90 group-hover:opacity-70 transition-opacity duration-500"></div>
                    </div>
                    <div className="absolute bottom-0 left-0 w-full p-10 flex flex-col items-start transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                        <span className="text-white/60 text-xs font-bold tracking-[0.3em] uppercase mb-3 border border-white/10 px-3 py-1 rounded-full bg-black/40 backdrop-blur-sm">Collection</span>
                        <h3 className="text-4xl md:text-5xl font-black text-white mb-4 leading-tight">丝路<br/>遗珍</h3>
                        <p className="text-slate-300 text-sm md:text-base font-light line-clamp-3 mb-8 opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500 delay-100 max-w-[90%]">
                            探索数千公里丝绸之路上的文明碎片，通过 AI 修复技术重现破碎文物的完整面貌。
                        </p>
                        <div className="flex items-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-200">
                            <button className="bg-heritage-500 text-white pl-6 pr-5 py-3.5 rounded-full shadow-[0_0_20px_rgba(217,119,6,0.4)] hover:shadow-[0_0_30px_rgba(217,119,6,0.6)] hover:bg-heritage-600 transition-all flex items-center gap-2 group/btn">
                                <span className="font-bold text-sm tracking-widest">进入展厅</span>
                                <ArrowRight size={18} className="group-hover/btn:translate-x-1 transition-transform" />
                            </button>
                        </div>
                    </div>
                    <div className="absolute top-8 right-8 mix-blend-overlay">
                        <span className="text-8xl font-thin text-white opacity-20 group-hover:opacity-40 transition-opacity">02</span>
                    </div>
                </div>

                {/* Card 3: Future Archive */}
                <div className="group relative flex-shrink-0 w-[85vw] md:w-[28vw] min-w-[320px] h-full snap-center rounded-[2rem] overflow-hidden border border-white/10 bg-[#0a0a0a] cursor-pointer transition-all duration-500 hover:border-heritage-500/50">
                    <div className="absolute inset-0">
                        <img alt="Future Archive" className="w-full h-full object-cover opacity-50 group-hover:opacity-80 group-hover:scale-110 transition-all duration-1000 ease-out brightness-50 sepia-[.5] hue-rotate-[-30deg]" src={IMAGES.hero_bg} />
                        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-90 group-hover:opacity-70 transition-opacity duration-500"></div>
                        <div className="absolute inset-0 border-[0.5px] border-white/5 m-4 rounded-xl"></div>
                    </div>
                    <div className="absolute bottom-0 left-0 w-full p-10 flex flex-col items-start transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                        <span className="text-white/60 text-xs font-bold tracking-[0.3em] uppercase mb-3 border border-white/10 px-3 py-1 rounded-full bg-black/40 backdrop-blur-sm">Coming Soon</span>
                        <h3 className="text-4xl md:text-5xl font-black text-white mb-4 leading-tight">未来<br/>考古</h3>
                        <p className="text-slate-300 text-sm md:text-base font-light line-clamp-3 mb-8 opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500 delay-100 max-w-[90%]">
                            当下的数字足迹，即是未来的出土文物。探索21世纪的数字化遗存与虚拟文明。
                        </p>
                        <div className="flex items-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-200">
                            <button className="bg-white/10 backdrop-blur-md text-white border border-white/20 pl-6 pr-5 py-3.5 rounded-full hover:bg-white/20 transition-all flex items-center gap-2 group/btn cursor-not-allowed">
                                <span className="font-bold text-sm tracking-widest">即将开放</span>
                                <Lock size={18} />
                            </button>
                        </div>
                    </div>
                    <div className="absolute top-8 right-8 mix-blend-overlay">
                        <span className="text-8xl font-thin text-white opacity-20 group-hover:opacity-40 transition-opacity">03</span>
                    </div>
                </div>

                <div className="w-[5vw] flex-shrink-0"></div>
            </div>

            {/* Bottom Indicators */}
            <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex gap-3 z-20">
                <div className="w-12 h-1 bg-white rounded-full opacity-100 shadow-[0_0_10px_rgba(255,255,255,0.5)]"></div>
                <div className="w-12 h-1 bg-white/20 rounded-full hover:bg-white/40 transition-colors cursor-pointer"></div>
                <div className="w-12 h-1 bg-white/20 rounded-full hover:bg-white/40 transition-colors cursor-pointer"></div>
            </div>

            {/* Stats */}
            <div className="absolute bottom-12 left-10 hidden md:flex flex-col gap-1 animate-fade-in-up">
                <div className="flex items-baseline gap-2">
                    <span className="text-3xl font-bold text-white">2,481</span>
                    <span className="text-xs text-heritage-500 uppercase tracking-wider font-bold">件文物在线</span>
                </div>
                <div className="h-0.5 w-12 bg-gradient-to-r from-heritage-500 to-transparent my-1"></div>
                <span className="text-[10px] text-slate-500 uppercase tracking-widest">实时渲染中</span>
            </div>
        </div>
    );
};