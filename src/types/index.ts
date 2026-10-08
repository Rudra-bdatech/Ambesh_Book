export interface BookInfo {
  title: string;
  subtitle: string;
  author: string;
  tagline: string;
  rating: number;
  ratingCount: number;
  bestsellerCategory: string;
  kindleLink: string;
  paperbackLink: string;
  copyrightNumber: string;
  diaryNumber: string;
  copyrightGovUrl: string;
}

export interface Testimonial {
  id: string;
  name: string;
  title: string;
  organization: string;
  avatar: string;
  quote: string;
  rating: number;
  highlight?: string;
  category: 'mit-academic' | 'executive' | 'industry-expert' | 'reader';
  verifiedBuyer?: boolean;
}

export interface BookPillar {
  number: number;
  title: string;
  shortDesc: string;
  fullDesc: string;
  iconName: string;
  keyTakeaways: string[];
  samplePromptOrFramework?: string;
  category: string;
}

export interface MediaFeature {
  name: string;
  logoUrl: string;
  subtitle?: string;
}

export interface QuizQuestion {
  id: number;
  question: string;
  options: {
    text: string;
    points: number;
    tip: string;
  }[];
}
