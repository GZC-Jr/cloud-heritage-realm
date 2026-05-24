import React from 'react';
import { ArrowLeft, Scan, Layers, Database, Maximize, Bell, ChevronRight, Circle, Edit3, ArrowRight, Fullscreen, Activity, Square, View, Box } from 'lucide-react';
import { ARTIFACTS, IMAGES } from '../constants';

interface DetailViewProps {
  artifactId: string;
  onBack: () => void;
}

export const DetailView: React.FC<DetailViewProps> = ({ artifactId, onBack }) => {
  const artifact = ARTIFACTS.find(a => a.id === artifactId) || ARTIFACTS[0];

  return (
    <div className="w-full h-full relative flex flex-col bg-dark-bg overflow-hidden">
      {/* Background Tech Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#243047_1px,transparent_1px),linear-gradient(to_bottom,#243047_1px,transparent_1px)] bg-[size:40px_40px] opacity-[0.07] pointer-events-none z-0" style={{maskImage: 'radial-gradient(circle at 50% 50%, black 40%, transparent 80%)'}}></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-heritage-500/10 rounded-full blur-[100px] pointer-events-none z-0"></div>

      {/* Header */}
      <header className="relative z-50 flex items-center justify-between border-b border-white/10 px-8 py-4 bg-dark-bg/80 backdrop-blur-sm w-full pt-20">
        <div className="flex items-center gap-4 text-white">
            <button onClick={onBack} className="p-1 hover:bg-white/10 rounded-full transition-colors">
                <ArrowLeft size={20} />
            </button>
            <div className="size-6 text-heritage-500 flex items-center justify-center">
                <Box size={24} />
            </div>
            <h2 className="text-white text-lg font-bold leading-tight tracking-wider">透视之眼 <span className="text-white/40 font-light mx-2">//</span> 档案 042</h2>
        </div>
        <div className="flex flex-1 justify-end gap-6 items-center">
            <div className="hidden md:flex items-center gap-8 mr-4">
                <a className="text-white/70 hover:text-white text-sm font-medium transition-colors" href="#">图库</a>
                <a className="text-white/70 hover:text-white text-sm font-medium transition-colors" href="#">设置</a>
                <a className="text-white/70 hover:text-white text-sm font-medium transition-colors" href="#">个人资料</a>
            </div>
            <div className="h-8 w-[1px] bg-white/10 mx-2 hidden md:block"></div>
            <button className="flex items-center justify-center rounded-lg size-10 hover:bg-white/5 text-white transition-colors relative">
                <Bell size={20} />
                <span className="absolute top-2 right-2 size-2 bg-heritage-500 rounded-full"></span>
            </button>
            <div className="bg-center bg-no-repeat bg-cover rounded-full size-9 border border-white/10" style={{backgroundImage: `url('${IMAGES.avatar_user_1}')`}}></div>
        </div>
      </header>

      <main className="flex-1 relative z-10 w-full h-full flex flex-col md:flex-row items-center justify-center p-6 gap-6 overflow-hidden">
        
        {/* Left Panel */}
        <div className="absolute left-8 top-24 w-80 flex flex-col gap-4 pointer-events-none md:pointer-events-auto z-20">
            <div className="glass-panel p-6 rounded-xl animate-fade-in-left">
                <div className="flex items-start justify-between mb-2">
                    <span className="text-heritage-500 text-xs font-bold tracking-widest uppercase">编号 #{artifact.id}</span>
                    <span className="bg-heritage-500/20 text-heritage-500 text-[10px] font-bold px-2 py-0.5 rounded border border-heritage-500/30">扫描完成</span>
                </div>
                <h1 className="text-white text-2xl font-bold leading-tight mb-4">{artifact.title}</h1>
                <p className="text-white/60 text-sm">年代：{artifact.dynasty}</p>
            </div>
            
            <div className="glass-panel p-0 rounded-xl overflow-hidden animate-fade-in-left" style={{animationDelay: '0.1s'}}>
                <div className="px-4 py-3 border-b border-white/10 bg-white/5 flex items-center justify-between">
                    <span className="text-xs font-bold tracking-wider text-white/80 uppercase">材质成分</span>
                    <Activity size={16} className="text-white/40" />
                </div>
                <div className="p-4 grid grid-cols-1 gap-4">
                    <div className="flex justify-between items-center border-b border-white/5 pb-2">
                        <span className="text-white/50 text-sm">主要材质</span>
                        <span className="text-white text-sm font-medium">{artifact.material || 'Unknown'}</span>
                    </div>
                    <div className="flex justify-between items-center border-b border-white/5 pb-2">
                        <span className="text-white/50 text-sm">完整度</span>
                        <span className="text-green-400 text-sm font-medium">{artifact.restorationLevel}%</span>
                    </div>
                    <div className="flex justify-between items-center border-b border-white/5 pb-2">
                        <span className="text-white/50 text-sm">光谱分析 (SiO2)</span>
                        <div className="flex items-center gap-2">
                            <div className="w-16 h-1.5 bg-white/10 rounded-full overflow-hidden">
                                <div className="h-full bg-heritage-500 w-[65%]"></div>
                            </div>
                            <span className="text-white text-xs font-mono">65%</span>
                        </div>
                    </div>
                    <div className="flex justify-between items-center">
                        <span className="text-white/50 text-sm">光谱分析 (Al2O3)</span>
                        <div className="flex items-center gap-2">
                            <div className="w-16 h-1.5 bg-white/10 rounded-full overflow-hidden">
                                <div className="h-full bg-orange-300 w-[25%]"></div>
                            </div>
                            <span className="text-white text-xs font-mono">25%</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        {/* Right Panel */}
        <div className="absolute right-8 top-24 w-80 flex flex-col gap-4 pointer-events-none md:pointer-events-auto z-20">
            <div className="glass-panel p-0 rounded-xl overflow-hidden animate-fade-in-right">
                <div className="relative h-48 bg-cover bg-center" style={{backgroundImage: `linear-gradient(180deg, rgba(17,22,33,0) 0%, rgba(17,22,33,1) 100%), url('https://lh3.googleusercontent.com/aida-public/AB6AXuDs_VTnr_YCgYv0F28ML7LGQkWkOmp7BjXYoneL2jGmX3S4eqphnf6-RFUF11-spcDUPfPvmyhMuDVdE5ctad_DTOywsFtHZfVCuQZa-2Vksqn131Ga1VhRgNUkyEpYN3rDJb48-gh0uu1V2ZkJVxLyTq-RuBr3uhfBIbZAEjVfu3TXWbH9e1NwKuSmqgf6vw8ZVS8qDzZ_ibeTXaR5MCdSKp4bfhBB3bGZlWbdIKcykWrUk0Dy33tsgY8svVdPsBwBVDjADr6rDBOD')`}}>
                    <div className="absolute top-4 right-4">
                        <button className="size-8 flex items-center justify-center rounded bg-black/40 hover:bg-heritage-500 transition-colors text-white backdrop-blur-md">
                            <Fullscreen size={18} />
                        </button>
                    </div>
                    <div className="absolute bottom-4 left-4">
                        <p className="text-white text-lg font-bold leading-tight">结构分层</p>
                        <p className="text-white/60 text-xs mt-1">剖面分析视图</p>
                    </div>
                </div>
                <div className="p-4 flex flex-col gap-3">
                    <div className="flex items-center gap-3 p-2 rounded-lg bg-white/5 border border-heritage-500/30">
                        <Layers className="text-heritage-500" size={20} />
                        <div className="flex-1">
                            <p className="text-white text-sm font-medium">釉层</p>
                            <p className="text-white/40 text-[10px] uppercase tracking-wide">0.2mm - 活跃</p>
                        </div>
                        <div className="w-2 h-2 rounded-full bg-green-500 shadow-[0_0_8px_rgba(34,197,94,0.6)]"></div>
                    </div>
                    <div className="flex items-center gap-3 p-2 rounded-lg hover:bg-white/5 border border-transparent transition-colors cursor-pointer group">
                        <Circle size={16} className="text-white/40 group-hover:text-white transition-colors" />
                        <div className="flex-1">
                            <p className="text-white/80 text-sm font-medium group-hover:text-white">胎体</p>
                            <p className="text-white/30 text-[10px] uppercase tracking-wide">基础结构</p>
                        </div>
                    </div>
                    <div className="flex items-center gap-3 p-2 rounded-lg hover:bg-white/5 border border-transparent transition-colors cursor-pointer group">
                        <Edit3 size={16} className="text-white/40 group-hover:text-white transition-colors" />
                        <div className="flex-1">
                            <p className="text-white/80 text-sm font-medium group-hover:text-white">铭文</p>
                            <p className="text-white/30 text-[10px] uppercase tracking-wide">内部标记</p>
                        </div>
                    </div>
                    <button className="mt-2 w-full flex items-center justify-center gap-2 rounded-lg h-9 bg-heritage-500/10 hover:bg-heritage-500 text-heritage-500 hover:text-white text-sm font-bold border border-heritage-500/30 hover:border-heritage-500 transition-all duration-300">
                        <span>运行深度分析</span>
                        <ArrowRight size={16} />
                    </button>
                </div>
            </div>
            <div className="glass-panel p-4 rounded-xl animate-fade-in-right" style={{animationDelay: '0.1s'}}>
                <p className="text-white/60 text-xs leading-relaxed">
                    <strong className="text-white">历史备注：</strong> {artifact.description}
                </p>
            </div>
        </div>

        {/* Center: 3D Visualization */}
        <div className="relative w-full max-w-[800px] h-[60vh] flex items-center justify-center group perspective-1000 z-10">
            {/* AR Toggle Button */}
            <div className="absolute top-[12%] left-1/2 -translate-x-1/2 z-50 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="animate-float flex flex-col items-center gap-4">
                    <div className="relative size-16 flex items-center justify-center rounded-2xl border border-heritage-500/50 bg-dark-bg/60 backdrop-blur-md shadow-[0_0_40px_rgba(245,158,11,0.25)]">
                        <View size={32} className="text-heritage-500 drop-shadow-[0_0_5px_rgba(245,158,11,0.8)]" />
                        <div className="absolute -top-[1px] -left-[1px] w-3 h-3 border-t-2 border-l-2 border-heritage-500 rounded-tl-sm"></div>
                        <div className="absolute -top-[1px] -right-[1px] w-3 h-3 border-t-2 border-r-2 border-heritage-500 rounded-tr-sm"></div>
                        <div className="absolute -bottom-[1px] -left-[1px] w-3 h-3 border-b-2 border-l-2 border-heritage-500 rounded-bl-sm"></div>
                        <div className="absolute -bottom-[1px] -right-[1px] w-3 h-3 border-b-2 border-r-2 border-heritage-500 rounded-br-sm"></div>
                    </div>
                    <div className="px-4 py-2 rounded-lg bg-heritage-500/10 border border-heritage-500/30 backdrop-blur-sm shadow-lg">
                        <span className="text-heritage-500 text-sm font-bold tracking-widest drop-shadow-sm">在现实空间中查看</span>
                    </div>
                </div>
            </div>

            {/* Artifact Image */}
            <div className="relative w-full h-full flex items-center justify-center transition-transform duration-700 ease-out transform group-hover:scale-105">
                <div className="absolute inset-0 w-[300px] h-[400px] mx-auto overflow-hidden pointer-events-none z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <div className="absolute w-full h-[2px] bg-heritage-500 shadow-[0_0_10px_#d97706,0_0_20px_#d97706] animate-scan"></div>
                </div>
                <img 
                    src={artifact.image} 
                    alt={artifact.title} 
                    className="h-full w-auto object-contain drop-shadow-2xl z-10 filter drop-shadow-[0_0_20px_rgba(245,158,11,0.3)]" 
                />
                
                {/* Overlay Stats */}
                <div className="absolute top-1/4 left-1/3 flex items-center gap-2 z-20 animate-pulse">
                    <div className="size-2 bg-heritage-500 rounded-full"></div>
                    <div className="h-[1px] w-12 bg-heritage-500"></div>
                    <div className="bg-black/60 backdrop-blur px-2 py-1 rounded border border-heritage-500/30 text-[10px] text-heritage-500 font-mono">
                        反射率 0.82
                    </div>
                </div>
                <div className="absolute bottom-1/3 right-1/3 flex items-center gap-2 flex-row-reverse z-20 delay-300 animate-pulse">
                    <div className="size-2 bg-white rounded-full"></div>
                    <div className="h-[1px] w-16 bg-white/40"></div>
                    <div className="bg-black/60 backdrop-blur px-2 py-1 rounded border border-white/20 text-[10px] text-white font-mono">
                        Ø 24.5cm
                    </div>
                </div>
            </div>
            <div className="absolute bottom-0 w-[600px] h-[200px] bg-[radial-gradient(ellipse_at_center,var(--tw-gradient-stops))] from-heritage-500/20 via-transparent to-transparent opacity-40 transform scale-y-50 blur-xl pointer-events-none"></div>
        </div>

        {/* Bottom Controls */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-6 w-full max-w-2xl px-4 z-40">
            <div className="glass-panel p-1 rounded-full flex gap-1">
                <label className="cursor-pointer relative px-6 py-2 rounded-full overflow-hidden group">
                    <input className="peer sr-only" name="view-mode" type="radio" />
                    <div className="absolute inset-0 bg-transparent peer-checked:bg-white/10 transition-colors"></div>
                    <span className="relative z-10 text-white/50 peer-checked:text-white text-sm font-medium flex items-center gap-2">
                        <Square size={18} />
                        标准视图
                    </span>
                </label>
                <label className="cursor-pointer relative px-6 py-2 rounded-full overflow-hidden group">
                    <input className="peer sr-only" name="view-mode" type="radio" />
                    <div className="absolute inset-0 bg-transparent peer-checked:bg-heritage-500 transition-colors"></div>
                    <span className="relative z-10 text-white/50 peer-checked:text-white text-sm font-medium flex items-center gap-2">
                        <Layers size={18} />
                        爆炸视图
                    </span>
                </label>
                <label className="cursor-pointer relative px-6 py-2 rounded-full overflow-hidden group">
                    <input defaultChecked className="peer sr-only" name="view-mode" type="radio" />
                    <div className="absolute inset-0 bg-transparent peer-checked:bg-heritage-500 transition-colors"></div>
                    <span className="relative z-10 text-white/50 peer-checked:text-white text-sm font-medium flex items-center gap-2">
                        <View size={18} />
                        AR 视图
                    </span>
                </label>
            </div>
            
            <div className="glass-panel px-6 py-3 rounded-2xl flex items-center gap-8 shadow-2xl shadow-black/50 border-t border-white/20">
                <button className="flex flex-col items-center gap-1 group">
                    <div className="size-12 rounded-xl bg-white/5 group-hover:bg-heritage-500/20 border border-white/10 group-hover:border-heritage-500/50 flex items-center justify-center transition-all duration-300">
                        <Scan size={24} className="text-white/70 group-hover:text-heritage-500 group-hover:scale-110 transition-transform" />
                    </div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-white/40 group-hover:text-white transition-colors">扫描</span>
                </button>
                <div className="w-[1px] h-8 bg-white/10"></div>
                <button className="flex flex-col items-center gap-1 group">
                    <div className="size-12 rounded-xl bg-heritage-500 shadow-[0_0_15px_rgba(245,158,11,0.4)] flex items-center justify-center transition-all duration-300 hover:scale-105">
                        <Activity size={24} className="text-white animate-pulse" />
                    </div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-white transition-colors">分析</span>
                </button>
                <div className="w-[1px] h-8 bg-white/10"></div>
                <button className="flex flex-col items-center gap-1 group">
                    <div className="size-12 rounded-xl bg-white/5 group-hover:bg-heritage-500/20 border border-white/10 group-hover:border-heritage-500/50 flex items-center justify-center transition-all duration-300">
                        <Database size={24} className="text-white/70 group-hover:text-heritage-500 group-hover:scale-110 transition-transform" />
                    </div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-white/40 group-hover:text-white transition-colors">存储</span>
                </button>
            </div>
        </div>
      </main>
    </div>
  );
};