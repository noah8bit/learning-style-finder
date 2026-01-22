// KEYS 40-Item Behavioral Testing Instrument - Appendix B Word Definitions
// Organized by row number (1-40), with 4 words per row

export interface TraitDefinition {
  word: string;
  definition: string;
  type: "strength" | "weakness";
  birdType: "eagle" | "parrot" | "owl" | "dove";
  row: number;
}

// Strengths (Rows 1-20)
export const strengthDefinitions: TraitDefinition[] = [
  // Row 1
  { word: "Adventurous", definition: "Takes on new and daring enterprises with a determination to master them.", type: "strength", birdType: "eagle", row: 1 },
  { word: "Animated", definition: "Full of life, lively use of hand, arm, and facial gestures.", type: "strength", birdType: "parrot", row: 1 },
  { word: "Analytical", definition: "Likes to examine the parts for their logical and proper relationships.", type: "strength", birdType: "owl", row: 1 },
  { word: "Adaptable", definition: "Easily fits and is comfortable in any situation.", type: "strength", birdType: "dove", row: 1 },

  // Row 2
  { word: "Persuasive", definition: "Convinces through logic and fact rather than charm or power.", type: "strength", birdType: "eagle", row: 2 },
  { word: "Playful", definition: "Full of fun and good humor.", type: "strength", birdType: "parrot", row: 2 },
  { word: "Persistent", definition: "Sees one project through to completion before starting another.", type: "strength", birdType: "owl", row: 2 },
  { word: "Powerful", definition: "Seems undisturbed and tranquil and retreats from any form of strife.", type: "strength", birdType: "dove", row: 2 },

  // Row 3
  { word: "Strong-willed", definition: "Determined to have one's own way.", type: "strength", birdType: "eagle", row: 3 },
  { word: "Sociable", definition: "Sees being with others as an opportunity to be cute and entertaining rather than as a challenge or business opportunity.", type: "strength", birdType: "parrot", row: 3 },
  { word: "Self-sacrificing", definition: "Willingly gives up his or her own personal feelings for the sake of, or to meet the needs of others.", type: "strength", birdType: "owl", row: 3 },
  { word: "Submissive", definition: "Easily accepts any other's point of view or desire with little need to assert his or her own opinion.", type: "strength", birdType: "dove", row: 3 },

  // Row 4
  { word: "Competitive", definition: "Turns every situation, happening, or game into a contest and always plays to win.", type: "strength", birdType: "eagle", row: 4 },
  { word: "Convincing", definition: "Can win you over to anything through the sheer charm of his or her behavior.", type: "strength", birdType: "parrot", row: 4 },
  { word: "Considerate", definition: "Has regards for the needs and feelings of others.", type: "strength", birdType: "owl", row: 4 },
  { word: "Controlled", definition: "Has emotional feelings but rarely displays them.", type: "strength", birdType: "dove", row: 4 },

  // Row 5
  { word: "Resourceful", definition: "Able to act quickly and effectively in virtually all situations.", type: "strength", birdType: "eagle", row: 5 },
  { word: "Refreshing", definition: "Renews and stimulates or makes others feel good.", type: "strength", birdType: "parrot", row: 5 },
  { word: "Respectful", definition: "Treats others with deference, honor and esteem.", type: "strength", birdType: "owl", row: 5 },
  { word: "Reserved", definition: "Self-restrained in expression of emotion or enthusiasm.", type: "strength", birdType: "dove", row: 5 },

  // Row 6
  { word: "Self-reliant", definition: "Can easily rely on his or her own capabilities, judgment, and resources.", type: "strength", birdType: "eagle", row: 6 },
  { word: "Spirited", definition: "Full of life and excitement.", type: "strength", birdType: "parrot", row: 6 },
  { word: "Sensitive", definition: "Intensively cares about others and what happens.", type: "strength", birdType: "owl", row: 6 },
  { word: "Satisfied", definition: "Easily accepts any circumstance or situation.", type: "strength", birdType: "dove", row: 6 },

  // Row 7
  { word: "Positive", definition: "Knows it will turn out right if he or she is in charge.", type: "strength", birdType: "eagle", row: 7 },
  { word: "Promoter", definition: "Urges or compels others to go along, join or invest through the charm of his or her own behavior.", type: "strength", birdType: "parrot", row: 7 },
  { word: "Planner", definition: "Prefers to work out a detailed arrangement beforehand, for the accomplishment of project or goal, and prefers involvement with the planning stages and the finished project rather than the carrying out of the task.", type: "strength", birdType: "owl", row: 7 },
  { word: "Patient", definition: "Unmoved by delay, remains calm and tolerant.", type: "strength", birdType: "dove", row: 7 },

  // Row 8
  { word: "Sure", definition: "Confident, rarely hesitates or wavers.", type: "strength", birdType: "eagle", row: 8 },
  { word: "Spontaneous", definition: "Prefers all of life to be impulsive, unpremeditated activity, not restricted by plans.", type: "strength", birdType: "parrot", row: 8 },
  { word: "Scheduled", definition: "Makes, and lives according to, a daily plan, dislikes the plan to be interrupted.", type: "strength", birdType: "owl", row: 8 },
  { word: "Shy", definition: "Quiet, doesn't easily instigate a conversation.", type: "strength", birdType: "dove", row: 8 },

  // Row 9
  { word: "Outspoken", definition: "Speaks frankly and without reserve.", type: "strength", birdType: "eagle", row: 9 },
  { word: "Optimistic", definition: "Sunny disposition, convinces self and others that everything will turn out right.", type: "strength", birdType: "parrot", row: 9 },
  { word: "Orderly", definition: "Has methodical, systematic arrangement of things.", type: "strength", birdType: "owl", row: 9 },
  { word: "Obliging", definition: "Accommodating, is quick to do it another way.", type: "strength", birdType: "dove", row: 9 },

  // Row 10
  { word: "Forceful", definition: "Has a commanding personality which others would hesitate to take a stand against.", type: "strength", birdType: "eagle", row: 10 },
  { word: "Funny", definition: "Has a sparkling sense of humor that can make virtually any story into a hilarious event.", type: "strength", birdType: "parrot", row: 10 },
  { word: "Faithful", definition: "Consistently reliable, steadfast, loyal, and devoted sometimes beyond reason.", type: "strength", birdType: "owl", row: 10 },
  { word: "Friendly", definition: "A responder rather than an initiator, seldom starts a conversation.", type: "strength", birdType: "dove", row: 10 },

  // Row 11
  { word: "Daring", definition: "Willing to take risks, fearless, bold.", type: "strength", birdType: "eagle", row: 11 },
  { word: "Delightful", definition: "Upbeat and fun to be with.", type: "strength", birdType: "parrot", row: 11 },
  { word: "Detailed", definition: "Does everything in proper order with a clear memory of all the things that happen.", type: "strength", birdType: "owl", row: 11 },
  { word: "Diplomatic", definition: "Deals with people tactfully, sensitively, and patiently.", type: "strength", birdType: "dove", row: 11 },

  // Row 12
  { word: "Confident", definition: "Self-assured and certain of one's own ability and success.", type: "strength", birdType: "eagle", row: 12 },
  { word: "Cheerful", definition: "Consistently in good spirits and promoting happiness in others.", type: "strength", birdType: "parrot", row: 12 },
  { word: "Cultured", definition: "Has interests involving both intellectual and artistic pursuits, such as theater, symphony, ballet.", type: "strength", birdType: "owl", row: 12 },
  { word: "Consistent", definition: "Stays emotionally on an even keel, responding as one might expect.", type: "strength", birdType: "dove", row: 12 },

  // Row 13
  { word: "Independent", definition: "Self-sufficient, self-supporting, self-confident and seems to have little need of help.", type: "strength", birdType: "eagle", row: 13 },
  { word: "Inspiring", definition: "Encourages others to work, join, or be involved, and makes the whole thing fun.", type: "strength", birdType: "parrot", row: 13 },
  { word: "Idealistic", definition: "Visualizes things in their perfect form, and has a need to measure up to that standard him or herself.", type: "strength", birdType: "owl", row: 13 },
  { word: "Inoffensive", definition: "Never says or causes anything or objectionable.", type: "strength", birdType: "dove", row: 13 },

  // Row 14
  { word: "Decisive", definition: "A person with quick, conclusive, judgment-making ability.", type: "strength", birdType: "eagle", row: 14 },
  { word: "Demonstrative", definition: "Openly expresses emotion, especially affection, and doesn't hesitate to touch others while speaking to them.", type: "strength", birdType: "parrot", row: 14 },
  { word: "Deep", definition: "Intense and often introspective with a distaste for surface conversation and pursuits.", type: "strength", birdType: "owl", row: 14 },
  { word: "Dry humor", definition: "Exhibits \"dry wit,\" usually one-liners which can be sarcastic in nature.", type: "strength", birdType: "dove", row: 14 },

  // Row 15
  { word: "Mover", definition: "Driven by a need to be productive, is a leader whom others follow, finds it difficult to sit still.", type: "strength", birdType: "eagle", row: 15 },
  { word: "Mixes easily", definition: "Loves a party and can't wait to meet everyone in the room; never meets a stranger.", type: "strength", birdType: "parrot", row: 15 },
  { word: "Musical", definition: "Participates in or has a deep appreciation for music, is committed to music as an art form, rather than the fun of performance.", type: "strength", birdType: "owl", row: 15 },
  { word: "Mediator", definition: "Consistently finds him or herself in the role of reconciling differences in order to avoid conflict.", type: "strength", birdType: "dove", row: 15 },

  // Row 16
  { word: "Tenacious", definition: "Holds on firmly, stubbornly, and won't let go until the goal is accomplished.", type: "strength", birdType: "eagle", row: 16 },
  { word: "Talker", definition: "Constantly talking, generally telling funny stories and entertaining everyone around, feeling the need to fill the silence in order to make others comfortable.", type: "strength", birdType: "parrot", row: 16 },
  { word: "Thoughtful", definition: "A considerate person who remembers special occasions and is quick to make a kind gesture.", type: "strength", birdType: "owl", row: 16 },
  { word: "Tolerant", definition: "Easily accepts the thoughts and ways of others without the need to disagree with or change them.", type: "strength", birdType: "dove", row: 16 },

  // Row 17
  { word: "Leader", definition: "A natural born director, who is driven to be in charge, and often finds it difficult to believe that anyone else can do the job as well.", type: "strength", birdType: "eagle", row: 17 },
  { word: "Lively", definition: "Full of life, vigorous, energetic.", type: "strength", birdType: "parrot", row: 17 },
  { word: "Loyal", definition: "Faithful to a person, ideal, or job, sometimes beyond reason.", type: "strength", birdType: "owl", row: 17 },
  { word: "Listener", definition: "Always seems willing to hear what you have to say.", type: "strength", birdType: "dove", row: 17 },

  // Row 18
  { word: "Chief", definition: "Commands leadership and expects people to follow.", type: "strength", birdType: "eagle", row: 18 },
  { word: "Cute", definition: "Precious, adorable, center of attention.", type: "strength", birdType: "parrot", row: 18 },
  { word: "Chart maker", definition: "Organizes life, tasks, and problem solving by making lists, forms or graphs.", type: "strength", birdType: "owl", row: 18 },
  { word: "Contented", definition: "Easily satisfied with what he or she has, rarely envious.", type: "strength", birdType: "dove", row: 18 },

  // Row 19
  { word: "Productive", definition: "Must constantly be working or achieving, often finds it very difficult to rest.", type: "strength", birdType: "eagle", row: 19 },
  { word: "Popular", definition: "Life of the party and therefore much desired as a party guest.", type: "strength", birdType: "parrot", row: 19 },
  { word: "Perfectionist", definition: "Places high standards on him or herself, and often on others, desiring that everything be in proper order at all times.", type: "strength", birdType: "owl", row: 19 },
  { word: "Pleasant", definition: "Easygoing, easy to be around, easy to talk with.", type: "strength", birdType: "dove", row: 19 },

  // Row 20
  { word: "Bold", definition: "Fearless, daring, forward, unafraid of risk.", type: "strength", birdType: "eagle", row: 20 },
  { word: "Bouncy", definition: "A bubbly, lively personality, full of energy.", type: "strength", birdType: "parrot", row: 20 },
  { word: "Behaved", definition: "Consistently desires to conduct him or herself within the realm of what he or she feels is proper.", type: "strength", birdType: "owl", row: 20 },
  { word: "Balanced", definition: "Stable, middle of the road behavior style, not subject to sharp high or lows.", type: "strength", birdType: "dove", row: 20 },
];

