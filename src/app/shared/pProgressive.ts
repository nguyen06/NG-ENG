import { tense } from "./dataStructure/tense";

export const pProgressive_Q: tense = 
    {
        id: 1,
        name: "Present Progressive",
        questions: [
            {
                id: 101, //1: simple, 0: not perfect, 1: present
                name: "AI: Nice to LAAAA, Iantha. I'm Alan, but my friends _____ me Al. Iantha is an unusual name. Where ______ it ______ from?",
                questionTypeId: 1,
                options: [
                    {
                        id: 1,
                        name: "call",
                        isAnswer: false
                    },
                    {
                        id: 2,
                        name: "ask",
                        isAnswer: false
                    },
                    {
                        id: 3,
                        name: "tell",
                        isAnswer: false
                    },
                    {
                        id: 4,
                        name: "speak",
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
                id: 101, //1: simple, 0: not perfect, 1: present
                name: "AI: hihiahsdiahsd?",
                questionTypeId: 1,
                options: [
                    {
                        id: 1,
                        name: "call",
                        isAnswer: false
                    },
                    {
                        id: 2,
                        name: "ask",
                        isAnswer: false
                    },
                    {
                        id: 3,
                        name: "tell",
                        isAnswer: false
                    },
                    {
                        id: 4,
                        name: "speak",
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
    

