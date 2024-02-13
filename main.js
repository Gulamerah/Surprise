//music
window.addEventListener('click', () => {
    document.getElementById("music").play();
});

const e = {
    "hi :>,so i created this surpise 4 days ago,sorry if it was bad,i don't have enough time... :<,anyways want to see my surpise?": "https://media1.tenor.com/m/wrK_6KnCPhsAAAAC/cat-dance.gif",
    "well tomorrow was valentine so i created it,i tell my best friend about this and suddenly everyone knew it so they want me to make valentine give for them,and i didnt do it,they even give me some money tho but still i dont want to because this was my gift for someone who read this,i wanted to give this just to you so here we are"
    
    : "https://media1.tenor.com/m/GOabrbLMl4AAAAAd/plink-cat-plink.gif",
    "i make this with all of my hearth and i will delete it after this or just saved it in my folder...": "https://media1.tenor.com/m/89MPCBQDPKYAAAAd/plink-nerd.gif",
    "tomorrow was valentine....can i be you valentine?": "https://media1.tenor.com/m/MHcdyIl-GGkAAAAC/mochi-mochimochi.gif",
    "pls be honest,i take every critize.....,can you?": "https://media.tenor.com/UdThavVus9oAAAAi/peach-and.gif",
    "please, please, please...": "https://media.tenor.com/r12YOeLvoLsAAAAi/sad-cute.gif",   
    "i know maybe we will never meet but i really want to make this,i will try to change myself however you want..": "https://media1.tenor.com/m/BrSW_82G4xkAAAAC/pa-ti-bb.gif",
    "don't make yourself look like a stranger,you were never stranger to me, i don't know your name,your face,everything but its okay,if you don't want to i will never force you,i don't care what you say about yourself i want to make you mine,im serious alright,you make me happy :)": "https://media1.tenor.com/m/pFz1Q12_hXEAAAAd/cat-holding-head-cat.gif",
    "my heart melt for you": "https://media1.tenor.com/m/XAabbheOS24AAAAC/goma-happy.gif",
    "Just for this oneeeeee": "https://media1.tenor.com/m/QL6iJs82s1gAAAAC/pusheen-cat.gif",
    "thousands please": "https://media1.tenor.com/m/Y3j6d3RoSEoAAAAC/sad-cat-content-aware-scale.gif",
    "Please say yes!": "https://media1.tenor.com/m/rKPIRDj0h0oAAAAC/crying-cat-blink.gif",
    "fine :(": "https://media.tenor.com/FxAkwHS0MDkAAAAi/sad.gif",
    "hmmmm....alright": "https://media.tenor.com/r12YOeLvoLsAAAAi/sad-cute.gif"
}
//https://media.tenor.com/r12YOeLvoLsAAAAi/sad-cute.gif
//https://media1.tenor.com/m/aKFaZBrZFYcAAAAC/excited-spin.gif
const preloadedImages = {};
let loadedImages = 0;
const totalImages = Object.keys(e).length;

// I don't really know wtf am I doing
function preloadImages() {
    for (const key in e) {
        if (e.hasOwnProperty(key)) {
            const img = new Image();
            img.src = e[key];
            preloadedImages[key] = img;
            img.onload = () => {
                loadedImages++;
                if (loadedImages === totalImages) {
                    showInitialMessage();
                }
            }
        }
    }
}

// literally writing this code at 2am :rofl:
function showInitialMessage() {
    document.getElementById("loading").style.display = "none"
    const initialMessage = Object.keys(e)[0];
    const initialImage = preloadedImages[initialMessage];
    document.getElementById("message").textContent = initialMessage;
    document.getElementById("pic").src = initialImage.src;
}

window.addEventListener("load", () => {
    preloadImages();
    document.getElementById("yes").addEventListener("click", () => {
        document.getElementById("message").textContent = "YIPEEEEEEEEE!! :3";
        document.getElementById("pic").src = "https://media1.tenor.com/m/aKFaZBrZFYcAAAAC/excited-spin.gif";
        document.querySelectorAll(".button").forEach(button => button.classList.add("hidden"));
    });

    document.getElementById("no").addEventListener("click", () => {
        const keys = Object.keys(e);
        const currentIndex = keys.indexOf(document.getElementById("message").textContent);
        const nextIndex = currentIndex < keys.length - 1 ? currentIndex + 1 : currentIndex;
        const nextMessage = keys[nextIndex];
        const nextImage = preloadedImages[nextMessage];
        document.getElementById("message").textContent = nextMessage;
        document.getElementById("pic").src = nextImage.src;

        if (nextIndex === keys.length - 2) {
            document.querySelectorAll(".button").forEach(button => button.classList.add("hidden"));
            setTimeout(() => {
                window.location.href = "https://www.wikihow.health/Help-Loved-Ones-with-Delusional-Disorder";
                // lmao
            }, 2000)
        }
    });
});