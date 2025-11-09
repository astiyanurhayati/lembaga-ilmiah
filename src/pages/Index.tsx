import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { CalendarDays, BookOpen, Archive, Image as ImageIcon, Info, ChevronRight } from "lucide-react";
import heroImage from "@/assets/hero-li-unej.jpg";
import g1 from "@/assets/jurnal-internal.jpg";
import g2 from "@/assets/gallery-2.jpg";
import g3 from "@/assets/kompetisi-karya.jpg";
import g4 from "@/assets/gallery-4.jpg";
import g5 from "@/assets/gallery-5.jpg";
import g6 from "@/assets/gallery-6.jpg";
import g7 from "@/assets/gallery-7.jpg";
import g8 from "@/assets/gallery-8.jpg";
const galleryImages = [g1,g2,g3,g4,g5,g6,g7,g8];

const NavBar = () => {
  useEffect(() => {
    const onHashLink = (e: Event) => {
      const target = e.target as HTMLAnchorElement;
      if (target.tagName === 'A' && target.getAttribute('href')?.startsWith('#')) {
        e.preventDefault();
        const id = target.getAttribute('href')!.replace('#','');
        const el = document.getElementById(id);
        el?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    };
    document.addEventListener('click', onHashLink);
    return () => document.removeEventListener('click', onHashLink);
  }, []);

  const links = [
    { href: '#hero', label: 'Beranda' },
    { href: '#produk', label: 'Produk' },
    { href: '#perpustakaan', label: 'Perpustakaan' },
    { href: '#agenda', label: 'Agenda' },
    { href: '#galeri', label: 'Galeri' },
    { href: '#tentang', label: 'Tentang' },
  ];

  return (
    <header className="sticky top-0 z-50 glass-morphism backdrop-blur-xl border-b border-white/20">
      <nav className="container mx-auto flex h-14 sm:h-16 items-center justify-between px-4 sm:px-6 lg:px-8">
        <a href="#hero" className="font-bold tracking-tight text-base sm:text-lg">LI UKM UNEJ</a>
        <div className="hidden md:flex items-center gap-4 lg:gap-6">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="text-sm text-muted-foreground hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded-md px-2 lg:px-3 py-2 story-link transition-colors">
              {l.label}
            </a>
          ))}
        </div>
        <div className="flex items-center gap-2 sm:gap-3">
          <Button asChild className="premium-button border-0 text-white px-3 py-2 sm:px-6 sm:py-2 text-sm rounded-xl">
            <a href="#agenda" aria-label="Lihat Agenda Terdekat">
              <span className="hidden sm:inline">Lihat Agenda Terdekat</span>
              <span className="sm:hidden">Agenda</span>
            </a>
          </Button>
        </div>
      </nav>
    </header>
  );
};

const Footer = () => {
  return (
    <footer className="section-background border-t border-white/20 mt-24">
      <div className="container mx-auto py-16 px-4 sm:px-6 lg:px-8 grid gap-12 md:grid-cols-3">
        <div className="space-y-4">
          <h3 className="font-bold text-xl mb-4">Kontak</h3>
          <div className="space-y-2 text-muted-foreground">
            <p>Email: li@unej.ac.id</p>
            <p>Telp: 0812-3456-7890</p>
            <p>Alamat: Jl. Kampus Tegalboto, Jember</p>
          </div>
        </div>
        <div className="space-y-4">
          <h3 className="font-bold text-xl mb-4">Media Sosial</h3>
          <div className="flex gap-4 text-muted-foreground">
            <a href="#" aria-label="Instagram" className="hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded-md px-2 py-1 transition-colors">IG</a>
            <a href="#" aria-label="YouTube" className="hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded-md px-2 py-1 transition-colors">YT</a>
            <a href="#" aria-label="Twitter" className="hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded-md px-2 py-1 transition-colors">TW</a>
          </div>
        </div>
        <div className="space-y-4">
          <h3 className="font-bold text-xl mb-4">Tentang</h3>
          <p className="text-muted-foreground leading-relaxed">Komunitas riset dan karya ilmiah mahasiswa Universitas Jember.</p>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="container mx-auto py-8 px-4 sm:px-6 lg:px-8 text-center text-muted-foreground">© 2025 UKM UNEJ LI</div>
      </div>
    </footer>
  );
};

