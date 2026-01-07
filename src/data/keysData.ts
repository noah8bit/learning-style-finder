export interface Question {
  id: string;
  title: string;
  description: string;
  options: {
    value: number;
    label: string;
    description: string;
  }[];
}

export interface PersonalityType {
  code: string;
  name: string;
  category: string;
  description: string;
  traits: string[];
}

export const questions: Question[] = [
  {
    id: "A",
    title: "Where Do You Focus Your Attention & Energy?",
    description: "Think about how you naturally interact with the world around you.",
    options: [
      {
        value: 1,
        label: "Outward Focus",
        description: "I focus outwardly towards the world, people, things, activities, and making things happen."
      },
      {
        value: 2,
        label: "Inward Focus",
        description: "I focus inwardly on my own thoughts, memories, and perceptions."
      }
    ]
  },
  {
    id: "B",
    title: "How Do You Gather Information?",
    description: "Consider how you prefer to take in and process new information.",
    options: [
      {
        value: 3,
        label: "Facts & Details",
        description: "I focus on facts and details, on practical matters that can be experienced through the senses."
      },
      {
        value: 4,
        label: "Imagination & Possibilities",
        description: "I focus on my imagination and possibilities. I jump quickly to 'the big picture' and trust my intuition."
      }
    ]
  },
  {
    id: "C",
    title: "How Do You Make Decisions?",
    description: "Think about what influences your decision-making process.",
    options: [
      {
        value: 5,
        label: "Objective & Logical",
        description: "I am objective and logical, focusing on analyzing the facts and the cause-and-effect of my decisions."
      },
      {
        value: 6,
        label: "People & Harmony",
        description: "I focus on the impact of my decisions on people and harmony. I'm tactful and consider others' points of view."
      }
    ]
  },
  {
    id: "D",
    title: "How Do You Prefer Your Environment?",
    description: "Consider how you like to organize your life and surroundings.",
    options: [
      {
        value: 7,
        label: "Structured & Predictable",
        description: "I prefer a structured, predictable, and orderly environment. I like to have things settled and make plans."
      },
      {
        value: 8,
        label: "Flexible & Open",
        description: "I prefer an open, flexible, and spontaneous environment. I like to keep my options open."
      }
    ]
  }
];

