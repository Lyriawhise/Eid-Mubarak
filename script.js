const eidMessages = [
    {
        text: "Minal Aidzin Wal Faidzin. Mohon Maaf Lahir & Batin.",
        source: ""
    },
    {
        text: "Taqabbalallahu minna wa minkum. Semoga Allah menerima amal ibadah kita.",
        source: ""
    },
    {
        text: "Tak ada manusia yang sempurna. Maafkan segala khilaf dan salah.",
        source: ""
    },
    {
        text: "Setelah sebulan penuh berpuasa, kini saatnya merayakan kemenangan. Selamat Idul Fitri!",
        source: ""
    },
    {
        text: "Semoga Allah menerima puasa kita dan memberkahi kita di hari kemenangan ini.",
        source: ""
    },
    {
        text: "Bulan Ramadhan adalah (bulan) yang di dalamnya diturunkan Al-Qur'an sebagai petunjuk bagi manusia dan penjelasan-penjelasan mengenai petunjuk itu dan pembeda (antara yang hak dan yang batil).",
        source: "QS Al-Baqarah 2:185"
    },
    {
        text: "Jadilah pemaaf dan suruhlah orang mengerjakan yang ma'ruf, serta berpalinglah dari orang-orang yang bodoh.",
        source: "QS Al-A'raf 7:199"
    },
    {
        text: "Jika kamu memaafkan, menyingkirkan kesalahan orang lain dan mengampuni mereka, maka Allah akan mengampunimu. Sungguh, Allah Maha Pengampun, Maha Penyayang.",
        source: "QS At-Taghabun 64:14"
    },
    {
        text: "Sesungguhnya orang yang paling mulia di antara kamu di sisi Allah ialah orang yang paling bertakwa di antara kamu.",
        source: "QS Al-Hujurat 49:13"
    },
    {
        text: "Semoga Ramadhan yang kita jalani menjadi pembersih dosa-dosa kita yang lalu.",
        source: ""
    },
    {
        text: "Idul Fitri adalah hari kembalinya kita kepada fitrah, kembali suci seperti bayi yang baru lahir.",
        source: ""
    },
    {
        text: "Semoga Allah memberkahi keluarga dan kerabat kita di hari yang fitri ini.",
        source: ""
    },
    {
        text: "Puasa telah usai, namun semangat Ramadhan tetap kita bawa sepanjang tahun.",
        source: ""
    },
    {
        text: "Ramadhan telah pergi, namun ketaqwaan tetap kita jaga.",
        source: ""
    },
    {
        text: "Hari ini adalah hari yang penuh berkah, hari dimana kita memaafkan dan dimaafkan.",
        source: ""
    }
];

// Ketupat SVG images - Using different colors for variety
const ketupatImages = [
    `data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" viewBox="0 0 80 80"><polygon points="40,5 75,40 40,75 5,40" stroke="%2348a447" stroke-width="2" fill="%2380cc7e" /><line x1="40" y1="5" x2="40" y2="75" stroke="%2348a447" stroke-width="2" /><line x1="5" y1="40" x2="75" y2="40" stroke="%2348a447" stroke-width="2" /></svg>`,
    `data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" viewBox="0 0 80 80"><polygon points="40,5 75,40 40,75 5,40" stroke="%23d4aa00" stroke-width="2" fill="%23f2d649" /><line x1="40" y1="5" x2="40" y2="75" stroke="%23d4aa00" stroke-width="2" /><line x1="5" y1="40" x2="75" y2="40" stroke="%23d4aa00" stroke-width="2" /></svg>`,
    `data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" viewBox="0 0 80 80"><polygon points="40,5 75,40 40,75 5,40" stroke="%23986c0e" stroke-width="2" fill="%23c9a769" /><line x1="40" y1="5" x2="40" y2="75" stroke="%23986c0e" stroke-width="2" /><line x1="5" y1="40" x2="75" y2="40" stroke="%23986c0e" stroke-width="2" /></svg>`
];

// Audio for pop sound (base64 encoded short MP3)
const popSound = new Audio("data:audio/mp3;base64,SUQzAwAAAAAAI1RTU0UAAAAPAAADTGF2ZjU4Ljc2LjEwMAAAAAAAAAAAAAAA//tAwAAAAAAAAAAAAAAAAAAAAAAAWGluZwAAAA8AAAACAAAFegD///////////////////////////////////////////8AAAAATGF2YzU4LjEzAAAAAAAAAAAAAAAAJAUgAAAAAAAABXqOU4lxAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA//sQxAADwAABpAAAACAAADSAAAAETEFNRTMuMTAwVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVf/7EMQpg8AAAaQAAAAgAAA0gAAABFVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVV");

// Create Takbir audio
// Note: In a real application, you would use a proper audio file instead of this placeholder

const takbirAudio = new Audio("takbir.mp3");
// DOM elements
const ketupatContainer = document.getElementById('ketupatContainer');
const messageModal = document.getElementById('messageModal');
const messageText = document.getElementById('messageText');
const messageSource = document.getElementById('messageSource');
const closeModal = document.getElementById('closeModal');
const resetBtn = document.getElementById('resetBtn');
const muteBtn = document.getElementById('muteBtn');
const soundText = document.getElementById('soundText');
const playTakbir = document.getElementById('playTakbir');
const pauseTakbir = document.getElementById('pauseTakbir');
const shareWhatsApp = document.getElementById('shareWhatsApp');
const toggleZakatBtn = document.getElementById('toggleZakatBtn');
const zakatCalculator = document.getElementById('zakatCalculator');
const calculateZakat = document.getElementById('calculateZakat');
const zakatResult = document.getElementById('zakatResult');
const zakatTotal = document.getElementById('zakatTotal');

