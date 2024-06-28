const questionNumber = document.getElementById("questionNumber");
const question = document.getElementById("question");
const choices = Array.from(document.getElementsByClassName("choice-text"));
const bgPhoto = document.getElementById("bg")

let currentQuestion = {};
let acceptingAnswers = false;
let score4D
let scoreBR
let scoreDV
let scoreML
let scoreSP
let scorePP
let questionCounter
let availableQuestions = [];
let i = 0;
let bg = [
    'photos/q1BG.png',
    'photos/q2BG.png',
    'photos/q3BG.png',
    'photos/q4BG.png',
    'photos/q5BG.png',
    'photos/q6BG.png',
    'photos/q7BG.png',
    'photos/q8BG.png',
    'photos/q9BG.png',
    'photos/q10BG.png',
];

let questions = [
    {
        questionNumber: "Question 1",
        question: "You walk into your first class of the semester, what do you do?",
        answers: {
            choice1: "Sus out who is the lecturer and what are the assessments. Important stuff, y'know?",
            choice2: "Look around for interesting people and see if you know anyone. You need someone to talk to when class gets boring!",
            choice3: "Do your own thing until the lecturer comes, let's hope no one talks to you. Maybe going on your phone would help…",
            choice4: "Scroll, make conversation with some acquaintances you see around so things aren't too awkward but you know you might not sit with them later.",
            choice5: "Double-check if you got into the right class and then scout out potential group mates before preparing your notes.",
            choice6: "Mingle with people you recognize and hope they say hi to you. You'll check out the CN in the meantime."
        }
    },
    {
        questionNumber: "Question 2",
        question: "The lecturer's here and you realize that you'll really have to take this course no matter what (yippie?) Now, quick, get in your seat!",
        answers: {
            choice1: "Sit at the back so you can see everything from the teacher to your classmates to their laptop screens… Huh? Studying? You'll do that at home on your own.",
            choice2: "Sit with your friends, maybe somewhere in the back. How else are you going to spill the tea with them while we go over tutorials? Class is no fun when there's no one to enjoy it with.",
            choice3: "Sit at the side, not too far behind but definitely not front and centre. You want to go on your screen and make your own notes, maybe even take the time to do your own projects…",
            choice4: "Got a chair? Got your bum. You don't care where you sit so long as it is comfortable. After all, you might be able to catch up on some zzzz….",
            choice5: "Sit in the front or middle, makes it easier to ask the lecturer questions. You paid to be here after all, and you'd like a good grade from this to help your CGPA look nicer.",
            choice6: "Follow your friends and just sit where they sit. You'll figure out how to best deal with this lecturer later. For now, you need friends. So let's stick with them. Maybe make some conversation? How was their sem break?"
        }
    },
    {
        questionNumber: "Question 3",
        question: "While the lecturer introduces themselves, you fantasize about having the perfect lecturer to teach you this course...",
        answers: {
            choice1: "A boring lecturer but they let you do whatever you want in class so long as things remain respectful. Easy, no trouble. And hey, you might be able to convince them to change the assessment a little if you're nice enough.",
            choice2: "A fun lecturer that chats with you in class, tells you stories, and gives you advice. They're cool, chill, and down to earth. You may not learn much about the lecture but you sure do learn about life.",
            choice3: "An engaging lecturer who is a little bit eccentric and challenges you to think outside the box. They make assignments a pain in the neck but stimulating. They are often misunderstood and troublesome but are actually quite exciting to work with.",
            choice4: "A professional lecturer who gets the job done. Which… Is just about any lecturer. So long as they're not reading from the slide, you don't care if they're crazy. You'll get through the course just the same anyway.",
            choice5: "A strict lecturer who knows quality when they see it, doesn't take half-baked effort, and puts their foot down. They help you challenge yourself and offer you critical but extremely useful feedback, making sure you actually learn.",
            choice6: "A kind lecturer the kind that cares about you, praises you, and makes you feel appreciated. You can look up to them as role models both in work and in life. They make the classroom feel safe and help you to enjoy your life in uni too."
        }
    },
    {
        questionNumber: "Question 4",
        question: "Wake up! Your first group assignment is here! What do you do?",
        answers: {
            choice1: "Sit back and let someone else make the group chat, they need the grades too, so let them do the work.",
            choice2: "Make the group chat and send some memes, class is bad enough, let's make it fun. Uni is for living too!",
            choice3: "Read the assignment brief again, what are the rules? What needs to be done? Find out the details.",
            choice4: "Wait till someone tells you what to do, in the meantime note down deadlines for yourself first.",
            choice5: "Start delegating tasks, let's get this done. You have more than just this course to worry about…",
            choice6: "You already have your notes done but you go with the flow and see how you can help in the group."
        }
    },
    {
        questionNumber: "Question 5",
        question: "Great! You've got a group. Aww, while breaking the ice, someone just complimented your outfit! What were you wearing?",
        answers: {
            choice1: "Something a little grunge, maybe a hoodie or some subtle yet sick highlights. Comfy, but with a bit of cyberpunk style.",
            choice2: "Colours, be it well put together or monochrome, your outfit was COORDINATED. You always look your best, duh.",
            choice3: "You have subtle things on your person that showcase your personality, mostly accessories like stickers and rings.",
            choice4: "T-shirt and shorts, the default uni attire, no personality, dry af. Were they maybe complimenting your face instead of your clothes?",
            choice5: "Professional attire, you look ready for a presentation from day one. You look classy, clean, and ready. Lecturers secretly like you.",
            choice6: "You wear pretty default clothing but you are slowly learning to show more of your personality. You're just a little shy at trying out a new look."
        }
    },
    {
        questionNumber: "Question 6",
        question: "While your groupmates made some small talk, you saw the lecturer pull up the assignment brief. What assignment are you hoping for?",
        answers: {
            choice1: "Individual written assignment, no hassles, easy.",
            choice2: "Video assignment! We might get to do something fun!",
            choice3: "Something that tests your craft, maybe something unconventional?",
            choice4: "Anything is fine so long as we get it done together as a group.",
            choice5: "Something typical so you know what to expect and can get it done fast. Written assignments are best.",
            choice6: "Something typical but also exciting. Maybe a presentation on any free topic?"
        }
    },
    {
        questionNumber: "Question 7",
        question: "There's your assignment, you gotta make a presentation and write a paper! Job delegation time! What do you pick?",
        answers: {
            choice1: "You are the type to do the whole assignment yourself secretly and/or redo other people's parts for them.",
            choice2: "You make the presentation more exciting, add engaging elements, and make the show enjoyable.",
            choice3: "You are in charge of slides design, and you are prepared to blow the class away with more than just templates.",
            choice4: "You are the responsible free-rider, people say you don't try hard enough but they don't see the hard work you put in.",
            choice5: "You're the leading speaker, you delegate the tasks, and make sure everything is done.",
            choice6: "You help tie up loose ends, double-heck thoroughly, second in command."
        }
    },
    {
        questionNumber: "Question 8",
        question: "Phew! That was a tough day at school! Luckily, this was the only class you had today. What do you do now?",
        answers: {
            choice1: "Play some video games, gotta get the daily stuff in!",
            choice2: "Go on social media or catch up on shows! Gotta stay in the loop!",
            choice3: "Engage in actual hobbies cause you have a personality, all these other options are crazy.",
            choice4: "Food, jom! Mamak! Time to lepak and hang out with friends!",
            choice5: "Back to work, gotta settle things before the storm.",
            choice6: "Clean up after yourself and get a bit of work done with a mix of food and fun."
        }
    },
    {
        questionNumber: "Question 9",
        question: "Hmm, some time has passed and there still isn't any news in the group about your progress… Time to send a message to the group?",
        answers: {
            choice1: "[You don't send anything, your part is done and they have to worry about their own grades too, not just yours. You stay silent.]",
            choice2: "[You send a sticker or meme where there are eyes peeking around and wait for someone to reply.]",
            choice3: "“Hey guysss here's what I have so far, how about you guys?”",
            choice4: "“helooo so how arh the assignment? Need anything?”",
            choice5: "“Heya, how are we doing on progress? @Groupmate1 any updates?”",
            choice6: "“Hey guyssss any updates on the assignment? :D If anyone needs some help, let me know!”"
        }
    },
    {
        questionNumber: "Question 10",
        question: "As you wait for their respond while you lay in bed, you begin worrying about your groupmates. What if they're the type of group mate you hate the most?",
        answers: {
            choice1: "The kind that messes up your work after you've finished it… (Sigh) Time to redo…",
            choice2: "The scary, controlling, too-serious type. Makes you feel stupid…",
            choice3: "The difficult type, can't make up their mind, are inconsistent, and overall just hard to cooperate with.",
            choice4: "The kind that tries too hard. It's just an assignment… Why waste so much effort? You're tired enough.",
            choice5: "The kind that can't take any correction or feedback. Insecure much?",
            choice6: "The MIA kind, they want to be considered but aren't even there? What do you even do?"
        }
    }
];

//CONSTANTS
const MAX_QUESTIONS = 10;

startGame = () => {
    questionCounter = 0;
    score4D = 0;
    scoreBR = 0;
    scoreDV = 0;
    scoreML= 0;
    scoreSP = 0;
    scorePP = 0;
    availableQuestions = [...questions];
    getNewQuestion();
    i = 0;
};