const products = [
  { title: 'Jurnal Internal', desc: 'Publikasi karya ilmiah mahasiswa lintas disiplin.', img: g1 },
  { title: 'Pelatihan Riset', desc: 'Workshop metodologi dan penulisan ilmiah.', img: g2 },
  { title: 'Karya Lembaga Ilmiah', desc: 'Fasilitasi dan pembinaan lomba ilmiah.', img: g3 },
  { title: 'Mentoring', desc: 'Pendampingan proposal PKM dan riset.', img: g4 },
  { title: 'Publikasi Buku', desc: 'Kurasi dan penerbitan buku mahasiswa.', img: g5 },
  { title: 'Karya Inovasi', desc: 'Showcase prototipe dan inovasi kampus.', img: g6 },
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

const chip = (text: string) => (
  <span className="inline-block text-xs sm:text-sm px-2 py-1 sm:px-3 sm:py-2 rounded-full glass-morphism text-foreground border-0 font-medium">{text}</span>
);

const Index = () => {
  return (
    <div className="min-h-screen">
      <NavBar />
      <main className="relative">
        {/* Hero */}
        <section id="hero" className="hero-premium relative min-h-screen flex items-center py-16 sm:py-20 lg:py-24">
          <div className="container mx-auto relative z-10 px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 sm:gap-16 lg:gap-20 items-center">
              {/* Left Content */}
              <div className="space-y-8 sm:space-y-10 text-center lg:text-left">
                <div className="animate-slide-up">
                  <div className="inline-flex items-center gap-2 px-3 py-2 sm:px-4 sm:py-2 rounded-full glass-morphism text-xs sm:text-sm font-medium mb-6 sm:mb-8">
                    <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
                    Universitas Jember
                  </div>
                  <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black leading-[0.9] tracking-tight mb-4 sm:mb-6">
                    <span className="block">Lembaga</span>
                    <span className="block text-gradient">Ilmiah</span>
                    <span className="block text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-muted-foreground mt-2 sm:mt-4">UKM UNEJ</span>
                  </h1>
                </div>
                
                <div className="animate-slide-up-delayed space-y-4 sm:space-y-6">
                  <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-muted-foreground font-light leading-relaxed max-w-2xl mx-auto lg:mx-0">
                    Mengembangkan <span className="text-foreground font-semibold">Inovasi</span>, 
                    <span className="text-foreground font-semibold"> Ilmu</span>, dan 
                    <span className="text-foreground font-semibold"> Kreativitas</span> Mahasiswa
                  </p>
                  <p className="text-base sm:text-lg text-muted-foreground/80 max-w-xl mx-auto lg:mx-0 leading-relaxed">
                    Komunitas riset dan karya ilmiah terdepan yang memfasilitasi mahasiswa untuk berkembang dalam dunia akademik dan penelitian.
                  </p>
                </div>

                <div className="animate-slide-up-delayed-2 flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center lg:justify-start">
                  <Button asChild className="premium-button border-0 text-white px-8 py-6 sm:px-10 sm:py-7 text-base sm:text-lg font-semibold rounded-2xl">
                    <a href="#agenda">Lihat Agenda Terdekat</a>
                  </Button>
                  <Button variant="outline" asChild className="px-8 py-6 sm:px-10 sm:py-7 text-base sm:text-lg border-2 hover:bg-muted/50 rounded-2xl">
                    <a href="#produk">Jelajahi Produk</a>
                  </Button>
                </div>

                <div className="animate-slide-up-delayed-2 flex gap-3 sm:gap-4 items-center text-xs sm:text-sm justify-center lg:justify-start">
                  {chip('Profesional')}
                  {chip('Modern')}
                  {chip('Responsif')}
                </div>
              </div>

              {/* Right Content */}
              <div className="relative mt-12 lg:mt-0 order-first lg:order-last">
                {/* Main Image */}
                <div className="animate-float relative">
                  <img
                    src={heroImage}
                    alt="Kegiatan Lembaga Ilmiah UKM UNEJ: mahasiswa berkolaborasi dalam riset"
                    className="w-full h-auto rounded-2xl sm:rounded-3xl shadow-[var(--shadow-premium)]"
                  />
                </div>

                {/* Floating Cards - Hidden on mobile for cleaner look */}
                <div className="hidden lg:block absolute -top-8 -left-8 animate-float-delayed">
                  <div className="floating-card rounded-2xl p-6 w-48 sparkle">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center">
                        <BookOpen className="w-5 h-5 text-white" />
                      </div>
                      <div className="text-sm font-semibold">Publikasi</div>
                    </div>
                    <div className="space-y-1">
                      <div className="text-2xl font-black text-primary">250+</div>
                      <div className="text-xs text-muted-foreground">Karya Ilmiah</div>
                    </div>
                  </div>
                </div>

                <div className="hidden lg:block absolute -bottom-6 -right-6 animate-float">
                  <div className="floating-card rounded-2xl p-6 w-52">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-green-500 to-green-600 flex items-center justify-center">
                        <CalendarDays className="w-5 h-5 text-white" />
                      </div>
                      <div className="text-sm font-semibold">Event Terdekat</div>
                    </div>
                    <div className="space-y-2">
                      <div className="text-sm font-medium">Workshop Riset</div>
                      <div className="text-xs text-muted-foreground">12 September 2025</div>
                    </div>
                  </div>
                </div>

                <div className="hidden lg:block absolute top-1/2 -left-12 animate-float-delayed">
                  <div className="floating-card rounded-2xl p-4 w-40">
                    <div className="flex items-center gap-2 mb-2">
                      <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-purple-500 to-purple-600 flex items-center justify-center">
                        <Archive className="w-4 h-4 text-white" />
                      </div>
                      <div className="text-xs font-semibold">Achievement</div>
                    </div>
                    <div className="space-y-1">
                      <div className="text-xl font-black text-primary">15+</div>
                      <div className="text-xs text-muted-foreground">Penghargaan</div>
                    </div>
                  </div>
                </div>

                {/* Decorative Elements */}
                <div className="absolute -top-4 right-1/4 w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-primary/10 to-primary/5 rounded-full blur-xl animate-pulse"></div>
                <div className="absolute bottom-1/4 -left-4 w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-blue-500/10 to-blue-500/5 rounded-full blur-lg animate-pulse" style={{animationDelay: '1s'}}></div>
              </div>
            </div>

            {/* Bottom Stats */}
            <div className="grid grid-cols-2 gap-6 sm:gap-8 mt-20 sm:mt-24 lg:mt-32 animate-slide-up-delayed-2">
              <div className="text-center">
                <div className="text-2xl sm:text-3xl lg:text-4xl font-black text-primary mb-1 sm:mb-2">30</div>
                <div className="text-xs sm:text-sm text-muted-foreground">Anggota Aktif dan Alumni</div>
              </div>
              <div className="text-center">
                <div className="text-2xl sm:text-3xl lg:text-4xl font-black text-primary mb-1 sm:mb-2">50+</div>
                <div className="text-xs sm:text-sm text-muted-foreground">Event Sedang Berjalan</div>
              </div>
            </div>
          </div>
        </section>

        {/* Produk */}
        <section id="produk" className="section-background py-16 sm:py-20 lg:py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12 sm:mb-16">
              <div className="flex items-center justify-center gap-3 mb-4 sm:mb-6">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-2xl bg-gradient-to-br from-primary to-primary-dark flex items-center justify-center">
                  <Archive className="text-white w-5 h-5 sm:w-6 sm:h-6" />
                </div>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold">Karya Lembaga Ilmiah</h2>
              </div>
              <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto">
                Inovasi dan karya terbaik dari komunitas Lembaga Ilmiah
              </p>
            </div>
            <div className="grid gap-6 sm:gap-8 grid-cols-1 md:grid-cols-2 xl:grid-cols-3">
              {products.map((p, i) => (
                <article key={i} className="rounded-2xl sm:rounded-3xl glass-morphism overflow-hidden shadow-[var(--shadow-glass)] hover:shadow-[var(--shadow-soft-lg)] transition-all duration-300 hover-scale hover:backdrop-blur-3xl group">
                  <div className="aspect-[16/9] bg-secondary/50 overflow-hidden" aria-hidden>
                    <img src={p.img} alt={`Produk LI: ${p.title}`} loading="lazy" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  </div>
                  <div className="p-5 sm:p-6 backdrop-blur-sm">
                    <h3 className="font-bold text-lg sm:text-xl mb-2 sm:mb-3">{p.title}</h3>
                    <p className="text-sm sm:text-base text-muted-foreground mb-4 sm:mb-6 leading-relaxed">{p.desc}</p>
                    <div>
                      <Button variant="ghost" asChild className="hover:bg-primary/10 rounded-xl text-sm sm:text-base">
                        <a href={`/produk/${i}`} aria-label={`Lihat Detail ${p.title}`} className="inline-flex items-center gap-2 font-semibold">
                          Lihat Detail <ChevronRight className="size-4" />
                        </a>
                      </Button>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Perpustakaan */}
        <section id="perpustakaan" className="py-16 sm:py-20 lg:py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12 sm:mb-16">
              <div className="flex items-center justify-center gap-3 mb-4 sm:mb-6">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-2xl bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center">
                  <BookOpen className="text-white w-5 h-5 sm:w-6 sm:h-6" />
                </div>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold">Perpustakaan</h2>
              </div>
              <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto mb-6 sm:mb-8">
                Koleksi lengkap buku dan artikel ilmiah untuk referensi akademik
              </p>
              <div className="flex flex-wrap justify-center gap-2 sm:gap-3">
                {chip('Kategori: Semua')}
                {chip('Tahun: Semua')}
                {chip('Tipe: PDF')}
              </div>
            </div>
            <div className="grid gap-6 sm:gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {libraryItems.map((item, idx) => (
                <article key={idx} className="rounded-2xl sm:rounded-3xl glass-morphism p-5 sm:p-6 flex flex-col items-center text-center space-y-3 sm:space-y-4 hover:shadow-[var(--shadow-soft-lg)] transition-all duration-300 hover-scale">
                  <div className="w-16 h-24 sm:w-20 sm:h-28 rounded-xl sm:rounded-2xl bg-gradient-to-br from-secondary to-muted border-2 border-border/20 flex items-center justify-center text-muted-foreground font-bold text-xs sm:text-sm">
                    PDF
                  </div>
                  <div className="flex-1 space-y-1 sm:space-y-2">
                    <h3 className="font-bold text-base sm:text-lg leading-tight">{item.title}</h3>
                    <p className="text-xs sm:text-sm text-muted-foreground">{item.type} • {item.size} • {item.year}</p>
                  </div>
                  <Button size="sm" variant="outline" aria-label={`Download ${item.title}`} className="rounded-xl text-xs sm:text-sm">
                    Download
                  </Button>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Agenda */}
        <section id="agenda" className="section-background py-16 sm:py-20 lg:py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12 sm:mb-16">
              <div className="flex items-center justify-center gap-3 mb-4 sm:mb-6">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-2xl bg-gradient-to-br from-green-500 to-green-600 flex items-center justify-center">
                  <CalendarDays className="text-white w-5 h-5 sm:w-6 sm:h-6" />
                </div>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold">Agenda Terdekat</h2>
              </div>
              <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto">
                Ikuti berbagai kegiatan menarik yang akan datang
              </p>
            </div>
            <div className="grid gap-4 sm:gap-6 max-w-4xl mx-auto">
              {agendaItems.map((e, i) => (
                <article key={i} className="rounded-2xl sm:rounded-3xl glass-morphism p-6 sm:p-8 flex flex-col lg:flex-row lg:items-center gap-4 sm:gap-6 hover:shadow-[var(--shadow-soft-lg)] transition-all duration-300 hover-scale">
                  <time aria-label="Tanggal" className="font-black text-xl sm:text-2xl text-primary min-w-fit">{e.date}</time>
                  <div className="flex-1 space-y-1 sm:space-y-2">
                    <h3 className="font-bold text-lg sm:text-xl">{e.name}</h3>
                    <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">{e.desc}</p>
                  </div>
                  <Button variant="ghost" asChild className="hover:bg-primary/10 rounded-xl self-start lg:self-center">
                    <a href={`/agenda/${i}`} aria-label={`Detail ${e.name}`} className="font-semibold text-sm sm:text-base">Detail</a>
                  </Button>
                </article>
              ))}
            </div>
            <div className="text-center mt-8 sm:mt-12">
              <Button asChild className="premium-button border-0 text-white px-8 py-5 sm:px-10 sm:py-6 text-base sm:text-lg font-semibold rounded-2xl">
                <a href="/agenda">Lihat Semua Agenda</a>
              </Button>
            </div>
          </div>
        </section>

        {/* Galeri */}
        <section id="galeri" className="py-16 sm:py-20 lg:py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12 sm:mb-16">
              <div className="flex items-center justify-center gap-3 mb-4 sm:mb-6">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-2xl bg-gradient-to-br from-purple-500 to-purple-600 flex items-center justify-center">
                  <ImageIcon className="text-white w-5 h-5 sm:w-6 sm:h-6" />
                </div>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold">Galeri Dokumentasi</h2>
              </div>
              <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto">
                Momen berharga dari berbagai kegiatan dan pencapaian kami
              </p>
            </div>
            <div className="grid gap-4 sm:gap-6 grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
              {Array.from({ length: 8 }).map((_, i) => (
                <div key={i} className="aspect-[4/3] overflow-hidden rounded-2xl sm:rounded-3xl glass-morphism hover-scale group">
                  <img
                    src={galleryImages[i]}
                    alt={`Dokumentasi kegiatan LI ${i + 1}`}
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Tentang */}
        <section id="tentang" className="section-background py-16 sm:py-20 lg:py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12 sm:mb-16">
              <div className="flex items-center justify-center gap-3 mb-4 sm:mb-6">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-2xl bg-gradient-to-br from-orange-500 to-orange-600 flex items-center justify-center">
                  <Info className="text-white w-5 h-5 sm:w-6 sm:h-6" />
                </div>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold">Tentang LI</h2>
              </div>
            </div>
            <div className="grid lg:grid-cols-2 gap-12 sm:gap-16 items-start max-w-6xl mx-auto">
              <article className="space-y-6 sm:space-y-8">
                <div className="glass-morphism rounded-2xl sm:rounded-3xl p-6 sm:p-8">
                  <p className="text-base sm:text-lg text-foreground leading-relaxed mb-6 sm:mb-8">
                    Lembaga Ilmiah (LI) UKM UNEJ adalah komunitas riset mahasiswa yang berfokus pada pengembangan publikasi, kompetisi ilmiah, dan karya inovasi di lingkungan Universitas Jember.
                  </p>
                  
                  <div className="space-y-5 sm:space-y-6">
                    <div>
                      <h3 className="font-bold text-lg sm:text-xl mb-3 sm:mb-4 text-primary">Visi</h3>
                      <ul className="space-y-2">
                        <li className="flex items-start gap-3 text-sm sm:text-base text-muted-foreground">
                          <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                          <span>Menjadi wadah unggul pengembangan budaya ilmiah mahasiswa.</span>
                        </li>
                      </ul>
                    </div>
                    
                    <div>
                      <h3 className="font-bold text-lg sm:text-xl mb-3 sm:mb-4 text-primary">Misi</h3>
                      <ul className="space-y-2 sm:space-y-3">
                        <li className="flex items-start gap-3 text-sm sm:text-base text-muted-foreground">
                          <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                          <span>Mendorong riset dan penulisan ilmiah berkualitas.</span>
                        </li>
                        <li className="flex items-start gap-3 text-sm sm:text-base text-muted-foreground">
                          <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                          <span>Mengakselerasi kolaborasi lintas disiplin dan komunitas.</span>
                        </li>
                        <li className="flex items-start gap-3 text-sm sm:text-base text-muted-foreground">
                          <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                          <span>Menghasilkan karya inovasi yang berdampak.</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </article>
              
              <div className="glass-morphism rounded-2xl sm:rounded-3xl overflow-hidden">
                <table className="w-full text-sm sm:text-base">
                  <thead className="bg-gradient-to-r from-primary/10 to-primary/5">
                    <tr>
                      <th className="text-left p-4 sm:p-6 font-bold text-primary">Jabatan</th>
                      <th className="text-left p-4 sm:p-6 font-bold text-primary">Nama</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-border/10">
                    <tr className="hover:bg-muted/20 transition-colors">
                      <td className="p-4 sm:p-6 font-semibold">Ketua</td>
                      <td className="p-4 sm:p-6 text-muted-foreground">Syafrina Arsiyunita</td>
                    </tr>
                    <tr className="hover:bg-muted/20 transition-colors">
                      <td className="p-4 sm:p-6 font-semibold">Sekretaris</td>
                      <td className="p-4 sm:p-6 text-muted-foreground">Anya Azalia Ahaddian</td>
                    </tr>
                    <tr className="hover:bg-muted/20 transition-colors">
                      <td className="p-4 sm:p-6 font-semibold">Bendahara</td>
                      <td className="p-4 sm:p-6 text-muted-foreground">Citra Eka Ramadhani</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Index;