// Global settings
let muted = false;
let ketupatCount = 0;
const maxKetupat = 20;
let ketupatInterval;

// Initialize the app
function init() {
    startKetupatGeneration();
    setupEventListeners();
}

// Start generating ketupat
function startKetupatGeneration() {
    ketupatInterval = setInterval(() => {
        if (ketupatCount < maxKetupat) {
            createKetupat();
            ketupatCount++;
        } else {
            clearInterval(ketupatInterval);
        }
    }, 800);
}

// Create a ketupat and animate it
function createKetupat() {
    const ketupat = document.createElement('div');
    ketupat.className = 'ketupat';

    // Randomly select a ketupat image
    const randomImageIndex = Math.floor(Math.random() * ketupatImages.length);

    // Create the image element
    const img = document.createElement('img');
    img.src = ketupatImages[randomImageIndex];
    img.alt = 'Ketupat';
    ketupat.appendChild(img);

    // Position randomly on x-axis
    const xPos = Math.random() * (ketupatContainer.offsetWidth - 80);
    ketupat.style.left = `${xPos}px`;

    // Set animation duration randomly between 8-15 seconds
    const fallDuration = 8 + Math.random() * 7;
    ketupat.style.animationDuration = `${fallDuration}s`;

    // Add to container
    ketupatContainer.appendChild(ketupat);

    // Add click event
    ketupat.addEventListener('click', () => {
        if (!ketupat.classList.contains('opened')) {
            openKetupat(ketupat);
        }
    });

    // Remove once animation completes
    ketupat.addEventListener('animationend', () => {
        ketupat.remove();
        ketupatCount--;

        // If all ketupat are gone, start generating again
        if (ketupatCount === 0 && !ketupatInterval) {
            startKetupatGeneration();
        }
    });
}

// Open a ketupat to reveal message
function openKetupat(ketupat) {
    ketupat.classList.add('opened');

    // Play sound if not muted
    if (!muted) {
        popSound.currentTime = 0;
        popSound.play();
    }

    // Create particles
    createParticles(ketupat);

    // Show random message
    const randomMessage = eidMessages[Math.floor(Math.random() * eidMessages.length)];
    messageText.textContent = randomMessage.text;
    messageSource.textContent = randomMessage.source;
    messageModal.classList.add('active');
}

// Create particle effect
function createParticles(ketupat) {
    const rect = ketupat.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    for (let i = 0; i < 15; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';

        // Position at ketupat center
        particle.style.left = `${centerX}px`;
        particle.style.top = `${centerY}px`;

        // Random direction and speed
        const angle = Math.random() * Math.PI * 2;
        const speed = 2 + Math.random() * 3;
        const xVel = Math.cos(angle) * speed;
        const yVel = Math.sin(angle) * speed;

        document.body.appendChild(particle);

        // Animate particles
        let posX = centerX;
        let posY = centerY;
        let opacity = 1;
        let size = 8;

        const animate = () => {
            posX += xVel;
            posY += yVel;
            opacity -= 0.02;
            size -= 0.1;

            particle.style.left = `${posX}px`;
            particle.style.top = `${posY}px`;
            particle.style.opacity = opacity;
            particle.style.width = `${size}px`;
            particle.style.height = `${size}px`;

            if (opacity > 0 && size > 0) {
                requestAnimationFrame(animate);
            } else {
                particle.remove();
            }
        };

        requestAnimationFrame(animate);
    }
}

// Setup all event listeners
function setupEventListeners() {
    // Close modal
    closeModal.addEventListener('click', () => {
        messageModal.classList.remove('active');
    });

    // Reset button
    resetBtn.addEventListener('click', () => {
        // Clear all ketupat
        ketupatContainer.innerHTML = '';
        ketupatCount = 0;

        // Clear interval if exists
        if (ketupatInterval) {
            clearInterval(ketupatInterval);
        }

        // Start new generation
        startKetupatGeneration();
    });

    // Mute button
    muteBtn.addEventListener('click', () => {
        muted = !muted;
        if (muted) {
            soundText.textContent = 'Suara: Off';
            muteBtn.querySelector('i').className = 'fas fa-volume-mute';
            takbirAudio.pause();
        } else {
            soundText.textContent = 'Suara: On';
            muteBtn.querySelector('i').className = 'fas fa-volume-up';
        }
    });

    // Takbir audio controls
    playTakbir.addEventListener('click', () => {
        if (!muted) {
            takbirAudio.play();
        }
    });

    pauseTakbir.addEventListener('click', () => {
        takbirAudio.pause();
    });

    // WhatsApp share
    shareWhatsApp.addEventListener('click', () => {
        const message = `${messageText.textContent} - Selamat Idul Fitri!`;
        const encodedMessage = encodeURIComponent(message);
        window.open(`https://wa.me/?text=${encodedMessage}`, '_blank');
    });

    // Toggle Zakat Calculator
    toggleZakatBtn.addEventListener('click', () => {
        if (zakatCalculator.style.display === 'none') {
            zakatCalculator.style.display = 'block';
        } else {
            zakatCalculator.style.display = 'none';
        }
    });

    // Calculate Zakat
    calculateZakat.addEventListener('click', () => {
        const familyMembers = parseInt(document.getElementById('familyMembers').value) || 1;
        const ricePrice = parseInt(document.getElementById('ricePrice').value) || 15000;

        // Calculate zakat (2.5 kg rice per person)
        const zakatAmount = familyMembers * 2.5 * ricePrice;

        // Format as currency
        zakatTotal.textContent = `Rp ${zakatAmount.toLocaleString('id-ID')}`;
        zakatResult.classList.add('visible');
    });

    // Close modal when clicking outside
    messageModal.addEventListener('click', (e) => {
        if (e.target === messageModal) {
            messageModal.classList.remove('active');
        }
    });
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', init);