tiebreaker4D = () => {
    //two way tie
    if ( score4D == scoreBR && score4D != (scoreDV || scoreML || scoreSP || scorePP) ) {
        let i =  Math.floor(Math.random() * 2 );
        if ( i < 1 || i == 0 ) {
            return window.location.assign("/ELSAPersonalityQuiz/4DChessmaster.html");
        } else {
            return window.location.assign("/ELSAPersonalityQuiz/biggestRizzler.html");
        };
    } else if (score4D == scoreDV && score4D != (scoreBR || scoreML || scoreSP || scorePP) ) {
        let i =  Math.floor(Math.random() * 2 );
        if ( i < 1 || i == 0 ) {
            return window.location.assign("/ELSAPersonalityQuiz/4DChessmaster.html");
        } else {
            return window.location.assign("/ELSAPersonalityQuiz/daVinky.html");
        };
    } else if (score4D == scoreML && score4D != (scoreBR || scoreDV || scoreSP || scorePP) ) {
        let i =  Math.floor(Math.random() * 2 );
        if ( i < 1 || i == 0 ) {
            return window.location.assign("/ELSAPersonalityQuiz/4DChessmaster.html");
        } else {
            return window.location.assign("/ELSAPersonalityQuiz/maleLead2.html");
        };
    } else if (score4D == scoreSP && score4D != ( scoreBR || scoreDV || scoreML || scorePP) ) {
        let i =  Math.floor(Math.random() * 2 );
        if ( i < 1 || i == 0 ) {
            return window.location.assign("/ELSAPersonalityQuiz/4DChessmaster.html");
        } else {
            return window.location.assign("/ELSAPersonalityQuiz/sugarParent.html");
        };
    } else if (score4D == scorePP && score4D != (scoreBR || scoreDV || scoreML || scoreSP ) ) {
        let i =  Math.floor(Math.random() * 2 );
        if ( i < 1 || i == 0 ) {
            return window.location.assign("/ELSAPersonalityQuiz/4DChessmaster.html");
        } else {
            return window.location.assign("/ELSAPersonalityQuiz/tacticalPplPleaser.html");
        };
    }
    //three way tie
    else if ( score4D == scoreBR && score4D == scoreDV && score4D != (scoreML || scoreSP || scorePP) ) {
        let i =  Math.floor(Math.random() * 3 );
        if ( i == 0 ) {
            return window.location.assign("/ELSAPersonalityQuiz/4DChessmaster.html");
        } else if ( i == 1 ) {
            return window.location.assign("/ELSAPersonalityQuiz/biggestRizzler.html");
        } else {
            return window.location.assign("/ELSAPersonalityQuiz/daVinky.html");
        };
    } else if ( score4D == scoreBR && score4D == scoreML && score4D != (scoreDV || scoreSP || scorePP) ) {
        let i =  Math.floor(Math.random() * 3 );
        if ( i == 0 ) {
            return window.location.assign("/ELSAPersonalityQuiz/4DChessmaster.html");
        } else if ( i == 1 ) {
            return window.location.assign("/ELSAPersonalityQuiz/biggestRizzler.html");
        } else {
            return window.location.assign("/ELSAPersonalityQuiz/maleLead2.html");
        };
    } else if ( score4D == scoreBR && score4D == scoreSP && score4D != (scoreDV || scoreML || scorePP) ) {
        let i =  Math.floor(Math.random() * 3 );
        if ( i == 0 ) {
            return window.location.assign("/ELSAPersonalityQuiz/4DChessmaster.html");
        } else if ( i == 1 ) {
            return window.location.assign("/ELSAPersonalityQuiz/biggestRizzler.html");
        } else {
            return window.location.assign("/ELSAPersonalityQuiz/sugarParent.html");
        };
    } else if ( score4D == scoreBR && score4D == scorePP && score4D != (scoreDV || scoreML || scoreSP) ) {
        let i =  Math.floor(Math.random() * 3 );
        if ( i == 0 ) {
            return window.location.assign("/ELSAPersonalityQuiz/4DChessmaster.html");
        } else if ( i == 1 ) {
            return window.location.assign("/ELSAPersonalityQuiz/biggestRizzler.html");
        } else {
            return window.location.assign("/ELSAPersonalityQuiz/tacticalPplPleaser.html");
        };
    } else if ( score4D == scoreDV && score4D == scoreML && score4D != (scoreBR || scoreSP || scorePP) ) {
        let i =  Math.floor(Math.random() * 3 );
        if ( i == 0 ) {
            return window.location.assign("/ELSAPersonalityQuiz/4DChessmaster.html");
        } else if ( i == 1 ) {
            return window.location.assign("/ELSAPersonalityQuiz/daVinky.html");
        } else {
            return window.location.assign("/ELSAPersonalityQuiz/maleLead2.html");
        };
    } else if ( score4D == scoreDV && score4D == scoreSP && score4D != (scoreBR || scoreML || scorePP) ) {
        let i =  Math.floor(Math.random() * 3 );
        if ( i == 0 ) {
            return window.location.assign("/ELSAPersonalityQuiz/4DChessmaster.html");
        } else if ( i == 1 ) {
            return window.location.assign("/ELSAPersonalityQuiz/daVinky.html");
        } else {
            return window.location.assign("/ELSAPersonalityQuiz/sugarParent.html");
        };
    } else if ( score4D == scoreDV && score4D == scorePP && score4D != (scoreBR || scoreML || scoreSP) ) {
        let i =  Math.floor(Math.random() * 3 );
        if ( i == 0 ) {
            return window.location.assign("/ELSAPersonalityQuiz/4DChessmaster.html");
        } else if ( i == 1 ) {
            return window.location.assign("/ELSAPersonalityQuiz/daVinky.html");
        } else {
            return window.location.assign("/ELSAPersonalityQuiz/tacticalPplPleaser.html");
        };
    } else if ( score4D == scoreML && score4D == scoreSP && score4D != (scoreBR || scoreDV || scorePP) ) {
        let i =  Math.floor(Math.random() * 3 );
        if ( i == 0 ) {
            return window.location.assign("/ELSAPersonalityQuiz/4DChessmaster.html");
        } else if ( i == 1 ) {
            return window.location.assign("/ELSAPersonalityQuiz/maleLead2.html");
        } else {
            return window.location.assign("/ELSAPersonalityQuiz/sugarParent.html");
        };
    } else if ( score4D == scoreML && score4D == scorePP && score4D != (scoreBR || scoreDV || scoreSP) ) {
        let i =  Math.floor(Math.random() * 3 );
        if ( i == 0 ) {
            return window.location.assign("/ELSAPersonalityQuiz/4DChessmaster.html");
        } else if ( i == 1 ) {
            return window.location.assign("/ELSAPersonalityQuiz/maleLead2.html");
        } else {
            return window.location.assign("/ELSAPersonalityQuiz/tacticalPplPleaser.html");
        };
    } else if ( score4D == scoreSP && score4D == scorePP && score4D != (scoreBR || scoreDV || scoreML) ) {
        let i =  Math.floor(Math.random() * 3 );
        if ( i == 0 ) {
            return window.location.assign("/ELSAPersonalityQuiz/4DChessmaster.html");
        } else if ( i == 1 ) {
            return window.location.assign("/ELSAPersonalityQuiz/sugarParent.html");
        } else {
            return window.location.assign("/ELSAPersonalityQuiz/tacticalPplPleaser.html");
        };
    }
    //five way tie
    else if ( score4D == scoreBR && score4D == scoreDV && score4D == scoreML && score4D == scoreSP && score4D != scorePP ) {
        let i =  Math.floor(Math.random() * 5 );
        if ( i == 0 ) {
            return window.location.assign("/ELSAPersonalityQuiz/4DChessmaster.html");
        } else if ( i == 1 ) {
            return window.location.assign("/ELSAPersonalityQuiz/biggestRizzler.html");
        } else if ( i == 2 ) {
            return window.location.assign("/ELSAPersonalityQuiz/daVinky.html");
        } else if ( i == 3 ) {
            return window.location.assign("/ELSAPersonalityQuiz/maleLead2.html");
        } else {
            return window.location.assign("/ELSAPersonalityQuiz/sugarParent.html");
        };
    } else if ( score4D == scoreBR && score4D == scoreDV && score4D == scoreML && score4D == scorePP && score4D != scoreSP ) {
        let i =  Math.floor(Math.random() * 5 );
        if ( i == 0 ) {
            return window.location.assign("/ELSAPersonalityQuiz/4DChessmaster.html");
        } else if ( i == 1 ) {
            return window.location.assign("/ELSAPersonalityQuiz/biggestRizzler.html");
        } else if ( i == 2 ) {
            return window.location.assign("/ELSAPersonalityQuiz/daVinky.html");
        } else if ( i == 3 ) {
            return window.location.assign("/ELSAPersonalityQuiz/maleLead2.html");
        } else {
            return window.location.assign("/ELSAPersonalityQuiz/tacticalPplPleaser.html");
        };
    } else if ( score4D == scoreBR && score4D == scoreDV && score4D == scoreSP && score4D == scorePP && score4D != scoreML ) {
        let i =  Math.floor(Math.random() * 5 );
        if ( i == 0 ) {
            return window.location.assign("/ELSAPersonalityQuiz/4DChessmaster.html");
        } else if ( i == 1 ) {
            return window.location.assign("/ELSAPersonalityQuiz/biggestRizzler.html");
        } else if ( i == 2 ) {
            return window.location.assign("/ELSAPersonalityQuiz/daVinky.html");
        } else if ( i == 3 ) {
            return window.location.assign("/ELSAPersonalityQuiz/sugarParent.html");
        } else {
            return window.location.assign("/ELSAPersonalityQuiz/tacticalPplPleaser.html");
        };
    } else if ( score4D == scoreBR && score4D == scoreML && score4D == scoreSP && score4D == scorePP && score4D != scoreDV ) {
        let i =  Math.floor(Math.random() * 5 );
        if ( i == 0 ) {
            return window.location.assign("/ELSAPersonalityQuiz/4DChessmaster.html");
        } else if ( i == 1 ) {
            return window.location.assign("/ELSAPersonalityQuiz/biggestRizzler.html");
        } else if ( i == 2 ) {
            return window.location.assign("/ELSAPersonalityQuiz/maleLead2.html");
        } else if ( i == 3 ) {
            return window.location.assign("/ELSAPersonalityQuiz/sugarParent.html");
        } else {
            return window.location.assign("/ELSAPersonalityQuiz/tacticalPplPleaser.html");
        };
    } else if ( score4D == scoreDV && score4D == scoreML && score4D == scoreSP && score4D == scorePP && score4D != scoreBR ) {
        let i =  Math.floor(Math.random() * 5 );
        if ( i == 0 ) {
            return window.location.assign("/ELSAPersonalityQuiz/4DChessmaster.html");
        } else if ( i == 1 ) {
            return window.location.assign("/ELSAPersonalityQuiz/daVinky.html");
        } else if ( i == 2 ) {
            return window.location.assign("/ELSAPersonalityQuiz/maleLead2.html");
        } else if ( i == 3 ) {
            return window.location.assign("/ELSAPersonalityQuiz/sugarParent.html");
        } else {
            return window.location.assign("/ELSAPersonalityQuiz/tacticalPplPleaser.html");
        };
    } else {

    };
};

