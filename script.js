// ================= CHAPTER DATA =================

const chapters = [

`अध्याय 1

Notification

रात के लगभग 11 बज रहे थे।

महोबा की सर्द हवा खिड़की की दरारों से कमरे में घुस रही थी।
टेबल पर बिखरी SSC CGL की किताबें, हाईलाइटर की हल्की-सी गंध, और मोबाइल स्क्रीन की सफ़ेद रोशनी — यही मेरी दुनिया थी उन दिनों।

मैं English के idioms revise कर रहा था, लेकिन ध्यान बार-बार Telegram की notification पर जा रहा था।

“Prashant Solanki English Group — 157 unread messages.”

मैंने मोबाइल उठाया।
ग्रुप खोला।

वही रोज़ का माहौल।
किसी ने doubt पूछा था।
किसी ने answer दिया था।
किसी ने mock score share किया था।

और उन्हीं नामों में एक नाम बार-बार दिखता था —
Nilmm Shinde।

वो active रहती थी।
साफ़-सुथरे answers।
कम शब्द, सटीक जवाब।

हमारी बात बस पढ़ाई तक सीमित थी।
ना hello, ना personal chat।
बस — “Yes, option C is correct.”

मुझे तब क्या पता था कि वही लड़की, एक दिन मेरी ज़िंदगी की सबसे अहम कहानी का पहला पन्ना पलटने वाली है।

7 February 2024

उस रात मैं vocab revise कर रहा था, तभी एक notification आई —

“You were added to a group.”

Group का नाम था — English Vocab Quiz.

Members — 7।

Owner — Vidhi Sahu
Admin — Nilmm Shinde

मैं हल्का-सा मुस्कुराया।
“चलो, पढ़ाई का एक और ठिकाना मिल गया।”`,

`अध्याय 2

Direct Message

दिन बीतते गए।

मैंने message किया —
“Ab batao… ab koi nahi dekh raha.”

Reply आया —
“Tum bade ajeeb ho.”

“Score bata do bas.”

“Tumse thoda kam.”

वहीं से शुरुआत हुई।
छोटी-सी।
पर सच्ची।`,

`अध्याय 3

रात 2:17 AM

“Tum soti nahi ho?”

“Neend tab aati hai jab dimaag shaant ho.”

“Past hai.”

उस रात पहली बार उसने अपने past के बारे में बताया।

हमारी बातें syllabus से निकलकर ज़िंदगी तक पहुँच चुकी थीं।`,

`अध्याय 4

16 June

उसने casually लिखा —
“Waise 16 June ko mera birthday hota hai.”

मैंने video बनाया।

रात 12 बजे भेजा।

Reply आया —
“Ye sab mere liye?”

“Haan.”

“Pagal ho kya?”

शायद था।`,

`अध्याय 5

31 July — Silence

Result खराब आए थे।

मैं टूट रहा था।

उस रात मैंने Telegram uninstall कर दिया।

बिना बताए।

Vidhi को भी नहीं बताया।`,

`अध्याय 6

23 December — “Aap kaun?”

“Aryan? Ye tum nahi ho?”

“Mat mazaak karo. Mujhe laga tum mar gaye.”

उस line में शिकायत भी थी।
अपनापन भी।`,

`अध्याय 7

Number… और एक अजीब-सी जिद

“Waise tumhara number kya hai?”

“Privacy issues.”

उस रात मैंने उसे block कर दिया।`,

`अध्याय 8

वापसी… फिर से

“Tumhe lagta hai jo kiya sahi tha?”

“Galti ho gayi.”

हम फिर बात करने लगे।`,

`अध्याय 9

Unknown Number

Truecaller पर नाम दिखा —
Vidhu Sahu.

उस दिन पहली बार उसका number save हुआ।

Contact name —
“Vidhi.”`,

`अध्याय 10

Flirting Phase

“Kuch feel hota hai kya?”

“Mera dil pathar hai.”

लेकिन softness आ चुकी थी।`,

`अध्याय 11

3 March 2025

“Hota hai.”

“Kitna?”

“Utna… jitna nahi hona chahiye tha.”

उस रात हमने स्वीकार किया —
हम सिर्फ़ दोस्त नहीं रहे।`,

`अध्याय 12

I Love… YouTube

“I love YouTube.”

“Aur main Google.”

“Mujhe kuch khaas karna hai.”`,

`अध्याय 13

26 March 2025 — 11:11 PM

11:11 PM

Send.

“Aryuuuu, mujhe rona aa rha he
I love you Aryu
Mujhe aisa lg rha he jese bhut saalo ka spna aaj poora ho gya.”

“Ha.”

“I love you too, Aryuu.”

ये अंत नहीं था।
ये बस शुरुआत थी।

Picture abhi baaki hai… 😉`
];

// ================= VARIABLES =================

let currentChapter = 0;
let typingSpeed = 20;

// ================= INIT =================

window.onload = function () {
    showChapter();
    startClock();
};

// ================= SHOW CHAPTER =================

function showChapter() {
    const title = document.getElementById("chapterTitle");
    const text = document.getElementById("storyText");

    title.innerText = "Chapter " + (currentChapter + 1);
    text.innerHTML = "";

    typeWriter(chapters[currentChapter], text);
}

// ================= TYPEWRITER =================

function typeWriter(text, element) {
    let i = 0;

    function typing() {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
            setTimeout(typing, typingSpeed);
        }
    }

    typing();
}

// ================= NAVIGATION =================

function nextChapter() {
    if (currentChapter < chapters.length - 1) {
        currentChapter++;
        showChapter();
    }
}

function prevChapter() {
    if (currentChapter > 0) {
        currentChapter--;
        showChapter();
    }
}

// ================= MUSIC =================

function playMusic() {
    const music = document.getElementById("bgMusic");
    music.play();
}

// ================= CLOCK =================

function startClock() {
    const clock = document.getElementById("clock");

    setInterval(() => {
        const now = new Date();
        let hours = now.getHours().toString().padStart(2, '0');
        let minutes = now.getMinutes().padStart?.(2, '0') || String(now.getMinutes()).padStart(2,'0');
        clock.innerText = hours + ":" + minutes;
    }, 1000);
}
