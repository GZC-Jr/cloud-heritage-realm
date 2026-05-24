import React, { useState } from 'react';
import { IMAGES } from '../constants';
import { Radar, Mic, Send, MoreVertical, PlusCircle, User } from 'lucide-react';

export const SoulChatView: React.FC = () => {
    const [inputValue, setInputValue] = useState('');
    
    return (
        <div className="w-full h-full pt-20 pb-4 px-4 md:px-6 lg:px-8 flex gap-6 overflow-hidden relative z-10">
            {/* Background Avatar */}
            <div className="absolute inset-0 z-0 flex items-end justify-center pointer-events-none pb-0 md:pb-0">
                <div className="relative w-[80vh] h-[90vh] md:w-[60vh] md:h-[80vh] animate-float opacity-80">
                    <img 
                        className="w-full h-full object-contain drop-shadow-[0_0_50px_rgba(217,119,6,0.3)]" 
                        src={IMAGES.avatar_libai}
                        style={{ maskImage: 'linear-gradient(to bottom, black 70%, transparent 100%)', WebkitMaskImage: 'linear-gradient(to bottom, black 70%, transparent 100%)' }}
                        alt="Li Bai"
                    />
                    <div className="absolute bottom-1/4 left-1/2 -translate-x-1/2 bg-black/40 backdrop-blur-md px-6 py-3 rounded-full border border-heritage-500/30 text-center pointer-events-auto cursor-pointer hover:bg-black/60 transition-colors w-max max-w-sm">
                        <p className="text-heritage-500 text-sm font-bold tracking-widest uppercase mb-1">李白 • 诗仙</p>
                        <p className="text-white/90 text-sm font-medium">"不妨问问关于明月、美酒，或是这件破碎器皿的故事。"</p>
                    </div>
                </div>
            </div>

            {/* Left Sidebar: Artifact Context */}
            <aside className="hidden lg:flex flex-col w-[380px] glass-panel rounded-2xl overflow-hidden shadow-2xl animate-slide-in-left border-l-2 border-l-heritage-500/50 z-10 relative bg-black/40 backdrop-blur-xl">
                <div className="p-5 border-b border-white/5 flex justify-between items-center bg-gradient-to-r from-heritage-500/10 to-transparent">
                    <div>
                        <h3 className="text-white text-lg font-bold tracking-tight">文物修复</h3>
                        <p className="text-heritage-500 text-xs font-mono tracking-widest uppercase mt-1">AI 分析中</p>
                    </div>
                    <Radar className="text-heritage-500 animate-pulse" size={24} />
                </div>
                
                <div className="p-5 flex flex-col gap-5 overflow-y-auto scrollbar-hide">
                    {/* Active Artifact Card */}
                    <div className="relative w-full aspect-[4/3] rounded-xl overflow-hidden bg-black/40 border border-white/10 shadow-inner group">
                        <div className="absolute inset-0 bg-cover bg-center opacity-80 group-hover:scale-105 transition-transform duration-700" style={{backgroundImage: `url('${IMAGES.vase_blue}')`}}></div>
                        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay"></div>
                        <div className="absolute inset-0 border border-white/5 m-2 rounded-lg"></div>
                        <div className="absolute left-0 right-0 h-1 bg-heritage-500 shadow-[0_0_15px_#d97706] animate-scan z-10"></div>
                    </div>

                    <div className="flex flex-col gap-1">
                        <h4 className="text-xl font-bold text-white">青花瓷</h4>
                        <p className="text-slate-400 text-sm">残片 #A-742 • 出土于丝绸之路遗址</p>
                    </div>

                    <div className="space-y-4 bg-white/5 p-4 rounded-xl border border-white/5">
                        <div className="flex justify-between items-end">
                            <span className="text-sm font-medium text-slate-300">修复进度</span>
                            <span className="text-2xl font-bold text-heritage-500">78%</span>
                        </div>
                        <div className="w-full bg-black/40 rounded-full h-2 overflow-hidden">
                            <div className="bg-heritage-500 h-2 rounded-full shadow-[0_0_10px_#d97706]" style={{width: '78%'}}></div>
                        </div>
                        <div className="grid grid-cols-2 gap-2 mt-2">
                            <div className="bg-black/20 p-2 rounded border border-white/5">
                                <p className="text-[10px] text-slate-500 uppercase">年代</p>
                                <p className="text-sm font-medium text-heritage-500">唐代</p>
                            </div>
                            <div className="bg-black/20 p-2 rounded border border-white/5">
                                <p className="text-[10px] text-slate-500 uppercase">材质</p>
                                <p className="text-sm font-medium text-white">高岭土</p>
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-col gap-2">
                        <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">系统日志</p>
                        <div className="font-mono text-xs text-slate-500 space-y-1">
                            <p>&gt; 初始化表面扫描...</p>
                            <p>&gt; 识别断裂模式：撞击型</p>
                            <p className="text-heritage-500">&gt; 匹配历史文献...</p>
                        </div>
                    </div>
                </div>
            </aside>

            {/* Spacer for Center Avatar */}
            <div className="flex-1 hidden md:block"></div>

            {/* Right Sidebar: Chat */}
            <aside className="flex flex-col w-full md:w-[400px] lg:w-[420px] glass-panel rounded-2xl overflow-hidden shadow-2xl border-r-2 border-r-heritage-500/30 z-10 relative bg-black/40 backdrop-blur-xl">
                <div className="p-4 border-b border-white/5 bg-gradient-to-l from-heritage-500/10 to-transparent flex items-center justify-between">
                    <div className="flex items-center gap-3">
                        <div className="relative">
                            <div className="w-10 h-10 rounded-full overflow-hidden border border-heritage-500/50">
                                <img className="w-full h-full object-cover" src={IMAGES.avatar_libai} alt="Li Bai" />
                            </div>
                            <div className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-green-500 border-2 border-[#1a2232] rounded-full"></div>
                        </div>
                        <div>
                            <h3 className="text-white text-base font-bold">李白 (人工智能)</h3>
                            <p className="text-heritage-500 text-xs">在线 • 唐朝</p>
                        </div>
                    </div>
                    <button className="text-slate-400 hover:text-white transition-colors">
                        <MoreVertical size={20} />
                    </button>
                </div>

                <div className="flex-1 overflow-y-auto p-5 space-y-6 scrollbar-hide flex flex-col">
                    <div className="flex justify-center">
                        <span className="text-[10px] text-slate-500 bg-black/20 px-2 py-1 rounded">今天, 上午 10:23</span>
                    </div>
                    
                    {/* Message AI */}
                    <div className="flex gap-3">
                        <div className="w-8 h-8 rounded-full overflow-hidden border border-white/10 shrink-0 mt-1">
                            <img className="w-full h-full object-cover" src={IMAGES.avatar_libai} alt="AI" />
                        </div>
                        <div className="flex flex-col gap-1 max-w-[85%]">
                            <div className="bg-white/10 backdrop-blur-md p-3.5 rounded-2xl rounded-tl-none border border-white/5 text-sm text-slate-100 leading-relaxed shadow-sm">
                                <p>欢迎来到云博·境，旅行者。</p>
                            </div>
                            <div className="bg-white/10 backdrop-blur-md p-3.5 rounded-2xl rounded-tl-none border border-white/5 text-sm text-slate-100 leading-relaxed shadow-sm">
                                <p>在 AI 修复其形制的同时，是否愿意听我吟诵一首关于它身世的诗篇？</p>
                            </div>
                        </div>
                    </div>

                    {/* Message User */}
                    <div className="flex gap-3 flex-row-reverse">
                        <div className="w-8 h-8 rounded-full bg-heritage-500 flex items-center justify-center shrink-0 mt-1 text-white shadow-lg">
                            <User size={16} />
                        </div>
                        <div className="flex flex-col gap-1 max-w-[85%] items-end">
                            <div className="bg-heritage-500 p-3.5 rounded-2xl rounded-tr-none text-sm text-white leading-relaxed shadow-[0_4px_15px_rgba(217,119,6,0.3)]">
                                <p>好的，请告诉我它是如何制作的。</p>
                            </div>
                        </div>
                    </div>

                    {/* AI Typing Indicator */}
                    <div className="flex gap-3 items-center">
                        <div className="w-6 h-6 rounded-full overflow-hidden border border-white/10 shrink-0">
                            <img className="w-full h-full object-cover" src={IMAGES.avatar_libai} alt="AI" />
                        </div>
                        <div className="flex gap-1 h-6 items-center">
                            <div className="w-1.5 h-1.5 bg-slate-400 rounded-full animate-bounce"></div>
                            <div className="w-1.5 h-1.5 bg-slate-400 rounded-full animate-bounce [animation-delay:0.2s]"></div>
                            <div className="w-1.5 h-1.5 bg-slate-400 rounded-full animate-bounce [animation-delay:0.4s]"></div>
                        </div>
                    </div>
                </div>

                {/* Input Area */}
                <div className="p-4 bg-black/20 border-t border-white/5 backdrop-blur-xl">
                    <div className="flex gap-2 mb-3 overflow-x-auto scrollbar-hide pb-1">
                        {['吟诗一首', '高岭土历史', '唐代艺术'].map(tag => (
                            <button key={tag} className="whitespace-nowrap px-3 py-1.5 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 text-xs text-slate-300 transition-colors">
                                {tag}
                            </button>
                        ))}
                    </div>
                    <div className="relative flex items-center gap-2">
                        <button className="p-2 text-slate-400 hover:text-white transition-colors rounded-full hover:bg-white/5">
                            <PlusCircle size={24} />
                        </button>
                        <div className="flex-1 relative">
                            <input 
                                className="w-full bg-white/5 hover:bg-white/10 focus:bg-white/10 border border-white/10 focus:border-heritage-500/50 text-white text-sm rounded-xl py-3 px-4 outline-none transition-all placeholder:text-slate-500" 
                                placeholder="向李白提问..." 
                                type="text"
                                value={inputValue}
                                onChange={(e) => setInputValue(e.target.value)}
                            />
                            <button className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-white">
                                <Mic size={20} />
                            </button>
                        </div>
                        <button className="p-3 bg-heritage-500 hover:bg-heritage-600 text-white rounded-xl shadow-[0_0_15px_rgba(217,119,6,0.4)] transition-all flex items-center justify-center group">
                            <Send size={20} className="group-hover:translate-x-0.5 transition-transform" />
                        </button>
                    </div>
                </div>
            </aside>
        </div>
    );
};