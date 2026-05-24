
export interface Artifact {
  id: string;
  title: string;
  dynasty: string;
  description: string;
  image: string;
  tags: string[];
  restorationLevel?: number;
  material?: string;
}

export interface SocialPost {
  id: string;
  user: {
    name: string;
    avatar: string;
    title?: string;
  };
  content: string;
  time: string;
  likes: number;
  comments: number;
  tag?: string;
  image?: string;
  projectProgress?: number;
}

export interface ChatMessage {
  id: string;
  sender: 'user' | 'ai';
  text: string;
  timestamp: Date;
}

export type ViewState = 'home' | 'gallery' | 'detail' | 'social' | 'explore' | 'profile' | 'exhibition' | 'soul_chat' | 'cooperation';