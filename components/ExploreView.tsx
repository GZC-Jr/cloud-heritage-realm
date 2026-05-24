import React, { useEffect, useState } from 'react';
import { IMAGES } from '../constants';
import { ArrowRight, Compass, Heart } from 'lucide-react';

export const ExploreView: React.FC = () => {
    const [animate, setAnimate] = useState(false);
    
    useEffect(() => {
        setAnimate(true);
    }, []);

    const cards = [
        {
            title: "敦煌AR限时修复展",
            desc: "亲手触摸千年前的色彩。通过最新光场技术，重现莫高窟第220窟壁画剥落前的辉煌盛景。",
            image: IMAGES.poster_dunhuang,
            badge: "热门 TOP1",
            subBadge: "WebAR 修复",
            timeLeft: "剩余 3 天",
            participants: "+12k 参与",
            action: "立即参与"
        },
        {
            title: "三星堆数字漫游",
            desc: "沉浸式探索古蜀文明的神秘面纱，360度全景解析青铜神树的铸造工艺与祭祀场景。",
            image: IMAGES.poster_sanxingdui,
            badge: "全景漫游",
            subBadge: "直播中",
            provider: "由 古蜀研究院 提供",
            action: "立即参与"
        },
        {
            title: "紫禁城：夜游计划",
            desc: "在数字孪生的紫禁城中体验从未开放的夜间景色，聆听宫廷旧事，观赏星空下的太和殿。",
            image: IMAGES.poster_forbidden,
            badge: "云展览",
            subBadge: "VR",
            provider: "故宫博物院",
            action: "立即参与"
        },
        {
            title: "对话·秦吏",
            desc: "基于大语言模型训练的秦代官吏数字人，为您解答大秦律法与军阵编制的奥秘。",
            image: IMAGES.poster_qin,
            badge: "AI 对话",
            subBadge: "新上线",
            provider: "互动次数 8.5w",
            action: "立即参与"
        },
        {
            title: "南海一号：深蓝宝藏",
            desc: "跟随水下机器人视角，潜入800年前的沉船现场，见证宋代海上丝绸之路的繁荣。",
            image: IMAGES.poster_underwater,
            badge: "水下考古",
            subBadge: "",
            provider: "国家水下遗产中心",
            action: "立即参与"
        },
        {
            title: "碎瓷重生：工匠精神",
            desc: "体验金缮工艺的数字模拟，在破碎的瓷片中寻找完美契合，感受修复文物的宁静致远。",
            image: IMAGES.poster_porcelain,
            badge: "交互体验",
            subBadge: "",
            provider: "难度: ⭐⭐⭐⭐",
            action: "立即参与"
        }
    ];

    return (
        <div className="w-full h-full pt-28 px-6 lg:px-16 container mx-auto overflow-y-auto">
            <section className="mb-12 relative animate-fade-in-up">
                <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight flex items-center gap-4">
                    <span className="bg-clip-text text-transparent bg-gradient-to-r from-heritage-500 via-white to-heritage-500 bg-[length:200%_auto] animate-[sheen-move_5s_infinite]">
                        云博·探索
                    </span>
                    <Compass className="text-4xl text-heritage-500/80 animate-pulse" size={40} />
                </h1>
                <p className="text-slate-400 max-w-2xl text-sm leading-relaxed tracking-wide border-l-2 border-heritage-500/30 pl-4">
                    汇聚全球顶级数字文博展览，运用 WebAR 与 3D 渲染技术，打破时空界限。在这里，每一场活动都是一次穿越历史的沉浸式旅程。
                </p>
                <div className="flex flex-wrap items-center gap-4 mt-8 border-b border-white/10 pb-4">
                    <button className="px-5 py-2 rounded-full bg-heritage-500/20 text-heritage-500 border border-heritage-500/50 text-xs font-medium tracking-wider hover:bg-heritage-500 hover:text-black transition-all">热门推荐</button>
                    <button className="px-5 py-2 rounded-full bg-white/5 text-slate-400 border border-transparent hover:border-white/20 hover:text-white transition-all text-xs font-medium tracking-wider">限时展览</button>
                    <button className="px-5 py-2 rounded-full bg-white/5 text-slate-400 border border-transparent hover:border-white/20 hover:text-white transition-all text-xs font-medium tracking-wider">AR 体验</button>
                    <button className="px-5 py-2 rounded-full bg-white/5 text-slate-400 border border-transparent hover:border-white/20 hover:text-white transition-all text-xs font-medium tracking-wider">直播讲座</button>
                </div>
            </section>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 pb-20">
                {cards.map((card, index) => (
                    <div 
                        key={index} 
                        className={`relative group h-[500px] rounded-xl cursor-pointer transition-all duration-700 transform ${animate ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}
                        style={{transitionDelay: `${index * 100}ms`}}
                    >
                         {/* Card Glow */}
                         <div className="absolute -inset-1 bg-gradient-to-br from-heritage-500/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl blur-sm -z-10"></div>
                         
                         <div className="absolute inset-0 bg-dark-surface rounded-xl overflow-hidden z-10 border border-white/10 group-hover:border-heritage-500/50 transition-colors duration-500">
                             {/* Background Image */}
                             <div 
                                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                                style={{backgroundImage: `url('${card.image}')`}}
                             >
                                <div className="absolute inset-0 bg-black/30 group-hover:bg-transparent transition-colors duration-500"></div>
                             </div>

                             {/* Gradient Overlay */}
                             <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent flex flex-col justify-end p-6">
                                 
                                 {/* Top Info (Visible on Hover) */}
                                 <div className="mb-auto pt-4 flex justify-between items-start opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform -translate-y-2 group-hover:translate-y-0">
                                     {card.timeLeft ? (
                                         <span className="bg-black/60 backdrop-blur text-white text-[10px] px-2 py-1 rounded border border-white/10">{card.timeLeft}</span>
                                     ) : <span></span>}
                                     <div className="w-8 h-8 rounded-full bg-white/10 backdrop-blur flex items-center justify-center hover:bg-white/20 transition-colors">
                                         <Heart className="text-white" size={14} />
                                     </div>
                                 </div>

                                 {/* Bottom Info */}
                                 <div className="transform group-hover:translate-y-[-8px] transition-transform duration-500">
                                     <div className="flex items-center gap-2 mb-3">
                                         <span className="px-2 py-0.5 bg-heritage-500/90 text-black text-[10px] font-bold tracking-wider rounded-sm uppercase shadow-[0_0_10px_rgba(217,119,6,0.2)]">
                                             {card.badge}
                                         </span>
                                         {card.subBadge && (
                                            <span className="text-heritage-500/80 text-[10px] tracking-wider uppercase border border-heritage-500/30 px-1.5 rounded-sm">
                                                {card.subBadge}
                                            </span>
                                         )}
                                     </div>
                                     <h3 className="text-2xl font-bold text-white mb-2 leading-tight drop-shadow-lg">{card.title}</h3>
                                     <p className="text-slate-300 text-xs mb-4 line-clamp-2 opacity-80">{card.desc}</p>
                                     
                                     <div className="flex items-center justify-between mt-2">
                                         <div className="flex items-center text-[10px] text-white/60">
                                             {card.participants && (
                                                <div className="flex -space-x-2 mr-2">
                                                    <div className="w-6 h-6 rounded-full border-2 border-black bg-gray-500"></div>
                                                    <div className="w-6 h-6 rounded-full border-2 border-black bg-gray-600"></div>
                                                    <div className="w-6 h-6 rounded-full border-2 border-black bg-gray-700"></div>
                                                </div>
                                             )}
                                             {card.participants || card.provider}
                                         </div>
                                         <button className="bg-white/10 backdrop-blur border border-heritage-500/40 text-heritage-500 hover:bg-heritage-500 hover:text-black text-xs font-bold px-5 py-2 rounded transition-all active:scale-95 flex items-center gap-1 group/btn">
                                             {card.action}
                                             <ArrowRight size={14} className="group-hover/btn:translate-x-1 transition-transform" />
                                         </button>
                                     </div>
                                 </div>
                             </div>
                         </div>
                    </div>
                ))}
            </div>

            <div className="pb-20 flex justify-center">
                <div className="flex flex-col items-center gap-4">
                    <div className="w-10 h-10 border-2 border-heritage-500/30 border-t-heritage-500 rounded-full animate-spin"></div>
                    <span className="text-xs tracking-[0.3em] text-white/40 uppercase">正在加载更多历史...</span>
                </div>
            </div>
        </div>
    );
};
