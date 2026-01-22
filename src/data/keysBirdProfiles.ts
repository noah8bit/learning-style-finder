// KEYS 40-Item Behavioral Testing Instrument - Detailed Bird Profiles
// Based on the comprehensive profile sheets from Dr. Roger Garrett materials

export interface BirdProfile {
  id: "eagle" | "parrot" | "owl" | "dove";
  name: string;
  color: string;
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

export const birdProfiles: BirdProfile[] = [
  {
    id: "eagle",
    name: "The Eagle",
    color: "#1a5f2a", // Dark green from the document
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
    asLeadersThey: "A natural feel for being in charge, a quick sense of what will work, a sincere belief in their ability to achieve a potential to overwhelm less aggressive people",
    tendsToMarry: "Peaceful Doves who will quietly obey and not buck their authority, but who never accomplish enough or get excited over their projects",
    reactionToStress: "Tighten control, work harder, execute more, get rid of the offender",
    recognizedByTheir: "Fast-moving approach, quick grab for control, self-confidence, restless and over powering attitude"
  },
  {
    id: "parrot",
    name: "The Parrot",
    color: "#dc2626", // Red from the document
    desires: "To have Fun",
    emotionalNeeds: "Attention, affection, approval, acceptance",
    keyStrengths: "Ability to talk about anything at any time at any place, bubbling personality, optimism, sense of humor, storytelling ability, enjoyment of people",
    keyWeaknesses: "Disorganized, can't remember details or names, exaggerates, not serious about anything, trust others to do the work, too gullible and naive",
    getsDepressedWhen: "Life is no fun and no one seems to love them",
    afraidOf: "Being unpopular or bored having to live by the clock, having to keep a record of money spent",
    likesPeopleWho: "Listen and laugh, praise and approve",
    dislikesPeopleWho: "Criticize, don't respond to their humor, don't think they are cute",
    valuableInWorkBecause: "Colorful creativity, optimism, light touch, cheering up others, entertaining",
    couldImproveIf: "Got organized, didn't talk so much, learned to tell time",
    asLeadersThey: "Excite, persuade, and inspire others; exude charm and entertain; are forgetful and poor on follow through",
    tendsToMarry: "Owls who are sensitive and serious, but whom they quickly tire of having to cheer up and by whom they soon tire of being made to feel inadequate or stupid",
    reactionToStress: "Leave the scene, go shopping, find a fun group, create excuses, blame others",
    recognizedByTheir: "Constant talking, loud volume, bright eyes"
  },
  {
    id: "owl",
    name: "The Owl",
    color: "#0369a1", // Blue from the document
    desires: "To have it right",
    emotionalNeeds: "A sense of stability, space, silence, sensitivity, support",
    keyStrengths: "The ability to organize and set long-range goals, has high standards and ideals",
    keyWeaknesses: "Easily depressed, too much time on preparation, not focused on details, remembers negatives, suspicious of others",
    getsDepressedWhen: "Life is out of order, standards aren't met, and no one seems to care",
    afraidOf: "No one understands how they really feel, making a mistake, having no compromise standards",
    likesPeopleWho: "Are serious, intellectual, deep, and will carry on a sensible conversation",
    dislikesPeopleWho: "Are lightweights, forgetful, late, disorganized. Superficial, prevaricating and unpredictable",
    valuableInWorkBecause: "Have a sense of detail, love of analysis, follow-through, high standards of performance, compassion for the hurting",
    couldImproveIf: "Didn't take life quite so seriously, didn't insist others be perfectionists",
    asLeadersThey: "Organize well, are sensitive to people's feelings, have deep creativity, want quality performance",
    tendsToMarry: "Parrots for their outgoing behavior style and social skills, but whom they soon attempt to quiet and get on a schedule",
    reactionToStress: "Withdrawn, gets lost in a book, becomes depressed, gives up, recounts the problems",
    recognizedByTheir: "Serious and sensitive nature, well-mannered approach, self-deprecating comments, meticulous and well-groomed looks"
  },
  {
    id: "dove",
    name: "The Dove",
    color: "#6b7280", // Gray from the document
    desires: "To avoid conflict, keep peace",
    emotionalNeeds: "A sense of respect, feeling of worth, understanding, emotional support",
    keyStrengths: "Balance, even disposition, dry sense of humor, pleasing personality",
    keyWeaknesses: "Lack of decisiveness",
    getsDepressedWhen: "Life is full of conflict, they have to face a full confrontation, no one wants to help, the buck stops with them",
    afraidOf: "Having to deal with a major personal problem, being left holding the bag, making major changes",
    likesPeopleWho: "Will make decisions for them, will recognize their strengths, will not ignore them, will give them respect",
    dislikesPeopleWho: "Are too pushy, too loud, and expect too much of them",
    valuableInWorkBecause: "Mediate between contentious people, objectively solve problems",
    couldImproveIf: "Set goals and become self-motivated, willing to do more and more faster than expected, could face their own problems as well as they handle those of others",
    asLeadersThey: "Keep calm, cool, and collected, don't make impulsive decisions; are well-liked and inoffensive; won't cause trouble; don't often come up with brilliant new ideas",
    tendsToMarry: "Powerful Eagles who are strong and decisive, but by whom they soon tire of being pushed around and looked down upon",
    reactionToStress: "They hide from it, watch TV, eat, tune out life",
    recognizedByTheir: "Calm approach, relaxed posture (sitting or leaning when possible)"
  }
];

// Get bird profile by ID
export function getBirdProfile(id: "eagle" | "parrot" | "owl" | "dove"): BirdProfile | undefined {
  return birdProfiles.find(profile => profile.id === id);
}

// Map behavior style ID to bird type
export function getBirdTypeFromStyleId(styleId: string): "eagle" | "parrot" | "owl" | "dove" | undefined {
  const mapping: Record<string, "eagle" | "parrot" | "owl" | "dove"> = {
    "K": "eagle",
    "E": "parrot",
    "Y": "owl",
    "S": "dove"
  };
  return mapping[styleId];
}