export const personalityTypes: PersonalityType[] = [
  {
    code: "1357",
    name: "The Director",
    category: "Firm K / Firm E",
    description: "You are action-oriented, decisive, and practical. You thrive in structured environments where you can take charge and make things happen. Your logical approach combined with attention to detail makes you an excellent problem-solver who gets results.",
    traits: ["Decisive leader", "Practical and organized", "Results-driven", "Logical thinker", "Takes initiative", "Values efficiency"]
  },
  {
    code: "1358",
    name: "The Adventurer",
    category: "Firm K / Fun E",
    description: "You combine practicality with spontaneity. While you focus on facts and logical analysis, you prefer to keep your options open and adapt as situations evolve. You're action-oriented but flexible in your approach.",
    traits: ["Adaptable leader", "Practical yet spontaneous", "Quick decision-maker", "Enjoys variety", "Action-oriented", "Thrives on challenges"]
  },
  {
    code: "1367",
    name: "The Provider",
    category: "Firm K / Firm E",
    description: "You are an outgoing, practical person who values harmony and structure. You focus on details and facts while considering how your decisions affect others. You're organized and reliable, with a strong sense of responsibility.",
    traits: ["Caring leader", "Detail-oriented", "Harmony-focused", "Organized planner", "Responsible", "People-centered"]
  },
  {
    code: "1368",
    name: "The Entertainer",
    category: "Firm K / Fun E",
    description: "You bring energy and warmth to everything you do. Practical and people-focused, you prefer flexibility and spontaneity. You're attentive to others' needs while keeping things fun and engaging.",
    traits: ["Energetic", "People-focused", "Spontaneous", "Warm and friendly", "Adaptable", "Lives in the moment"]
  },
  {
    code: "1457",
    name: "The Commander",
    category: "Firm K / Firm E",
    description: "You are a visionary leader who combines big-picture thinking with logical analysis. You thrive in structured environments where you can implement your ideas. Strategic and decisive, you naturally take charge of situations.",
    traits: ["Strategic thinker", "Visionary leader", "Logical and objective", "Organized", "Confident", "Goal-oriented"]
  },
  {
    code: "1458",
    name: "The Visionary",
    category: "Firm K / Fun E",
    description: "You are an innovative thinker who sees possibilities everywhere. Combining intuition with logical analysis, you prefer flexibility to explore new ideas. You're energized by challenges and love brainstorming solutions.",
    traits: ["Innovative", "Quick-minded", "Loves challenges", "Independent thinker", "Adaptable", "Entrepreneurial spirit"]
  },
  {
    code: "1467",
    name: "The Mentor",
    category: "Firm K / Firm E",
    description: "You are an inspiring leader who focuses on people's potential. Combining vision with warmth, you create structured environments that help others grow. You're organized and value meaningful connections.",
    traits: ["Inspiring leader", "People developer", "Organized", "Empathetic", "Values growth", "Harmonious"]
  },
  {
    code: "1468",
    name: "The Champion",
    category: "Firm K / Fun E",
    description: "You are enthusiastic and inspiring, always seeing possibilities in people and situations. You combine warmth with creativity and prefer flexibility to pursue your passions. You energize others with your optimism.",
    traits: ["Enthusiastic", "Inspiring", "Creative", "Warm", "Spontaneous", "Optimistic"]
  },
  {
    code: "2357",
    name: "The Inspector",
    category: "Fun K / Firm E",
    description: "You are thoughtful, practical, and organized. You focus inwardly on analysis and details, preferring structure and planning. Logical and systematic, you take your responsibilities seriously and value accuracy.",
    traits: ["Analytical", "Detail-focused", "Systematic", "Responsible", "Logical", "Thorough"]
  },
  {
    code: "2358",
    name: "The Craftsman",
    category: "Fun K / Fun E",
    description: "You are a quiet observer who focuses on facts and logical analysis. You prefer flexibility and hands-on problem-solving. Independent and adaptable, you excel at troubleshooting and working with tools or systems.",
    traits: ["Observant", "Hands-on", "Logical", "Independent", "Adaptable", "Problem-solver"]
  },
  {
    code: "2367",
    name: "The Protector",
    category: "Fun K / Firm E",
    description: "You are caring, practical, and organized. You focus on details and the needs of others, preferring structured environments. Loyal and responsible, you quietly support those around you with dedication.",
    traits: ["Caring", "Loyal", "Organized", "Practical", "Supportive", "Responsible"]
  },
  {
    code: "2368",
    name: "The Composer",
    category: "Fun K / Fun E",
    description: "You are gentle, caring, and present-focused. You pay attention to details and others' feelings while preferring flexibility. Artistic and adaptable, you express yourself through actions rather than words.",
    traits: ["Gentle", "Artistic", "Caring", "Present-focused", "Adaptable", "Expressive"]
  },
  {
    code: "2457",
    name: "The Mastermind",
    category: "Fun K / Firm E",
    description: "You are a strategic thinker who works independently on complex problems. Combining vision with logical analysis, you prefer structured approaches to achieve your goals. You're innovative and thorough in your planning.",
    traits: ["Strategic", "Independent", "Innovative", "Analytical", "Determined", "Long-term thinker"]
  },
  {
    code: "2458",
    name: "The Architect",
    category: "Fun K / Fun E",
    description: "You are an independent thinker who loves exploring ideas and theories. Combining intuition with logical analysis, you prefer flexibility to pursue intellectual interests. Creative and analytical, you enjoy solving complex problems.",
    traits: ["Analytical", "Creative", "Independent", "Curious", "Theoretical", "Problem-solver"]
  },
  {
    code: "2467",
    name: "The Counselor",
    category: "Fun K / Firm E",
    description: "You are insightful and empathetic, focusing on people's potential and well-being. You combine vision with warmth, preferring organized approaches to help others. Private yet caring, you seek meaningful connections.",
    traits: ["Insightful", "Empathetic", "Organized", "Private", "Idealistic", "Caring"]
  },
  {
    code: "2468",
    name: "The Healer",
    category: "Fun K / Fun E",
    description: "You are idealistic and empathetic, guided by your values and intuition. You prefer flexibility and focus on possibilities for people and the world. Creative and caring, you seek authenticity in all you do.",
    traits: ["Idealistic", "Empathetic", "Creative", "Values-driven", "Authentic", "Compassionate"]
  }
];

export function getPersonalityType(answers: number[]): PersonalityType | null {
  const code = answers.sort((a, b) => a - b).join("");
  return personalityTypes.find(type => type.code === code) || null;
}
