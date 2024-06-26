
let a;
let b;
let c;
let d;
let e;
let f;
const totalQuestions = 10;
const questionNumber = ['Question 1', 'Question 2', 'Question 3', 'Question 4', 'Question 5', 'Question 6', 'Question 7', 'Question 8', 'Question 9', 'Question 10'];
const question = [
    "You walk into your first class of the semester, what do you do?",
    "The lecturer's here and you realize that you'll really have to take this course no matter what (yippie?) Now, quick, get in your seat!",
    "While the lecturer introduces themselves, you fantasize about having the perfect lecturer to teach you this course...",
    "Wake up! Your first group assignment is here! What do you do?",
    "Great! You've got a group. Aww, while breaking the ice, someone just complimented your outfit! What were you wearing?",
    "While your groupmates made some small talk, you saw the lecturer pull up the assignment brief. What assignment are you hoping for?",
    "There's your assignment, you gotta make a presentation and write a paper! Job delegation time! What do you pick?",
    "Phew! That was a tough day at school! Luckily, this was the only class you had today. What do you do now?",
    "Hmm, some time has passed and there still isn't any news in the group about your progress… Time to send a message to the group?",
    "As you wait for their respond while you lay in bed, you begin worrying about your groupmates. What if they're the type of group mate you hate the most?"
]
const text4D = [
    "Sus out who is the lecturer and what are the assessments. Important stuff, y'know?",
    "Sit at the back so you can see everything from the teacher to your classmates to their laptop screens… Huh? Studying? You'll do that at home on your own.",
    "A boring lecturer but they let you do whatever you want in class so long as things remain respectful. Easy, no trouble. And hey, you might be able to convince them to change the assessment a little if you're nice enough.",
    "Sit back and let someone else make the group chat, they need the grades too, so let them do the work.",
    "Something a little grunge, maybe a hoodie or some subtle yet sick highlights. Comfy, but with a bit of cyberpunk style.",
    "Individual written assignment, no hassles, easy.",
    "You are the type to do the whole assignment yourself secretly and/or redo other people's parts for them.",
    "Play some video games, gotta get the daily stuff in!",
    "[You don't send anything, your part is done and they have to worry about their own grades too, not just yours. You stay silent.]",
    "The kind that messes up your work after you've finished it… (Sigh) Time to redo…"
]
const textBR = [
    "Look around for interesting people and see if you know anyone. You need someone to talk to when class gets boring!",
    "Sit with your friends, maybe somewhere in the back. How else are you going to spill the tea with them while we go over tutorials? Class is no fun when there's no one to enjoy it with.",
    "A fun lecturer that chats with you in class, tells you stories, and gives you advice. They're cool, chill, and down to earth. You may not learn much about the lecture but you sure do learn about life.",
    "Make the group chat and send some memes, class is bad enough, let's make it fun. Uni is for living too!",
    "Colours, be it well put together or monochrome, your outfit was COORDINATED. You always look your best, duh.",
    "Video assignment! We might get to do something fun!",
    "You make the presentation more exciting, add engaging elements, and make the show enjoyable.",
    "Go on social media or catch up on shows! Gotta stay in the loop!",
    "[You send a sticker or meme where there are eyes peeking around and wait for someone to reply.]",
    "The scary, controlling, too-serious type. Makes you feel stupid…"
]
const textDV = [
    "Do your own thing until the lecturer comes, let's hope no one talks to you. Maybe going on your phone would help…",
    "Sit at the side, not too far behind but definitely not front and centre. You want to go on your screen and make your own notes, maybe even take the time to do your own projects…",
    "An engaging lecturer who is a little bit eccentric and challenges you to think outside the box. They make assignments a pain in the neck but stimulating. They are often misunderstood and troublesome but are actually quite exciting to work with.",
    "Read the assignment brief again, what are the rules? What needs to be done? Find out the details.",
    "You have subtle things on your person that showcase your personality, mostly accessories like stickers and rings.",
    "Something that tests your craft, maybe something unconventional?",
    "You are in charge of slides design, and you are prepared to blow the class away with more than just templates.",
    "Engage in actual hobbies cause you have a personality, all these other options are crazy.",
    "“Hey guysss here's what I have so far, how about you guys?”",
    "The difficult type, can't make up their mind, are inconsistent, and overall just hard to cooperate with."
]
const textML = [
    "Scroll, make conversation with some acquaintances you see around so things aren't too awkward but you know you might not sit with them later.",
    "Got a chair? Got your bum. You don't care where you sit so long as it is comfortable. After all, you might be able to catch up on some zzzz….",
    "A professional lecturer who gets the job done. Which… Is just about any lecturer. So long as they're not reading from the slide, you don't care if they're crazy. You'll get through the course just the same anyway.",
    "Wait till someone tells you what to do, in the meantime note down deadlines for yourself first.",
    "T-shirt and shorts, the default uni attire, no personality, dry af. Were they maybe complimenting your face instead of your clothes?",
    "Anything is fine so long as we get it done together as a group.",
    "You are the responsible free-rider, people say you don't try hard enough but they don't see the hard work you put in.",
    "Food, jom! Mamak! Time to lepak and hang out with friends!",
    "“helooo so how arh the assignment? Need anything?”",
    "The kind that tries too hard. It's just an assignment… Why waste so much effort? You're tired enough."
]
const textSP = [
    "Double-check if you got into the right class and then scout out potential group mates before preparing your notes.",
    "Sit in the front or middle, makes it easier to ask the lecturer questions. You paid to be here after all, and you'd like a good grade from this to help your CGPA look nicer.",
    "A strict lecturer who knows quality when they see it, doesn't take half-baked effort, and puts their foot down. They help you challenge yourself and offer you critical but extremely useful feedback, making sure you actually learn.",
    "Start delegating tasks, let's get this done. You have more than just this course to worry about…",
    "Professional attire, you look ready for a presentation from day one. You look classy, clean, and ready. Lecturers secretly like you.",
    "Something typical so you know what to expect and can get it done fast. Written assignments are best.",
    "You're the leading speaker, you delegate the tasks, and make sure everything is done.",
    "Back to work, gotta settle things before the storm.",
    "“Heya, how are we doing on progress? @Groupmate1 any updates?”",
    "The kind that can't take any correction or feedback. Insecure much?"
]
const textPP = [
    "Mingle with people you recognize and hope they say hi to you. You'll check out the CN in the meantime.",
    "Follow your friends and just sit where they sit. You'll figure out how to best deal with this lecturer later. For now, you need friends. So let's stick with them. Maybe make some conversation? How was their sem break?",
    "A kind lecturer the kind that cares about you, praises you, and makes you feel appreciated. You can look up to them as role models both in work and in life. They make the classroom feel safe and help you to enjoy your life in uni too.",
    "You already have your notes done but you go with the flow and see how you can help in the group.",
    "You wear pretty default clothing but you are slowly learning to show more of your personality. You're just a little shy at trying out a new look.",
    "Something typical but also exciting. Maybe a presentation on any free topic?",
    "You help tie up loose ends, double-heck thoroughly, second in command.",
    "Clean up after yourself and get a bit of work done with a mix of food and fun.",
    "“Hey guyssss any updates on the assignment? :D If anyone needs some help, let me know!”",
    "The MIA kind, they want to be considered but aren't even there? What do you even do?"
]

