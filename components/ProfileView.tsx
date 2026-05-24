
import React from 'react';
import { IMAGES } from '../constants';
import { Plus, Edit2, ChevronDown, BadgeCheck, Scan } from 'lucide-react';

export const ProfileView: React.FC = () => {
    return (
        <div className="w-full h-full pt-32 pb-20 px-6 md:px-12 lg:px-20 container mx-auto overflow-y-auto">
            {/* Breadcrumb */}
            <nav className="flex items-center gap-3 text-[10px] md:text-xs font-light tracking-[0.15em] text-white/30 uppercase mb-16 animate-pulse">
                <span className="hover:text-heritage-500 transition-colors cursor-pointer">时光透镜</span>
                <span className="text-heritage-500/40">›</span>
                <span className="text-heritage-500 tracking-widest">个人主页</span>
            </nav>

            {/* Profile Header */}
            <section className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 mb-24 border-b border-white/5 pb-16 relative">
                <div className="absolute -left-20 top-0 bottom-0 w-[1px] bg-gradient-to-b from-transparent via-heritage-500/20 to-transparent hidden lg:block"></div>
                
                {/* Avatar & Info */}
                <div className="lg:col-span-4 flex flex-col md:flex-row lg:flex-col gap-8 items-start relative animate-slide-in-left">
                    <div className="relative group">
                        <div className="w-32 h-32 md:w-40 md:h-40 rounded-full p-1 border border-heritage-500/40 relative z-10 glass-panel">
                            <img alt="User Avatar" className="w-full h-full object-cover rounded-full grayscale hover:grayscale-0 transition-all duration-700 hover:scale-110" src={IMAGES.avatar_user_1} />
                        </div>
                        <div className="absolute -inset-4 border border-heritage-500/10 rounded-full animate-spin-slow border-t-transparent border-l-transparent pointer-events-none"></div>
                        <div className="absolute -inset-8 border border-white/5 rounded-full animate-spin-slow direction-reverse border-b-transparent border-r-transparent pointer-events-none"></div>
                    </div>
                    <div className="flex flex-col gap-3">
                        <h1 className="text-4xl md:text-5xl font-black text-white tracking-widest flex items-center gap-4">
                            墨 隐
                            <BadgeCheck className="text-heritage-500" size={28} />
                        </h1>
                        <p className="text-heritage-500/80 text-sm tracking-[0.2em] font-light uppercase">数字考古学家 / 3D 建模师</p>
                        <p className="text-white/40 text-xs leading-6 max-w-sm mt-2 font-light">
                            致力于通过 WebAR 技术重现失落的文明碎片。让历史不仅可观，更可触。
                        </p>
                    </div>
                </div>

                {/* Stats & Actions */}
                <div className="lg:col-span-8 flex flex-col justify-end animate-slide-in-right">
                    <div className="flex flex-wrap gap-12 md:gap-20 mb-12">
                        <div className="group cursor-pointer">
                            <div className="text-3xl font-light text-white mb-1 group-hover:text-heritage-500 transition-colors font-mono">24</div>
                            <div className="text-[10px] text-white/30 uppercase tracking-[0.2em]">我的造物</div>
                        </div>
                        <div className="group cursor-pointer">
                            <div className="text-3xl font-light text-white mb-1 group-hover:text-heritage-500 transition-colors font-mono">1.2k</div>
                            <div className="text-[10px] text-white/30 uppercase tracking-[0.2em]">灵境收藏</div>
                        </div>
                        <div className="group cursor-pointer">
                            <div className="text-3xl font-light text-white mb-1 group-hover:text-heritage-500 transition-colors font-mono">890</div>
                            <div className="text-[10px] text-white/30 uppercase tracking-[0.2em]">关注者</div>
                        </div>
                    </div>
                    
                    <div className="w-full h-px bg-white/10 relative">
                        <div className="absolute left-0 top-0 h-full w-32 bg-heritage-500/60"></div>
                    </div>
                    
                    <div className="flex gap-6 mt-10">
                        <button className="px-8 py-3 bg-heritage-500/10 hover:bg-heritage-500/20 border border-heritage-500/30 text-heritage-500 text-xs tracking-[0.2em] transition-all uppercase flex items-center gap-2 group">
                            <Plus size={16} className="group-hover:rotate-180 transition-transform duration-500" />
                            发布新作
                        </button>
                        <button className="px-8 py-3 bg-transparent border border-white/10 hover:border-white/30 text-white/60 hover:text-white text-xs tracking-[0.2em] transition-all uppercase flex items-center gap-2">
                             <Edit2 size={14} />
                             编辑资料
                        </button>
                    </div>
                </div>
            </section>

            {/* Tabs */}
            <div className="flex items-end gap-10 mb-12 relative z-20">
                <button className="text-xl md:text-2xl text-white font-medium tracking-widest relative pb-4 group">
                    我的造物
                    <span className="absolute bottom-0 left-0 w-full h-[2px] bg-heritage-500 shadow-[0_0_15px_rgba(201,160,80,0.6)]"></span>
                </button>
                <button className="text-xl md:text-2xl text-white/30 font-light tracking-widest relative pb-4 group hover:text-white/60 transition-colors">
                    灵境收藏
                    <span className="absolute bottom-0 left-0 w-0 group-hover:w-full h-[1px] bg-white/30 transition-all duration-500"></span>
                </button>
            </div>

            {/* Creations Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 lg:gap-10 pb-20">
                {/* Item 1 */}
                <div className="group relative aspect-[3/4] cursor-pointer">
                    <div className="absolute inset-0 border border-white/10 group-hover:border-heritage-500/50 transition-colors duration-500 z-10 bg-black/20 overflow-hidden">
                        <img alt="Artifact" className="w-full h-full object-cover opacity-70 group-hover:scale-105 group-hover:opacity-100 transition-all duration-700" src={IMAGES.vase_blue} />
                        <div className="absolute inset-0 bg-gradient-to-t from-dark-bg via-transparent to-transparent opacity-80"></div>
                        <div className="absolute top-4 left-4 z-20">
                            <span className="text-[9px] font-mono text-heritage-500/80 border border-heritage-500/20 px-2 py-1 bg-black/40 backdrop-blur-sm">3D MODEL</span>
                        </div>
                        <div className="absolute bottom-0 left-0 w-full p-6 z-20 translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                            <div className="w-8 h-[1px] bg-heritage-500 mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100"></div>
                            <h3 className="text-lg text-white font-normal tracking-wider mb-2">商代青铜尊 · 修复版</h3>
                            <div className="flex justify-between items-center border-t border-white/10 pt-3 mt-1">
                                <span className="text-[10px] text-white/40 tracking-widest uppercase">2023.10.15</span>
                                <div className="text-white/60 text-xs font-mono group-hover:text-heritage-500 transition-colors">1.2k Likes</div>
                            </div>
                        </div>
                    </div>
                </div>

                 {/* Item 2 */}
                <div className="group relative aspect-[3/4] cursor-pointer">
                    <div className="absolute inset-0 border border-white/10 group-hover:border-heritage-500/50 transition-colors duration-500 z-10 bg-black/20 overflow-hidden">
                        <img alt="Artifact" className="w-full h-full object-cover opacity-60 grayscale group-hover:grayscale-0 group-hover:scale-105 group-hover:opacity-100 transition-all duration-700" src={IMAGES.poster_qin} />
                        <div className="absolute inset-0 bg-gradient-to-t from-dark-bg via-transparent to-transparent opacity-80"></div>
                        <div className="absolute top-4 left-4 z-20">
                            <span className="text-[9px] font-mono text-white/50 border border-white/10 px-2 py-1 bg-black/40 backdrop-blur-sm">POINT CLOUD</span>
                        </div>
                        <div className="absolute bottom-0 left-0 w-full p-6 z-20 translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                            <div className="w-8 h-[1px] bg-heritage-500 mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100"></div>
                            <h3 className="text-lg text-white font-normal tracking-wider mb-2">秦陵兵俑 · 头部扫描</h3>
                            <div className="flex justify-between items-center border-t border-white/10 pt-3 mt-1">
                                <span className="text-[10px] text-white/40 tracking-widest uppercase">2023.09.28</span>
                                <div className="text-white/60 text-xs font-mono group-hover:text-heritage-500 transition-colors">856 Likes</div>
                            </div>
                        </div>
                    </div>
                </div>
                
                 {/* Item 3 (Abstract) */}
                 <div className="group relative aspect-[3/4] cursor-pointer">
                    <div className="absolute inset-0 border border-white/10 group-hover:border-heritage-500/50 transition-colors duration-500 z-10 bg-black/20 overflow-hidden flex items-center justify-center">
                        <div className="w-full h-full absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(217,119,6,0.1),transparent)] opacity-50"></div>
                        <div className="w-32 h-32 border border-heritage-500/20 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-700">
                             <div className="w-20 h-20 border border-white/10 rotate-45"></div>
                        </div>
                        <div className="absolute inset-0 bg-gradient-to-t from-dark-bg via-transparent to-transparent opacity-80"></div>
                        <div className="absolute top-4 left-4 z-20">
                            <span className="text-[9px] font-mono text-white/50 border border-white/10 px-2 py-1 bg-black/40 backdrop-blur-sm">WIP</span>
                        </div>
                        <div className="absolute bottom-0 left-0 w-full p-6 z-20 translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                             <div className="w-8 h-[1px] bg-heritage-500 mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100"></div>
                            <h3 className="text-lg text-white font-normal tracking-wider mb-2">玉琮 · 纹样提取</h3>
                            <div className="flex justify-between items-center border-t border-white/10 pt-3 mt-1">
                                <span className="text-[10px] text-white/40 tracking-widest uppercase">2023.09.12</span>
                                <div className="text-white/60 text-xs font-mono group-hover:text-heritage-500 transition-colors">420 Likes</div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Item 4 */}
                <div className="group relative aspect-[3/4] cursor-pointer">
                    <div className="absolute inset-0 border border-white/10 group-hover:border-heritage-500/50 transition-colors duration-500 z-10 bg-black/20 overflow-hidden">
                        <img alt="Artifact" className="w-full h-full object-cover opacity-50 sepia group-hover:scale-105 group-hover:sepia-0 group-hover:opacity-90 transition-all duration-700" src={IMAGES.mask_gold} />
                        <div className="absolute inset-0 bg-gradient-to-t from-dark-bg via-transparent to-transparent opacity-80"></div>
                        <div className="absolute top-4 left-4 z-20">
                            <span className="text-[9px] font-mono text-white/50 border border-white/10 px-2 py-1 bg-black/40 backdrop-blur-sm">ARCHIVE</span>
                        </div>
                        <div className="absolute bottom-0 left-0 w-full p-6 z-20 translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                            <div className="w-8 h-[1px] bg-heritage-500 mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100"></div>
                            <h3 className="text-lg text-white font-normal tracking-wider mb-2">古蜀金面具</h3>
                            <div className="flex justify-between items-center border-t border-white/10 pt-3 mt-1">
                                <span className="text-[10px] text-white/40 tracking-widest uppercase">2023.08.30</span>
                                <div className="text-white/60 text-xs font-mono group-hover:text-heritage-500 transition-colors">2.1k Likes</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
            <div className="flex justify-center">
                 <button className="text-white/30 hover:text-heritage-500 transition-colors text-[10px] uppercase tracking-[0.3em] flex flex-col items-center gap-2">
                     加载更多
                 </button>
            </div>
        </div>
    );
};
