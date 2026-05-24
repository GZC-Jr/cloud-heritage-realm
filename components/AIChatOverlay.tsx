import React, { useState, useRef, useEffect } from 'react';
import { MessageCircle, X, Send, Mic, Sparkles } from 'lucide-react';
import { IMAGES } from '../constants';
import { ChatMessage } from '../types';

export const AIChatOverlay: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    { id: '1', sender: 'ai', text: '欢迎来到云博·境，旅行者。', timestamp: new Date() },
    { id: '2', sender: 'ai', text: '在 AI 修复其形制的同时，是否愿意听我吟诵一首关于它身世的诗篇？', timestamp: new Date() }
  ]);
  const [inputValue, setInputValue] = useState('');
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = () => {
    if (!inputValue.trim()) return;
    
    const newUserMsg: ChatMessage = {
      id: Date.now().toString(),
      sender: 'user',
      text: inputValue,
      timestamp: new Date()
    };
    
    setMessages(prev => [...prev, newUserMsg]);
    setInputValue('');

    // Simulate AI response
    setTimeout(() => {
      const aiMsg: ChatMessage = {
        id: (Date.now() + 1).toString(),
        sender: 'ai',
        text: '这件器物承载着千年的历史，它的釉色如雨后初晴的天空...',
        timestamp: new Date()
      };
      setMessages(prev => [...prev, aiMsg]);
    }, 1500);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-4 pointer-events-none">
      {/* Chat Window */}
      {isOpen && (
        <div className="pointer-events-auto w-[350px] md:w-[400px] glass-panel rounded-2xl overflow-hidden shadow-2xl flex flex-col animate-float border-r-2 border-r-heritage-500/30 mb-4 transition-all duration-300 origin-bottom-right">
          {/* Header */}
          <div className="p-4 border-b border-white/5 bg-gradient-to-l from-heritage-500/10 to-transparent flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="relative">
                <div className="w-10 h-10 rounded-full overflow-hidden border border-heritage-500/50">
                  <img src={IMAGES.avatar_libai} alt="Li Bai" className="w-full h-full object-cover" />
                </div>
                <div className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-green-500 border-2 border-dark-surface rounded-full"></div>
              </div>
              <div>
                <h3 className="text-white text-base font-bold">李白 (人工智能)</h3>
                <p className="text-heritage-500 text-xs">在线 • 唐朝</p>
              </div>
            </div>
            <button onClick={() => setIsOpen(false)} className="text-slate-400 hover:text-white transition-colors">
              <X size={20} />
            </button>
          </div>

          {/* Messages */}
          <div className="h-[400px] overflow-y-auto p-5 space-y-6 scrollbar-hide flex flex-col bg-black/20">
            <div className="flex justify-center">
               <span className="text-[10px] text-slate-500 bg-black/20 px-2 py-1 rounded">今天, 上午 10:23</span>
            </div>
            
            {messages.map((msg) => (
              <div key={msg.id} className={`flex gap-3 ${msg.sender === 'user' ? 'flex-row-reverse' : ''}`}>
                <div className={`w-8 h-8 rounded-full overflow-hidden border border-white/10 shrink-0 mt-1 ${msg.sender === 'user' ? 'bg-heritage-500 flex items-center justify-center' : ''}`}>
                   {msg.sender === 'ai' ? (
                     <img src={IMAGES.avatar_libai} className="w-full h-full object-cover" alt="AI" />
                   ) : (
                     <span className="text-white font-bold text-xs">我</span>
                   )}
                </div>
                <div className={`flex flex-col gap-1 max-w-[80%] ${msg.sender === 'user' ? 'items-end' : ''}`}>
                  <div className={`p-3.5 rounded-2xl text-sm leading-relaxed shadow-sm ${
                    msg.sender === 'ai' 
                      ? 'bg-white/10 backdrop-blur-md rounded-tl-none border border-white/5 text-slate-100' 
                      : 'bg-heritage-500 rounded-tr-none text-white shadow-[0_4px_15px_rgba(217,119,6,0.3)]'
                  }`}>
                    {msg.text}
                  </div>
                </div>
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>

          {/* Quick Actions */}
          <div className="px-4 py-2 bg-black/20 backdrop-blur-xl border-t border-white/5 flex gap-2 overflow-x-auto scrollbar-hide">
             {['吟诗一首', '高岭土历史', '唐代艺术'].map(tag => (
               <button key={tag} onClick={() => setInputValue(`请讲讲${tag}`)} className="whitespace-nowrap px-3 py-1.5 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 text-xs text-slate-300 transition-colors">
                 {tag}
               </button>
             ))}
          </div>

          {/* Input Area */}
          <div className="p-4 bg-black/20 backdrop-blur-xl flex items-center gap-2">
            <div className="flex-1 relative">
              <input 
                type="text" 
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                className="w-full bg-white/5 hover:bg-white/10 focus:bg-white/10 border border-white/10 focus:border-heritage-500/50 text-white text-sm rounded-xl py-3 px-4 outline-none transition-all placeholder:text-slate-500" 
                placeholder="向李白提问..." 
              />
              <button className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-white">
                <Mic size={18} />
              </button>
            </div>
            <button 
              onClick={handleSend}
              className="p-3 bg-heritage-500 hover:bg-heritage-600 text-white rounded-xl shadow-[0_0_15px_rgba(217,119,6,0.4)] transition-all flex items-center justify-center group"
            >
              <Send size={18} className="group-hover:translate-x-0.5 transition-transform" />
            </button>
          </div>
        </div>
      )}

      {/* Floating Toggle Button */}
      {!isOpen && (
        <div className="bg-white text-slate-900 px-4 py-3 rounded-2xl rounded-br-none shadow-[0_4px_20px_rgba(0,0,0,0.5)] mb-2 animate-float pointer-events-auto max-w-[220px] relative origin-bottom-right">
            <p className="text-sm font-bold text-heritage-500 mb-0.5 flex items-center gap-1"><Sparkles size={14} /> AI 导览</p>
            <p className="text-sm font-medium leading-snug">我是李白，想听听这些展品背后的故事吗？</p>
            <div className="absolute -bottom-2 right-6 w-4 h-4 bg-white rotate-45"></div>
        </div>
      )}
      
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="pointer-events-auto group relative flex items-center justify-center w-16 h-16 bg-gradient-to-br from-[#f59e0b] to-[#b45309] rounded-full shadow-[0_0_20px_rgba(245,158,11,0.4)] hover:shadow-[0_0_35px_rgba(245,158,11,0.6)] hover:scale-105 transition-all duration-300 border-2 border-white/20"
      >
        <div className="w-full h-full rounded-full overflow-hidden bg-black/20">
          <img src={IMAGES.avatar_libai} alt="AI" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
        </div>
        <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-green-500 rounded-full border-2 border-dark-bg animate-pulse"></div>
      </button>
    </div>
  );
};