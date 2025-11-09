// Main JavaScript file for the website

// Data Arrays
const products = [
    { title: 'Jurnal Internal', desc: 'Publikasi karya ilmiah mahasiswa lintas disiplin.', img: 'src/assets/gallery-1.jpg' },
    { title: 'Pelatihan Riset', desc: 'Workshop metodologi dan penulisan ilmiah.', img: 'src/assets/gallery-2.jpg' },
    { title: 'Kompetisi Karya', desc: 'Fasilitasi dan pembinaan lomba ilmiah.', img: 'src/assets/gallery-3.jpg' },
    { title: 'Mentoring', desc: 'Pendampingan proposal PKM dan riset.', img: 'src/assets/gallery-4.jpg' },
    { title: 'Publikasi Buku', desc: 'Kurasi dan penerbitan buku mahasiswa.', img: 'src/assets/gallery-5.jpg' },
    { title: 'Karya Inovasi', desc: 'Showcase prototipe dan inovasi kampus.', img: 'src/assets/gallery-6.jpg' },
];

const libraryItems = [
    { title: 'Dasar Penelitian Terapan', size: '2.3 MB', year: '2023', category: 'Buku', type: 'PDF' },
    { title: 'Prosiding Seminar Nasional 2024', size: '5.1 MB', year: '2024', category: 'Artikel', type: 'PDF' },
    { title: 'Metodologi Penelitian Kualitatif', size: '1.9 MB', year: '2022', category: 'Buku', type: 'PDF' },
    { title: 'Panduan PKM Terbaru', size: '3.4 MB', year: '2025', category: 'Panduan', type: 'PDF' },
];

const agendaItems = [
    { date: '2025-09-12', name: 'Seminar Metodologi Riset', desc: 'Pembicara tamu dan sesi Q&A.' },
    { date: '2025-09-25', name: 'Workshop Penulisan Jurnal', desc: 'Teknik menulis artikel ilmiah yang baik.' },
    { date: '2025-10-10', name: 'Kickoff Tim PKM 2026', desc: 'Pembentukan dan briefing tim.' },
    { date: '2025-10-28', name: 'Bedah Buku Riset', desc: 'Diskusi buku terbaru seputar penelitian.' },
];

const galleryImages = [
    'src/assets/gallery-1.jpg',
    'src/assets/gallery-2.jpg',
    'src/assets/gallery-3.jpg',
    'src/assets/gallery-4.jpg',
    'src/assets/gallery-5.jpg',
    'src/assets/gallery-6.jpg',
    'src/assets/gallery-7.jpg',
    'src/assets/gallery-8.jpg'
];

// Smooth scrolling navigation
function initSmoothScrolling() {
    document.addEventListener('click', function(e) {
        if (e.target.tagName === 'A' && e.target.getAttribute('href')?.startsWith('#')) {
            e.preventDefault();
            const id = e.target.getAttribute('href').replace('#', '');
            const element = document.getElementById(id);
            if (element) {
                element.scrollIntoView({ 
                    behavior: 'smooth', 
                    block: 'start' 
                });
            }
        }
    });
}

// Generate products grid
function generateProducts() {
    const productsGrid = document.getElementById('products-grid');
    if (!productsGrid) return;

    productsGrid.innerHTML = products.map((product, index) => `
        <article class="rounded-2xl sm:rounded-3xl glass-morphism overflow-hidden shadow-[var(--shadow-glass)] hover:shadow-[var(--shadow-soft-lg)] transition-all duration-300 hover-scale hover:backdrop-blur-3xl group">
            <div class="aspect-[16/9] bg-secondary/50 overflow-hidden" aria-hidden>
                <img src="${product.img}" alt="Produk LI: ${product.title}" loading="lazy" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
            </div>
            <div class="p-5 sm:p-6 backdrop-blur-sm">
                <h3 class="font-bold text-lg sm:text-xl mb-2 sm:mb-3">${product.title}</h3>
                <p class="text-sm sm:text-base text-muted-foreground mb-4 sm:mb-6 leading-relaxed">${product.desc}</p>
                <div>
                    <a href="/produk/${index}" aria-label="Lihat Detail ${product.title}" class="inline-flex items-center gap-2 font-semibold hover:bg-primary/10 rounded-xl text-sm sm:text-base px-3 py-2 transition-colors">
                        Lihat Detail 
                        <i data-lucide="chevron-right" class="w-4 h-4"></i>
                    </a>
                </div>
            </div>
        </article>
    `).join('');

    // Initialize lucide icons for the new elements
    if (typeof lucide !== 'undefined') {
        lucide.createIcons();
    }
}

