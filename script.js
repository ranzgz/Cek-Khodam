// Daftar khodam
const khodamList = [
    "Uwak Gondrong Ngambek",
    "Si Gondrong Ngumpet",
    "Bebeh Ngeselin Ngambek",
    "Uwak Garing Berisik",
    "Dukun Sangar Melayang",
    "Dukun Ngakak Terbang",
    "Si Bergoyang Ngupil",
    "Teteh Tertawa Bergema",
    "Dukun Kocak Menangis",
    "Mang Kocak Berisik",
    "Nona Lemes Menggerutu",
    "Opa Gembul Ngumpet",
    "Mbah Aneh Melolong",
    "Jeng Santuy Bertapa",
    "Tuan Mistis Meleleh",
    "Si Gaje Meringkuk",
    "Eyang Lucu Ngambek",
    "Ki Ngopi Tertawa",
    "Om Asoy Terbang",
    "Nyai Gembul Meringis",
    "Mang Bergoyang Ketawa",
    "Teteh Kocak Nongkrong",
    "Nona Mistis Joget",
    "Dukun Aneh Ngupil",
    "Om Jomblo Terbang",
    "Si Ngeselin Meringkuk",
    "Paman Centil Meringis",
    "Ki Gondrong Bertapa",
    "Tuan Garing Berisik",
    "Jeng Lucu Meleleh",
    "Bebeh Sangar Terbang",
    "Nyai Ngakak Menggerutu",
    "Opa Kocak Ngumpet",
    "Nona Santuy Ngambek",
    "Uwak Gaje Meringkuk",
    "Dukun Bergoyang Tertinggal",
    "Mang Ngopi Joget",
    "Eyang Aneh Nongkrong",
    "Om Lemes Ngupil",
    "Ki Centil Meleleh",
    "Paman Jomblo Bertapa",
    "Nyai Garing Kedinginan",
    "Teteh Ngeselin Tertawa",
    "Si Mistis Tertinggal",
    "Nona Asoy Melolong",
    "Dukun Lucu Meringkuk",
    "Tuan Sangar Menggerutu",
    "Uwak Tertawa Meleleh",
    "Mbah Gaje Menangis",
    "Mang Gondrong Terbang",
    "Om Kocak Meringis",
    "Bebeh Bergoyang Melayang",
    "Jeng Ngakak Meringkuk",
    "Ki Gembul Joget",
    "Tuan Lemes Ngambek",
    "Dukun Centil Meringkuk",
    "Uwak Mistis Ngumpet",
    "Teteh Aneh Meringis",
    "Opa Jomblo Menangis",
    "Si Santuy Bertapa",
    "Eyang Gaje Nongkrong",
    "Nona Lucu Meleleh",
    "Mbah Sangar Tertinggal",
    "Paman Gembul Menggerutu",
    "Tuan Ngeselin Terbang",
    "Ki Kocak Joget",
    "Nyai Bergoyang Melolong",
    "Bebeh Mistis Meleleh",
    "Si Garing Meringkuk",
    "Mang Ngopi Ketawa",
    "Jeng Lemes Tertawa",
    "Dukun Asoy Meringis",
    "Uwak Jomblo Terbang",
    "Nona Gaje Menangis",
    "Opa Lucu Kedinginan",
    "Paman Sangar Melayang",
    "Mbah Gondrong Meringkuk",
    "Ki Ngakak Tertinggal",
    "Nyai Centil Menggerutu",
    "Om Gembul Bertapa",
    "Jeng Mistis Terbang",
    "Si Lemes Joget",
    "Mang Aneh Meringkuk",
    "Eyang Santuy Menangis",
    "Dukun Gaje Kedinginan",
    "Uwak Kocak Ngumpet",
    "Teteh Ngeselin Nongkrong",
    "Bebeh Bergoyang Tertawa",
    "Nona Lucu Meleleh",
    "Ki Jomblo Meringkuk",
    "Mbah Garing Melayang",
    "Tuan Ngakak Meringkuk",
    "Om Gaje Menggerutu",
    "Eyang Asoy Menangis",
    "Si Mistis Bertapa",
    "Teteh Kocak Terbang",
    "Dukun Centil Meleleh",
    "Mang Gembul Meringkuk",
    "Uwak Sangar Joget",
    "Jeng Ngeselin Ketawa"
];