tiebreakerBR = () => {
    //two way tie
    if ( score4D == scoreBR && score4D != (scoreDV || scoreML || scoreSP || scorePP) ) {
        let i =  Math.floor(Math.random() * 2 );
        if ( i < 1 || i == 0 ) {
            return window.location.assign("/ELSAPersonalityQuiz/4DChessmaster.html");
        } else {
            return window.location.assign("/ELSAPersonalityQuiz/biggestRizzler.html");
        };
    } else if ( scoreBR == scoreDV && scoreBR != (score4D || scoreML || scoreSP || scorePP) ) {
        let i =  Math.floor(Math.random() * 2 );
        if ( i < 1 || i == 0 ) {
            return window.location.assign("/ELSAPersonalityQuiz/biggestRizzler.html");
        } else {
            return window.location.assign("/ELSAPersonalityQuiz/daVinky.html");
        };
    } else if ( scoreBR == scoreML && scoreBR != (score4D || scoreDV || scoreSP || scorePP) ) {
        let i =  Math.floor(Math.random() * 2 );
        if ( i < 1 || i == 0 ) {
            return window.location.assign("/ELSAPersonalityQuiz/biggestRizzler.html");
        } else {
            return window.location.assign("/ELSAPersonalityQuiz/maleLead2.html");
        };
    } else if ( scoreBR == scoreSP && scoreBR != (score4D || scoreDV || scoreML || scorePP) ) {
        let i =  Math.floor(Math.random() * 2 );
        if ( i < 1 || i == 0 ) {
            return window.location.assign("/ELSAPersonalityQuiz/biggestRizzler.html");
        } else {
            return window.location.assign("/ELSAPersonalityQuiz/sugarParent.html");
        };
    } else if ( scoreBR == scorePP && scoreBR != (score4D || scoreDV || scoreML || scoreSP) ) {
        let i =  Math.floor(Math.random() * 2 );
        if ( i < 1 || i == 0 ) {
            return window.location.assign("/ELSAPersonalityQuiz/biggestRizzler.html");
        } else {
            return window.location.assign("/ELSAPersonalityQuiz/tacticalPplPleaser.html");
        };
    } 
    //three way tie
    else if ( score4D == scoreBR && score4D == scoreDV && score4D != (scoreML || scoreSP || scorePP) ) {
        let i =  Math.floor(Math.random() * 3 );
        if ( i == 0 ) {
            return window.location.assign("/ELSAPersonalityQuiz/4DChessmaster.html");
        } else if ( i == 1 ) {
            return window.location.assign("/ELSAPersonalityQuiz/biggestRizzler.html");
        } else {
            return window.location.assign("/ELSAPersonalityQuiz/daVinky.html");
        };
    } else if ( score4D == scoreBR && score4D == scoreML && score4D != (scoreDV || scoreSP || scorePP) ) {
        let i =  Math.floor(Math.random() * 3 );
        if ( i == 0 ) {
            return window.location.assign("/ELSAPersonalityQuiz/4DChessmaster.html");
        } else if ( i == 1 ) {
            return window.location.assign("/ELSAPersonalityQuiz/biggestRizzler.html");
        } else {
            return window.location.assign("/ELSAPersonalityQuiz/maleLead2.html");
        };
    } else if ( score4D == scoreBR && score4D == scoreSP && score4D != (scoreDV || scoreML || scorePP) ) {
        let i =  Math.floor(Math.random() * 3 );
        if ( i == 0 ) {
            return window.location.assign("/ELSAPersonalityQuiz/4DChessmaster.html");
        } else if ( i == 1 ) {
            return window.location.assign("/ELSAPersonalityQuiz/biggestRizzler.html");
        } else {
            return window.location.assign("/ELSAPersonalityQuiz/sugarParent.html");
        };
    } else if ( score4D == scoreBR && score4D == scorePP && score4D != (scoreDV || scoreML || scoreSP) ) {
        let i =  Math.floor(Math.random() * 3 );
        if ( i == 0 ) {
            return window.location.assign("/ELSAPersonalityQuiz/4DChessmaster.html");
        } else if ( i == 1 ) {
            return window.location.assign("/ELSAPersonalityQuiz/biggestRizzler.html");
        } else {
            return window.location.assign("/ELSAPersonalityQuiz/tacticalPplPleaser.html");
        };
    } else if ( scoreBR == scoreDV && scoreBR == scoreML && scoreBR != (score4D || scoreSP || scorePP) ) {
        let i =  Math.floor(Math.random() * 3 );
        if ( i == 0 ) {
            return window.location.assign("/ELSAPersonalityQuiz/biggestRizzler.html");
        } else if ( i == 1 ) {
            return window.location.assign("/ELSAPersonalityQuiz/daVinky.html");
        } else {
            return window.location.assign("/ELSAPersonalityQuiz/maleLead2.html");
        };
    } else if ( scoreBR == scoreDV && scoreBR == scoreSP && scoreBR != (score4D || scoreML || scorePP) ) {
        let i =  Math.floor(Math.random() * 3 );
        if ( i == 0 ) {
            return window.location.assign("/ELSAPersonalityQuiz/biggestRizzler.html");
        } else if ( i == 1 ) {
            return window.location.assign("/ELSAPersonalityQuiz/daVinky.html");
        } else {
            return window.location.assign("/ELSAPersonalityQuiz/sugarParent.html");
        };
    } else if ( scoreBR == scoreDV && scoreBR == scorePP && scoreBR != (score4D || scoreML || scoreSP) ) {
        let i =  Math.floor(Math.random() * 3 );
        if ( i == 0 ) {
            return window.location.assign("/ELSAPersonalityQuiz/biggestRizzler.html");
        } else if ( i == 1 ) {
            return window.location.assign("/ELSAPersonalityQuiz/daVinky.html");
        } else {
            return window.location.assign("/ELSAPersonalityQuiz/tacticalPplPleaser.html");
        };
    } else if ( scoreBR == scoreML && scoreBR == scoreSP && scoreBR != (score4D || scoreDV || scorePP) ) {
        let i =  Math.floor(Math.random() * 3 );
        if ( i == 0 ) {
            return window.location.assign("/ELSAPersonalityQuiz/biggestRizzler.html");
        } else if ( i == 1 ) {
            return window.location.assign("/ELSAPersonalityQuiz/maleLead2.html");
        } else {
            return window.location.assign("/ELSAPersonalityQuiz/sugarParent.html");
        };
    } else if ( scoreBR == scoreML && scoreBR == scorePP && scoreBR != (score4D || scoreDV || scoreSP) ) {
        let i =  Math.floor(Math.random() * 3 );
        if ( i == 0 ) {
            return window.location.assign("/ELSAPersonalityQuiz/biggestRizzler.html");
        } else if ( i == 1 ) {
            return window.location.assign("/ELSAPersonalityQuiz/maleLead2.html");
        } else {
            return window.location.assign("/ELSAPersonalityQuiz/tacticalPplPleaser.html");
        };
    } else if ( scoreBR == scoreSP && scoreBR == scorePP && scoreBR != (score4D || scoreDV || scoreML) ) {
        let i =  Math.floor(Math.random() * 3 );
        if ( i == 0 ) {
            return window.location.assign("/ELSAPersonalityQuiz/biggestRizzler.html");
        } else if ( i == 1 ) {
            return window.location.assign("/ELSAPersonalityQuiz/sugarParent.html");
        } else {
            return window.location.assign("/ELSAPersonalityQuiz/tacticalPplPleaser.html");
        };
    } 
    //five way tie
    else if ( score4D == scoreBR && score4D == scoreDV && score4D == scoreML && score4D == scoreSP && score4D != scorePP ) {
        let i =  Math.floor(Math.random() * 5 );
        if ( i == 0 ) {
            return window.location.assign("/ELSAPersonalityQuiz/4DChessmaster.html");
        } else if ( i == 1 ) {
            return window.location.assign("/ELSAPersonalityQuiz/biggestRizzler.html");
        } else if ( i == 2 ) {
            return window.location.assign("/ELSAPersonalityQuiz/daVinky.html");
        } else if ( i == 3 ) {
            return window.location.assign("/ELSAPersonalityQuiz/maleLead2.html");
        } else {
            return window.location.assign("/ELSAPersonalityQuiz/sugarParent.html");
        };
    } else if ( score4D == scoreBR && score4D == scoreDV && score4D == scoreML && score4D == scorePP && score4D != scoreSP ) {
        let i =  Math.floor(Math.random() * 5 );
        if ( i == 0 ) {
            return window.location.assign("/ELSAPersonalityQuiz/4DChessmaster.html");
        } else if ( i == 1 ) {
            return window.location.assign("/ELSAPersonalityQuiz/biggestRizzler.html");
        } else if ( i == 2 ) {
            return window.location.assign("/ELSAPersonalityQuiz/daVinky.html");
        } else if ( i == 3 ) {
            return window.location.assign("/ELSAPersonalityQuiz/maleLead2.html");
        } else {
            return window.location.assign("/ELSAPersonalityQuiz/tacticalPplPleaser.html");
        };
    } else if ( score4D == scoreBR && score4D == scoreDV && score4D == scoreSP && score4D == scorePP && score4D != scoreML ) {
        let i =  Math.floor(Math.random() * 5 );
        if ( i == 0 ) {
            return window.location.assign("/ELSAPersonalityQuiz/4DChessmaster.html");
        } else if ( i == 1 ) {
            return window.location.assign("/ELSAPersonalityQuiz/biggestRizzler.html");
        } else if ( i == 2 ) {
            return window.location.assign("/ELSAPersonalityQuiz/daVinky.html");
        } else if ( i == 3 ) {
            return window.location.assign("/ELSAPersonalityQuiz/sugarParent.html");
        } else {
            return window.location.assign("/ELSAPersonalityQuiz/tacticalPplPleaser.html");
        };
    } else if ( score4D == scoreBR && score4D == scoreML && score4D == scoreSP && score4D == scorePP && score4D != scoreDV ) {
        let i =  Math.floor(Math.random() * 5 );
        if ( i == 0 ) {
            return window.location.assign("/ELSAPersonalityQuiz/4DChessmaster.html");
        } else if ( i == 1 ) {
            return window.location.assign("/ELSAPersonalityQuiz/biggestRizzler.html");
        } else if ( i == 2 ) {
            return window.location.assign("/ELSAPersonalityQuiz/maleLead2.html");
        } else if ( i == 3 ) {
            return window.location.assign("/ELSAPersonalityQuiz/sugarParent.html");
        } else {
            return window.location.assign("/ELSAPersonalityQuiz/tacticalPplPleaser.html");
        };
    } else if ( scoreBR == scoreDV && scoreBR == scoreML && scoreBR == scoreSP && scoreBR == scorePP && scoreBR != score4D ) {
        let i =  Math.floor(Math.random() * 5 );
        if ( i == 0 ) {
            return window.location.assign("/ELSAPersonalityQuiz/biggestRizzler.html");
        } else if ( i == 1 ) {
            return window.location.assign("/ELSAPersonalityQuiz/daVinky.html");
        } else if ( i == 2 ) {
            return window.location.assign("/ELSAPersonalityQuiz/maleLead2.html");
        } else if ( i == 3 ) {
            return window.location.assign("/ELSAPersonalityQuiz/sugarParent.html");
        } else {
            return window.location.assign("/ELSAPersonalityQuiz/tacticalPplPleaser.html");
        };
    } else {

    };
};