// Generate library grid
function generateLibrary() {
    const libraryGrid = document.getElementById('library-grid');
    if (!libraryGrid) return;

    libraryGrid.innerHTML = libraryItems.map((item, index) => `
        <article class="rounded-2xl sm:rounded-3xl glass-morphism p-5 sm:p-6 flex flex-col items-center text-center space-y-3 sm:space-y-4 hover:shadow-[var(--shadow-soft-lg)] transition-all duration-300 hover-scale">
            <div class="w-16 h-24 sm:w-20 sm:h-28 rounded-xl sm:rounded-2xl bg-gradient-to-br from-secondary to-muted border-2 border-border/20 flex items-center justify-center text-muted-foreground font-bold text-xs sm:text-sm">
                PDF
            </div>
            <div class="flex-1 space-y-1 sm:space-y-2">
                <h3 class="font-bold text-base sm:text-lg leading-tight">${item.title}</h3>
                <p class="text-xs sm:text-sm text-muted-foreground">${item.type} • ${item.size} • ${item.year}</p>
            </div>
            <button aria-label="Download ${item.title}" class="px-3 py-2 text-xs sm:text-sm border border-border rounded-xl hover:bg-muted/50 transition-colors">
                Download
            </button>
        </article>
    `).join('');
}

// Generate agenda grid
function generateAgenda() {
    const agendaGrid = document.getElementById('agenda-grid');
    if (!agendaGrid) return;

    agendaGrid.innerHTML = agendaItems.map((event, index) => `
        <article class="rounded-2xl sm:rounded-3xl glass-morphism p-6 sm:p-8 flex flex-col lg:flex-row lg:items-center gap-4 sm:gap-6 hover:shadow-[var(--shadow-soft-lg)] transition-all duration-300 hover-scale">
            <time aria-label="Tanggal" class="font-black text-xl sm:text-2xl text-primary min-w-fit">${event.date}</time>
            <div class="flex-1 space-y-1 sm:space-y-2">
                <h3 class="font-bold text-lg sm:text-xl">${event.name}</h3>
                <p class="text-sm sm:text-base text-muted-foreground leading-relaxed">${event.desc}</p>
            </div>
            <a href="/agenda/${index}" aria-label="Detail ${event.name}" class="font-semibold text-sm sm:text-base hover:bg-primary/10 rounded-xl px-3 py-2 self-start lg:self-center transition-colors">Detail</a>
        </article>
    `).join('');
}

// Generate gallery grid
function generateGallery() {
    const galleryGrid = document.getElementById('gallery-grid');
    if (!galleryGrid) return;

    galleryGrid.innerHTML = Array.from({ length: 8 }).map((_, index) => `
        <div class="aspect-[4/3] overflow-hidden rounded-2xl sm:rounded-3xl glass-morphism hover-scale group">
            <img
                src="${galleryImages[index]}"
                alt="Dokumentasi kegiatan LI ${index + 1}"
                loading="lazy"
                class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
        </div>
    `).join('');
}

// Initialize everything when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    // Initialize smooth scrolling
    initSmoothScrolling();
    
    // Generate dynamic content
    generateProducts();
    generateLibrary();
    generateAgenda();
    generateGallery();
    
    // Initialize Lucide icons
    if (typeof lucide !== 'undefined') {
        lucide.createIcons();
    }
    
    console.log('LI UKM UNEJ website initialized successfully');
});

// Export functions for potential Laravel integration
window.LIWebsite = {
    initSmoothScrolling,
    generateProducts,
    generateLibrary,
    generateAgenda,
    generateGallery,
    data: {
        products,
        libraryItems,
        agendaItems,
        galleryImages
    }
};