// Elemen DOM
const welcomeScreen = document.getElementById('welcomeScreen');
const checkScreen = document.getElementById('checkScreen');
const nextButton = document.getElementById('nextButton');
const checkButton = document.getElementById('checkButton');
const resetButton = document.getElementById('resetButton');
const nameInput = document.getElementById('nameInput');
const userName = document.getElementById('userName');
const khodamName = document.getElementById('khodamName');
const result = document.getElementById('result');
const loading = document.getElementById('loading');
const slotContainer = document.getElementById('slotContainer');
const slotItems = document.getElementById('slotItems');

// Tombol lanjutkan
nextButton.addEventListener('click', function() {
    welcomeScreen.classList.add('animate__fadeOut');
    setTimeout(() => {
        welcomeScreen.classList.add('hidden');
        checkScreen.classList.remove('hidden');
        checkScreen.classList.add('animate__fadeIn');
    }, 500);
});

// Tombol cek khodam
checkButton.addEventListener('click', function() {
    if (nameInput.value.trim() === '') {
        showError('Silakan masukkan nama Anda terlebih dahulu');
        return;
    }
    
    // Simpan nama user
    userName.textContent = nameInput.value.trim();
    
    // Tampilkan loading
    loading.classList.remove('hidden');
    result.classList.add('hidden');
    
    // Proses acak khodam dengan delay untuk efek loading
    setTimeout(() => {
        startSlotAnimation();
    }, 1000);
});

// Tombol reset
resetButton.addEventListener('click', function() {
    result.classList.add('animate__fadeOut');
    setTimeout(() => {
        result.classList.add('hidden');
        nameInput.value = '';
    }, 500);
});

// Fungsi untuk memulai animasi slot
function startSlotAnimation() {
    // Sembunyikan loading, tampilkan slot machine
    loading.classList.add('hidden');
    slotContainer.classList.remove('hidden');
    
    // Isi slot machine dengan daftar khodam (3x untuk efek berulang)
    slotItems.innerHTML = '';
    for (let i = 0; i < 3; i++) {
        khodamList.forEach(khodam => {
            const item = document.createElement('div');
            item.className = 'h-[100px] flex items-center justify-center text-white text-xl font-bold';
            item.textContent = khodam;
            slotItems.appendChild(item);
        });
    }
    
    // Tambahkan khodam terpilih di akhir
    const selectedKhodam = khodamList[Math.floor(Math.random() * khodamList.length)];
    const finalItem = document.createElement('div');
    finalItem.className = 'h-[100px] flex items-center justify-center text-purple-300 text-xl font-bold';
    finalItem.textContent = selectedKhodam;
    slotItems.appendChild(finalItem);
    
    // Setelah animasi selesai, tampilkan hasil
    setTimeout(() => {
        slotContainer.classList.add('hidden');
        showResult(selectedKhodam);
    }, 3000);
}

// Fungsi untuk menampilkan hasil
function showResult(selectedKhodam) {
    // Tampilkan hasil
    khodamName.textContent = selectedKhodam;
    result.classList.remove('hidden');
    result.classList.add('animate__fadeInUp');
    
    // Animasi petasan
    createFireworks();
}

// Fungsi untuk membuat animasi petasan
function createFireworks() {
    const colors = ['#ff0000', '#ffff00', '#00ff00', '#00ffff', '#0000ff', '#ff00ff'];
    
    for (let i = 0; i < 30; i++) {
        const firework = document.createElement('div');
        firework.className = 'firework';
        
        // Posisi acak di sekitar hasil
        const x = (Math.random() - 0.5) * 300;
        const y = (Math.random() - 0.5) * 200 - 100;
        
        // Warna acak
        const color = colors[Math.floor(Math.random() * colors.length)];
        
        // Set properti
        firework.style.setProperty('--x', `${x}px`);
        firework.style.setProperty('--y', `${y}px`);
        firework.style.boxShadow = `0 0 10px 5px ${color}`;
        firework.style.backgroundColor = color;
        
        // Tambahkan ke card
        result.appendChild(firework);
        
        // Hapus setelah animasi selesai
        setTimeout(() => {
            firework.remove();
        }, 1000);
    }
}

// Fungsi untuk menampilkan error
function showError(message) {
    const errorElement = document.createElement('div');
    errorElement.className = 'fixed bottom-4 left-1/2 transform -translate-x-1/2 bg-red-500 text-white px-4 py-2 rounded-lg shadow-lg flex items-center animate__animated animate__fadeInUp';
    errorElement.innerHTML = `
        <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
        </svg>
        ${message}
    `;
    document.body.appendChild(errorElement);
    
    setTimeout(() => {
        errorElement.classList.remove('animate__fadeInUp');
        errorElement.classList.add('animate__fadeOutDown');
        setTimeout(() => errorElement.remove(), 500);
    }, 3000);
}