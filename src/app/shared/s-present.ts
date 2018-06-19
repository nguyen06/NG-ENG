import { tense } from "./dataStructure/tense";

export const sPresent_Q: tense = 
    {
        id: 1,
        name: "Present Simple",
        questions: [
            {
                id: 1, //1: simple, 0: not perfect, 1: present
                name: "AI: Nice to meet you, Iantha. I'm Alan, but my friends ___ me Al. Iantha is an unusual name. Where __ it __ from?",
                questionTypeId: 1,
                options: [
                    {
                        id: 1,
                        name: "call .. does ... come",
                        isAnswer: false
                    },
                    {
                        id: 2,
                        name: "ask ...is ... from",
                        isAnswer: false
                    },
                    {
                        id: 3,
                        name: "tell ... do ... from",
                        isAnswer: false
                    },
                    {
                        id: 4,
                        name: "speak .. will ... from",
                        isAnswer: false
                    }
                ],
                questionType: {
                    id: 1,
                    name: "Multiple Choice",
                    isActive: true
                }
            },
            {
                id: 2, //1: simple, 0: not perfect, 1: present
                name: "Iantha: It's Greek. It ____ 'violet-colored flower'",
                questionTypeId: 1,
                options: [
                    {
                        id: 1,
                        name: "means",
                        isAnswer: false
                    },
                    {
                        id: 2,
                        name: "is meaning",
                        isAnswer: false
                    },
                    {
                        id: 3,
                        name: "meaned",
                        isAnswer: false
                    },
                    {
                        id: 4,
                        name: "mentions",
                        isAnswer: false
                    }
                ],
                questionType: {
                    id: 1,
                    name: "Multiple Choice",
                    isActive: true
                }
            },
            {
                id: 3, //1: simple, 0: not perfect, 1: present
                name: "Al: That's pretty. What ____ you ____, Iantha?",
                questionTypeId: 1,
                options: [
                    {
                        id: 1,
                        name: "is .... you",
                        isAnswer: false
                    },
                    {
                        id: 2,
                        name: "are ... you",
                        isAnswer: false
                    },
                    {
                        id: 3,
                        name: "did ... you",
                        isAnswer: false
                    },
                    {
                        id: 4,
                        name: "will ... you",
                        isAnswer: false
                    }
                ],
                questionType: {
                    id: 1,
                    name: "Multiple Choice",
                    isActive: true
                }
            },
            {
                id: 4, //1: simple, 0: not perfect, 1: present
                name: "IanTha: Well, I usually ____ computer equipment, but right now I _____ at a flower shop. My uncle _____ it",
                questionTypeId: 1,
                options: [
                    {
                        id: 1,
                        name: "sell ... was working ... owns",
                        isAnswer: false
                    },
                    {
                        id: 2,
                        name: "sold ... am working .... own",
                        isAnswer: false
                    },
                    {
                        id: 3,
                        name: "sell .... am working .... owns",
                        isAnswer: false
                    },
                    {
                        id: 4,
                        name: "sell ...  will work .... own",
                        isAnswer: false
                    }
                ],
                questionType: {
                    id: 1,
                    name: "Multiple Choice",
                    isActive: true
                }
            },
            {
                id: 5, //1: simple, 0: not perfect, 1: present
                name: "Al: You ______ .I ____ it's true that names _____ our lives",
                questionTypeId: 1,
                options: [
                    {
                        id: 1,
                        name: "are joking ... guess ... influence",
                        isAnswer: false
                    },
                    {
                        id: 2,
                        name: "was joking ... guess .... was influencing",
                        isAnswer: false
                    },
                    {
                        id: 3,
                        name: "was jonking... guess ... influence",
                        isAnswer: false
                    },
                    {
                        id: 4,
                        name: "are joking ... am guessing ... influence",
                        isAnswer: false
                    }
                ],
                questionType: {
                    id: 1,
                    name: "Multiple Choice",
                    isActive: true
                }
            },
            {
                id: 6, //1: simple, 0: not perfect, 1: present
                name: "Mario: I ______ to find Greg Costanza.____ you _____ him?",
                questionTypeId: 1,
                options: [
                    {
                        id: 1,
                        name: "are trying ... Did ... know",
                        isAnswer: false
                    },
                    {
                        id: 2,
                        name: "am trying ... Do .... knew",
                        isAnswer: false
                    },
                    {
                        id: 3,
                        name: "am trying... Do ... know",
                        isAnswer: false
                    },
                    {
                        id: 4,
                        name: "am tryinf ... are ... know",
                        isAnswer: false
                    }
                ],
                questionType: {
                    id: 1,
                    name: "Multiple Choice",
                    isActive: true
                }
            },
            {
                id: 7, //1: simple, 0: not perfect, 1: present
                name: "Greg: You ______ Lucky . That's her nickname. Everyone ____ him Lucky because he _____ things",
                questionTypeId: 1,
                options: [
                    {
                        id: 1,
                        name: "mean ... calls ... always win",
                        isAnswer: false
                    },
                    {
                        id: 2,
                        name: "means ... call .... win always",
                        isAnswer: false
                    },
                    {
                        id: 3,
                        name: "mean... call ... is always wining",
                        isAnswer: false
                    },
                    {
                        id: 4,
                        name: "means ... calls ... always wins",
                        isAnswer: false
                    }
                ],
                questionType: {
                    id: 1,
                    name: "Multiple Choice",
                    isActive: true
                }
            },
            {
                id: 8, //1: simple, 0: not perfect, 1: present
                name: "Lola: I ______ that you ____ a baby. Have you decided on a name yet?",
                questionTypeId: 1,
                options: [
                    {
                        id: 1,
                        name: "heart ... are expecting ",
                        isAnswer: false
                    },
                    {
                        id: 2,
                        name: "am hearing ... are expecting",
                        isAnswer: false
                    },
                    {
                        id: 3,
                        name: "heart ... expecting",
                        isAnswer: false
                    },
                    {
                        id: 4,
                        name: "hearted ...are expecting",
                        isAnswer: false
                    }
                ],
                questionType: {
                    id: 1,
                    name: "Multiple Choice",
                    isActive: true
                }
            },
            {
                id: 9, //1: simple, 0: not perfect, 1: present
                name: "Vanya: we ______ naming the baby Mangena. What ____ you_____ that name.",
                questionTypeId: 1,
                options: [
                    {
                        id: 1,
                        name: "think ... did ... think about",
                        isAnswer: false
                    },
                    {
                        id: 2,
                        name: "are thinking of ... do .... think about",
                        isAnswer: false
                    },
                    {
                        id: 3,
                        name: "is thinking of... do ... think",
                        isAnswer: false
                    },
                    {
                        id: 4,
                        name: "are think of ... are ... thinking about ",
                        isAnswer: false
                    }
                ],
                questionType: {
                    id: 1,
                    name: "Multiple Choice",
                    isActive: true
                }
            },
            {
                id: 10, //1: simple, 0: not perfect, 1: present
                name: "Lola: It ______ pretty. How ____ you _____ it",
                questionTypeId: 1,
                options: [
                    {
                        id: 1,
                        name: "sounds ... do ... spell",
                        isAnswer: false
                    },
                    {
                        id: 2,
                        name: "sounds ... are .... spelling",
                        isAnswer: false
                    },
                    {
                        id: 3,
                        name: "sounds ... did ... spell",
                        isAnswer: false
                    },
                    {
                        id: 4,
                        name: "sounds ... will ... spell",
                        isAnswer: false
                    }
                ],
                questionType: {
                    id: 1,
                    name: "Multiple Choice",
                    isActive: true
                }
            },
            {
                id: 11, //1: simple, 0: not perfect, 1: present
                name: `Rosa: Would you like a cup of coffee, Dr. Ho?
                       Ho: Oh, No. It ______ delicious, but I ____ coffee`,
                questionTypeId: 1,
                options: [
                    {
                        id: 1,
                        name: "is smelling ... don't drink",
                        isAnswer: false
                    },
                    {
                        id: 2,
                        name: "smells ... doesn't drink",
                        isAnswer: false
                    },
                    {
                        id: 3,
                        name: "are smelling... didn't drink",
                        isAnswer: false
                    },
                    {
                        id: 4,
                        name: "smells ... won't drink",
                        isAnswer: false
                    }
                ],
                questionType: {
                    id: 1,
                    name: "Multiple Choice",
                    isActive: true
                }
            },
            {
                id: 12, //1: simple, 0: not perfect, 1: present
                name: "Rosa: Well, how about a cup of tea, then? The water ______. Why ____ water ____ so quickly here. Dr.Ho?",
                questionTypeId: 1,
                options: [
                    {
                        id: 1,
                        name: "is boiling ... does ... boil",
                        isAnswer: false
                    },
                    {
                        id: 2,
                        name: "boils ... do .... boil",
                        isAnswer: false
                    },
                    {
                        id: 3,
                        name: "is boiling ... did ... boil",
                        isAnswer: false
                    },
                    {
                        id: 4,
                        name: "is boiling ... is ... boiling",
                        isAnswer: false
                    }
                ],
                questionType: {
                    id: 1,
                    name: "Multiple Choice",
                    isActive: true
                }
            },
            {
                id: 13, //1: simple, 0: not perfect, 1: present
                name: "Dr. Ho: In the mountain, water ______ at a lower temperature.",
                questionTypeId: 1,
                options: [
                    {
                        id: 1,
                        name: "is joking",
                        isAnswer: false
                    },
                    {
                        id: 2,
                        name: "are boiling",
                        isAnswer: false
                    },
                    {
                        id: 3,
                        name: "boils",
                        isAnswer: false
                    },
                    {
                        id: 4,
                        name: "was boiling",
                        isAnswer: false
                    }
                ],
                questionType: {
                    id: 1,
                    name: "Multiple Choice",
                    isActive: true
                }
            },


        ]
        
    }
    

