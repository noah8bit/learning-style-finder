// Re-export trait definitions and bird profiles for easy access
export * from './keysTraitDefinitions';
export * from './keysBirdProfiles';

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

export interface RelationshipGuide {
  targetStyle: string;
  strengths: string;
  struggles: string;
  strategies: string;
}

// Enhanced Bird Profile from KEYS 40-Item Instrument
export interface EnhancedBirdProfile {
  desires: string;
  emotionalNeeds: string;
  keyStrengths: string;
  keyWeaknesses: string;
  getsDepressedWhen: string;
  afraidOf: string;
  likesPeopleWho: string;
  dislikesPeopleWho: string;
  valuableInWorkBecause: string;
  couldImproveIf: string;
  asLeadersThey: string;
  tendsToMarry: string;
  reactionToStress: string;
  recognizedByTheir: string;
}

export interface BehaviorStyle {
  id: string;
  letter: string;
  name: string;
  bird: string;
  birdType: "eagle" | "parrot" | "owl" | "dove";
  tagline: string;
  assertiveness: "high" | "low";
  expressiveness: "high" | "low";
  orientation: string;
  overview: string;
  characteristics: string[];
  strengths: string[];
  limitations: string[];
  communicationStyle: {
    language: string;
    vocal: string;
    opinions: string;
    talking: string;
    smallTalk: string;
  };
  motivatedBy: string[];
  atWork: {
    teamRole: string;
    negativeRole: string;
    leadershipStyle: string;
    underStress: string;
  };
  communicatingWith: string[];
  conflictTips: string[];
  relationships: RelationshipGuide[];
  // Enhanced KEYS 40-Item profile data
  enhancedProfile: EnhancedBirdProfile;
}

export interface PersonalityType {
  code: string;
  name: string;
  category: string;
  primaryStyle: string;
  description: string;
  traits: string[];
}

