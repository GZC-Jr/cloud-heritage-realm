import React, { useRef } from 'react';
import { IMAGES } from '../constants';
import { ArrowRight, BadgeCheck, Heart, View, Box, Grid, ShoppingBag, Handshake, MapPin, Users, GraduationCap, Leaf, ChevronDown } from 'lucide-react';

export const CooperationView: React.FC = () => {
  const vaultRef = useRef<HTMLDivElement>(null);
  const atelierRef = useRef<HTMLDivElement>(null);
  const impactRef = useRef<HTMLDivElement>(null);

  const scrollToSection = (ref: React.RefObject<HTMLDivElement>) => {
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="w-full h-full overflow-y-auto scrollbar-hide bg-dark-bg text-white font-sans relative pt-20">
        {/* Navigation for sections (Floating) */}
        <div className="fixed top-24 right-6 z-40 hidden lg:flex flex-col gap-2">
            {[
                { name: '藏经阁', ref: vaultRef },
                { name: '艺坊', ref: atelierRef },
                { name: '社会责任', ref: impactRef },
            ].map((item, index) => (
                <button 
                    key={index}
                    onClick={() => scrollToSection(item.ref as any)}
                    className="w-2 h-2 rounded-full bg-white/20 hover:bg-heritage-500 hover:scale-150 transition-all"
                    title={item.name}
                />
            ))}
        </div>

        {/* Hero Section */}
        <section className="relative w-full h-[80vh] min-h-[500px] flex items-center justify-center overflow-hidden">
            <div className="absolute inset-0 z-0">
                <div 
                    className="w-full h-full bg-cover bg-center bg-no-repeat transform scale-105" 
                    style={{backgroundImage: `linear-gradient(rgba(15, 15, 16, 0.3) 0%, rgba(15, 15, 16, 1) 100%), url('${IMAGES.social_hero}')`}}
                ></div>
            </div>
            <div className="relative z-10 flex flex-col items-center text-center max-w-4xl px-4 animate-fade-in-up">
                <span className="inline-block py-1 px-3 rounded-full bg-heritage-500/20 border border-heritage-500/30 text-heritage-500 text-xs font-bold tracking-widest uppercase mb-6 backdrop-blur-sm">
                    企业与文化
                </span>
                <h1 className="text-5xl md:text-7xl lg:text-8xl font-black leading-[0.9] tracking-tighter mb-6 text-white">
                    商业 <br/> <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-500">与影响力</span>
                </h1>
                <p className="text-slate-400 text-lg md:text-xl font-light max-w-2xl leading-relaxed">
                    沉浸式数字遗产与社会责任的交汇点。探索藏经阁，收藏实体文物，携手文化复兴。
                </p>
            </div>
            <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-white/30 animate-bounce cursor-pointer" onClick={() => scrollToSection(vaultRef)}>
                <ChevronDown size={32} />
            </div>
        </section>

        <div className="w-full max-w-[1440px] mx-auto px-4 md:px-10 lg:px-40 pb-32">
            
            {/* Vault Section */}
            <section className="py-20 md:py-32 border-b border-white/10" ref={vaultRef}>
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
                    <div>
                        <h2 className="text-white text-3xl md:text-4xl font-bold tracking-tight mb-2">藏经阁</h2>
                        <p className="text-slate-400">高端数字藏品与 AR 体验</p>
                    </div>
                    <button className="group flex items-center gap-2 text-heritage-500 text-sm font-bold uppercase tracking-wider hover:text-white transition-colors">
                        查看完整系列 
                        <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                    </button>
                </div>

                {/* Featured Item */}
                <div className="mb-12 rounded-2xl overflow-hidden bg-[#18181b] border border-white/10 shadow-xl group hover:border-heritage-500/50 transition-all duration-300">
                    <div className="flex flex-col lg:flex-row h-full">
                        <div className="lg:w-3/5 h-[400px] lg:h-auto relative bg-[#09090b] flex items-center justify-center overflow-hidden">
                            <div 
                                className="absolute inset-0 bg-cover bg-center opacity-80 group-hover:scale-105 transition-transform duration-700" 
                                style={{backgroundImage: `url('${IMAGES.item_jade_dragon}')`}}
                            ></div>
                            <div className="absolute top-4 left-4">
                                <span className="bg-black/50 backdrop-blur-md text-white text-xs font-bold px-3 py-1 rounded-full border border-white/10">精选</span>
                            </div>
                            <button className="absolute bottom-6 right-6 bg-white/10 hover:bg-heritage-500 hover:text-white backdrop-blur-md text-white p-3 rounded-full transition-all duration-300 border border-white/20">
                                <Box size={24} />
                            </button>
                        </div>
                        <div className="lg:w-2/5 p-8 md:p-12 flex flex-col justify-center gap-6 relative">
                            <div>
                                <div className="flex items-center gap-2 mb-2 text-heritage-500 text-sm font-mono">
                                    <BadgeCheck size={16} />
                                    <span>官方认证</span>
                                </div>
                                <h3 className="text-white text-3xl font-bold leading-tight mb-2">玉龙 3D - #004</h3>
                                <p className="text-slate-400 text-base leading-relaxed">
                                    稀有的明代数字孪生藏品，经区块链精心扫描与保存。授予私人元宇宙画廊访问权限。
                                </p>
                            </div>
                            <div className="grid grid-cols-2 gap-4 py-6 border-y border-white/10">
                                <div>
                                    <p className="text-slate-400 text-xs uppercase tracking-wider mb-1">地板价</p>
                                    <p className="text-white text-xl font-bold">12.5 ETH</p>
                                </div>
                                <div>
                                    <p className="text-slate-400 text-xs uppercase tracking-wider mb-1">稀缺度</p>
                                    <p className="text-white text-xl font-bold">传说级</p>
                                </div>
                            </div>
                            <div className="flex gap-4">
                                <button className="flex-1 h-12 bg-heritage-500 hover:bg-heritage-600 text-white font-bold rounded-lg transition-colors">
                                    出价
                                </button>
                                <button className="h-12 w-12 flex items-center justify-center border border-white/10 hover:border-white text-white rounded-lg transition-colors">
                                    <Heart size={20} />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Grid Items */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {[
                        { title: "修复陶器 #102", type: "金缮版", price: "2.5 ETH", img: IMAGES.item_kintsugi },
                        { title: "远古卷轴 Alpha", type: "第二王朝", price: "1.2 ETH", img: IMAGES.scroll },
                        { title: "青铜纪元古剑", type: "武士套装", price: "5.0 ETH", img: IMAGES.sword_bronze },
                    ].map((item, i) => (
                        <div key={i} className="group flex flex-col gap-3 p-4 bg-[#18181b] rounded-xl border border-white/10 hover:border-heritage-500/40 transition-all hover:-translate-y-1 cursor-pointer">
                            <div className="relative w-full aspect-[4/5] bg-black/40 rounded-lg overflow-hidden">
                                <div 
                                    className="w-full h-full bg-cover bg-center transition-transform duration-500 group-hover:scale-110" 
                                    style={{backgroundImage: `url('${item.img}')`}}
                                ></div>
                                <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity">
                                    <div className="bg-black/60 backdrop-blur rounded-full p-1.5 text-white">
                                        <Box size={14} />
                                    </div>
                                </div>
                            </div>
                            <div>
                                <h4 className="text-white text-lg font-bold truncate">{item.title}</h4>
                                <div className="flex justify-between items-center mt-1">
                                    <p className="text-slate-400 text-sm">{item.type}</p>
                                    <p className="text-heritage-500 text-sm font-bold">{item.price}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                    <div className="group flex flex-col gap-3 p-4 bg-[#18181b] rounded-xl border border-white/10 hover:border-heritage-500/40 transition-all hover:-translate-y-1">
                        <div className="relative w-full aspect-[4/5] bg-black/40 rounded-lg overflow-hidden flex items-center justify-center bg-white/5 border border-white/5 group-hover:bg-white/10 transition-colors cursor-pointer">
                            <div className="text-center">
                                <Grid size={32} className="text-slate-400 mb-2 group-hover:text-heritage-500 transition-colors mx-auto" />
                                <p className="text-slate-400 font-medium">查看全部<br/>342 件</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Atelier Section */}
            <section className="py-20 md:py-32 border-b border-white/10" ref={atelierRef}>
                <div className="text-center mb-16">
                    <span className="text-heritage-500 text-xs font-bold uppercase tracking-widest mb-3 block">实体商品</span>
                    <h2 className="text-white text-3xl md:text-5xl font-bold tracking-tight mb-4">艺坊</h2>
                    <p className="text-slate-400 max-w-2xl mx-auto">
                        连接数字与现实世界的精致实体复刻品与限量版文创。
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {[
                        { title: "非遗版画系列", badge: "限量版", desc: "博物馆级档案修复壁画印品。", price: "¥850", img: IMAGES.shop_print, btn: "购买" },
                        { title: "树脂复刻模型", badge: "新品", desc: "玉龙 1:4 比例高保真 3D 打印模型。", price: "¥3200", img: IMAGES.shop_model, btn: "购买", highlight: true },
                        { title: "云博服饰", badge: "臻选", desc: "颂扬古老纹样的极简主义街头服饰。", price: null, img: IMAGES.shop_bag, btn: "查看系列" },
                    ].map((item, i) => (
                        <div key={i} className="bg-[#18181b] rounded-2xl overflow-hidden group border border-white/5 hover:border-white/10">
                            <div className="aspect-square bg-[#09090b] relative overflow-hidden">
                                <div 
                                    className="absolute inset-0 bg-cover bg-center group-hover:scale-105 transition-transform duration-500" 
                                    style={{backgroundImage: `url('${item.img}')`}}
                                ></div>
                                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors"></div>
                            </div>
                            <div className="p-6">
                                <div className="flex justify-between items-start mb-2">
                                    <h3 className="text-white text-xl font-bold">{item.title}</h3>
                                    <span className={`${item.highlight ? 'bg-heritage-500/20 text-heritage-500' : 'bg-white/10 text-white'} text-xs px-2 py-1 rounded`}>{item.badge}</span>
                                </div>
                                <p className="text-slate-400 text-sm mb-4">{item.desc}</p>
                                <button className="w-full py-3 border border-white/10 rounded text-white text-sm font-bold hover:bg-white hover:text-black transition-colors">
                                    {item.btn} {item.price && `• ${item.price}`}
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Impact Section */}
            <section className="pt-20 md:pt-32" ref={impactRef}>
                <div className="flex flex-col md:flex-row items-start justify-between mb-16 gap-4">
                    <div className="max-w-xl">
                        <h2 className="text-white text-3xl md:text-5xl font-bold tracking-tight mb-6">地平线：社会责任</h2>
                        <p className="text-slate-400 text-lg">
                            我们利用技术振兴乡村旅游，并通过 B2B 和 B2G 合作伙伴关系保护非物质文化遗产。
                        </p>
                    </div>
                    <button className="px-6 py-3 border border-heritage-500 text-heritage-500 hover:bg-heritage-500 hover:text-white rounded-lg transition-colors font-bold text-sm">
                        成为合作伙伴
                    </button>
                </div>
                <div className="group relative w-full rounded-3xl overflow-hidden bg-[#18181b] border border-white/10">
                    <div className="flex flex-col lg:flex-row">
                        <div className="lg:w-1/2 min-h-[400px] lg:min-h-[500px] relative overflow-hidden">
                            <div 
                                className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 group-hover:scale-105" 
                                style={{backgroundImage: `url('${IMAGES.impact_village}')`}}
                            ></div>
                            <div className="absolute top-6 left-6 bg-white/10 backdrop-blur-md px-4 py-1.5 rounded-full border border-white/20">
                                <div className="flex items-center gap-2 text-white text-sm font-medium">
                                    <MapPin size={14} className="text-heritage-500" />
                                    <span>中国 · 云南</span>
                                </div>
                            </div>
                        </div>
                        <div className="lg:w-1/2 p-8 lg:p-16 flex flex-col justify-center bg-gradient-to-br from-[#18181b] to-[#0f0f10]">
                            <div className="mb-2 text-heritage-500 font-bold tracking-widest uppercase text-xs">案例研究</div>
                            <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">村落回响项目</h3>
                            <p className="text-slate-400 text-lg leading-relaxed mb-10">
                                利用 WebAR 为“哈尼梯田”打造数字博物馆，吸引全球关注当地工匠，实现旅游收入同比增长 200%。
                            </p>
                            <div className="grid grid-cols-2 gap-8 mb-10">
                                <div>
                                    <div className="text-3xl md:text-4xl font-bold text-white mb-1">¥5M+</div>
                                    <div className="text-slate-400 text-sm">创造收益</div>
                                </div>
                                <div>
                                    <div className="text-3xl md:text-4xl font-bold text-white mb-1">15</div>
                                    <div className="text-slate-400 text-sm">振兴村落</div>
                                </div>
                            </div>
                            <a className="inline-flex items-center text-white font-bold hover:text-heritage-500 transition-colors" href="#">
                                查看全文
                                <ArrowRight size={18} className="ml-2" />
                            </a>
                        </div>
                    </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
                    <div className="bg-[#18181b] p-8 rounded-2xl border border-white/10 hover:border-white/20 transition-colors">
                        <Users size={36} className="text-heritage-500 mb-4" />
                        <h4 className="text-white text-xl font-bold mb-2">工匠扶持</h4>
                        <p className="text-slate-400 text-sm">连接 500 多位传统手工艺人与全球数字市场。</p>
                    </div>
                    <div className="bg-[#18181b] p-8 rounded-2xl border border-white/10 hover:border-white/20 transition-colors">
                        <GraduationCap size={36} className="text-heritage-500 mb-4" />
                        <h4 className="text-white text-xl font-bold mb-2">教育普及</h4>
                        <p className="text-slate-400 text-sm">沉浸式历史课程已部署至 120 所合作学校。</p>
                    </div>
                    <div className="bg-[#18181b] p-8 rounded-2xl border border-white/10 hover:border-white/20 transition-colors">
                        <Leaf size={36} className="text-heritage-500 mb-4" />
                        <h4 className="text-white text-xl font-bold mb-2">可持续性</h4>
                        <p className="text-slate-400 text-sm">碳中和 NFT 铸造与环保实体包装。</p>
                    </div>
                </div>
            </section>
        </div>

        {/* Footer Actions */}
        <div className="fixed bottom-8 left-1/2 transform -translate-x-1/2 z-50 w-full max-w-sm sm:max-w-md px-4">
            <div className="flex items-center justify-between gap-2 p-2 bg-[#18181b]/90 backdrop-blur-md border border-white/10 rounded-full shadow-2xl ring-1 ring-white/5">
                <button 
                    onClick={() => scrollToSection(atelierRef)}
                    className="flex-1 flex flex-col items-center justify-center py-2 px-4 rounded-full hover:bg-white/5 transition-colors group"
                >
                    <ShoppingBag size={20} className="text-white mb-0.5 group-hover:text-heritage-500 transition-colors" />
                    <span className="text-[10px] uppercase font-bold text-slate-400 group-hover:text-white">商店</span>
                </button>
                <div className="w-px h-8 bg-white/10"></div>
                <button 
                    onClick={() => scrollToSection(impactRef)}
                    className="flex-1 flex flex-col items-center justify-center py-2 px-4 rounded-full hover:bg-white/5 transition-colors group"
                >
                    <Handshake size={20} className="text-white mb-0.5 group-hover:text-heritage-500 transition-colors" />
                    <span className="text-[10px] uppercase font-bold text-slate-400 group-hover:text-white">合作</span>
                </button>
                <div className="w-px h-8 bg-white/10"></div>
                <button className="flex-grow-[2] bg-heritage-500 hover:bg-heritage-600 text-white rounded-full py-2.5 px-6 text-sm font-bold shadow-lg shadow-heritage-500/25 transition-all active:scale-95 whitespace-nowrap">
                    连接钱包
                </button>
            </div>
        </div>

        {/* Simple Footer */}
        <footer className="bg-black border-t border-white/10 py-12 px-6 md:px-10 lg:px-40 pb-32">
            <div className="flex flex-col md:flex-row justify-between items-center gap-6">
                <div className="flex items-center gap-3 text-white">
                    <span className="font-bold text-lg text-white/50">云博·境</span>
                </div>
                <div className="flex gap-8 text-slate-400 text-sm">
                    <a className="hover:text-white transition-colors" href="#">隐私政策</a>
                    <a className="hover:text-white transition-colors" href="#">服务条款</a>
                    <a className="hover:text-white transition-colors" href="#">联系支持</a>
                </div>
                <div className="text-slate-500 text-sm">
                    © 2023 云博·境 (Cloud-Heritage Realm). 保留所有权利.
                </div>
            </div>
        </footer>
    </div>
  );
};