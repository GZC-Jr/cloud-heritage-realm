import React from 'react';
import { Search, Info, Sparkles } from 'lucide-react';
import { ARTIFACTS, IMAGES } from '../constants';

interface GalleryProps {
  onArtifactSelect: (id: string) => void;
}

export const Gallery: React.FC<GalleryProps> = ({ onArtifactSelect }) => {
  return (
    <div className="w-full h-full overflow-hidden pt-20 relative bg-dark-bg">
       {/* Background Grid */}
       <div className="absolute inset-0 bg-[linear-gradient(to_right,#243047_1px,transparent_1px),linear-gradient(to_bottom,#243047_1px,transparent_1px)] bg-[size:40px_40px] opacity-[0.05] pointer-events-none"></div>

       {/* Top Bar Info (Optional replacement for filter info) */}
       <div className="w-full px-10 mb-6 flex justify-between items-end max-w-[1800px] mx-auto animate-fade-in-up">
          <div>
              <h2 className="text-3xl font-bold text-white mb-2 tracking-tight">数字展品库</h2>
              <div className="flex items-center gap-2 text-slate-400 text-xs">
                  <Info size={14} />
                  <p>已收录 {ARTIFACTS.length} 件高精度数字孪生藏品</p>
              </div>
          </div>
          <div className="relative w-64 hidden md:block">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Search className="text-slate-500" size={16} />
              </div>
              <input 
                  type="search" 
                  placeholder="搜索藏品..." 
                  className="block w-full pl-10 pr-3 py-2 border border-white/10 rounded-full leading-5 bg-white/5 text-slate-300 placeholder-slate-600 focus:outline-none focus:bg-white/10 focus:border-heritage-500/50 focus:ring-1 focus:ring-heritage-500/50 text-xs transition-colors"
              />
          </div>
       </div>

       {/* Grid Area */}
       <section className="h-[calc(100%-100px)] overflow-y-auto px-6 md:px-10 pb-20 scrollbar-hide">
          <div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-6 space-y-6 mx-auto max-w-[1800px]">
             {ARTIFACTS.map((item) => (
                 <div 
                    key={item.id} 
                    onClick={() => onArtifactSelect(item.id)}
                    className="glass-card rounded-xl overflow-hidden relative group break-inside-avoid mb-6 cursor-pointer bg-white/[0.02] border border-white/5 hover:border-heritage-500/30 transition-all"
                 >
                    <div className="relative w-full aspect-[3/4] overflow-hidden">
                        <img 
                            src={item.image} 
                            alt={item.title} 
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 group-hover:rotate-1 opacity-90 group-hover:opacity-100"
                        />
                        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-heritage-500/10 to-transparent opacity-0 group-hover:opacity-20 translate-y-[-100%] group-hover:translate-y-[100%] transition-all duration-[2s] ease-linear"></div>
                    </div>
                    
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-5">
                        <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                            <div className="flex items-center gap-2 mb-1">
                                <span className="bg-heritage-500 text-white text-[10px] font-bold px-1.5 py-0.5 rounded">3D</span>
                                <span className="text-heritage-500 text-xs font-mono">#{item.id}</span>
                            </div>
                            <h3 className="text-white text-lg font-bold">{item.title}</h3>
                            <p className="text-slate-300 text-xs mt-1 line-clamp-2">{item.description}</p>
                        </div>
                    </div>
                 </div>
             ))}
             
             {/* Decorative Extra Cards */}
             <div className="glass-card rounded-xl overflow-hidden relative group break-inside-avoid mb-6 cursor-pointer bg-white/[0.02] border border-white/5">
                <div className="relative w-full aspect-[4/3] overflow-hidden bg-gradient-to-br from-gray-900 to-black">
                     <div className="absolute inset-0 flex items-center justify-center">
                        <span className="text-6xl text-white/5 group-hover:text-heritage-500/20 transition-colors duration-500 font-mono">DATA</span>
                     </div>
                     <div className="w-full h-full flex items-center justify-center opacity-60 group-hover:opacity-90 transition-all duration-500 group-hover:scale-105">
                         <img className="w-24 h-24 rounded-full object-cover border-2 border-heritage-500/30 shadow-[0_0_30px_rgba(212,175,55,0.2)]" src={IMAGES.avatar_libai} />
                     </div>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-5">
                     <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                        <span className="text-heritage-500 text-xs font-mono">#T-881</span>
                        <h3 className="text-white text-lg font-bold">唐代仕女陶俑</h3>
                     </div>
                </div>
             </div>

             <div className="glass-card rounded-xl overflow-hidden relative group break-inside-avoid mb-6 cursor-pointer bg-gradient-to-br from-heritage-500/10 to-transparent border border-heritage-500/20">
                <div className="p-6 relative min-h-[200px] flex flex-col justify-between">
                     <div className="text-4xl text-heritage-500 mb-4 opacity-80 font-mono">ARCHIVE</div>
                     <div>
                        <h3 className="text-white text-xl font-bold mb-2">古籍善本专区</h3>
                        <p className="text-slate-400 text-sm leading-relaxed">数字化修复的宋版书页，支持高清缩放查看纸张纹理与印章细节。</p>
                     </div>
                </div>
             </div>
          </div>
       </section>

       {/* Floating AI Guide */}
       <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-4 pointer-events-none">
            <div className="bg-white text-slate-900 px-4 py-3 rounded-2xl rounded-br-none shadow-[0_4px_20px_rgba(0,0,0,0.5)] mb-2 animate-float pointer-events-auto max-w-[220px] relative origin-bottom-right">
                <p className="text-sm font-bold text-heritage-500 mb-0.5 flex items-center gap-1">
                    <Sparkles size={14} /> AI 导览
                </p>
                <p className="text-sm font-medium leading-snug">我是李白，想听听这些展品背后的故事吗？</p>
                <div className="absolute -bottom-2 right-6 w-4 h-4 bg-white rotate-45"></div>
            </div>
            
            <button className="pointer-events-auto group relative flex items-center justify-center w-16 h-16 bg-gradient-to-br from-[#f59e0b] to-[#b45309] rounded-full shadow-[0_0_20px_rgba(245,158,11,0.4)] hover:shadow-[0_0_35px_rgba(245,158,11,0.6)] hover:scale-105 transition-all duration-300 border-2 border-white/20">
                <div className="w-full h-full rounded-full overflow-hidden bg-black/20">
                    <img alt="Li Bai AI" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" src={IMAGES.avatar_libai} />
                </div>
                <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-green-500 rounded-full border-2 border-dark-bg animate-pulse"></div>
            </button>
       </div>
    </div>
  );
};