tiebreakerDV = () => {
    //two way tie
    if (score4D == scoreDV && score4D != (scoreBR || scoreML || scoreSP || scorePP) ) {
        let i =  Math.floor(Math.random() * 2 );
        if ( i < 1 || i == 0 ) {
            return window.location.assign("/ELSAPersonalityQuiz/4DChessmaster.html");
        } else {
            return window.location.assign("/ELSAPersonalityQuiz/daVinky.html");
        };
    } else if ( scoreBR == scoreDV && scoreBR != (score4D || scoreML || scoreSP || scorePP) ) {
        let i =  Math.floor(Math.random() * 2 );
        if ( i < 1 || i == 0 ) {
            return window.location.assign("/ELSAPersonalityQuiz/biggestRizzler.html");
        } else {
            return window.location.assign("/ELSAPersonalityQuiz/daVinky.html");
        };
    } else if ( scoreDV == scoreML && scoreDV != (score4D || scoreBR || scoreSP || scorePP) ) {
        let i =  Math.floor(Math.random() * 2 );
        if ( i < 1 || i == 0 ) {
            return window.location.assign("/ELSAPersonalityQuiz/daVinky.html");
        } else {
            return window.location.assign("/ELSAPersonalityQuiz/maleLead2.html");
        };
    } else if ( scoreDV == scoreSP && scoreDV != (score4D || scoreBR || scoreML || scorePP) ) {
        let i =  Math.floor(Math.random() * 2 );
        if ( i < 1 || i == 0 ) {
            return window.location.assign("/ELSAPersonalityQuiz/daVinky.html");
        } else {
            return window.location.assign("/ELSAPersonalityQuiz/sugarParent.html");
        };
    } else if ( scoreDV == scorePP && scoreDV != (score4D || scoreBR || scoreML || scoreSP) ) {
        let i =  Math.floor(Math.random() * 2 );
        if ( i < 1 || i == 0 ) {
            return window.location.assign("/ELSAPersonalityQuiz/daVinky.html");
        } else {
            return window.location.assign("/ELSAPersonalityQuiz/tacticalPplPleaser.html");
        };
    } 
    //three way tie
    else if ( score4D == scoreBR && score4D == scoreDV && score4D != (scoreML || scoreSP || scorePP) ) {
        let i =  Math.floor(Math.random() * 3 );
        if ( i == 0 ) {
            return window.location.assign("/ELSAPersonalityQuiz/4DChessmaster.html");
        } else if ( i == 1 ) {
            return window.location.assign("/ELSAPersonalityQuiz/biggestRizzler.html");
        } else {
            return window.location.assign("/ELSAPersonalityQuiz/daVinky.html");
        };
    } else if ( score4D == scoreDV && score4D == scoreML && score4D != (scoreBR || scoreSP || scorePP) ) {
        let i =  Math.floor(Math.random() * 3 );
        if ( i == 0 ) {
            return window.location.assign("/ELSAPersonalityQuiz/4DChessmaster.html");
        } else if ( i == 1 ) {
            return window.location.assign("/ELSAPersonalityQuiz/daVinky.html");
        } else {
            return window.location.assign("/ELSAPersonalityQuiz/maleLead2.html");
        };
    } else if ( score4D == scoreDV && score4D == scoreSP && score4D != (scoreBR || scoreML || scorePP) ) {
        let i =  Math.floor(Math.random() * 3 );
        if ( i == 0 ) {
            return window.location.assign("/ELSAPersonalityQuiz/4DChessmaster.html");
        } else if ( i == 1 ) {
            return window.location.assign("/ELSAPersonalityQuiz/daVinky.html");
        } else {
            return window.location.assign("/ELSAPersonalityQuiz/sugarParent.html");
        };
    } else if ( score4D == scoreDV && score4D == scorePP && score4D != (scoreBR || scoreML || scoreSP) ) {
        let i =  Math.floor(Math.random() * 3 );
        if ( i == 0 ) {
            return window.location.assign("/ELSAPersonalityQuiz/4DChessmaster.html");
        } else if ( i == 1 ) {
            return window.location.assign("/ELSAPersonalityQuiz/daVinky.html");
        } else {
            return window.location.assign("/ELSAPersonalityQuiz/tacticalPplPleaser.html");
        };
    } else if ( scoreBR == scoreDV && scoreBR == scoreML && scoreBR != (score4D || scoreSP || scorePP) ) {
        let i =  Math.floor(Math.random() * 3 );
        if ( i == 0 ) {
            return window.location.assign("/ELSAPersonalityQuiz/biggestRizzler.html");
        } else if ( i == 1 ) {
            return window.location.assign("/ELSAPersonalityQuiz/daVinky.html");
        } else {
            return window.location.assign("/ELSAPersonalityQuiz/maleLead2.html");
        };
    } else if ( scoreBR == scoreDV && scoreBR == scoreSP && scoreBR != (score4D || scoreML || scorePP) ) {
        let i =  Math.floor(Math.random() * 3 );
        if ( i == 0 ) {
            return window.location.assign("/ELSAPersonalityQuiz/biggestRizzler.html");
        } else if ( i == 1 ) {
            return window.location.assign("/ELSAPersonalityQuiz/daVinky.html");
        } else {
            return window.location.assign("/ELSAPersonalityQuiz/sugarParent.html");
        };
    } else if ( scoreBR == scoreDV && scoreBR == scorePP && scoreBR != (score4D || scoreML || scoreSP) ) {
        let i =  Math.floor(Math.random() * 3 );
        if ( i == 0 ) {
            return window.location.assign("/ELSAPersonalityQuiz/biggestRizzler.html");
        } else if ( i == 1 ) {
            return window.location.assign("/ELSAPersonalityQuiz/daVinky.html");
        } else {
            return window.location.assign("/ELSAPersonalityQuiz/tacticalPplPleaser.html");
        };
    } else if ( scoreDV == scoreML && scoreDV == scoreSP && scoreDV != (score4D || scoreBR || scorePP) ) {
        let i =  Math.floor(Math.random() * 3 );
        if ( i == 0 ) {
            return window.location.assign("/ELSAPersonalityQuiz/daVinky.html");
        } else if ( i == 1 ) {
            return window.location.assign("/ELSAPersonalityQuiz/maleLead2.html");
        } else {
            return window.location.assign("/ELSAPersonalityQuiz/sugarParent.html");
        };
    } else if ( scoreDV == scoreML && scoreDV == scorePP && scoreDV != (score4D || scoreBR || scoreSP) ) {
        let i =  Math.floor(Math.random() * 3 );
        if ( i == 0 ) {
            return window.location.assign("/ELSAPersonalityQuiz/daVinky.html");
        } else if ( i == 1 ) {
            return window.location.assign("/ELSAPersonalityQuiz/maleLead2.html");
        } else {
            return window.location.assign("/ELSAPersonalityQuiz/tacticalPplPleaser.html");
        };
    } else if ( scoreDV == scoreSP && scoreDV == scorePP && scoreDV != (score4D || scoreBR || scoreML) ) {
        let i =  Math.floor(Math.random() * 3 );
        if ( i == 0 ) {
            return window.location.assign("/ELSAPersonalityQuiz/daVinky.html");
        } else if ( i == 1 ) {
            return window.location.assign("/ELSAPersonalityQuiz/sugarParent.html");
        } else {
            return window.location.assign("/ELSAPersonalityQuiz/tacticalPplPleaser.html");
        };
    }
    //five way tie
    else if ( score4D == scoreBR && score4D == scoreDV && score4D == scoreML && score4D == scoreSP && score4D != scorePP ) {
        let i =  Math.floor(Math.random() * 5 );
        if ( i == 0 ) {
            return window.location.assign("/ELSAPersonalityQuiz/4DChessmaster.html");
        } else if ( i == 1 ) {
            return window.location.assign("/ELSAPersonalityQuiz/biggestRizzler.html");
        } else if ( i == 2 ) {
            return window.location.assign("/ELSAPersonalityQuiz/daVinky.html");
        } else if ( i == 3 ) {
            return window.location.assign("/ELSAPersonalityQuiz/maleLead2.html");
        } else {
            return window.location.assign("/ELSAPersonalityQuiz/sugarParent.html");
        };
    } else if ( score4D == scoreBR && score4D == scoreDV && score4D == scoreML && score4D == scorePP && score4D != scoreSP ) {
        let i =  Math.floor(Math.random() * 5 );
        if ( i == 0 ) {
            return window.location.assign("/ELSAPersonalityQuiz/4DChessmaster.html");
        } else if ( i == 1 ) {
            return window.location.assign("/ELSAPersonalityQuiz/biggestRizzler.html");
        } else if ( i == 2 ) {
            return window.location.assign("/ELSAPersonalityQuiz/daVinky.html");
        } else if ( i == 3 ) {
            return window.location.assign("/ELSAPersonalityQuiz/maleLead2.html");
        } else {
            return window.location.assign("/ELSAPersonalityQuiz/tacticalPplPleaser.html");
        };
    } else if ( score4D == scoreBR && score4D == scoreDV && score4D == scoreSP && score4D == scorePP && score4D != scoreML ) {
        let i =  Math.floor(Math.random() * 5 );
        if ( i == 0 ) {
            return window.location.assign("/ELSAPersonalityQuiz/4DChessmaster.html");
        } else if ( i == 1 ) {
            return window.location.assign("/ELSAPersonalityQuiz/biggestRizzler.html");
        } else if ( i == 2 ) {
            return window.location.assign("/ELSAPersonalityQuiz/daVinky.html");
        } else if ( i == 3 ) {
            return window.location.assign("/ELSAPersonalityQuiz/sugarParent.html");
        } else {
            return window.location.assign("/ELSAPersonalityQuiz/tacticalPplPleaser.html");
        };
    } else if ( score4D == scoreDV && score4D == scoreML && score4D == scoreSP && score4D == scorePP && score4D != scoreBR ) {
        let i =  Math.floor(Math.random() * 5 );
        if ( i == 0 ) {
            return window.location.assign("/ELSAPersonalityQuiz/4DChessmaster.html");
        } else if ( i == 1 ) {
            return window.location.assign("/ELSAPersonalityQuiz/daVinky.html");
        } else if ( i == 2 ) {
            return window.location.assign("/ELSAPersonalityQuiz/maleLead2.html");
        } else if ( i == 3 ) {
            return window.location.assign("/ELSAPersonalityQuiz/sugarParent.html");
        } else {
            return window.location.assign("/ELSAPersonalityQuiz/tacticalPplPleaser.html");
        };
    } else if ( scoreBR == scoreDV && scoreBR == scoreML && scoreBR == scoreSP && scoreBR == scorePP && scoreBR != score4D ) {
        let i =  Math.floor(Math.random() * 5 );
        if ( i == 0 ) {
            return window.location.assign("/ELSAPersonalityQuiz/biggestRizzler.html");
        } else if ( i == 1 ) {
            return window.location.assign("/ELSAPersonalityQuiz/daVinky.html");
        } else if ( i == 2 ) {
            return window.location.assign("/ELSAPersonalityQuiz/maleLead2.html");
        } else if ( i == 3 ) {
            return window.location.assign("/ELSAPersonalityQuiz/sugarParent.html");
        } else {
            return window.location.assign("/ELSAPersonalityQuiz/tacticalPplPleaser.html");
        };
    } else {

    };
};

tiebreakerML = () => {
    //two way tie
    if (score4D == scoreML && score4D != (scoreBR || scoreDV || scoreSP || scorePP) ) {
        let i =  Math.floor(Math.random() * 2 );
        if ( i < 1 || i == 0 ) {
            return window.location.assign("/ELSAPersonalityQuiz/4DChessmaster.html");
        } else {
            return window.location.assign("/ELSAPersonalityQuiz/maleLead2.html");
        };
    } else if ( scoreBR == scoreML && scoreBR != (score4D || scoreDV || scoreSP || scorePP) ) {
        let i =  Math.floor(Math.random() * 2 );
        if ( i < 1 || i == 0 ) {
            return window.location.assign("/ELSAPersonalityQuiz/biggestRizzler.html");
        } else {
            return window.location.assign("/ELSAPersonalityQuiz/maleLead2.html");
        };
    } else if ( scoreDV == scoreML && scoreDV != (score4D || scoreBR || scoreSP || scorePP) ) {
        let i =  Math.floor(Math.random() * 2 );
        if ( i < 1 || i == 0 ) {
            return window.location.assign("/ELSAPersonalityQuiz/daVinky.html");
        } else {
            return window.location.assign("/ELSAPersonalityQuiz/maleLead2.html");
        };
    } else if ( scoreML == scoreSP && scoreML != (score4D || scoreBR || scoreDV || scorePP) ) {
        let i =  Math.floor(Math.random() * 2 );
        if ( i < 1 || i == 0 ) {
            return window.location.assign("/ELSAPersonalityQuiz/maleLead2.html");
        } else {
            return window.location.assign("/ELSAPersonalityQuiz/sugarParent.html");
        };
    } else if ( scoreML == scorePP && scoreML != (score4D || scoreBR || scoreDV || scoreSP) ) {
        let i =  Math.floor(Math.random() * 2 );
        if ( i < 1 || i == 0 ) {
            return window.location.assign("/ELSAPersonalityQuiz/maleLead2.html");
        } else {
            return window.location.assign("/ELSAPersonalityQuiz/tacticalPplPleaser.html");
        };
    }
    //three ay tie
    else if ( score4D == scoreBR && score4D == scoreML && score4D != (scoreDV || scoreSP || scorePP) ) {
        let i =  Math.floor(Math.random() * 3 );
        if ( i == 0 ) {
            return window.location.assign("/ELSAPersonalityQuiz/4DChessmaster.html");
        } else if ( i == 1 ) {
            return window.location.assign("/ELSAPersonalityQuiz/biggestRizzler.html");
        } else {
            return window.location.assign("/ELSAPersonalityQuiz/maleLead2.html");
        };
    } else if ( score4D == scoreDV && score4D == scoreML && score4D != (scoreBR || scoreSP || scorePP) ) {
        let i =  Math.floor(Math.random() * 3 );
        if ( i == 0 ) {
            return window.location.assign("/ELSAPersonalityQuiz/4DChessmaster.html");
        } else if ( i == 1 ) {
            return window.location.assign("/ELSAPersonalityQuiz/daVinky.html");
        } else {
            return window.location.assign("/ELSAPersonalityQuiz/maleLead2.html");
        };
    } else if ( score4D == scoreML && score4D == scoreSP && score4D != (scoreBR || scoreDV || scorePP) ) {
        let i =  Math.floor(Math.random() * 3 );
        if ( i == 0 ) {
            return window.location.assign("/ELSAPersonalityQuiz/4DChessmaster.html");
        } else if ( i == 1 ) {
            return window.location.assign("/ELSAPersonalityQuiz/maleLead2.html");
        } else {
            return window.location.assign("/ELSAPersonalityQuiz/sugarParent.html");
        };
    } else if ( score4D == scoreML && score4D == scorePP && score4D != (scoreBR || scoreDV || scoreSP) ) {
        let i =  Math.floor(Math.random() * 3 );
        if ( i == 0 ) {
            return window.location.assign("/ELSAPersonalityQuiz/4DChessmaster.html");
        } else if ( i == 1 ) {
            return window.location.assign("/ELSAPersonalityQuiz/maleLead2.html");
        } else {
            return window.location.assign("/ELSAPersonalityQuiz/tacticalPplPleaser.html");
        };
    } else if ( scoreBR == scoreDV && scoreBR == scoreML && scoreBR != (score4D || scoreSP || scorePP) ) {
        let i =  Math.floor(Math.random() * 3 );
        if ( i == 0 ) {
            return window.location.assign("/ELSAPersonalityQuiz/biggestRizzler.html");
        } else if ( i == 1 ) {
            return window.location.assign("/ELSAPersonalityQuiz/daVinky.html");
        } else {
            return window.location.assign("/ELSAPersonalityQuiz/maleLead2.html");
        };
    } else if ( scoreBR == scoreML && scoreBR == scoreSP && scoreBR != (score4D || scoreDV || scorePP) ) {
        let i =  Math.floor(Math.random() * 3 );
        if ( i == 0 ) {
            return window.location.assign("/ELSAPersonalityQuiz/biggestRizzler.html");
        } else if ( i == 1 ) {
            return window.location.assign("/ELSAPersonalityQuiz/maleLead2.html");
        } else {
            return window.location.assign("/ELSAPersonalityQuiz/sugarParent.html");
        };
    } else if ( scoreBR == scoreML && scoreBR == scorePP && scoreBR != (score4D || scoreDV || scoreSP) ) {
        let i =  Math.floor(Math.random() * 3 );
        if ( i == 0 ) {
            return window.location.assign("/ELSAPersonalityQuiz/biggestRizzler.html");
        } else if ( i == 1 ) {
            return window.location.assign("/ELSAPersonalityQuiz/maleLead2.html");
        } else {
            return window.location.assign("/ELSAPersonalityQuiz/tacticalPplPleaser.html");
        };
    } else if ( scoreDV == scoreML && scoreDV == scoreSP && scoreDV != (score4D || scoreBR || scorePP) ) {
        let i =  Math.floor(Math.random() * 3 );
        if ( i == 0 ) {
            return window.location.assign("/ELSAPersonalityQuiz/daVinky.html");
        } else if ( i == 1 ) {
            return window.location.assign("/ELSAPersonalityQuiz/maleLead2.html");
        } else {
            return window.location.assign("/ELSAPersonalityQuiz/sugarParent.html");
        };
    } else if ( scoreDV == scoreML && scoreDV == scorePP && scoreDV != (score4D || scoreBR || scoreSP) ) {
        let i =  Math.floor(Math.random() * 3 );
        if ( i == 0 ) {
            return window.location.assign("/ELSAPersonalityQuiz/daVinky.html");
        } else if ( i == 1 ) {
            return window.location.assign("/ELSAPersonalityQuiz/maleLead2.html");
        } else {
            return window.location.assign("/ELSAPersonalityQuiz/tacticalPplPleaser.html");
        };
    } else if ( scoreML == scoreSP && scoreML == scorePP && scoreML != (score4D || scoreBR || scoreDV) ) {
        let i =  Math.floor(Math.random() * 3 );
        if ( i == 0 ) {
            return window.location.assign("/ELSAPersonalityQuiz/maleLead2.html");
        } else if ( i == 1 ) {
            return window.location.assign("/ELSAPersonalityQuiz/sugarParent.html");
        } else {
            return window.location.assign("/ELSAPersonalityQuiz/tacticalPplPleaser.html");
        };
    }
    //five way tie
    else if ( score4D == scoreBR && score4D == scoreDV && score4D == scoreML && score4D == scoreSP && score4D != scorePP ) {
        let i =  Math.floor(Math.random() * 5 );
        if ( i == 0 ) {
            return window.location.assign("/ELSAPersonalityQuiz/4DChessmaster.html");
        } else if ( i == 1 ) {
            return window.location.assign("/ELSAPersonalityQuiz/biggestRizzler.html");
        } else if ( i == 2 ) {
            return window.location.assign("/ELSAPersonalityQuiz/daVinky.html");
        } else if ( i == 3 ) {
            return window.location.assign("/ELSAPersonalityQuiz/maleLead2.html");
        } else {
            return window.location.assign("/ELSAPersonalityQuiz/sugarParent.html");
        };
    } else if ( score4D == scoreBR && score4D == scoreDV && score4D == scoreML && score4D == scorePP && score4D != scoreSP ) {
        let i =  Math.floor(Math.random() * 5 );
        if ( i == 0 ) {
            return window.location.assign("/ELSAPersonalityQuiz/4DChessmaster.html");
        } else if ( i == 1 ) {
            return window.location.assign("/ELSAPersonalityQuiz/biggestRizzler.html");
        } else if ( i == 2 ) {
            return window.location.assign("/ELSAPersonalityQuiz/daVinky.html");
        } else if ( i == 3 ) {
            return window.location.assign("/ELSAPersonalityQuiz/maleLead2.html");
        } else {
            return window.location.assign("/ELSAPersonalityQuiz/tacticalPplPleaser.html");
        };
    } else if ( score4D == scoreBR && score4D == scoreML && score4D == scoreSP && score4D == scorePP && score4D != scoreDV ) {
        let i =  Math.floor(Math.random() * 5 );
        if ( i == 0 ) {
            return window.location.assign("/ELSAPersonalityQuiz/4DChessmaster.html");
        } else if ( i == 1 ) {
            return window.location.assign("/ELSAPersonalityQuiz/biggestRizzler.html");
        } else if ( i == 2 ) {
            return window.location.assign("/ELSAPersonalityQuiz/maleLead2.html");
        } else if ( i == 3 ) {
            return window.location.assign("/ELSAPersonalityQuiz/sugarParent.html");
        } else {
            return window.location.assign("/ELSAPersonalityQuiz/tacticalPplPleaser.html");
        };
    } else if ( score4D == scoreDV && score4D == scoreML && score4D == scoreSP && score4D == scorePP && score4D != scoreBR ) {
        let i =  Math.floor(Math.random() * 5 );
        if ( i == 0 ) {
            return window.location.assign("/ELSAPersonalityQuiz/4DChessmaster.html");
        } else if ( i == 1 ) {
            return window.location.assign("/ELSAPersonalityQuiz/daVinky.html");
        } else if ( i == 2 ) {
            return window.location.assign("/ELSAPersonalityQuiz/maleLead2.html");
        } else if ( i == 3 ) {
            return window.location.assign("/ELSAPersonalityQuiz/sugarParent.html");
        } else {
            return window.location.assign("/ELSAPersonalityQuiz/tacticalPplPleaser.html");
        };
    } else if ( scoreBR == scoreDV && scoreBR == scoreML && scoreBR == scoreSP && scoreBR == scorePP && scoreBR != score4D ) {
        let i =  Math.floor(Math.random() * 5 );
        if ( i == 0 ) {
            return window.location.assign("/ELSAPersonalityQuiz/biggestRizzler.html");
        } else if ( i == 1 ) {
            return window.location.assign("/ELSAPersonalityQuiz/daVinky.html");
        } else if ( i == 2 ) {
            return window.location.assign("/ELSAPersonalityQuiz/maleLead2.html");
        } else if ( i == 3 ) {
            return window.location.assign("/ELSAPersonalityQuiz/sugarParent.html");
        } else {
            return window.location.assign("/ELSAPersonalityQuiz/tacticalPplPleaser.html");
        };
    } else {

    };
};