// Weaknesses (Rows 21-40)
export const weaknessDefinitions: TraitDefinition[] = [
  // Row 21
  { word: "Bossy", definition: "Commanding, domineering, sometimes overbearing in adult relationships.", type: "weakness", birdType: "eagle", row: 21 },
  { word: "Brassy", definition: "Showy, flashy, comes on strong, too loud.", type: "weakness", birdType: "parrot", row: 21 },
  { word: "Blank", definition: "Shows little facial expression or emotion.", type: "weakness", birdType: "owl", row: 21 },
  { word: "Bashful", definition: "Shrinks from getting attention, resulting from self-consciousness.", type: "weakness", birdType: "dove", row: 21 },

  // Row 22
  { word: "Unsympathetic", definition: "Finds it difficult to relate to the problems or hurts of others.", type: "weakness", birdType: "eagle", row: 22 },
  { word: "Undisciplined", definition: "Has a lack of order that permeates most every area of his or her life.", type: "weakness", birdType: "parrot", row: 22 },
  { word: "Unforgiving", definition: "Has difficulty forgiving or forgetting a hurt or injustice done to him or her, apt to hold on to a grudge.", type: "weakness", birdType: "owl", row: 22 },
  { word: "Unenthusiastic", definition: "Tends to not get excited, often feeling it won't work anyway.", type: "weakness", birdType: "dove", row: 22 },

  // Row 23
  { word: "Resistant", definition: "Strives, works against, or hesitates to accept any other way but his or her own.", type: "weakness", birdType: "eagle", row: 23 },
  { word: "Repetitious", definition: "Retells stories and incidents you without realizing he or she has already told the story several times before, is consistently needing something to say.", type: "weakness", birdType: "parrot", row: 23 },
  { word: "Resentful", definition: "Often holds ill feelings as a result of real or imagined offenses.", type: "weakness", birdType: "owl", row: 23 },
  { word: "Reticent", definition: "Unwilling or struggles against getting involved especially when the situation is complex.", type: "weakness", birdType: "dove", row: 23 },

  // Row 24
  { word: "Frank", definition: "Straightforward, outspoken, and doesn't mind telling you exactly what he thinks.", type: "weakness", birdType: "eagle", row: 24 },
  { word: "Forgetful", definition: "Lack of memory which is usually tied to a lack of discipline and not bothering to mentally record things that aren't fun.", type: "weakness", birdType: "parrot", row: 24 },
  { word: "Fussy", definition: "Insistent over petty matters or details, calling for great attention to trivial details.", type: "weakness", birdType: "owl", row: 24 },
  { word: "Fearful", definition: "Often experiences feelings of deep concern, apprehension or anxiousness.", type: "weakness", birdType: "dove", row: 24 },

  // Row 25
  { word: "Impatient", definition: "Finds it difficult to endure irritation or wait for others.", type: "weakness", birdType: "eagle", row: 25 },
  { word: "Interrupts", definition: "More of a talker than a listener, who starts speaking without even realizing someone else is already speaking.", type: "weakness", birdType: "parrot", row: 25 },
  { word: "Insecure", definition: "Apprehensive or lacks confidence.", type: "weakness", birdType: "owl", row: 25 },
  { word: "Indecisive", definition: "Finds it difficult to make any decision at all. (Not the behavior that labors long over each decision in order to make the perfect one.)", type: "weakness", birdType: "dove", row: 25 },

  // Row 26
  { word: "Unaffectionate", definition: "Finds it difficult to verbally or physically demonstrate tenderness openly.", type: "weakness", birdType: "eagle", row: 26 },
  { word: "Unpredictable", definition: "May be ecstatic one moment and down the next, or willing to help but then disappears, or promises to come but forgets to show up.", type: "weakness", birdType: "parrot", row: 26 },
  { word: "Unpopular", definition: "Has intensity and demand for perfection that can push others away.", type: "weakness", birdType: "owl", row: 26 },
  { word: "Uninvolved", definition: "Has no desire to listen or become interested in clubs, groups, activities, or other people's lives.", type: "weakness", birdType: "dove", row: 26 },

  // Row 27
  { word: "Headstrong", definition: "Insists on having his or her own way.", type: "weakness", birdType: "eagle", row: 27 },
  { word: "Haphazard", definition: "Has no consistent way of doing things.", type: "weakness", birdType: "parrot", row: 27 },
  { word: "Hard to please", definition: "Has standards set so high that it is difficult to ever satisfy them.", type: "weakness", birdType: "owl", row: 27 },
  { word: "Hesitant", definition: "Slow to get started and hard to get involved.", type: "weakness", birdType: "dove", row: 27 },

  // Row 28
  { word: "Proud", definition: "Has great self-esteem and sees him- or herself as always right and the best person for the job.", type: "weakness", birdType: "eagle", row: 28 },
  { word: "Permissive", definition: "Allows others (including children) to do as they please in order to keep from being disliked.", type: "weakness", birdType: "parrot", row: 28 },
  { word: "Pessimistic", definition: "While hoping for the best, generally sees the down side of a situation first.", type: "weakness", birdType: "owl", row: 28 },
  { word: "Plain", definition: "Has a middle-of-the-road personality without highs or lows and shows little, if any, emotion.", type: "weakness", birdType: "dove", row: 28 },

  // Row 29
  { word: "Argumentative", definition: "Incites arguments generally because he or she is right no matter what the situation may be.", type: "weakness", birdType: "eagle", row: 29 },
  { word: "Angers easily", definition: "Has a childlike flash-in-the-pan temper that expresses itself in tantrum style and is over and forgotten almost instantly.", type: "weakness", birdType: "parrot", row: 29 },
  { word: "Alienated", definition: "Easily feels estranged from others, often because of insecurity or fear that others don't really enjoy his or her company.", type: "weakness", birdType: "owl", row: 29 },
  { word: "Aimless", definition: "Not a goal-setter, with little desire to be one.", type: "weakness", birdType: "dove", row: 29 },

  // Row 30
  { word: "Nervy", definition: "Full of confidence, fortitude and sheer guts, often in a negative sense.", type: "weakness", birdType: "eagle", row: 30 },
  { word: "Naïve", definition: "Simple and child-like perspective, lacking sophistication or comprehension of what the deeper levels of life are really about.", type: "weakness", birdType: "parrot", row: 30 },
  { word: "Negative attitude", definition: "Has an attitude that is seldom positive and is often able to see only the down or dark side of each situation.", type: "weakness", birdType: "owl", row: 30 },
  { word: "Nonchalant", definition: "Easy-going, unconcerned, indifferent.", type: "weakness", birdType: "dove", row: 30 },

  // Row 31
  { word: "Workaholic", definition: "Must be constantly productive and feels very guilty when resting, is not driven by a need for perfection or completion but by a need for accomplishment and reward, an aggressive goal-setter.", type: "weakness", birdType: "eagle", row: 31 },
  { word: "Wants credit", definition: "Thrives on the credit or approval of others. As an entertainer this person feeds on the applause, laughter, and/or acceptance of an audience.", type: "weakness", birdType: "parrot", row: 31 },
  { word: "Withdrawn", definition: "Pulls back to him-or herself and needs a great deal of alone or isolation time.", type: "weakness", birdType: "owl", row: 31 },
  { word: "Worrier", definition: "Consistently feels uncertain, troubled, or anxious.", type: "weakness", birdType: "dove", row: 31 },

  // Row 32
  { word: "Tactless", definition: "Sometimes expresses him-or herself in a somewhat offensive and inconsiderate way.", type: "weakness", birdType: "eagle", row: 32 },
  { word: "Talkative", definition: "Entertaining, compulsive talker, finds it difficult too listen.", type: "weakness", birdType: "parrot", row: 32 },
  { word: "Too sensitive", definition: "Overly introspective and easily offended when misunderstood.", type: "weakness", birdType: "owl", row: 32 },
  { word: "Timid", definition: "Shrinks from difficult situations.", type: "weakness", birdType: "dove", row: 32 },

  // Row 33
  { word: "Domineering", definition: "Compulsively takes control of situations and/or people, usually telling others what to do.", type: "weakness", birdType: "eagle", row: 33 },
  { word: "Disorganized", definition: "Lacks ability to ever get life in order.", type: "weakness", birdType: "parrot", row: 33 },
  { word: "Depressed", definition: "Feels down much of the time.", type: "weakness", birdType: "owl", row: 33 },
  { word: "Doubtful", definition: "Feels uncertainty and lack of confidence that anything will ever work out.", type: "weakness", birdType: "dove", row: 33 },

  // Row 34
  { word: "Intolerant", definition: "Appears unable to withstand or accept another's attitudes, point of view, or any way of doing things.", type: "weakness", birdType: "eagle", row: 34 },
  { word: "Inconsistent", definition: "Erratic, contradictory, with actions and emotions not based on logic.", type: "weakness", birdType: "parrot", row: 34 },
  { word: "Introvert", definition: "Thoughts and interest are directed inward, lives within him- or herself.", type: "weakness", birdType: "owl", row: 34 },
  { word: "Indifferent", definition: "Feels that most things don't matter one way of the other.", type: "weakness", birdType: "dove", row: 34 },

  // Row 35
  { word: "Manipulative", definition: "Influences or manages shrewdly or deviously for his or her advantage, will get his or her way somehow.", type: "weakness", birdType: "eagle", row: 35 },
  { word: "Messy", definition: "Lives in a state of disorder, unable to find things.", type: "weakness", birdType: "parrot", row: 35 },
  { word: "Moody", definition: "Doesn't get very high emotionally, but easily slips into low lows, often when feeling unappreciated.", type: "weakness", birdType: "owl", row: 35 },
  { word: "Mumbles", definition: "Will talk quietly under breath when pushed, doesn't bother to speak clearly.", type: "weakness", birdType: "dove", row: 35 },

  // Row 36
  { word: "Stubborn", definition: "Determined to exert his or her own will, not easily persuaded, obstinate.", type: "weakness", birdType: "eagle", row: 36 },
  { word: "Show off", definition: "Needs to be the center of attention, wants to be watched.", type: "weakness", birdType: "parrot", row: 36 },
  { word: "Skeptical", definition: "Disbelieving, questioning the motive behind the word.", type: "weakness", birdType: "owl", row: 36 },
  { word: "Slow", definition: "Doesn't often act or think quickly, too much of a bother.", type: "weakness", birdType: "dove", row: 36 },

  // Row 37
  { word: "Lord over others", definition: "Doesn't hesitate to let you know that he or she is right or is in control.", type: "weakness", birdType: "eagle", row: 37 },
  { word: "Loud", definition: "Has a laugh or voice that can be heard above others in the room.", type: "weakness", birdType: "parrot", row: 37 },
  { word: "Loner", definition: "Requires a lot of private time and tends to avoid other people.", type: "weakness", birdType: "owl", row: 37 },
  { word: "Lazy", definition: "Evaluates work or activity in terms of how much energy it will take.", type: "weakness", birdType: "dove", row: 37 },

  // Row 38
  { word: "Short-tempered", definition: "Has a demanding impatience-based anger and a short fuse. Anger is expressed when others are not moving fast enough or have not completed what they have been asked to do.", type: "weakness", birdType: "eagle", row: 38 },
  { word: "Scatterbrained", definition: "Lacks the power of concentration, or attention, flighty.", type: "weakness", birdType: "parrot", row: 38 },
  { word: "Suspicious", definition: "Tends to suspect or distrust others or ideas.", type: "weakness", birdType: "owl", row: 38 },
  { word: "Sluggish", definition: "Slow to get started, needs push to be motivated.", type: "weakness", birdType: "dove", row: 38 },

  // Row 39
  { word: "Rash", definition: "May act hastily, without thinking things through, generally because of impatience.", type: "weakness", birdType: "eagle", row: 39 },
  { word: "Restless", definition: "Likes constant new activity because it isn't fun to do the same thing all the time.", type: "weakness", birdType: "parrot", row: 39 },
  { word: "Revengeful", definition: "Knowingly or otherwise holds a grudge and punishes the offender, often by subtly withholding friendship or affection.", type: "weakness", birdType: "owl", row: 39 },
  { word: "Reluctant", definition: "Unwilling or struggles against getting involved.", type: "weakness", birdType: "dove", row: 39 },

  // Row 40
  { word: "Crafty", definition: "Shrewd, one who can always find a way to get to the desired end.", type: "weakness", birdType: "eagle", row: 40 },
  { word: "Changeable", definition: "Has a child-like, short attention span that needs a lot of change and variety to keep from getting bored.", type: "weakness", birdType: "parrot", row: 40 },
  { word: "Critical", definition: "Constantly evaluates and makes judgments, frequently thinks or expresses negative reactions.", type: "weakness", birdType: "owl", row: 40 },
  { word: "Compromising", definition: "Will often relax his or her position, even when right, in order to avoid conflict.", type: "weakness", birdType: "dove", row: 40 },
];

// All trait definitions combined
export const allTraitDefinitions: TraitDefinition[] = [
  ...strengthDefinitions,
  ...weaknessDefinitions,
];

// Get trait definition by word
export function getTraitDefinition(word: string): TraitDefinition | undefined {
  return allTraitDefinitions.find(
    trait => trait.word.toLowerCase() === word.toLowerCase()
  );
}

// Get all traits for a specific bird type
export function getTraitsByBirdType(birdType: "eagle" | "parrot" | "owl" | "dove"): TraitDefinition[] {
  return allTraitDefinitions.filter(trait => trait.birdType === birdType);
}

// Get all strengths for a specific bird type
export function getStrengthsByBirdType(birdType: "eagle" | "parrot" | "owl" | "dove"): TraitDefinition[] {
  return strengthDefinitions.filter(trait => trait.birdType === birdType);
}

// Get all weaknesses for a specific bird type
export function getWeaknessesByBirdType(birdType: "eagle" | "parrot" | "owl" | "dove"): TraitDefinition[] {
  return weaknessDefinitions.filter(trait => trait.birdType === birdType);
}
