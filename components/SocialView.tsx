import React from 'react';
import { IMAGES } from '../constants';
import { 
    Plus, Search, Filter, MessageSquare, ThumbsUp, Share2, 
    Bot, Calendar, FileText, Download, Send, Globe, Users, 
    Handshake, Bell, ExternalLink, MoreHorizontal, Image as ImageIcon,
    Rotate3D
} from 'lucide-react';

export const SocialView: React.FC = () => {
  return (
    <div className="w-full h-full flex pt-28 lg:pt-20 px-6 gap-6 relative overflow-hidden bg-dark-bg">
        {/* Background Effects */}
        <div className="fixed inset-0 z-0 w-full h-full overflow-hidden pointer-events-none">
            <img alt="Background" className="w-full h-full object-cover opacity-10 scale-110 blur-[5px]" src={IMAGES.poster_qin} />
            <div className="absolute inset-0 bg-gradient-to-br from-dark-bg via-transparent to-dark-bg/90 z-10"></div>
            <div className="absolute top-1/4 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-heritage-500/20 to-transparent opacity-30 z-10 transform -rotate-2"></div>
        </div>

        {/* Sidebar: Projects */}
        <aside className="w-full lg:w-1/3 max-w-sm flex flex-col gap-4 h-full z-10 hidden lg:flex pb-6">
            <div className="glass-panel rounded-xl p-5 flex flex-col h-full overflow-hidden">
                <div className="flex justify-between items-center mb-6">
                    <h2 className="text-white font-medium tracking-wider flex items-center gap-2">
                        <span className="w-1 h-4 bg-heritage-500 rounded-full"></span>
                        共建项目
                    </h2>
                    <button className="text-xs text-heritage-500/80 hover:text-heritage-500 transition-colors flex items-center gap-1 bg-heritage-500/10 px-2 py-1 rounded-md">
                        <Plus size={12} />
                        发起项目
                    </button>
                </div>
                
                <div className="flex gap-2 mb-4 overflow-x-auto pb-2 scrollbar-hide">
                    <button className="px-3 py-1 rounded-full text-xs bg-heritage-500 text-dark-bg font-bold whitespace-nowrap">全部</button>
                    <button className="px-3 py-1 rounded-full text-xs bg-white/5 text-slate-400 hover:bg-white/10 hover:text-white transition-colors border border-white/5 whitespace-nowrap">数字修复</button>
                    <button className="px-3 py-1 rounded-full text-xs bg-white/5 text-slate-400 hover:bg-white/10 hover:text-white transition-colors border border-white/5 whitespace-nowrap">史料考证</button>
                    <button className="px-3 py-1 rounded-full text-xs bg-white/5 text-slate-400 hover:bg-white/10 hover:text-white transition-colors border border-white/5 whitespace-nowrap">纹样提取</button>
                </div>

                <div className="flex-1 overflow-y-auto space-y-3 pr-2 scrollbar-hide">
                    {/* Project Card 1 */}
                    <div className="bg-white/5 hover:bg-white/10 border border-white/5 hover:border-heritage-500/30 p-4 rounded-lg cursor-pointer group transition-all duration-300">
                        <div className="flex justify-between items-start mb-2">
                            <h3 className="text-sm font-bold text-slate-200 group-hover:text-heritage-500 transition-colors">阿房宫数字复原组</h3>
                            <span className="text-[10px] bg-emerald-900/40 text-emerald-400 px-1.5 py-0.5 rounded border border-emerald-800/50">进行中</span>
                        </div>
                        <p className="text-[10px] text-slate-400 mb-3 line-clamp-2">基于《史记》描述与最新考古数据，重建前殿三维模型。急需擅长秦代斗拱结构的建模师。</p>
                        <div className="flex items-center justify-between text-[10px] text-slate-500 mb-2">
                            <span>进度 75%</span>
                            <span className="flex items-center gap-1"><Users size={10} /> 128人</span>
                        </div>
                        <div className="w-full h-1 bg-white/10 rounded-full overflow-hidden">
                            <div className="h-full bg-gradient-to-r from-heritage-500/60 to-heritage-500 w-3/4 rounded-full shadow-[0_0_10px_rgba(201,160,80,0.5)]"></div>
                        </div>
                    </div>

                    {/* Project Card 2 */}
                    <div className="bg-white/5 hover:bg-white/10 border border-white/5 hover:border-heritage-500/30 p-4 rounded-lg cursor-pointer group transition-all duration-300">
                        <div className="flex justify-between items-start mb-2">
                            <h3 className="text-sm font-bold text-slate-200 group-hover:text-heritage-500 transition-colors">敦煌壁画色彩还原</h3>
                            <span className="text-[10px] bg-blue-900/40 text-blue-400 px-1.5 py-0.5 rounded border border-blue-800/50">招募中</span>
                        </div>
                        <p className="text-[10px] text-slate-400 mb-3 line-clamp-2">针对第257窟《鹿王本生图》的氧化变色问题，通过AI算法推演初绘色彩。</p>
                        <div className="flex items-center justify-between text-[10px] text-slate-500 mb-2">
                            <span>进度 30%</span>
                            <span className="flex items-center gap-1"><Users size={10} /> 45人</span>
                        </div>
                        <div className="w-full h-1 bg-white/10 rounded-full overflow-hidden">
                            <div className="h-full bg-gradient-to-r from-heritage-500/60 to-heritage-500 w-[30%] rounded-full shadow-[0_0_10px_rgba(201,160,80,0.5)]"></div>
                        </div>
                    </div>

                    {/* Project Card 3 */}
                    <div className="bg-white/5 hover:bg-white/10 border border-white/5 hover:border-heritage-500/30 p-4 rounded-lg cursor-pointer group transition-all duration-300">
                        <div className="flex justify-between items-start mb-2">
                            <h3 className="text-sm font-bold text-slate-200 group-hover:text-heritage-500 transition-colors">三星堆金面具残片拼合</h3>
                            <span className="text-[10px] bg-orange-900/40 text-orange-400 px-1.5 py-0.5 rounded border border-orange-800/50">冲刺</span>
                        </div>
                        <p className="text-[10px] text-slate-400 mb-3 line-clamp-2">最后三块疑似残片的几何匹配验证。</p>
                        <div className="flex items-center justify-between text-[10px] text-slate-500 mb-2">
                            <span>进度 92%</span>
                            <span className="flex items-center gap-1"><Users size={10} /> 320人</span>
                        </div>
                        <div className="w-full h-1 bg-white/10 rounded-full overflow-hidden">
                            <div className="h-full bg-gradient-to-r from-heritage-500/60 to-heritage-500 w-[92%] rounded-full shadow-[0_0_10px_rgba(201,160,80,0.5)]"></div>
                        </div>
                    </div>

                    {/* Project Card 4 */}
                    <div className="bg-white/5 hover:bg-white/10 border border-white/5 hover:border-heritage-500/30 p-4 rounded-lg cursor-pointer group transition-all duration-300">
                        <div className="flex justify-between items-start mb-2">
                            <h3 className="text-sm font-bold text-slate-200 group-hover:text-heritage-500 transition-colors">唐代长安坊里考据</h3>
                            <span className="text-[10px] bg-emerald-900/40 text-emerald-400 px-1.5 py-0.5 rounded border border-emerald-800/50">进行中</span>
                        </div>
                        <p className="text-[10px] text-slate-400 mb-3 line-clamp-2">基于新出土墓志铭修正平康坊布局图。</p>
                        <div className="flex items-center justify-between text-[10px] text-slate-500 mb-2">
                            <span>进度 45%</span>
                            <span className="flex items-center gap-1"><Users size={10} /> 86人</span>
                        </div>
                        <div className="w-full h-1 bg-white/10 rounded-full overflow-hidden">
                            <div className="h-full bg-gradient-to-r from-heritage-500/60 to-heritage-500 w-[45%] rounded-full shadow-[0_0_10px_rgba(201,160,80,0.5)]"></div>
                        </div>
                    </div>
                </div>
            </div>
        </aside>

        {/* Main Feed */}
        <section className="flex-1 h-full flex flex-col glass-panel rounded-xl overflow-hidden relative z-10 mb-6">
            {/* Header */}
            <div className="p-5 border-b border-white/5 bg-white/[0.02] flex justify-between items-center backdrop-blur-xl sticky top-0 z-20">
                <div>
                    <h2 className="text-lg font-bold text-white flex items-center gap-2">
                        阿房宫数字复原组
                        <span className="text-[10px] border border-heritage-500/30 text-heritage-500 px-1.5 py-0.5 rounded ml-2 font-normal tracking-wide uppercase">Featured</span>
                    </h2>
                    <p className="text-xs text-slate-400 mt-1">讨论区 · 245 条新动态</p>
                </div>
                <div className="flex gap-3">
                    <button className="w-8 h-8 rounded-full bg-white/5 hover:bg-white/10 flex items-center justify-center transition-colors text-slate-300">
                        <Search size={14} />
                    </button>
                    <button className="w-8 h-8 rounded-full bg-white/5 hover:bg-white/10 flex items-center justify-center transition-colors text-slate-300">
                        <Filter size={14} />
                    </button>
                    <button className="px-4 py-1.5 bg-heritage-500 text-dark-bg text-xs font-bold rounded-md hover:bg-amber-600 transition-colors shadow-[0_0_15px_rgba(201,160,80,0.3)]">
                        发布观点
                    </button>
                </div>
            </div>

            {/* Feed Content */}
            <div className="flex-1 overflow-y-auto p-6 space-y-6 scrollbar-hide">
                {/* Post 1 */}
                <div className="flex gap-4 group animate-fade-in-up">
                    <div className="flex-shrink-0">
                        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-gray-700 to-black border border-white/10 overflow-hidden">
                            <img alt="User" className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity" src={IMAGES.avatar_user_1} />
                        </div>
                    </div>
                    <div className="flex-1">
                        <div className="bg-white/[0.02] border border-white/5 p-4 rounded-lg rounded-tl-none relative border-l-2 border-l-heritage-500/50 backdrop-blur-md">
                            <div className="flex justify-between items-start mb-2">
                                <div>
                                    <span className="text-sm font-bold text-slate-200">李明_Architect</span>
                                    <span className="text-[10px] text-slate-500 ml-2">2小时前</span>
                                </div>
                                <span className="bg-white/5 text-[10px] px-2 py-0.5 rounded text-slate-400">模型建议</span>
                            </div>
                            <p className="text-sm text-slate-300 leading-relaxed mb-3">
                                关于前殿东侧的回廊结构，参考了最新的考古勘探报告（2023版），我发现原有的三层斗拱方案可能过于激进。建议调整为两层，并增加更多横向支撑结构。附上对比渲染图。
                            </p>
                            <div className="grid grid-cols-2 gap-2 mb-3 max-w-md">
                                <div className="aspect-video bg-black/50 rounded overflow-hidden border border-white/10 group/img cursor-pointer">
                                    <img className="w-full h-full object-cover opacity-60 group-hover/img:opacity-100 group-hover/img:scale-110 transition-all duration-500" src={IMAGES.poster_qin} />
                                </div>
                                <div className="aspect-video bg-black/50 rounded overflow-hidden border border-white/10 group/img cursor-pointer relative flex items-center justify-center hover:bg-white/5 transition-colors">
                                    <Rotate3D className="text-white/20" size={32} />
                                </div>
                            </div>
                            <div className="flex items-center gap-4 border-t border-white/5 pt-3 mt-2">
                                <button className="flex items-center gap-1.5 text-xs text-slate-400 hover:text-heritage-500 transition-colors">
                                    <ThumbsUp size={14} />
                                    <span>42</span>
                                </button>
                                <button className="flex items-center gap-1.5 text-xs text-slate-400 hover:text-white transition-colors">
                                    <MessageSquare size={14} />
                                    <span>8</span>
                                </button>
                                <button className="flex items-center gap-1.5 text-xs text-slate-400 hover:text-white transition-colors ml-auto">
                                    <Share2 size={14} />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Post 2: System */}
                <div className="flex gap-4 group animate-fade-in-up" style={{animationDelay: '0.1s'}}>
                    <div className="flex-shrink-0">
                        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-gray-700 to-black border border-white/10 overflow-hidden">
                            <div className="w-full h-full flex items-center justify-center bg-heritage-500/20 text-heritage-500 font-bold text-xs">A.I.</div>
                        </div>
                    </div>
                    <div className="flex-1">
                        <div className="bg-white/[0.02] border border-white/5 p-4 rounded-lg rounded-tl-none border-l-2 border-l-blue-500/50 backdrop-blur-md">
                            <div className="flex justify-between items-start mb-2">
                                <div>
                                    <span className="text-sm font-bold text-blue-300 flex items-center gap-1">
                                        <Bot size={14} /> 灵境助手
                                    </span>
                                    <span className="text-[10px] text-slate-500 ml-2">刚刚</span>
                                </div>
                                <span className="bg-blue-900/20 text-[10px] px-2 py-0.5 rounded text-blue-400 border border-blue-500/20">系统通告</span>
                            </div>
                            <p className="text-sm text-slate-300 leading-relaxed mb-2">
                                <span className="text-heritage-500">@全部成员</span> 本周五（10月27日）将举行阿房宫项目组线上研讨会，特邀陕西省考古研究院专家进行现场答疑。请大家提前准备问题。
                            </p>
                            <div className="mt-2 inline-flex items-center gap-2 px-3 py-1.5 bg-blue-500/10 border border-blue-500/30 rounded text-xs text-blue-300 hover:bg-blue-500/20 cursor-pointer transition-colors">
                                <Calendar size={14} />
                                添加到日程
                            </div>
                        </div>
                    </div>
                </div>

                {/* Post 3: File Share */}
                <div className="flex gap-4 group animate-fade-in-up" style={{animationDelay: '0.2s'}}>
                    <div className="flex-shrink-0">
                        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-gray-700 to-black border border-white/10 overflow-hidden">
                            <img alt="User" className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity" src={IMAGES.avatar_user_3} />
                        </div>
                    </div>
                    <div className="flex-1">
                        <div className="bg-white/[0.02] border border-white/5 p-4 rounded-lg rounded-tl-none border-l-2 border-l-transparent backdrop-blur-md">
                            <div className="flex justify-between items-start mb-2">
                                <div>
                                    <span className="text-sm font-bold text-slate-200">陈曦_History</span>
                                    <span className="text-[10px] text-slate-500 ml-2">5小时前</span>
                                </div>
                                <span className="bg-white/5 text-[10px] px-2 py-0.5 rounded text-slate-400">文献分享</span>
                            </div>
                            <p className="text-sm text-slate-300 leading-relaxed mb-3">
                                发现一篇关于秦代宫廷瓦当纹样的稀缺论文，对于复原屋顶细节很有帮助。文件已上传至共建资料库。
                            </p>
                            <div className="flex items-center gap-3 p-3 bg-black/30 rounded border border-white/5 hover:border-heritage-500/30 cursor-pointer transition-colors group/file">
                                <div className="w-8 h-8 bg-red-900/30 rounded flex items-center justify-center text-red-400 border border-red-500/20">
                                    <FileText size={18} />
                                </div>
                                <div className="flex-1">
                                    <div className="text-xs text-slate-200 font-medium group-hover/file:text-heritage-500 transition-colors">秦代瓦当纹样演变考.pdf</div>
                                    <div className="text-[10px] text-slate-500">2.4 MB</div>
                                </div>
                                <Download size={16} className="text-slate-500 group-hover/file:text-white" />
                            </div>
                            <div className="flex items-center gap-4 border-t border-white/5 pt-3 mt-3">
                                <button className="flex items-center gap-1.5 text-xs text-slate-400 hover:text-heritage-500 transition-colors">
                                    <ThumbsUp size={14} />
                                    <span>15</span>
                                </button>
                                <button className="flex items-center gap-1.5 text-xs text-slate-400 hover:text-white transition-colors">
                                    <MessageSquare size={14} />
                                    <span>2</span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Input Area */}
            <div className="p-4 bg-black/40 border-t border-white/10 backdrop-blur-lg">
                <div className="relative">
                    <textarea 
                        className="w-full bg-white/5 border border-white/10 rounded-lg pl-4 pr-12 py-3 text-sm text-white placeholder-slate-500 focus:ring-1 focus:ring-heritage-500/50 focus:border-heritage-500/50 resize-none h-12 hover:bg-white/10 transition-colors outline-none" 
                        placeholder="参与讨论..."
                    ></textarea>
                    <button className="absolute right-2 bottom-2 p-1.5 rounded-md text-heritage-500 hover:bg-heritage-500/10 transition-colors">
                        <Send size={18} />
                    </button>
                </div>
            </div>
        </section>
    </div>
  );
};