tiebreakerSP = () => {
    //two way tie
    if (score4D == scoreSP && score4D != ( scoreBR || scoreDV || scoreML || scorePP) ) {
        let i =  Math.floor(Math.random() * 2 );
        if ( i < 1 || i == 0 ) {
            return window.location.assign("/ELSAPersonalityQuiz/4DChessmaster.html");
        } else {
            return window.location.assign("/ELSAPersonalityQuiz/sugarParent.html");
        };
    } else if ( scoreBR == scoreSP && scoreBR != (score4D || scoreDV || scoreML || scorePP) ) {
        let i =  Math.floor(Math.random() * 2 );
        if ( i < 1 || i == 0 ) {
            return window.location.assign("/ELSAPersonalityQuiz/biggestRizzler.html");
        } else {
            return window.location.assign("/ELSAPersonalityQuiz/sugarParent.html");
        };
    } else if ( scoreDV == scoreSP && scoreDV != (score4D || scoreBR || scoreML || scorePP) ) {
        let i =  Math.floor(Math.random() * 2 );
        if ( i < 1 || i == 0 ) {
            return window.location.assign("/ELSAPersonalityQuiz/daVinky.html");
        } else {
            return window.location.assign("/ELSAPersonalityQuiz/sugarParent.html");
        };
    } else if ( scoreML == scoreSP && scoreML != (score4D || scoreBR || scoreDV || scorePP) ) {
        let i =  Math.floor(Math.random() * 2 );
        if ( i < 1 || i == 0 ) {
            return window.location.assign("/ELSAPersonalityQuiz/maleLead2.html");
        } else {
            return window.location.assign("/ELSAPersonalityQuiz/sugarParent.html");
        };
    } else if ( scoreSP == scorePP && scoreSP != (score4D || scoreBR || scoreDV || scoreML) ) {
        let i =  Math.floor(Math.random() * 2 );
        if ( i < 1 || i == 0 ) {
            return window.location.assign("/ELSAPersonalityQuiz/sugarParent.html");
        } else {
            return window.location.assign("/ELSAPersonalityQuiz/tacticalPplPleaser.html");
        };
    }
    //three way tie
    else if ( score4D == scoreBR && score4D == scoreSP && score4D != (scoreDV || scoreML || scorePP) ) {
        let i =  Math.floor(Math.random() * 3 );
        if ( i == 0 ) {
            return window.location.assign("/ELSAPersonalityQuiz/4DChessmaster.html");
        } else if ( i == 1 ) {
            return window.location.assign("/ELSAPersonalityQuiz/biggestRizzler.html");
        } else {
            return window.location.assign("/ELSAPersonalityQuiz/sugarParent.html");
        };
    } else if ( score4D == scoreDV && score4D == scoreSP && score4D != (scoreBR || scoreML || scorePP) ) {
        let i =  Math.floor(Math.random() * 3 );
        if ( i == 0 ) {
            return window.location.assign("/ELSAPersonalityQuiz/4DChessmaster.html");
        } else if ( i == 1 ) {
            return window.location.assign("/ELSAPersonalityQuiz/daVinky.html");
        } else {
            return window.location.assign("/ELSAPersonalityQuiz/sugarParent.html");
        };
    } else if ( score4D == scoreML && score4D == scoreSP && score4D != (scoreBR || scoreDV || scorePP) ) {
        let i =  Math.floor(Math.random() * 3 );
        if ( i == 0 ) {
            return window.location.assign("/ELSAPersonalityQuiz/4DChessmaster.html");
        } else if ( i == 1 ) {
            return window.location.assign("/ELSAPersonalityQuiz/maleLead2.html");
        } else {
            return window.location.assign("/ELSAPersonalityQuiz/sugarParent.html");
        };
    } else if ( score4D == scoreSP && score4D == scorePP && score4D != (scoreBR || scoreDV || scoreML) ) {
        let i =  Math.floor(Math.random() * 3 );
        if ( i == 0 ) {
            return window.location.assign("/ELSAPersonalityQuiz/4DChessmaster.html");
        } else if ( i == 1 ) {
            return window.location.assign("/ELSAPersonalityQuiz/sugarParent.html");
        } else {
            return window.location.assign("/ELSAPersonalityQuiz/tacticalPplPleaser.html");
        };
    } else if ( scoreBR == scoreDV && scoreBR == scoreSP && scoreBR != (score4D || scoreML || scorePP) ) {
        let i =  Math.floor(Math.random() * 3 );
        if ( i == 0 ) {
            return window.location.assign("/ELSAPersonalityQuiz/biggestRizzler.html");
        } else if ( i == 1 ) {
            return window.location.assign("/ELSAPersonalityQuiz/daVinky.html");
        } else {
            return window.location.assign("/ELSAPersonalityQuiz/sugarParent.html");
        };
    } else if ( scoreBR == scoreML && scoreBR == scoreSP && scoreBR != (score4D || scoreDV || scorePP) ) {
        let i =  Math.floor(Math.random() * 3 );
        if ( i == 0 ) {
            return window.location.assign("/ELSAPersonalityQuiz/biggestRizzler.html");
        } else if ( i == 1 ) {
            return window.location.assign("/ELSAPersonalityQuiz/maleLead2.html");
        } else {
            return window.location.assign("/ELSAPersonalityQuiz/sugarParent.html");
        };
    } else if ( scoreBR == scoreSP && scoreBR == scorePP && scoreBR != (score4D || scoreDV || scoreML) ) {
        let i =  Math.floor(Math.random() * 3 );
        if ( i == 0 ) {
            return window.location.assign("/ELSAPersonalityQuiz/biggestRizzler.html");
        } else if ( i == 1 ) {
            return window.location.assign("/ELSAPersonalityQuiz/sugarParent.html");
        } else {
            return window.location.assign("/ELSAPersonalityQuiz/tacticalPplPleaser.html");
        };
    } else if ( scoreDV == scoreML && scoreDV == scoreSP && scoreDV != (score4D || scoreBR || scorePP) ) {
        let i =  Math.floor(Math.random() * 3 );
        if ( i == 0 ) {
            return window.location.assign("/ELSAPersonalityQuiz/daVinky.html");
        } else if ( i == 1 ) {
            return window.location.assign("/ELSAPersonalityQuiz/maleLead2.html");
        } else {
            return window.location.assign("/ELSAPersonalityQuiz/sugarParent.html");
        };
    } else if ( scoreDV == scoreSP && scoreDV == scorePP && scoreDV != (score4D || scoreBR || scoreML) ) {
        let i =  Math.floor(Math.random() * 3 );
        if ( i == 0 ) {
            return window.location.assign("/ELSAPersonalityQuiz/daVinky.html");
        } else if ( i == 1 ) {
            return window.location.assign("/ELSAPersonalityQuiz/sugarParent.html");
        } else {
            return window.location.assign("/ELSAPersonalityQuiz/tacticalPplPleaser.html");
        };
    } else if ( scoreML == scoreSP && scoreML == scorePP && scoreML != (score4D || scoreBR || scoreDV) ) {
        let i =  Math.floor(Math.random() * 3 );
        if ( i == 0 ) {
            return window.location.assign("/ELSAPersonalityQuiz/maleLead2.html");
        } else if ( i == 1 ) {
            return window.location.assign("/ELSAPersonalityQuiz/sugarParent.html");
        } else {
            return window.location.assign("/ELSAPersonalityQuiz/tacticalPplPleaser.html");
        };
    }
    //five way tie
    else if ( score4D == scoreBR && score4D == scoreDV && score4D == scoreML && score4D == scoreSP && score4D != scorePP ) {
        let i =  Math.floor(Math.random() * 5 );
        if ( i == 0 ) {
            return window.location.assign("/ELSAPersonalityQuiz/4DChessmaster.html");
        } else if ( i == 1 ) {
            return window.location.assign("/ELSAPersonalityQuiz/biggestRizzler.html");
        } else if ( i == 2 ) {
            return window.location.assign("/ELSAPersonalityQuiz/daVinky.html");
        } else if ( i == 3 ) {
            return window.location.assign("/ELSAPersonalityQuiz/maleLead2.html");
        } else {
            return window.location.assign("/ELSAPersonalityQuiz/sugarParent.html");
        };
    } else if ( score4D == scoreBR && score4D == scoreDV && score4D == scoreSP && score4D == scorePP && score4D != scoreML ) {
        let i =  Math.floor(Math.random() * 5 );
        if ( i == 0 ) {
            return window.location.assign("/ELSAPersonalityQuiz/4DChessmaster.html");
        } else if ( i == 1 ) {
            return window.location.assign("/ELSAPersonalityQuiz/biggestRizzler.html");
        } else if ( i == 2 ) {
            return window.location.assign("/ELSAPersonalityQuiz/daVinky.html");
        } else if ( i == 3 ) {
            return window.location.assign("/ELSAPersonalityQuiz/sugarParent.html");
        } else {
            return window.location.assign("/ELSAPersonalityQuiz/tacticalPplPleaser.html");
        };
    } else if ( score4D == scoreBR && score4D == scoreML && score4D == scoreSP && score4D == scorePP && score4D != scoreDV ) {
        let i =  Math.floor(Math.random() * 5 );
        if ( i == 0 ) {
            return window.location.assign("/ELSAPersonalityQuiz/4DChessmaster.html");
        } else if ( i == 1 ) {
            return window.location.assign("/ELSAPersonalityQuiz/biggestRizzler.html");
        } else if ( i == 2 ) {
            return window.location.assign("/ELSAPersonalityQuiz/maleLead2.html");
        } else if ( i == 3 ) {
            return window.location.assign("/ELSAPersonalityQuiz/sugarParent.html");
        } else {
            return window.location.assign("/ELSAPersonalityQuiz/tacticalPplPleaser.html");
        };
    } else if ( score4D == scoreDV && score4D == scoreML && score4D == scoreSP && score4D == scorePP && score4D != scoreBR ) {
        let i =  Math.floor(Math.random() * 5 );
        if ( i == 0 ) {
            return window.location.assign("/ELSAPersonalityQuiz/4DChessmaster.html");
        } else if ( i == 1 ) {
            return window.location.assign("/ELSAPersonalityQuiz/daVinky.html");
        } else if ( i == 2 ) {
            return window.location.assign("/ELSAPersonalityQuiz/maleLead2.html");
        } else if ( i == 3 ) {
            return window.location.assign("/ELSAPersonalityQuiz/sugarParent.html");
        } else {
            return window.location.assign("/ELSAPersonalityQuiz/tacticalPplPleaser.html");
        };
    } else if ( scoreBR == scoreDV && scoreBR == scoreML && scoreBR == scoreSP && scoreBR == scorePP && scoreBR != score4D ) {
        let i =  Math.floor(Math.random() * 5 );
        if ( i == 0 ) {
            return window.location.assign("/ELSAPersonalityQuiz/biggestRizzler.html");
        } else if ( i == 1 ) {
            return window.location.assign("/ELSAPersonalityQuiz/daVinky.html");
        } else if ( i == 2 ) {
            return window.location.assign("/ELSAPersonalityQuiz/maleLead2.html");
        } else if ( i == 3 ) {
            return window.location.assign("/ELSAPersonalityQuiz/sugarParent.html");
        } else {
            return window.location.assign("/ELSAPersonalityQuiz/tacticalPplPleaser.html");
        };
    } else {

    };
};