export const behaviorStyles: BehaviorStyle[] = [
  {
    id: "K",
    letter: "K",
    birdType: "eagle",
    name: "Firm",
    bird: "Eagle",
    tagline: "The Doer",
    assertiveness: "high",
    expressiveness: "low",
    orientation: "Active & Results-Oriented",
    overview: "Eagles are direct, bottom line, and fast-paced. They like to keep busy and aren't always the best team players, preferring to do things by themselves or delegating work they don't find interesting. They are persistent, overcome obstacles, and win at any cost. They're great people to have on your side—they will fight for you and protect you. They are fearless with high expectations of others.",
    characteristics: [
      "Direct and Guarded",
      "Likes control",
      "Dislikes inaction",
      "Takes decisive action",
      "Makes decisions quickly",
      "Prefers maximum freedom when managing",
      "Cool, independent, and competitive",
      "Low tolerance for feelings, attitudes, and advice",
      "Works quickly and impressively alone",
      "Good administrative skills"
    ],
    strengths: [
      "Bottom-line organizer",
      "Places high value on time",
      "Challenges the status quo",
      "Innovative problem solver",
      "Risk-taker",
      "Self-starter; takes initiative",
      "Makes quick decisions",
      "Stays focused"
    ],
    limitations: [
      "Oversteps authority",
      "Argumentative",
      "Dislikes routine",
      "Self-absorbed",
      "Hard to admit being wrong",
      "Reluctant to delegate",
      "Too bossy; insensitive",
      "May be tactless"
    ],
    communicationStyle: {
      language: "Uses direct language such as \"you must\" or \"you should\"",
      vocal: "Speaks quickly and loudly",
      opinions: "May state opinions as facts",
      talking: "Tendency to interrupt others",
      smallTalk: "Little small talk"
    },
    motivatedBy: [
      "New challenges and problems to solve",
      "Power and authority to take risks and make decisions",
      "Freedom from routine and mundane tasks",
      "Changing environments in which to work and play",
      "Results, challenge, action"
    ],
    atWork: {
      teamRole: "Organizer & Evaluator",
      negativeRole: "Dominator & Judge",
      leadershipStyle: "Tend to take an \"autocratic\" approach with others. Take control and be-in-charge type. Don't like being told what to do. Can be too pushy and forceful.",
      underStress: "It's not about you. Set clear boundaries."
    },
    communicatingWith: [
      "Be brief and to the point",
      "Make direct eye contact",
      "Offer a firm handshake",
      "Speak quickly"
    ],
    conflictTips: [
      "Refrain from fighting fire with fire",
      "Match intensity but not anger",
      "Be candid; make it clear why you're upset",
      "Stick to the facts"
    ],
    relationships: [
      {
        targetStyle: "K",
        strengths: "Your mutual goals, admiration, and the desire to get results can be very positive and affirming.",
        struggles: "Power struggles are the most challenging. Neither of you want to back down or give up or compromise.",
        strategies: "Don't force issues. Allow this person to have some choices, control and authority. Don't argue or give ultimatums. Be direct and stick to business."
      },
      {
        targetStyle: "E",
        strengths: "Both of you are fast paced. This person may desire to please you and follow your leadership.",
        struggles: "Your focus on getting things done can clash with this person's desire to have fun and \"take-life-as-it-comes.\" This person does not share your drive to complete tasks.",
        strategies: "Realize that this person does not usually focus on one thing, rather focuses on many things. Help them finish tasks by working with them. Make things FUN! Allow them to talk and socialize."
      },
      {
        targetStyle: "Y",
        strengths: "Both of you focus on tasks and enjoy working independently. With this person's attention to detail, you can accomplish a lot together.",
        struggles: "You tend to move quickly, whereas this person likes to think things through. Your focus is to get things done now; their focus is to get things done right.",
        strategies: "Do not rush or push this person. Do not criticize a cautious person. Be patient, and give time to make decisions. Be willing to answer questions and provide information politely."
      },
      {
        targetStyle: "S",
        strengths: "You like to lead, and this personality type likes to follow and help. A supportive person will feel secure as long as you show controlled, stable behavior.",
        struggles: "If you come on too strong, this person can feel intimidated and will take it personally. You may misunderstand their softhearted nature as being \"weak.\"",
        strategies: "Be patient and willing to spell things out step-by-step. Communicate in a calmer, softer manner. Relax, and do not push. Express appreciation often. Be sincere."
      }
    ],
    enhancedProfile: {
      desires: "To have control",
      emotionalNeeds: "A sense of obedience, appreciation or accomplishments, credit for ability",
      keyStrengths: "An ability to take charge of anything instantly and to make quick, correct judgments",
      keyWeaknesses: "Are too busy, domineering, autocratic, insensitive, impatient, unwilling to delegate or give credit to others",
      getsDepressedWhen: "Their life is out of control and people won't do things their way",
      afraidOf: "Losing control of anything (e.g., losing a job, not being promoted, becoming seriously ill)",
      likesPeopleWho: "Are supportive and submissive",
      dislikesPeopleWho: "Are lazy and not interested in working constantly, buck their authority, become independent, aren't loyal",
      valuableInWorkBecause: "Can accomplish more than anyone else in a shorter time, are usually right",
      couldImproveIf: "Allowed others to make decisions, delegated authority, became more patient, didn't want everyone to produce as they do",
      asLeadersThey: "Have a natural feel for being in charge, a quick sense of what will work, a sincere belief in their ability to achieve",
      tendsToMarry: "Peaceful Doves who will quietly obey and not buck their authority",
      reactionToStress: "Tighten control, work harder, execute more, get rid of the offender",
      recognizedByTheir: "Fast-moving approach, quick grab for control, self-confidence, restless and overpowering attitude"
    }
  },
  {
    id: "E",
    letter: "E",
    birdType: "parrot",
    name: "Fun",
    bird: "Parrot",
    tagline: "The Talker",
    assertiveness: "high",
    expressiveness: "high",
    orientation: "Active & People-Oriented",
    overview: "Parrots are enthusiastic, influential, fast-paced, with lots of energy and are usually very busy. They have a network of contacts and enjoy people and like to talk. They are good at promoting ideas and seek to persuade others to join with them. They enjoy presenting the \"big picture\" and discussing ideas. They thrive in the social scene and love recognition.",
    characteristics: [
      "Direct and Open",
      "Likes involvement",
      "Dislikes being alone",
      "Exaggerates and generalizes",
      "Tends to get caught up in their dreams",
      "Jumps from one activity to another",
      "Works quickly and excitedly with others",
      "Seeks recognition and acknowledgement",
      "Good persuasive skills",
      "Communicates well and needs freedom of expression"
    ],
    strengths: [
      "Creative problem solver",
      "Great encourager",
      "Motivates others to achieve",
      "Positive sense of humor",
      "Negotiates conflict; peacemaker",
      "\"People person\"",
      "Good salesperson",
      "Great story-telling abilities"
    ],
    limitations: [
      "More concerned with popularity than tangible results",
      "Inattentive to detail",
      "Short attention span",
      "Overuses gestures and facial expressions",
      "Too gullible and naïve",
      "Impulsive; exaggerates",
      "May not handle criticism well"
    ],
    communicationStyle: {
      language: "Uses enthusiastic and persuasive language",
      vocal: "Tendency to exaggerate",
      opinions: "Expresses opinions frequently",
      talking: "Talks a lot",
      smallTalk: "Lots of small talk"
    },
    motivatedBy: [
      "Flattery, praise, popularity, and acceptance",
      "A friendly environment",
      "Freedom from many rules and regulations",
      "Other people available to handle details",
      "Recognition, approval, visibility"
    ],
    atWork: {
      teamRole: "Initiator & Encourager",
      negativeRole: "Procrastinator & Know-it-all",
      leadershipStyle: "Use a \"democratic\" approach to facilitate communication and initiatives by others. Inspiring and enthusiastic. Love to lead and influence others. Naturally great presenters; tend to talk too much.",
      underStress: "Interrupt the person's outburst and help them gain control over words and emotions."
    },
    communicatingWith: [
      "Be lively and energetic",
      "Listen to their stories",
      "Allow time for extended interactions",
      "Avoid sharing too many details"
    ],
    conflictTips: [
      "Balance optimism with realism",
      "Look carefully at the pros/cons of each solution",
      "Try to identify unintended consequences of a decision",
      "Make sure all ideas are considered"
    ],
    relationships: [
      {
        targetStyle: "K",
        strengths: "Your freshness and fun balance their discipline. Both of you are fast-paced.",
        struggles: "Because you are opposites in focus, you may have a hard time understanding each other. Your talkative nature may clash with their task focus.",
        strategies: "Modify your expectations. Give focused attention. Be direct when discussing business. Help them see the people side of decisions."
      },
      {
        targetStyle: "E",
        strengths: "You share enthusiasm, energy, and love of people. Both of you enjoy socializing and creative brainstorming.",
        struggles: "Neither of you may focus on details or follow through. Competition for attention can arise.",
        strategies: "Celebrate each other's ideas. Take turns in the spotlight. Create accountability for completing tasks together."
      },
      {
        targetStyle: "Y",
        strengths: "Your strengths balance each other out. You need their discipline and logic; they need your freshness and fun.",
        struggles: "You may not relate to their analytical, cautious nature. Your standards may not match their need for perfection.",
        strategies: "Be generous with recognition and approval. Give undivided attention. Listen enthusiastically to their concerns. Do not push for instant decisions."
      },
      {
        targetStyle: "S",
        strengths: "You tend to get along well because you are both people-oriented. You both provide praise and appreciation to one another.",
        struggles: "Your biggest struggle will be keeping up with pace differences. Your large social circle can seem overwhelming to them.",
        strategies: "Be more calming and patient. Don't talk them into things impulsively. Set some limits and respect their need for stability."
      }
    ],
    enhancedProfile: {
      desires: "To have Fun",
      emotionalNeeds: "Attention, affection, approval, acceptance",
      keyStrengths: "Ability to talk about anything at any time at any place, bubbling personality, optimism, sense of humor, storytelling ability",
      keyWeaknesses: "Disorganized, can't remember details or names, exaggerates, not serious about anything, too gullible and naive",
      getsDepressedWhen: "Life is no fun and no one seems to love them",
      afraidOf: "Being unpopular or bored, having to live by the clock, having to keep a record of money spent",
      likesPeopleWho: "Listen and laugh, praise and approve",
      dislikesPeopleWho: "Criticize, don't respond to their humor, don't think they are cute",
      valuableInWorkBecause: "Colorful creativity, optimism, light touch, cheering up others, entertaining",
      couldImproveIf: "Got organized, didn't talk so much, learned to tell time",
      asLeadersThey: "Excite, persuade, and inspire others; exude charm and entertain; are forgetful and poor on follow through",
      tendsToMarry: "Owls who are sensitive and serious, but whom they quickly tire of having to cheer up",
      reactionToStress: "Leave the scene, go shopping, find a fun group, create excuses, blame others",
      recognizedByTheir: "Constant talking, loud volume, bright eyes"
    }
  },
  {
    id: "Y",
    letter: "Y",
    birdType: "owl",
    name: "Factual",
    bird: "Owl",
    tagline: "The Thinker",
    assertiveness: "low",
    expressiveness: "low",
    orientation: "Passive & Results-Oriented",
    overview: "Owls are detailed, cautious people that tend to be critical thinkers. They draw conclusions and base action on facts, correctness, accuracy, and knowing the rules. They are slower-paced and task-oriented. They are very effective in their work when they have the answers they need. They combine intuition with facts to reach a conclusion. Perfection is very important to them.",
    characteristics: [
      "Indirect and Guarded",
      "Likes organization and structure",
      "Cautious in actions and decisions",
      "Dislikes too much involvement",
      "Asks lots of questions about specific details",
      "Prefers an objective, task-oriented, intellectual work environment",
      "Wants to be right, so can be overly reliant on data collection",
      "Works precisely and slowly alone",
      "Good problem-solving skills",
      "Thinks in outline form, does things in sequence"
    ],
    strengths: [
      "Perspective: \"The anchor of reality\"",
      "Conscientious and even-tempered",
      "Thorough in all activities",
      "Defines situations clearly",
      "Gathers, analyzes, and tests information",
      "Creative thinker",
      "Ability to organize",
      "Sets long-range goals",
      "Accurate and reliable information"
    ],
    limitations: [
      "Needs to have clear boundaries",
      "Bound by procedures, rules, and policies",
      "Gets bogged down in details",
      "Prefers not to verbalize feelings",
      "Will give in rather than argue",
      "Remembers negatives; suspicious of others",
      "May be negative"
    ],
    communicationStyle: {
      language: "Uses precise language",
      vocal: "Speaks with little emotion",
      opinions: "Shares facts and data more than opinions",
      talking: "Has focused conversations",
      smallTalk: "Limited small talk"
    },
    motivatedBy: [
      "Standards and high quality",
      "Limited social interaction",
      "Detailed tasks",
      "Logical organization of information",
      "Being right, quality"
    ],
    atWork: {
      teamRole: "Investigator & Implementer",
      negativeRole: "Naysayer & Nitpicker",
      leadershipStyle: "Usually lead with a \"bureaucratic\" approach, delegating authority to others as long as they follow proper procedures. Competent and compliant. Go by the book and want everything just right.",
      underStress: "Help them overcome their resistance to change."
    },
    communicatingWith: [
      "Be organized",
      "Share details",
      "Allow time for them to think and reflect before responding",
      "Be reserved in your body language"
    ],
    conflictTips: [
      "Avoid becoming impatient",
      "Focus on facts and refrain from making an emotional appeal",
      "Don't insist on immediate resolution; allow time to think through options"
    ],
    relationships: [
      {
        targetStyle: "K",
        strengths: "Both of you share a similar bent toward accomplishing tasks. As long as you share the same goals, you can be very effective as a team.",
        struggles: "You may have conflict if you take different approaches. You want things done \"right,\" and they are focused on getting things done quickly.",
        strategies: "Accept that they need some control and ability to take action. Allow them to take some risks. Do not criticize or expect perfection. Be willing to recognize their accomplishments."
      },
      {
        targetStyle: "E",
        strengths: "Your strengths balance each other out. You need their freshness and fun; they need your discipline and logic.",
        struggles: "Because you are opposites in personality, you may have a hard time understanding each other. Your standards may be too high for them.",
        strategies: "Modify your expectations. Realize they will never have the attention to detail that you do. Look for their strengths, and be generous with recognition. Do not push for perfection."
      },
      {
        targetStyle: "Y",
        strengths: "Both of you like to work hard on projects and focus on details and quality. You both tend to be serious and factual in your conversations.",
        struggles: "There can be trouble when both of you disagree on what is \"right.\" One of you is \"right,\" but the other one is \"more right!\" Both of you can quickly shut down and withdraw.",
        strategies: "Be open and flexible when they suggest a different way. Be very careful with criticism. Do not set standards so high that they feel they cannot reach them. Be specific with encouragement."
      },
      {
        targetStyle: "S",
        strengths: "Both of you like to take things slowly. You both enjoy a low-key relationship that is free from conflict.",
        struggles: "You may become frustrated when this person does not think things through the way you do. Your logic-oriented nature can clash with their feelings-oriented nature.",
        strategies: "Be aware of your focus on tasks versus their focus on peace in relationships. Be more warm and personal. Be careful not to criticize. Show sincere appreciation for their efforts."
      }
    ],
    enhancedProfile: {
      desires: "To have it right",
      emotionalNeeds: "A sense of stability, space, silence, sensitivity, support",
      keyStrengths: "The ability to organize and set long-range goals, has high standards and ideals",
      keyWeaknesses: "Easily depressed, too much time on preparation, remembers negatives, suspicious of others",
      getsDepressedWhen: "Life is out of order, standards aren't met, and no one seems to care",
      afraidOf: "No one understands how they really feel, making a mistake, having no compromise standards",
      likesPeopleWho: "Are serious, intellectual, deep, and will carry on a sensible conversation",
      dislikesPeopleWho: "Are lightweights, forgetful, late, disorganized, superficial, and unpredictable",
      valuableInWorkBecause: "Have a sense of detail, love of analysis, follow-through, high standards of performance",
      couldImproveIf: "Didn't take life quite so seriously, didn't insist others be perfectionists",
      asLeadersThey: "Organize well, are sensitive to people's feelings, have deep creativity, want quality performance",
      tendsToMarry: "Parrots for their outgoing behavior style and social skills",
      reactionToStress: "Withdrawn, gets lost in a book, becomes depressed, gives up, recounts the problems",
      recognizedByTheir: "Serious and sensitive nature, well-mannered approach, meticulous and well-groomed looks"
    }
  },
  {
    id: "S",
    letter: "S",
    birdType: "dove",
    name: "Friendly",
    bird: "Dove",
    tagline: "The Listener",
    assertiveness: "low",
    expressiveness: "high",
    orientation: "Passive & People-Oriented",
    overview: "Doves are quiet, steady people who enjoy following a routine and dislike sudden change. They have consistent work performance and enjoy working behind the scenes. They get along well with others because they are flexible in their attitude. They are moderate and controlled, modest, and like to help others. They make good counselors and are great listeners.",
    characteristics: [
      "Indirect and Open",
      "Likes a few close personal relationships",
      "Slow at taking action and making decisions",
      "Dislikes interpersonal conflict",
      "Good counseling skills",
      "Seeks security and the need to belong",
      "Works slowly and bonds with others",
      "Weak at goal setting and self-direction",
      "Active listener and supportive style",
      "Pleasant and agreeable"
    ],
    strengths: [
      "Reliable and dependable",
      "Loyal team worker",
      "Respects authority",
      "Good listener; patient and empathetic",
      "Understanding; friendly",
      "Team player",
      "Good people skills",
      "Balance and harmony",
      "Excellent listener"
    ],
    limitations: [
      "Easily depressed",
      "Resistant to change",
      "Sensitive to criticism and confrontation",
      "Difficulty establishing priorities",
      "Difficulty making quick decisions",
      "Lacks decisiveness, enthusiasm, energy",
      "May sacrifice results for harmony",
      "May not handle conflict well"
    ],
    communicationStyle: {
      language: "Uses inclusive language",
      vocal: "Speaks slowly and softly",
      opinions: "Reluctant to offer opinions",
      talking: "Listens before speaking",
      smallTalk: "Lots of small talk"
    },
    motivatedBy: [
      "Recognition for loyalty and dependability",
      "Safety and security",
      "No sudden changes in procedure or lifestyle",
      "Activities they can start and finish",
      "Relationships, appreciation, security"
    ],
    atWork: {
      teamRole: "Communicator & Harmonizer",
      negativeRole: "Wallflower & Yes person",
      leadershipStyle: "Tend to take a \"participatory\" approach with an emphasis on delegation, listening, and support. Excellent at building consensus and creating harmony.",
      underStress: "Use gentle confrontation. Make it safe for them to express needs and feelings."
    },
    communicatingWith: [
      "Speak informally at a relaxed pace",
      "Engage in small talk before getting down to business",
      "Remember your manners",
      "Be sincere and patient"
    ],
    conflictTips: [
      "Emphasize your desire to maintain a good relationship",
      "Encourage an objective rather than emotional perspective",
      "Allow time to work through issues"
    ],
    relationships: [
      {
        targetStyle: "K",
        strengths: "You are a good supporter and encourager for this driven person who seeks to achieve and exert leadership.",
        struggles: "This person can exhaust you by being controlling or by expecting instant action. You like to relax and go slow, but they do everything with a sense of urgency.",
        strategies: "Do not take it personally when they take action without you. Be more firm and results-oriented with them. Be more direct, decisive, and action-oriented."
      },
      {
        targetStyle: "E",
        strengths: "You tend to get along well because you are both people-oriented. You both provide praise and appreciation to one another.",
        struggles: "Your biggest struggle will be keeping up with their pace. They like excitement and activity, but you like things slower and calmer.",
        strategies: "Be more outgoing and energetic. Be careful not to let them talk you into something. Set some limits and do not feel pressured by their energy."
      },
      {
        targetStyle: "Y",
        strengths: "Both of you are slower-paced. Neither of you is pushy, and you both prefer to avoid conflict. You can enjoy being together without a lot of conversation.",
        struggles: "You tend to be sensitive while they have a tendency towards being critical. Your feelings-oriented nature can clash with their logic-oriented nature.",
        strategies: "Do not take their questioning nature personally. They like to think deeply and analyze everything. Be willing to give in-depth answers. Realize they are more task-oriented than people-oriented."
      },
      {
        targetStyle: "S",
        strengths: "You have a lot in common and enjoy being with each other. Both of you like a relaxed, personal atmosphere.",
        struggles: "The main struggle is in the area of communication. You both talk indirectly and do not insist on your own way. Neither of you like to make hard decisions.",
        strategies: "Be willing to take more initiative and to be more decisive. Realize that some conflict and change is healthy. Draw out how the other person feels, and be willing to honestly share how you feel."
      }
    ],
    enhancedProfile: {
      desires: "To avoid conflict, keep peace",
      emotionalNeeds: "A sense of respect, feeling of worth, understanding, emotional support",
      keyStrengths: "Balance, even disposition, dry sense of humor, pleasing personality",
      keyWeaknesses: "Lack of decisiveness",
      getsDepressedWhen: "Life is full of conflict, they have to face confrontation, no one wants to help",
      afraidOf: "Having to deal with a major personal problem, being left holding the bag, making major changes",
      likesPeopleWho: "Will make decisions for them, will recognize their strengths, will give them respect",
      dislikesPeopleWho: "Are too pushy, too loud, and expect too much of them",
      valuableInWorkBecause: "Mediate between contentious people, objectively solve problems",
      couldImproveIf: "Set goals and become self-motivated, willing to do more faster than expected",
      asLeadersThey: "Keep calm, cool, and collected, don't make impulsive decisions; are well-liked and inoffensive",
      tendsToMarry: "Powerful Eagles who are strong and decisive",
      reactionToStress: "They hide from it, watch TV, eat, tune out life",
      recognizedByTheir: "Calm approach, relaxed posture (sitting or leaning when possible)"
    }
  }
];

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
    primaryStyle: "K",
    description: "You are action-oriented, decisive, and practical. You thrive in structured environments where you can take charge and make things happen. Your logical approach combined with attention to detail makes you an excellent problem-solver who gets results.",
    traits: ["Decisive leader", "Practical and organized", "Results-driven", "Logical thinker", "Takes initiative", "Values efficiency"]
  },
  {
    code: "1358",
    name: "The Adventurer",
    category: "Firm K / Fun E",
    primaryStyle: "K",
    description: "You combine practicality with spontaneity. While you focus on facts and logical analysis, you prefer to keep your options open and adapt as situations evolve. You're action-oriented but flexible in your approach.",
    traits: ["Adaptable leader", "Practical yet spontaneous", "Quick decision-maker", "Enjoys variety", "Action-oriented", "Thrives on challenges"]
  },
  {
    code: "1367",
    name: "The Provider",
    category: "Firm K / Firm E",
    primaryStyle: "K",
    description: "You are an outgoing, practical person who values harmony and structure. You focus on details and facts while considering how your decisions affect others. You're organized and reliable, with a strong sense of responsibility.",
    traits: ["Caring leader", "Detail-oriented", "Harmony-focused", "Organized planner", "Responsible", "People-centered"]
  },
  {
    code: "1368",
    name: "The Entertainer",
    category: "Firm K / Fun E",
    primaryStyle: "E",
    description: "You bring energy and warmth to everything you do. Practical and people-focused, you prefer flexibility and spontaneity. You're attentive to others' needs while keeping things fun and engaging.",
    traits: ["Energetic", "People-focused", "Spontaneous", "Warm and friendly", "Adaptable", "Lives in the moment"]
  },
  {
    code: "1457",
    name: "The Commander",
    category: "Firm K / Firm E",
    primaryStyle: "K",
    description: "You are a visionary leader who combines big-picture thinking with logical analysis. You thrive in structured environments where you can implement your ideas. Strategic and decisive, you naturally take charge of situations.",
    traits: ["Strategic thinker", "Visionary leader", "Logical and objective", "Organized", "Confident", "Goal-oriented"]
  },
  {
    code: "1458",
    name: "The Visionary",
    category: "Firm K / Fun E",
    primaryStyle: "E",
    description: "You are an innovative thinker who sees possibilities everywhere. Combining intuition with logical analysis, you prefer flexibility to explore new ideas. You're energized by challenges and love brainstorming solutions.",
    traits: ["Innovative", "Quick-minded", "Loves challenges", "Independent thinker", "Adaptable", "Entrepreneurial spirit"]
  },
  {
    code: "1467",
    name: "The Mentor",
    category: "Firm K / Firm E",
    primaryStyle: "E",
    description: "You are an inspiring leader who focuses on people's potential. Combining vision with warmth, you create structured environments that help others grow. You're organized and value meaningful connections.",
    traits: ["Inspiring leader", "People developer", "Organized", "Empathetic", "Values growth", "Harmonious"]
  },
  {
    code: "1468",
    name: "The Champion",
    category: "Firm K / Fun E",
    primaryStyle: "E",
    description: "You are enthusiastic and inspiring, always seeing possibilities in people and situations. You combine warmth with creativity and prefer flexibility to pursue your passions. You energize others with your optimism.",
    traits: ["Enthusiastic", "Inspiring", "Creative", "Warm", "Spontaneous", "Optimistic"]
  },
  {
    code: "2357",
    name: "The Inspector",
    category: "Fun K / Firm E",
    primaryStyle: "Y",
    description: "You are thoughtful, practical, and organized. You focus inwardly on analysis and details, preferring structure and planning. Logical and systematic, you take your responsibilities seriously and value accuracy.",
    traits: ["Analytical", "Detail-focused", "Systematic", "Responsible", "Logical", "Thorough"]
  },
  {
    code: "2358",
    name: "The Craftsman",
    category: "Fun K / Fun E",
    primaryStyle: "Y",
    description: "You are a quiet observer who focuses on facts and logical analysis. You prefer flexibility and hands-on problem-solving. Independent and adaptable, you excel at troubleshooting and working with tools or systems.",
    traits: ["Observant", "Hands-on", "Logical", "Independent", "Adaptable", "Problem-solver"]
  },
  {
    code: "2367",
    name: "The Protector",
    category: "Fun K / Firm E",
    primaryStyle: "S",
    description: "You are caring, practical, and organized. You focus on details and the needs of others, preferring structured environments. Loyal and responsible, you quietly support those around you with dedication.",
    traits: ["Caring", "Loyal", "Organized", "Practical", "Supportive", "Responsible"]
  },
  {
    code: "2368",
    name: "The Composer",
    category: "Fun K / Fun E",
    primaryStyle: "S",
    description: "You are gentle, caring, and present-focused. You pay attention to details and others' feelings while preferring flexibility. Artistic and adaptable, you express yourself through actions rather than words.",
    traits: ["Gentle", "Artistic", "Caring", "Present-focused", "Adaptable", "Expressive"]
  },
  {
    code: "2457",
    name: "The Mastermind",
    category: "Fun K / Firm E",
    primaryStyle: "Y",
    description: "You are a strategic thinker who works independently on complex problems. Combining vision with logical analysis, you prefer structured approaches to achieve your goals. You're innovative and thorough in your planning.",
    traits: ["Strategic", "Independent", "Innovative", "Analytical", "Determined", "Long-term thinker"]
  },
  {
    code: "2458",
    name: "The Architect",
    category: "Fun K / Fun E",
    primaryStyle: "Y",
    description: "You are an independent thinker who loves exploring ideas and theories. Combining intuition with logical analysis, you prefer flexibility to pursue intellectual interests. Creative and analytical, you enjoy solving complex problems.",
    traits: ["Analytical", "Creative", "Independent", "Curious", "Theoretical", "Problem-solver"]
  },
  {
    code: "2467",
    name: "The Counselor",
    category: "Fun K / Firm E",
    primaryStyle: "S",
    description: "You are insightful and empathetic, focusing on people's potential and well-being. You combine vision with warmth, preferring organized approaches to help others. Private yet caring, you seek meaningful connections.",
    traits: ["Insightful", "Empathetic", "Organized", "Private", "Idealistic", "Caring"]
  },
  {
    code: "2468",
    name: "The Healer",
    category: "Fun K / Fun E",
    primaryStyle: "S",
    description: "You are idealistic and empathetic, guided by your values and intuition. You prefer flexibility and focus on possibilities for people and the world. Creative and caring, you seek authenticity in all you do.",
    traits: ["Idealistic", "Empathetic", "Creative", "Values-driven", "Authentic", "Compassionate"]
  }
];

export function getPersonalityType(answers: number[]): PersonalityType | null {
  const code = answers.sort((a, b) => a - b).join("");
  return personalityTypes.find(type => type.code === code) || null;
}

export function getBehaviorStyle(styleId: string): BehaviorStyle | undefined {
  return behaviorStyles.find(style => style.id === styleId);
}

export function getPrimaryBehaviorStyle(result: PersonalityType): BehaviorStyle | undefined {
  return getBehaviorStyle(result.primaryStyle);
}
