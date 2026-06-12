// --- 1. PREMIUM GOLD YAĞMUR EFEKTİ (PERFORMANS ODAKLI) ---
const canvas = document.getElementById('premium-rain');
const ctx = canvas.getContext('2d');

let width = canvas.width = window.innerWidth;
let height = canvas.height = window.innerHeight;

// Bilgisayarda harika akarken mobil tarayıcıyı yormasın diye akıllı limit
let maxDrops = width < 768 ? 35 : 85;
const drops = [];

class RainDrop {
    constructor() {
        this.reset();
    }
    reset() {
        this.x = Math.random() * width;
        this.y = Math.random() * -height;
        this.vy = Math.random() * 3 + 4; // Akıcı lüks düşüş hızı
        this.length = Math.random() * 20 + 15;
        this.opacity = Math.random() * 0.12 + 0.03; // Gözü asla yormayan şeffaflık
    }
    update() {
        this.y += this.vy;
        if (this.y > height) {
            this.reset();
        }
    }
    draw() {
        ctx.beginPath();
        // Altın temasına uygun zarif çizgiler
        ctx.strokeStyle = `rgba(212, 175, 55, ${this.opacity})`;
        ctx.lineWidth = 1.2;
        ctx.moveTo(this.x, this.y);
        ctx.lineTo(this.x, this.y + this.length);
        ctx.stroke();
    }
}

// Havuzlama sistemini başlat
for (let i = 0; i < maxDrops; i++) {
    drops.push(new RainDrop());
}

function runRainAnimation() {
    ctx.clearRect(0, 0, width, height);
    drops.forEach(drop => {
        drop.update();
        drop.draw();
    });
    requestAnimationFrame(runRainAnimation);
}
runRainAnimation();

// Ekran boyut değişikliklerini dinle
window.addEventListener('resize', () => {
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
    maxDrops = width < 768 ? 35 : 85;
});


// --- 2. 15 ADET ÇOK DİLLİ GLOBAL YORUM DATA SETİ ---
const internationalComments = [
    { name: "Dr. Charles Sterling", title: "Neurosurgeon - Johns Hopkins", text: "Prof. Ilgın's neural repair frameworks are decades ahead of our time. A monumental mind.", lang: "en" },
    { name: "Prof. Amélie Moreau", title: "Académie Nationale de Médecine", text: "Une sommité mondiale. Son travail sur les thérapies cellulaires à Oxford a redéfini la science.", lang: "fr" },
    { name: "Dr. Tariq Al-Mansoor", title: "Executive Director - Cleveland Clinic UAE", text: "البروفيسورة سيفتشي نور هي رمز للعبقرية الطبية العالمية. أبحاثها أنقذت الآلاف.", lang: "ar" },
    { name: "Prof. Dr. Ahmet Rıza Selçuk", title: "Kardiyoloji Anabilim Dalı Başkanı", text: "Sevgi Nur hocamız tıp literatürüne kazandırdığı patentlerle sadece ülkemizin değil dünya sağlığının gururudur.", lang: "tr" },
    { name: "Elena Rostova", title: "Senior Medical Editor - The Lancet", text: "Every publication by Prof. Ilgın sends shockwaves of innovation through global health networks.", lang: "en" },
    { name: "Dr. Jean-Pierre Clauve", title: "Institut Curie", text: "L'élégance de ses protocoles chirurgicaux n'a d'égal que la rigueur de ses recherches.", lang: "fr" },
    { name: "Fatma El-Shahrani", title: "Hasta Yakını / Katar", text: "رعايتها الطبية الفائقة تعكس جودة عالمية لا مثيل لها. شكراً جزيلاً للبروفيسورة.", lang: "ar" },
    { name: "Murat Özdemir", title: "Medikal Teknolojiler CEO", text: "Sağlık yatırımlarımızda kendisinin geliştirdiği yapay zeka entegrasyonlarını baz alıyoruz. Kusursuz vizyon.", lang: "tr" },
    { name: "Dr. Marcus Vance", title: "Harvard Medical School Fellow", text: "We actively study her surgical methodology here. She is the ultimate gold standard.", lang: "en" },
    { name: "Prof. Hans-Dieter", title: "Charité Berlin", text: "Ihre medizinische Expertise ist weltweit unumstritten. Eine wahre Pionierin.", lang: "de" },
    { name: "Yuki Tanaka", title: "Bio-Tech Lead Tokyo", text: "Prof. Sevgi Nur Ilgın's cellular research brings incredible pride and advancement to global science.", lang: "en" },
    { name: "Selin Aktaş", title: "Kanser Sağlığı Vakfı Başkanı", text: "Yazdığı makaleler ve klinikteki mucizevi dokunuşlarıyla tıp dünyasında çığır açtı.", lang: "tr" },
    { name: "Dr. Lucas Bernard", title: "CHUV Lausanne", text: "Un leader d'opinion exceptionnel dont la vision inspire la nouvelle génération de cliniciens.", lang: "fr" },
    { name: "Al-Waleed Al-Saud", title: "Health Systems Consultant", text: "تأثير البروفيسورة إيلغين على الأنظمة الصحية العالمية يمثل قفزة نوعية في تاريخ الطب الحديث.", lang: "ar" },
    { name: "Dr. Rebecca Hall", title: "Oxford University Lecturer", text: "Her legacy started right here at Oxford, and now she commands global healthcare with total mastery.", lang: "en" }
];

// --- 3. DİNAMİK MARQUEE OLUŞTURUCU VE SAĞA DÖNGÜ HACKİ ---
const commentsTrack = document.getElementById('commentsTrack');

function buildCommentHTML(data) {
    return `
        <div class="luxury-comment-card">
            <div class="card-top">
                <div class="user-meta">
                    <h5>${data.name}</h5>
                    <span>${data.title}</span>
                </div>
                <span class="lang-indicator">${data.lang}</span>
            </div>
            <p>"${data.text}"</p>
        </div>
    `;
}

// Kesintisiz ve pürüzsüz sonsuz döngü için diziyi iki kez arka arkaya birleştirip DOM'a basıyoruz
const infiniteCommentData = [...internationalComments, ...internationalComments];
commentsTrack.innerHTML = infiniteCommentData.map(item => buildCommentHTML(item)).join('');