// ^^VALUES^^ vvFUNCTIONSvv //

function start() {
    a = 0;
    b = 0;
    c = 0;
    d = 0;
    e = 0;
    f = 0;
    counter = 0;
    currentQuestion = 0;
    document.getElementById("game").style.display = "flex";
    document.getElementById("home").style.display = "none";
    document.getElementById("results").style.display = "none";
}

// Question counter //
let btnCounter = document.querySelector("#nQBtn");
let counter = 0;

btnCounter.addEventListener('click', function() {
    counter++;
    document.getElementById("questionNumber").innerHTML = questionNumber[counter];
    document.getElementById("question").innerHTML = question[counter];
    document.getElementById("text4D").innerHTML = '<label>test</label>';
    document.getElementById("textBR").innerHTML = textBR[counter];
    document.getElementById("textDV").innerHTML = textDV[counter];
    document.getElementById("textML").innerHTML = textML[counter];
    document.getElementById("textSP").innerHTML = textSP[counter];
    document.getElementById("textPP").innerHTML = textPP[counter];
    if (counter == 9) {
        document.getElementById("finBtn").style.display = "flex";
        document.getElementById("nQBtn").style.display = "none";
    }
})

let finishBtn = document.querySelector("#finBtn");

finishBtn.addEventListener('click', function() {
    document.getElementById("game").style.display = "none";
    document.getElementById("home").style.display = "none";
    document.getElementById("results").style.display = "results";
})