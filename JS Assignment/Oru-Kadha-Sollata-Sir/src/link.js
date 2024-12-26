var story = document.getElementById("story");
var filler = document.createElement("p");
var nextString = [
    "Home Sweet Home",
    "My name is Karen",
    "Karen's new friend",
    "Lily's investigation",
    "Haunting discovery",
    "Rising paranoia"
];
function updateProgression(i, p) {
    filler.innerHTML = "Task: Complete Trial " + (i + 1) + "<br>Next: " + nextString[i];
    if (story.lastElementChild == filler)
        story.removeChild(filler);
    story.innerHTML += p;
    story.appendChild(filler);
}
updateProgression(0, "");
if (moreAboutHome("Riverside Manor", 25, false) == "stringnumberboolean") {
    let p2 = "<p>When they moved into that home, Karen was only 2 years old. When Kayva turned five, she had realized that she wanted more friends to play with. Once in a while they would go to their friend’s home in town. But for Karen, that was not enough.</p>";
    updateProgression(1, p2);
    if (moreAboutKaren("Lily & Harold", 0, true)) {
        let p3 = "<p>One fine day, Karen told Lily that she had found someone to play with. Karen described what her friend talked and looked like. Lily thought it could be someone from a nearby village. But Lily was curious to know how such a young child travelled alone from a village.</p>";
        updateProgression(2, p3);
        if (doesFriendExist("six", 6) == "six") {
            let p4 = "<p>Lily asked Karen to bring her friend home. But she told her that her friend refused to see anyone. Lily told Harold about this mysterious friend of Karen's. But he didn’t care much. Lily decided to take things in her own hand and figure out who this friend was.</p>";
            updateProgression(3, p4);
            if (sweetTooth(200, 50, 1, 100) == 25) {
                let p5 = "<p>She prepared Karen's favourite sweet one day and asked her if she wanted to take it to her friend. Karen was delighted and said, \"I\'m sure she\'ll love it. Thank you so much, ma!\" Lily followed her closely without being noticed.</p>";
                updateProgression(4, p5);
                if (convertToCelsius(32) == 0) {
                    let p6 = "<p>On reaching the river, she was stunned to see that Karen was talking to herself. Lily walked upto Karen and asked, \“Sweety, what are doing here all alone?\” Karen got upset and said, \"My friend ran away because of you!\" Lily was furious and dragged her back home.</p>";
                    updateProgression(5, p6);
                    if (aDifficultChoice(2) == "Talk to her husband about it") {
                        let p7 = "<p>Lily tried talking to Karen but she kept crying and locked herself inside her bedroom. Lily then decided to speak to Harold about it. Harold reassured her that it was normal for children her age to have an imaginary friend. Lily wasn't convinced in the least bit.</p>";
                        updateProgression(6, p7);
                        let strategies = [
                            "Try talking to her.",
                            "Make her favourite sweets.",
                            "Let her watch TV all night.",
                            "Don't tell her to study.",
                            "Read her a bedtime story.",
                            "Let her bunk school anytime."
                        ];
                        if (consoleKaren(strategies) == 154) {
                            let p8 = "<p>Karen told Lily that her friend had come to her bedroom to meet her since she wouldn't let her out. Lily was shocked and asked her, \"What did she say?\" Karen said, \"She wants to kill you ma. I\'m very scared.\" Lily\'s face turned pale as she held Karen tightly.</p>";
                            filler.innerHTML = "Yay! You've completed your first Javascript Lab!" +
                                "<br>Click <a id=\"link\" href=\"\">here</a> to read the remaining story!";
                            story.removeChild(filler);
                            story.innerHTML += p8;
                            story.appendChild(filler);
                        }
                    }
                }
            }
        }
    }
}
document.getElementById("link").addEventListener("click", function (e) {
    e.preventDefault();
    let theEnd = "<p>Lily rushed to Harold and told him what happened. Harold tried to console her and told her everything would be alright. Lily pleaded Harold, \"Won't you please take our daughter to a doctor? She said the word \'kill\'. Something is definitely wrong with her.\"</p><p>Harold ignored her statement and asked her to calm down. This only made Lily more angry. She started shouting at Harold, \"You won't let us move to the town close by! You won't take our daughter to the hospital. You don't love us! You never did!\"</p><p>Harold snapped when he heard that. He broke down, \"The problem isn't with our daughter. It's with you! Karen died 6 months ago. You and Karen were on a boat ride when she drowned in the river. THERE IS NO KAREN. THERE IS NO FRIEND. It's all in your head.\"</p><p>Lily listened to everything Harold had to say and couldn't believe what she was hearing. She started laughing hysterically and had lost herself. She fell unconcious Harold stood there crying to himself.</p><p>--THE END--</p>";
    story.innerHTML += theEnd;
    window.scrollBy(0, 1000);
});
