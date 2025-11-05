// NFC内容配置文件
// 可以根据不同的ID配置不同的分享内容

export interface NFCContent {
  id: string;
  title: string;
  description: string;
  text: string;
  images: string[];
  hashtags: string[];
}

export const nfcContents: Record<string, NFCContent> = {
  'default': {
    id: 'default',
    title: 'Sentient Labs - GRID & ROMA',
    description: '全球最大的去中心化AI网络',
    text: `🤖 探索AI的未来 - Sentient Labs

🌟 GRID: 全球最大的去中心化AI网络
✨ ROMA: 获得Minsky奖的多智能体框架

🔥 加入我们，一起构建开源AI生态系统！

#AI #人工智能 #开源 #科技创新`,
    images: [
      'https://www.grid-ai.app/api/og-image?title=GRID',
    ],
    hashtags: ['AI', '人工智能', '开源', '科技创新', 'SentientLabs']
  },
  'grid': {
    id: 'grid',
    title: 'GRID - 去中心化AI网络',
    description: '100+合作伙伴，强大的AI工作流系统',
    text: `🌐 GRID - 全球最大的去中心化AI网络

📊 100+ AI合作伙伴
🔧 强大的工作流系统
💎 丰富的AI模型库

体验下一代AI协作平台！

👉 www.grid-ai.app

#GRID #去中心化AI #AI平台`,
    images: [
      'https://www.grid-ai.app/api/og-image?title=GRID',
    ],
    hashtags: ['GRID', '去中心化AI', 'AI平台', '人工智能']
  },
  'roma': {
    id: 'roma',
    title: 'ROMA - Minsky奖得主',
    description: '递归开放元智能体框架',
    text: `🏆 ROMA - Minsky Awards 2024获奖者

🤖 递归开放元智能体框架
📈 FRAMES准确率: 81.7%
🎯 4阶段架构: 分解-规划-执行-聚合

开源多智能体AI的革命性突破！

⭐ GitHub: github.com/sentient-agi/ROMA

#ROMA #多智能体 #AI框架 #开源AI`,
    images: [
      'https://www.grid-ai.app/api/og-image?title=ROMA',
    ],
    hashtags: ['ROMA', '多智能体', 'AI框架', '开源AI', 'Minsky奖']
  }
};

export function getNFCContent(id: string): NFCContent {
  return nfcContents[id] || nfcContents['default'];
}