tiebreakerPP = () => {
    if (score4D == scorePP && score4D != (scoreBR || scoreDV || scoreML || scoreSP ) ) {
        let i =  Math.floor(Math.random() * 2 );
        if ( i < 1 || i == 0 ) {
            return window.location.assign("/ELSAPersonalityQuiz/4DChessmaster.html");
        } else {
            return window.location.assign("/ELSAPersonalityQuiz/tacticalPplPleaser.html");
        };
    } else if ( scoreBR == scorePP && scoreBR != (score4D || scoreDV || scoreML || scoreSP) ) {
        let i =  Math.floor(Math.random() * 2 );
        if ( i < 1 || i == 0 ) {
            return window.location.assign("/ELSAPersonalityQuiz/biggestRizzler.html");
        } else {
            return window.location.assign("/ELSAPersonalityQuiz/tacticalPplPleaser.html");
        };
    } else if ( scoreDV == scorePP && scoreDV != (score4D || scoreBR || scoreML || scoreSP) ) {
        let i =  Math.floor(Math.random() * 2 );
        if ( i < 1 || i == 0 ) {
            return window.location.assign("/ELSAPersonalityQuiz/daVinky.html");
        } else {
            return window.location.assign("/ELSAPersonalityQuiz/tacticalPplPleaser.html");
        };
    } else if ( scoreML == scorePP && scoreML != (score4D || scoreBR || scoreDV || scoreSP) ) {
        let i =  Math.floor(Math.random() * 2 );
        if ( i < 1 || i == 0 ) {
            return window.location.assign("/ELSAPersonalityQuiz/maleLead2.html");
        } else {
            return window.location.assign("/ELSAPersonalityQuiz/tacticalPplPleaser.html");
        };
    } else if ( scoreSP == scorePP && scoreSP != (score4D || scoreBR || scoreDV || scoreML) ) {
        let i =  Math.floor(Math.random() * 2 );
        if ( i < 1 || i == 0 ) {
            return window.location.assign("/ELSAPersonalityQuiz/sugarParent.html");
        } else {
            return window.location.assign("/ELSAPersonalityQuiz/tacticalPplPleaser.html");
        };
    }
    //three way tie
    else if ( score4D == scoreBR && score4D == scorePP && score4D != (scoreDV || scoreML || scoreSP) ) {
        let i =  Math.floor(Math.random() * 3 );
        if ( i == 0 ) {
            return window.location.assign("/ELSAPersonalityQuiz/4DChessmaster.html");
        } else if ( i == 1 ) {
            return window.location.assign("/ELSAPersonalityQuiz/biggestRizzler.html");
        } else {
            return window.location.assign("/ELSAPersonalityQuiz/tacticalPplPleaser.html");
        };
    } else if ( score4D == scoreDV && score4D == scorePP && score4D != (scoreBR || scoreML || scoreSP) ) {
        let i =  Math.floor(Math.random() * 3 );
        if ( i == 0 ) {
            return window.location.assign("/ELSAPersonalityQuiz/4DChessmaster.html");
        } else if ( i == 1 ) {
            return window.location.assign("/ELSAPersonalityQuiz/daVinky.html");
        } else {
            return window.location.assign("/ELSAPersonalityQuiz/tacticalPplPleaser.html");
        };
    } else if ( score4D == scoreML && score4D == scorePP && score4D != (scoreBR || scoreDV || scoreSP) ) {
        let i =  Math.floor(Math.random() * 3 );
        if ( i == 0 ) {
            return window.location.assign("/ELSAPersonalityQuiz/4DChessmaster.html");
        } else if ( i == 1 ) {
            return window.location.assign("/ELSAPersonalityQuiz/maleLead2.html");
        } else {
            return window.location.assign("/ELSAPersonalityQuiz/tacticalPplPleaser.html");
        };
    } else if ( score4D == scoreSP && score4D == scorePP && score4D != (scoreBR || scoreDV || scoreML) ) {
        let i =  Math.floor(Math.random() * 3 );
        if ( i == 0 ) {
            return window.location.assign("/ELSAPersonalityQuiz/4DChessmaster.html");
        } else if ( i == 1 ) {
            return window.location.assign("/ELSAPersonalityQuiz/sugarParent.html");
        } else {
            return window.location.assign("/ELSAPersonalityQuiz/tacticalPplPleaser.html");
        };
    } else if ( scoreBR == scoreDV && scoreBR == scorePP && scoreBR != (score4D || scoreML || scoreSP) ) {
        let i =  Math.floor(Math.random() * 3 );
        if ( i == 0 ) {
            return window.location.assign("/ELSAPersonalityQuiz/biggestRizzler.html");
        } else if ( i == 1 ) {
            return window.location.assign("/ELSAPersonalityQuiz/daVinky.html");
        } else {
            return window.location.assign("/ELSAPersonalityQuiz/tacticalPplPleaser.html");
        };
    } else if ( scoreBR == scoreML && scoreBR == scorePP && scoreBR != (score4D || scoreDV || scoreSP) ) {
        let i =  Math.floor(Math.random() * 3 );
        if ( i == 0 ) {
            return window.location.assign("/ELSAPersonalityQuiz/biggestRizzler.html");
        } else if ( i == 1 ) {
            return window.location.assign("/ELSAPersonalityQuiz/maleLead2.html");
        } else {
            return window.location.assign("/ELSAPersonalityQuiz/tacticalPplPleaser.html");
        };
    } else if ( scoreBR == scoreSP && scoreBR == scorePP && scoreBR != (score4D || scoreDV || scoreML) ) {
        let i =  Math.floor(Math.random() * 3 );
        if ( i == 0 ) {
            return window.location.assign("/ELSAPersonalityQuiz/biggestRizzler.html");
        } else if ( i == 1 ) {
            return window.location.assign("/ELSAPersonalityQuiz/sugarParent.html");
        } else {
            return window.location.assign("/ELSAPersonalityQuiz/tacticalPplPleaser.html");
        };
    } else if ( scoreDV == scoreML && scoreDV == scorePP && scoreDV != (score4D || scoreBR || scoreSP) ) {
        let i =  Math.floor(Math.random() * 3 );
        if ( i == 0 ) {
            return window.location.assign("/ELSAPersonalityQuiz/daVinky.html");
        } else if ( i == 1 ) {
            return window.location.assign("/ELSAPersonalityQuiz/maleLead2.html");
        } else {
            return window.location.assign("/ELSAPersonalityQuiz/tacticalPplPleaser.html");
        };
    } else if ( scoreDV == scoreSP && scoreDV == scorePP && scoreDV != (score4D || scoreBR || scoreML) ) {
        let i =  Math.floor(Math.random() * 3 );
        if ( i == 0 ) {
            return window.location.assign("/ELSAPersonalityQuiz/daVinky.html");
        } else if ( i == 1 ) {
            return window.location.assign("/ELSAPersonalityQuiz/sugarParent.html");
        } else {
            return window.location.assign("/ELSAPersonalityQuiz/tacticalPplPleaser.html");
        };
    } else if ( scoreML == scoreSP && scoreML == scorePP && scoreML != (score4D || scoreBR || scoreDV) ) {
        let i =  Math.floor(Math.random() * 3 );
        if ( i == 0 ) {
            return window.location.assign("/ELSAPersonalityQuiz/maleLead2.html");
        } else if ( i == 1 ) {
            return window.location.assign("/ELSAPersonalityQuiz/sugarParent.html");
        } else {
            return window.location.assign("/ELSAPersonalityQuiz/tacticalPplPleaser.html");
        };
    }
    //five way tie
    else if ( score4D == scoreBR && score4D == scoreDV && score4D == scoreML && score4D == scorePP && score4D != scoreSP ) {
        let i =  Math.floor(Math.random() * 5 );
        if ( i == 0 ) {
            return window.location.assign("/ELSAPersonalityQuiz/4DChessmaster.html");
        } else if ( i == 1 ) {
            return window.location.assign("/ELSAPersonalityQuiz/biggestRizzler.html");
        } else if ( i == 2 ) {
            return window.location.assign("/ELSAPersonalityQuiz/daVinky.html");
        } else if ( i == 3 ) {
            return window.location.assign("/ELSAPersonalityQuiz/maleLead2.html");
        } else {
            return window.location.assign("/ELSAPersonalityQuiz/tacticalPplPleaser.html");
        };
    } else if ( score4D == scoreBR && score4D == scoreDV && score4D == scoreSP && score4D == scorePP && score4D != scoreML ) {
        let i =  Math.floor(Math.random() * 5 );
        if ( i == 0 ) {
            return window.location.assign("/ELSAPersonalityQuiz/4DChessmaster.html");
        } else if ( i == 1 ) {
            return window.location.assign("/ELSAPersonalityQuiz/biggestRizzler.html");
        } else if ( i == 2 ) {
            return window.location.assign("/ELSAPersonalityQuiz/daVinky.html");
        } else if ( i == 3 ) {
            return window.location.assign("/ELSAPersonalityQuiz/sugarParent.html");
        } else {
            return window.location.assign("/ELSAPersonalityQuiz/tacticalPplPleaser.html");
        };
    } else if ( score4D == scoreBR && score4D == scoreML && score4D == scoreSP && score4D == scorePP && score4D != scoreDV ) {
        let i =  Math.floor(Math.random() * 5 );
        if ( i == 0 ) {
            return window.location.assign("/ELSAPersonalityQuiz/4DChessmaster.html");
        } else if ( i == 1 ) {
            return window.location.assign("/ELSAPersonalityQuiz/biggestRizzler.html");
        } else if ( i == 2 ) {
            return window.location.assign("/ELSAPersonalityQuiz/maleLead2.html");
        } else if ( i == 3 ) {
            return window.location.assign("/ELSAPersonalityQuiz/sugarParent.html");
        } else {
            return window.location.assign("/ELSAPersonalityQuiz/tacticalPplPleaser.html");
        };
    } else if ( score4D == scoreDV && score4D == scoreML && score4D == scoreSP && score4D == scorePP && score4D != scoreBR ) {
        let i =  Math.floor(Math.random() * 5 );
        if ( i == 0 ) {
            return window.location.assign("/ELSAPersonalityQuiz/4DChessmaster.html");
        } else if ( i == 1 ) {
            return window.location.assign("/ELSAPersonalityQuiz/daVinky.html");
        } else if ( i == 2 ) {
            return window.location.assign("/ELSAPersonalityQuiz/maleLead2.html");
        } else if ( i == 3 ) {
            return window.location.assign("/ELSAPersonalityQuiz/sugarParent.html");
        } else {
            return window.location.assign("/ELSAPersonalityQuiz/tacticalPplPleaser.html");
        };
    } else if ( scoreBR == scoreDV && scoreBR == scoreML && scoreBR == scoreSP && scoreBR == scorePP && scoreBR != score4D ) {
        let i =  Math.floor(Math.random() * 5 );
        if ( i == 0 ) {
            return window.location.assign("/ELSAPersonalityQuiz/biggestRizzler.html");
        } else if ( i == 1 ) {
            return window.location.assign("/ELSAPersonalityQuiz/daVinky.html");
        } else if ( i == 2 ) {
            return window.location.assign("/ELSAPersonalityQuiz/maleLead2.html");
        } else if ( i == 3 ) {
            return window.location.assign("/ELSAPersonalityQuiz/sugarParent.html");
        } else {
            return window.location.assign("/ELSAPersonalityQuiz/tacticalPplPleaser.html");
        };
    } else {
        
    };
};
/*
tiebreaker = () => {
    //two way ties
    if ( score4D == scoreBR && score4D != (scoreDV || scoreML || scoreSP || scorePP) ) {
        let i =  Math.floor(Math.random() * 2 );
        if ( i < 1 || i == 0 ) {
            return window.location.assign("/4DChessmaster.html");
        } else {
            return window.location.assign("/biggestRizzler.html");
        };
    } else if (score4D == scoreDV && score4D != (scoreBR || scoreML || scoreSP || scorePP) ) {
        let i =  Math.floor(Math.random() * 2 );
        if ( i < 1 || i == 0 ) {
            return window.location.assign("/4DChessmaster.html");
        } else {
            return window.location.assign("/daVinky.html");
        };
    } else if (score4D == scoreML && score4D != (scoreBR || scoreDV || scoreSP || scorePP) ) {
        let i =  Math.floor(Math.random() * 2 );
        if ( i < 1 || i == 0 ) {
            return window.location.assign("/4DChessmaster.html");
        } else {
            return window.location.assign("/maleLead2.html");
        };
    } else if (score4D == scoreSP && score4D != ( scoreBR || scoreDV || scoreML || scorePP) ) {
        let i =  Math.floor(Math.random() * 2 );
        if ( i < 1 || i == 0 ) {
            return window.location.assign("/4DChessmaster.html");
        } else {
            return window.location.assign("/sugarParent.html");
        };
    } else if (score4D == scorePP && score4D != (scoreBR || scoreDV || scoreML || scoreSP ) ) {
        let i =  Math.floor(Math.random() * 2 );
        if ( i < 1 || i == 0 ) {
            return window.location.assign("/4DChessmaster.html");
        } else {
            return window.location.assign("/tacticalPplPleaser.html");
        };
    } else if ( scoreBR == scoreDV && scoreBR != (score4D || scoreML || scoreSP || scorePP) ) {
        let i =  Math.floor(Math.random() * 2 );
        if ( i < 1 || i == 0 ) {
            return window.location.assign("/biggestRizzler.html");
        } else {
            return window.location.assign("/daVinky.html");
        };
    } else if ( scoreBR == scoreML && scoreBR != (score4D || scoreDV || scoreSP || scorePP) ) {
        let i =  Math.floor(Math.random() * 2 );
        if ( i < 1 || i == 0 ) {
            return window.location.assign("/biggestRizzler.html");
        } else {
            return window.location.assign("/maleLead2.html");
        };
    } else if ( scoreBR == scoreSP && scoreBR != (score4D || scoreDV || scoreML || scorePP) ) {
        let i =  Math.floor(Math.random() * 2 );
        if ( i < 1 || i == 0 ) {
            return window.location.assign("/biggestRizzler.html");
        } else {
            return window.location.assign("/sugarParent.html");
        };
    } else if ( scoreBR == scorePP && scoreBR != (score4D || scoreDV || scoreML || scoreSP) ) {
        let i =  Math.floor(Math.random() * 2 );
        if ( i < 1 || i == 0 ) {
            return window.location.assign("/biggestRizzler.html");
        } else {
            return window.location.assign("/tacticalPplPleaser.html");
        };
    } else if ( scoreDV == scoreML && scoreDV != (score4D || scoreBR || scoreSP || scorePP) ) {
        let i =  Math.floor(Math.random() * 2 );
        if ( i < 1 || i == 0 ) {
            return window.location.assign("/daVinky.html");
        } else {
            return window.location.assign("/maleLead2.html");
        };
    } else if ( scoreDV == scoreSP && scoreDV != (score4D || scoreBR || scoreML || scorePP) ) {
        let i =  Math.floor(Math.random() * 2 );
        if ( i < 1 || i == 0 ) {
            return window.location.assign("/daVinky.html");
        } else {
            return window.location.assign("/sugarParent.html");
        };
    } else if ( scoreDV == scorePP && scoreDV != (score4D || scoreBR || scoreML || scoreSP) ) {
        let i =  Math.floor(Math.random() * 2 );
        if ( i < 1 || i == 0 ) {
            return window.location.assign("/daVinky.html");
        } else {
            return window.location.assign("/tacticalPplPleaser.html");
        };
    } else if ( scoreML == scoreSP && scoreML != (score4D || scoreBR || scoreDV || scorePP) ) {
        let i =  Math.floor(Math.random() * 2 );
        if ( i < 1 || i == 0 ) {
            return window.location.assign("/maleLead2.html");
        } else {
            return window.location.assign("/sugarParent.html");
        };
    } else if ( scoreML == scorePP && scoreML != (score4D || scoreBR || scoreDV || scoreSP) ) {
        let i =  Math.floor(Math.random() * 2 );
        if ( i < 1 || i == 0 ) {
            return window.location.assign("/maleLead2.html");
        } else {
            return window.location.assign("/tacticalPplPleaser.html");
        };
    } else if ( scoreSP == scorePP && scoreSP != (score4D || scoreBR || scoreDV || scoreML) ) {
        let i =  Math.floor(Math.random() * 2 );
        if ( i < 1 || i == 0 ) {
            return window.location.assign("/sugarParent.html");
        } else {
            return window.location.assign("/tacticalPplPleaser.html");
        };
    } 
    //three way ties
    else if ( score4D == scoreBR && score4D == scoreDV && score4D != (scoreML || scoreSP || scorePP) ) {
        let i =  Math.floor(Math.random() * 3 );
        if ( i == 0 ) {
            return window.location.assign("/4DChessmaster.html");
        } else if ( i == 1 ) {
            return window.location.assign("/biggestRizzler.html");
        } else {
            return window.location.assign("/davinky.html");
        };
    } else if ( score4D == scoreBR && score4D == scoreML && score4D != (scoreDV || scoreSP || scorePP) ) {
        let i =  Math.floor(Math.random() * 3 );
        if ( i == 0 ) {
            return window.location.assign("/4DChessmaster.html");
        } else if ( i == 1 ) {
            return window.location.assign("/biggestRizzler.html");
        } else {
            return window.location.assign("/maleLead2.html");
        };
    } else if ( score4D == scoreBR && score4D == scoreSP && score4D != (scoreDV || scoreML || scorePP) ) {
        let i =  Math.floor(Math.random() * 3 );
        if ( i == 0 ) {
            return window.location.assign("/4DChessmaster.html");
        } else if ( i == 1 ) {
            return window.location.assign("/biggestRizzler.html");
        } else {
            return window.location.assign("/sugarParent.html");
        };
    } else if ( score4D == scoreBR && score4D == scorePP && score4D != (scoreDV || scoreML || scoreSP) ) {
        let i =  Math.floor(Math.random() * 3 );
        if ( i == 0 ) {
            return window.location.assign("/4DChessmaster.html");
        } else if ( i == 1 ) {
            return window.location.assign("/biggestRizzler.html");
        } else {
            return window.location.assign("/tacticalPplPleaser.html");
        };
    } else if ( score4D == scoreDV && score4D == scoreML && score4D != (scoreBR || scoreSP || scorePP) ) {
        let i =  Math.floor(Math.random() * 3 );
        if ( i == 0 ) {
            return window.location.assign("/4DChessmaster.html");
        } else if ( i == 1 ) {
            return window.location.assign("/davinky.html");
        } else {
            return window.location.assign("/maleLead2.html");
        };
    } else if ( score4D == scoreDV && score4D == scoreSP && score4D != (scoreBR || scoreML || scorePP) ) {
        let i =  Math.floor(Math.random() * 3 );
        if ( i == 0 ) {
            return window.location.assign("/4DChessmaster.html");
        } else if ( i == 1 ) {
            return window.location.assign("/davinky.html");
        } else {
            return window.location.assign("/sugarParent.html");
        };
    } else if ( score4D == scoreDV && score4D == scorePP && score4D != (scoreBR || scoreML || scoreSP) ) {
        let i =  Math.floor(Math.random() * 3 );
        if ( i == 0 ) {
            return window.location.assign("/4DChessmaster.html");
        } else if ( i == 1 ) {
            return window.location.assign("/davinky.html");
        } else {
            return window.location.assign("/tacticalPplPleaser.html");
        };
    } else if ( score4D == scoreML && score4D == scoreSP && score4D != (scoreBR || scoreDV || scorePP) ) {
        let i =  Math.floor(Math.random() * 3 );
        if ( i == 0 ) {
            return window.location.assign("/4DChessmaster.html");
        } else if ( i == 1 ) {
            return window.location.assign("/maleLead2.html");
        } else {
            return window.location.assign("/sugarParent.html");
        };
    } else if ( score4D == scoreML && score4D == scorePP && score4D != (scoreBR || scoreDV || scoreSP) ) {
        let i =  Math.floor(Math.random() * 3 );
        if ( i == 0 ) {
            return window.location.assign("/4DChessmaster.html");
        } else if ( i == 1 ) {
            return window.location.assign("/maleLead2.html");
        } else {
            return window.location.assign("/tacticalPplPleaser.html");
        };
    } else if ( score4D == scoreSP && score4D == scorePP && score4D != (scoreBR || scoreDV || scoreML) ) {
        let i =  Math.floor(Math.random() * 3 );
        if ( i == 0 ) {
            return window.location.assign("/4DChessmaster.html");
        } else if ( i == 1 ) {
            return window.location.assign("/sugarParent.html");
        } else {
            return window.location.assign("/tacticalPplPleaser.html");
        };
    } else if ( scoreBR == scoreDV && scoreBR == scoreML && scoreBR != (score4D || scoreSP || scorePP) ) {
        let i =  Math.floor(Math.random() * 3 );
        if ( i == 0 ) {
            return window.location.assign("/biggestRizzler.html");
        } else if ( i == 1 ) {
            return window.location.assign("/daVinky.html");
        } else {
            return window.location.assign("/maleLead2.html");
        };
    } else if ( scoreBR == scoreDV && scoreBR == scoreSP && scoreBR != (score4D || scoreML || scorePP) ) {
        let i =  Math.floor(Math.random() * 3 );
        if ( i == 0 ) {
            return window.location.assign("/biggestRizzler.html");
        } else if ( i == 1 ) {
            return window.location.assign("/daVinky.html");
        } else {
            return window.location.assign("/sugarParent.html");
        };
    } else if ( scoreBR == scoreDV && scoreBR == scorePP && scoreBR != (score4D || scoreML || scoreSP) ) {
        let i =  Math.floor(Math.random() * 3 );
        if ( i == 0 ) {
            return window.location.assign("/biggestRizzler.html");
        } else if ( i == 1 ) {
            return window.location.assign("/daVinky.html");
        } else {
            return window.location.assign("/tacticalPplPleaser.html");
        };
    } else if ( scoreBR == scoreML && scoreBR == scoreSP && scoreBR != (score4D || scoreDV || scorePP) ) {
        let i =  Math.floor(Math.random() * 3 );
        if ( i == 0 ) {
            return window.location.assign("/biggestRizzler.html");
        } else if ( i == 1 ) {
            return window.location.assign("/maleLead2.html");
        } else {
            return window.location.assign("/sugarParent.html");
        };
    } else if ( scoreBR == scoreML && scoreBR == scorePP && scoreBR != (score4D || scoreDV || scoreSP) ) {
        let i =  Math.floor(Math.random() * 3 );
        if ( i == 0 ) {
            return window.location.assign("/biggestRizzler.html");
        } else if ( i == 1 ) {
            return window.location.assign("/maleLead2.html");
        } else {
            return window.location.assign("/tacticalPplPleaser.html");
        };
    } else if ( scoreBR == scoreSP && scoreBR == scorePP && scoreBR != (score4D || scoreDV || scoreML) ) {
        let i =  Math.floor(Math.random() * 3 );
        if ( i == 0 ) {
            return window.location.assign("/biggestRizzler.html");
        } else if ( i == 1 ) {
            return window.location.assign("/sugarParent.html");
        } else {
            return window.location.assign("/tacticalPplPleaser.html");
        };
    } else if ( scoreDV == scoreML && scoreDV == scoreSP && scoreDV != (score4D || scoreBR || scorePP) ) {
        let i =  Math.floor(Math.random() * 3 );
        if ( i == 0 ) {
            return window.location.assign("/daVinky.html");
        } else if ( i == 1 ) {
            return window.location.assign("/maleLead2.html");
        } else {
            return window.location.assign("/sugarParent.html");
        };
    } else if ( scoreDV == scoreML && scoreDV == scorePP && scoreDV != (score4D || scoreBR || scoreSP) ) {
        let i =  Math.floor(Math.random() * 3 );
        if ( i == 0 ) {
            return window.location.assign("/daVinky.html");
        } else if ( i == 1 ) {
            return window.location.assign("/maleLead2.html");
        } else {
            return window.location.assign("/tacticalPplPleaser.html");
        };
    } else if ( scoreDV == scoreSP && scoreDV == scorePP && scoreDV != (score4D || scoreBR || scoreML) ) {
        let i =  Math.floor(Math.random() * 3 );
        if ( i == 0 ) {
            return window.location.assign("/daVinky.html");
        } else if ( i == 1 ) {
            return window.location.assign("/sugarParent.html");
        } else {
            return window.location.assign("/tacticalPplPleaser.html");
        };
    } else if ( scoreML == scoreSP && scoreML == scorePP && scoreML != (score4D || scoreBR || scoreDV) ) {
        let i =  Math.floor(Math.random() * 3 );
        if ( i == 0 ) {
            return window.location.assign("/maleLead2.html");
        } else if ( i == 1 ) {
            return window.location.assign("/sugarParent.html");
        } else {
            return window.location.assign("/tacticalPplPleaser.html");
        };
    }
    //five way ties
    else if ( score4D == scoreBR && score4D == scoreDV && score4D == scoreML && score4D == scoreSP && score4D != scorePP ) {
        let i =  Math.floor(Math.random() * 5 );
        if ( i == 0 ) {
            return window.location.assign("/4DChessmaster.html");
        } else if ( i == 1 ) {
            return window.location.assign("/biggestRizzler.html");
        } else if ( i == 2 ) {
            return window.location.assign("/daVinky.html");
        } else if ( i == 3 ) {
            return window.location.assign("/maleLead2.html");
        } else {
            return window.location.assign("/sugarParent.html");
        };
    } else if ( score4D == scoreBR && score4D == scoreDV && score4D == scoreML && score4D == scorePP && score4D != scoreSP ) {
        let i =  Math.floor(Math.random() * 5 );
        if ( i == 0 ) {
            return window.location.assign("/4DChessmaster.html");
        } else if ( i == 1 ) {
            return window.location.assign("/biggestRizzler.html");
        } else if ( i == 2 ) {
            return window.location.assign("/daVinky.html");
        } else if ( i == 3 ) {
            return window.location.assign("/maleLead2.html");
        } else {
            return window.location.assign("/tacticalPplPleaser.html");
        };
    } else if ( score4D == scoreBR && score4D == scoreDV && score4D == scoreSP && score4D == scorePP && score4D != scoreML ) {
        let i =  Math.floor(Math.random() * 5 );
        if ( i == 0 ) {
            return window.location.assign("/4DChessmaster.html");
        } else if ( i == 1 ) {
            return window.location.assign("/biggestRizzler.html");
        } else if ( i == 2 ) {
            return window.location.assign("/daVinky.html");
        } else if ( i == 3 ) {
            return window.location.assign("/sugarParent.html");
        } else {
            return window.location.assign("/tacticalPplPleaser.html");
        };
    } else if ( score4D == scoreBR && score4D == scoreML && score4D == scoreSP && score4D == scorePP && score4D != scoreDV ) {
        let i =  Math.floor(Math.random() * 5 );
        if ( i == 0 ) {
            return window.location.assign("/4DChessmaster.html");
        } else if ( i == 1 ) {
            return window.location.assign("/biggestRizzler.html");
        } else if ( i == 2 ) {
            return window.location.assign("/maleLead2.html");
        } else if ( i == 3 ) {
            return window.location.assign("/sugarParent.html");
        } else {
            return window.location.assign("/tacticalPplPleaser.html");
        };
    } else if ( score4D == scoreDV && score4D == scoreML && score4D == scoreSP && score4D == scorePP && score4D != scoreBR ) {
        let i =  Math.floor(Math.random() * 5 );
        if ( i == 0 ) {
            return window.location.assign("/4DChessmaster.html");
        } else if ( i == 1 ) {
            return window.location.assign("/daVinky.html");
        } else if ( i == 2 ) {
            return window.location.assign("/maleLead2.html");
        } else if ( i == 3 ) {
            return window.location.assign("/sugarParent.html");
        } else {
            return window.location.assign("/tacticalPplPleaser.html");
        };
    } else if ( scoreBR == scoreDV && scoreBR == scoreML && scoreBR == scoreSP && scoreBR == scorePP && scoreBR != score4D ) {
        let i =  Math.floor(Math.random() * 5 );
        if ( i == 0 ) {
            return window.location.assign("/biggestRizzler.html");
        } else if ( i == 1 ) {
            return window.location.assign("/daVinky.html");
        } else if ( i == 2 ) {
            return window.location.assign("/maleLead2.html");
        } else if ( i == 3 ) {
            return window.location.assign("/sugarParent.html");
        } else {
            return window.location.assign("/tacticalPplPleaser.html");
        };
    } else {
        console.log("check");
    };
};
*/
getResult = () => {
    
    if ((score4D >= scoreBR) && (score4D >= scoreDV) && (score4D >= scoreML) && (score4D >= scoreSP) && (score4D >= scorePP)) {
        if ( score4D == scoreBR || scoreDV || scoreML || scoreSP || scorePP ) {
            tiebreaker4D();
        } else {
            return window.location.assign("/ELSAPersonalityQuiz/4DChessmaster.html");
        };
    } else if ((scoreBR >= score4D) && (scoreBR >= scoreDV) && (scoreBR >= scoreML) && (scoreBR >= scoreSP) && (scoreBR >= scorePP)) {
        if ( scoreBR == score4D || scoreDV || scoreML || scoreSP || scorePP ) {
            tiebreakerBR();
        } else {
            return window.location.assign("/ELSAPersonalityQuiz/biggestRizzler.html");
        };
    } else if ((scoreDV >= score4D) && (scoreDV >= scoreBR) && (scoreDV >= scoreML) && (scoreDV >= scoreSP) && (scoreDV >= scorePP)) {
        if ( scoreDV == score4D || scoreBR || scoreML || scoreSP || scorePP ) {
            tiebreakerDV();
            question.innerText = "Crime";
        } else {
            return window.location.assign("/ELSAPersonalityQuiz/daVinky.html");
        };
    } else if ((scoreML >= score4D) && (scoreML >= scoreBR) && (scoreML >= scoreDV) && (scoreML >= scoreSP) && (scoreML >= scorePP)) {
        if ( scoreML == score4D || scoreBR || scoreDV || scoreSP || scorePP ) {
            tiebreakerML();
        } else {
            return window.location.assign("/ELSAPersonalityQuiz/maleLead2.html");
        };
    } else if ((scoreSP >= score4D) && (scoreSP >= scoreBR) && (scoreSP >= scoreDV) && (scoreSP >= scoreML) && (scoreSP >= scorePP)) {
        if ( scoreSP == score4D || scoreBR || scoreDV || scoreML || scorePP ) {
            tiebreakerSP();
        } else {
            return window.location.assign("/ELSAPersonalityQuiz/sugarParent.html");
        };
    } else if ((scorePP >= score4D) && (scorePP >= scoreBR) && (scorePP >= scoreDV) && (scorePP >= scoreML) && (scorePP >= scoreSP)) {
        if ( scorePP == score4D || scoreBR || scoreDV || scoreML || scoreSP ) {
            tiebreakerPP();
        } else {
        return window.location.assign("/ELSAPersonalityQuiz/tacticalPplPleaser.html");
        };
    } else {
            question.innerText = "Crime";
    };
};

