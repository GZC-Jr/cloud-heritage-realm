import React, { useState } from 'react';
import { Hero } from './components/Hero';
import { Gallery } from './components/Gallery';
import { DetailView } from './components/DetailView';
import { SocialView } from './components/SocialView';
import { ExploreView } from './components/ExploreView';
import { ProfileView } from './components/ProfileView';
import { ExhibitionView } from './components/ExhibitionView';
import { SoulChatView } from './components/SoulChatView';
import { CooperationView } from './components/CooperationView';
import { AIChatOverlay } from './components/AIChatOverlay';
import { ViewState } from './types';
import { IMAGES } from './constants';
import { Search, Landmark, ChevronDown, Compass, MessageSquare, User, Box, MonitorPlay, Sparkles, LayoutGrid } from 'lucide-react';

const App: React.FC = () => {
  const [view, setView] = useState<ViewState>('home');
  const [selectedArtifactId, setSelectedArtifactId] = useState<string | null>(null);

  const handleArtifactSelect = (id: string) => {
    setSelectedArtifactId(id);
    setView('detail');
  };

  const handleBackToGallery = () => {
    setSelectedArtifactId(null);
    setView('gallery');
  };

  // Helper to determine active state style
  const getTabStyle = (isActive: boolean) => 
    `px-6 py-2 text-xs font-light tracking-widest uppercase transition-all flex items-center gap-1 rounded-full ${
      isActive 
        ? 'text-white bg-white/10 shadow-[0_0_10px_rgba(255,255,255,0.1)]' 
        : 'text-slate-400 hover:text-heritage-500 hover:bg-white/5'
    }`;

  const isTimeLensActive = view === 'explore' || view === 'profile' || view === 'social';
  const isDigitalTwinActive = view === 'gallery' || view === 'detail' || view === 'exhibition' || view === 'soul_chat';
  
  // Show sidebar for Time Lens views AND Digital Twin views (except Detail view which needs full screen)
  const showSidebar = isTimeLensActive || (isDigitalTwinActive && view !== 'detail');

  const getSidebarItems = () => {
      if (isTimeLensActive) {
          return [
              { id: 'explore', label: '探索', icon: Compass, desc: '开启您的数字文化之旅。' },
              { id: 'social', label: '共建', icon: MessageSquare, desc: '参与文化遗产的数字化保护。' },
              { id: 'profile', label: '个人灵境', icon: User, desc: '管理您的数字收藏与足迹。' }
          ];
      }
      if (isDigitalTwinActive) {
          return [
              { id: 'exhibition', label: '展厅', icon: MonitorPlay, desc: '沉浸式漫游数字展厅。' },
              { id: 'gallery', label: '展品', icon: Box, desc: '高清数字孪生文物库。' },
              { id: 'soul_chat', label: '灵境对话', icon: Sparkles, desc: '与文物之灵跨时空对话。' }
          ];
      }
      return [];
  };

  const sidebarItems = getSidebarItems();
  const activeSidebarTitle = isTimeLensActive ? "时光透镜" : "数字孪生";

  return (
    <div className="w-full h-screen relative bg-dark-bg text-slate-100 font-sans selection:bg-heritage-500/30 selection:text-white">
      
      {/* Global Header */}
      <header className={`fixed top-0 left-0 w-full z-50 px-6 py-6 transition-all duration-300 ${view === 'home' ? 'bg-gradient-to-b from-black/80 to-transparent' : 'bg-dark-bg/90 backdrop-blur-md border-b border-white/5'}`}>
        <div className="flex justify-between items-center max-w-[1800px] mx-auto w-full pointer-events-auto">
           {/* Logo Area */}
           <div 
             className="flex items-center gap-4 cursor-pointer group"
             onClick={() => setView('home')}
           >
              <div className="relative">
                <div className={`w-10 h-10 rounded-full border border-heritage-500/40 flex items-center justify-center transition-all duration-500 group-hover:scale-110 ${view === 'home' ? 'bg-black/20 backdrop-blur-sm' : 'bg-heritage-500/10'}`}>
                    <Landmark size={18} className="text-heritage-500" />
                </div>
                <div className="absolute -inset-2 bg-heritage-500/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 animate-pulse"></div>
              </div>
              <span className={`text-lg font-light tracking-[0.4em] transition-colors duration-500 ${view === 'home' ? 'text-white/90 group-hover:text-heritage-500' : 'text-white'}`}>云博·境</span>
           </div>

           {/* Top Navigation Tabs */}
           <nav className="hidden lg:flex items-center backdrop-blur-md bg-white/5 border border-white/10 rounded-full px-2 py-1 shadow-[0_0_20px_rgba(0,0,0,0.5)] pointer-events-auto relative z-50">
              {/* Tab 1: Time Lens (Dropdown) */}
              <div className="relative group">
                  <button 
                    onClick={() => setView('explore')}
                    className={getTabStyle(isTimeLensActive)}
                  >
                    时光透镜
                    <ChevronDown size={10} className="opacity-50 group-hover:rotate-180 transition-transform duration-300" />
                  </button>
                  
                  {/* Dropdown Menu */}
                  <div className="absolute left-1/2 -translate-x-1/2 top-full pt-4 w-44 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                    <div className="bg-dark-bg/95 backdrop-blur-xl border border-heritage-500/30 p-1 flex flex-col shadow-[0_10px_40px_-10px_rgba(0,0,0,0.8)] rounded-sm overflow-hidden">
                        <button 
                            onClick={(e) => { e.stopPropagation(); setView('explore'); }}
                            className="px-4 py-3 text-[10px] text-slate-300 hover:text-heritage-500 hover:bg-white/5 transition-all tracking-widest flex items-center justify-between group/item border-b border-white/5"
                        >
                            <span>云博·探索</span>
                            <Compass size={12} className="opacity-0 -translate-x-2 group-hover/item:opacity-100 group-hover/item:translate-x-0 transition-all text-heritage-500" />
                        </button>
                        <button 
                            onClick={(e) => { e.stopPropagation(); setView('social'); }}
                            className="px-4 py-3 text-[10px] text-slate-300 hover:text-heritage-500 hover:bg-white/5 transition-all tracking-widest flex items-center justify-between group/item border-b border-white/5"
                        >
                            <span>云博·共建</span>
                            <MessageSquare size={12} className="opacity-0 -translate-x-2 group-hover/item:opacity-100 group-hover/item:translate-x-0 transition-all text-heritage-500" />
                        </button>
                        <button 
                            onClick={(e) => { e.stopPropagation(); setView('profile'); }}
                            className="px-4 py-3 text-[10px] text-slate-300 hover:text-heritage-500 hover:bg-white/5 transition-all tracking-widest flex items-center justify-between group/item"
                        >
                            <span>个人灵境</span>
                            <User size={12} className="opacity-0 -translate-x-2 group-hover/item:opacity-100 group-hover/item:translate-x-0 transition-all text-heritage-500" />
                        </button>
                    </div>
                  </div>
              </div>

              <div className="w-px h-4 bg-white/10 mx-2"></div>

              {/* Tab 2: Digital Twin (Dropdown) */}
              <div className="relative group">
                  <button 
                     onClick={() => setView('gallery')}
                     className={getTabStyle(isDigitalTwinActive)}
                  >
                    数字孪生
                    <ChevronDown size={10} className="opacity-50 group-hover:rotate-180 transition-transform duration-300" />
                  </button>

                  {/* Dropdown Menu */}
                  <div className="absolute left-1/2 -translate-x-1/2 top-full pt-4 w-44 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                    <div className="bg-dark-bg/95 backdrop-blur-xl border border-heritage-500/30 p-1 flex flex-col shadow-[0_10px_40px_-10px_rgba(0,0,0,0.8)] rounded-sm overflow-hidden">
                        <button 
                            onClick={(e) => { e.stopPropagation(); setView('exhibition'); }}
                            className="px-4 py-3 text-[10px] text-slate-300 hover:text-heritage-500 hover:bg-white/5 transition-all tracking-widest flex items-center justify-between group/item border-b border-white/5"
                        >
                            <span>展厅</span>
                            <MonitorPlay size={12} className="opacity-0 -translate-x-2 group-hover/item:opacity-100 group-hover/item:translate-x-0 transition-all text-heritage-500" />
                        </button>
                        <button 
                            onClick={(e) => { e.stopPropagation(); setView('gallery'); }}
                            className="px-4 py-3 text-[10px] text-slate-300 hover:text-heritage-500 hover:bg-white/5 transition-all tracking-widest flex items-center justify-between group/item border-b border-white/5"
                        >
                            <span>展品</span>
                            <Box size={12} className="opacity-0 -translate-x-2 group-hover/item:opacity-100 group-hover/item:translate-x-0 transition-all text-heritage-500" />
                        </button>
                        <button 
                            onClick={(e) => { e.stopPropagation(); setView('soul_chat'); }}
                            className="px-4 py-3 text-[10px] text-slate-300 hover:text-heritage-500 hover:bg-white/5 transition-all tracking-widest flex items-center justify-between group/item"
                        >
                            <span>灵境对话</span>
                            <Sparkles size={12} className="opacity-0 -translate-x-2 group-hover/item:opacity-100 group-hover/item:translate-x-0 transition-all text-heritage-500" />
                        </button>
                    </div>
                  </div>
              </div>

               <div className="w-px h-4 bg-white/10 mx-2"></div>

              {/* Tab 3: Cultural Creativity Cooperation (Business) */}
              <button 
                onClick={() => setView('cooperation')}
                className={getTabStyle(view === 'cooperation')}
              >
                文创合作
              </button>
           </nav>

           {/* Right Actions */}
           <div className="flex items-center gap-6 pointer-events-auto">
              <button className={`transition-colors hover:rotate-90 duration-500 ${view === 'home' ? 'text-white/60 hover:text-heritage-500' : 'text-slate-400 hover:text-white'}`}>
                  <Search size={22} />
              </button>
              <div className="w-px h-4 bg-white/20"></div>
              <button 
                onClick={() => setView('profile')}
                className="w-9 h-9 rounded-full bg-gradient-to-br from-heritage-500 to-amber-700 p-[1px] hover:scale-105 transition-transform"
              >
                 <div className="w-full h-full rounded-full bg-dark-bg flex items-center justify-center overflow-hidden">
                    <img src={IMAGES.avatar_user_1} alt="User" className="w-full h-full object-cover opacity-80 hover:opacity-100 transition-opacity" />
                 </div>
              </button>
           </div>
        </div>
      </header>

      {/* Main Content View Switcher */}
      <main className="w-full h-full relative">
        {view === 'home' && <Hero onNavigate={setView} />}
        
        {showSidebar ? (
            <div className="w-full h-full flex">
                {/* Quick Nav Sidebar */}
                <aside className="hidden lg:flex flex-col w-20 hover:w-64 transition-all duration-300 bg-dark-bg/80 backdrop-blur-md border-r border-white/5 pt-28 pb-8 z-40 fixed left-0 h-full group">
                    <nav className="flex flex-col gap-2 px-3 w-full">
                        {sidebarItems.map((item) => {
                            const Icon = item.icon;
                            const isActive = view === item.id;
                            return (
                                <button 
                                    key={item.id}
                                    onClick={() => setView(item.id as ViewState)}
                                    className={`flex items-center gap-4 p-3 rounded-xl transition-all overflow-hidden whitespace-nowrap group/btn ${isActive ? 'bg-heritage-500 text-white shadow-[0_0_15px_rgba(217,119,6,0.3)]' : 'text-slate-400 hover:text-white hover:bg-white/5'}`}
                                >
                                    <Icon size={24} className="shrink-0" />
                                    <span className="font-medium tracking-widest opacity-0 group-hover:opacity-100 transition-opacity duration-300 translate-x-4 group-hover:translate-x-0">{item.label}</span>
                                </button>
                            );
                        })}
                    </nav>
                    
                    <div className="mt-auto px-3 w-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
                        <div className="p-4 bg-white/5 rounded-xl border border-white/5">
                            <p className="text-xs text-slate-400 leading-relaxed">
                                <span className="text-heritage-500 font-bold">{activeSidebarTitle}</span> 
                                <br/>{sidebarItems.find(i => i.id === view)?.desc || "沉浸式数字体验。"}
                            </p>
                        </div>
                    </div>
                </aside>

                {/* Content Area */}
                <div className="flex-1 h-full w-full lg:pl-20 transition-all duration-300">
                    {view === 'explore' && <ExploreView />}
                    {view === 'social' && <SocialView />}
                    {view === 'profile' && <ProfileView />}
                    {view === 'gallery' && <Gallery onArtifactSelect={handleArtifactSelect} />}
                    {view === 'exhibition' && <ExhibitionView />}
                    {view === 'soul_chat' && <SoulChatView />}
                </div>
            </div>
        ) : (
            <>
                {view === 'detail' && selectedArtifactId && (
                    <DetailView artifactId={selectedArtifactId} onBack={handleBackToGallery} />
                )}
                {view === 'cooperation' && <CooperationView />}
            </>
        )}
      </main>

      {/* Global AI Chat Assistant */}
      <AIChatOverlay />

    </div>
  );
};

export default App;