getNewQuestion = () => {
    
    if (availableQuestions.length === 0 || questionCounter >= MAX_QUESTIONS){
        //go to the end page
        getResult();
    };
    currentQuestion = availableQuestions[questionCounter];
    question.innerText = currentQuestion.question;
    questionNumber.innerText = currentQuestion.questionNumber;
    document.getElementById('bg').src = bg[questionCounter];

    questionCounter++;

    choices.forEach( choice => {
        const number = choice.dataset["number"];
        choice.innerText = currentQuestion.answers["choice" + number];
    });

    acceptingAnswers = true;
    window.scrollTo(0, 0);
};

choices.forEach(choice => {
    choice.addEventListener("click", e => {
        if(!acceptingAnswers) return;

        acceptingAnswers = false;
        const selectedChoice = e.target;
        const selectedAnswers = selectedChoice.dataset['number'];

        const classToApply = 
            selectedAnswers == currentQuestion.answers ? "selected" : "selected";
        
        selectedChoice.parentElement.classList.add(classToApply);
        
        setTimeout( () => {
            selectedChoice.parentElement.classList.remove(classToApply);
            getNewQuestion();
        }, 500);


        //add to scores
        if (selectedAnswers == 1) {
            score4D++
        } else if (selectedAnswers == 2) {
            scoreBR++
        } else if (selectedAnswers == 3) {
            scoreDV++
        } else if (selectedAnswers == 4) {
            scoreML++
        } else if (selectedAnswers == 5) {
            scoreSP++
        } else if (selectedAnswers == 6) {
            scorePP++
        } else {
            alert("HOW TF-?!?!?!");
        };
    });
});

startGame();
