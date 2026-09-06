import { useEffect, useState } from 'react'
import './App.css'

// ===== Types & Constants (Clean Code) =====
type Skill = {
  title: string
  level: string
  pct: number
  desc: string
  logo: string
}

const CONTACT = {
  email: 'murfidnurhadi8@gmail.com',
  waNumber: '6281394784696',
  waDisplay: '0813-9478-4696',
  unikomUrl: 'https://www.unikom.ac.id',
  github: 'https://github.com/murfidnurhadi',
  instagram: 'https://www.instagram.com/mur.fidznx/',
  twitter: 'https://x.com/fidznx',
}

const SKILLS: Skill[] = [
  {
    title: 'Adobe After Effects',
    level: 'Intermediate • 85%',
    pct: 75,
    desc: 'Motion graphics, visual effect, compositing dan opening video.',
    logo: '/logos/aftereffects.webp',
  },
  {
    title: 'Adobe Photoshop',
    level: 'Advanced • 85%',
    pct: 85,
    desc: 'Photo editing, manipulation, poster design dan asset digital kreatif.',
    logo: '/logos/photoshop.webp',
  },
  {
    title: 'Alight Motion',
    level: 'Advanced • 80%',
    pct: 80,
    desc: 'Video editing mobile, motion graphic, AMV dan konten media sosial.',
    logo: '/logos/alightmotion.webp',
  },
  {
    title: 'Blender 3D',
    level: 'Dasar • 60%',
    pct: 60,
    desc: 'Pemodelan 3D dasar, shading, rendering dan animasi sederhana.',
    logo: '/logos/blender3d.webp',
  },
  {
    title: 'Live2D Cubism',
    level: 'Dasar • 65%',
    pct: 65,
    desc: 'Rigging karakter 2D untuk VTuber dan animasi Live2D streaming.',
    logo: '/logos/live2d.webp',
  },

    {
    title: 'JavaScript',
    level: 'Intermediate • 60%',
    pct: 70,
    desc: 'Dasar pemrograman JavaScript, DOM manipulation, ES6+ dan logic programming.',
    logo: '/logos/javascript.webp',
  },
  {
    title: 'Microsoft Word 2010',
    level: 'Mahir • 90%',
    pct: 90,
    desc: 'Pembuatan dokumen, laporan, surat lamaran dan pengolahan kata profesional.',
    logo: '/logos/word2020.webp',
  },
  {
    title: 'Microsoft Excel 2010',
    level: 'Mahir • 80%',
    pct: 80,
    desc: 'Rumus, tabel, grafik, pengolahan data dan laporan administrasi.',
    logo: '/logos/excel2020.webp',
  },
]

const NAV_ITEMS = [
  { label: 'Home', href: '#home' },
  { label: 'Tentang', href: '#about' },
  { label: 'Keahlian', href: '#skills' },
  { label: 'Pendidikan', href: '#education' },
]

// ===== Hooks =====
function useReveal() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) e.target.classList.add('active')
          else e.target.classList.remove('active')
        })
      },
      { threshold: 0.15, rootMargin: '0px 0px -40px 0px' }
    )
    document.querySelectorAll('.reveal, .reveal-down').forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])
}

function useVercelHomeToGithub() {
  useEffect(() => {
    // arahkan https://my-project-cv.vercel.app/#home -> https://github.com/murfidnurhadi/My-Project-CV
    if (typeof window === 'undefined') return
    const isVercel = window.location.hostname.includes('vercel.app')
    const isHomeHash = window.location.hash === '#home'
    if (isVercel && isHomeHash) {
      window.location.replace('https://github.com/murfidnurhadi/My-Project-CV')
    }
  }, [])
}

function useScrolled(threshold = 20) {
  const [scrolled, setScrolled] = useState(false)
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > threshold)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [threshold])
  return scrolled
}

// ===== Small Components =====
function MailIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16v16H4z" /><path d="M4 7l8 6 8-6" /></svg>
  )
}
function PhoneIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.8 19.8 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.8 19.8 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.12 1.2.4 2.37.82 3.49a2 2 0 0 1-.57 2.11L8 10.69a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.57c1.12.42 2.29.7 3.49.82A2 2 0 0 1 22 16.92z" /></svg>
  )
}
function GraduationIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M12 3L1 9l11 6 11-6-11-6z" /><path d="M5 13.5L12 17l7-3.5" /><path d="M5 17L12 20.5 19 17" /></svg>
  )
}

// ===== Main App =====
export default function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [formStatus, setFormStatus] = useState('')
  const [profileFailed, setProfileFailed] = useState(false)
  const [lightbox, setLightbox] = useState(false)
  const scrolled = useScrolled(20)
  useReveal()
  useVercelHomeToGithub()

  const mailToHref = `mailto:${CONTACT.email}?subject=Lamaran%20Kerja%20-%20Tertarik%20merekrut%20Anda&body=Halo%20Murfid%2C%0A%0ASaya%20tertarik%20dengan%20profil%20Anda%20dan%20ingin%20berdiskusi%20lebih%20lanjut.%0A%0ATerima%20kasih.`
  const waHref = `https://wa.me/${CONTACT.waNumber}?text=Halo%20Murfid%2C%20saya%20tertarik%20dengan%20CV%20Anda%20dan%20ingin%20berdiskusi%20soal%20peluang%20kerja.`

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const form = e.target as HTMLFormElement
    const data = new FormData(form)
    const name = (data.get('name') as string) || ''
    const email = (data.get('email') as string) || ''
    const message = (data.get('message') as string) || ''
    if (!name.trim() || !email.trim() || !message.trim()) {
      setFormStatus('Harap isi semua field.')
      return
    }
    // Android: mailto akan membuka Gmail / Email client otomatis
    const subject = encodeURIComponent(`Pesan dari ${name} via Website CV`)
    const body = encodeURIComponent(`Nama: ${name}\nEmail: ${email}\n\nPesan:\n${message}\n\n— dikirim via website CV Murfid`)
    const href = `mailto:${CONTACT.email}?subject=${subject}&body=${body}`
    // pakai window.open agar tidak block di Android Chrome
    window.open(href, '_blank')
    setFormStatus('Membuka aplikasi email Anda ke ' + CONTACT.email + '...')
    setTimeout(() => setFormStatus(''), 5000)
    form.reset()
  }

  return (
    <>
      {/* NAVBAR */}
      <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
        <div className="nav-container">
          <a href="#home" className="logo" style={{ textDecoration: 'none' }}>
            <div className="logo-icon" onClick={(e) => { e.preventDefault(); if (!profileFailed) setLightbox(true) }} title="Lihat foto">
              {!profileFailed ? (
                <img
                  src="/profile.webp"
                  alt="Foto Muhammad Murfid Nurhadi"
                  className="logo-img"
                  onError={() => setProfileFailed(true)}
                />
              ) : (
                'MN'
              )}
            </div>
            <span>Muhammad Murfid Nurhadi</span>
          </a>

          <ul className={`nav-links ${menuOpen ? 'open' : ''}`}>
            {NAV_ITEMS.map((item) => (
              <li key={item.href}>
                <a href={item.href} onClick={() => setMenuOpen(false)}>{item.label}</a>
              </li>
            ))}
            <li><a href="#contact" onClick={() => setMenuOpen(false)} className="nav-cta">Hubungi Saya</a></li>
          </ul>

          <button className="hamburger" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu" aria-expanded={menuOpen}>
            <span style={{ transform: menuOpen ? 'rotate(45deg) translate(5px,5px)' : '' }} />
            <span style={{ opacity: menuOpen ? 0 : 1 }} />
            <span style={{ transform: menuOpen ? 'rotate(-45deg) translate(5px,-5px)' : '' }} />
          </button>
        </div>
      </nav>

      {/* HERO */}
      <section id="home" className="hero">
        <div className="hero-container">
          <div className="hero-text">
            <h4>Available for Work — 2026</h4>
            <h1>Muhammad<br />Murfid <span>Nurhadi</span></h1>
            <p className="subtitle">Mahasiswa S1 Teknik Informatika — UNIKOM Bandung</p>
            <p className="desc">
              Lahir 29 Desember 2003. Antusias di dunia kreatif dan teknologi — dari coding JavaScript hingga desain, motion graphic, dan 3D. CV ini dibuat untuk <strong style={{ color: '#fff' }}>melamar pekerjaan</strong> dengan tampilan profesional dan menarik.
            </p>

            <div className="hero-badges">
              <span className="badge">Bandung, Indonesia</span>
              <span className="badge">29-12-2003</span>
              <span className="badge">UNIKOM</span>
              <span className="badge">Open to Work</span>
            </div>

            <div className="hero-actions">
              <a href="#contact" className="btn-primary">Hubungi Saya <span aria-hidden>→</span></a>
              <a href={CONTACT.github} target="_blank" rel="noreferrer" className="btn-secondary">Lihat GitHub</a>
            </div>
          </div>

          <div className="hero-card-wrapper">
            <div className="hero-card hover-zoom">
              <div className="profile-top">
                <div
                  className="avatar avatar-clickable"
                  aria-hidden
                  onClick={() => !profileFailed && setLightbox(true)}
                  title="Klik untuk perbesar foto"
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => e.key === 'Enter' && !profileFailed && setLightbox(true)}
                >
                  {!profileFailed ? (
                    <img
                      src="/profile.webp"
                      alt="Foto Muhammad Murfid Nurhadi"
                      className="avatar-img"
                      onError={() => setProfileFailed(true)}
                    />
                  ) : (
                    'MN'
                  )}
                </div>
                <div>
                  <h3>Muhammad Murfid Nurhadi</h3>
                  <p>Creative — Developer — Designer</p>
                  <span className="photo-hint">Foto dari /profile.webp • klik untuk preview</span>
                </div>
              </div>

              <div className="info-list">
                {/* EMAIL - logo dari /logos/email.webp */}
                <a href={mailToHref} className="info-item info-item--link hover-zoom" title="Kirim email ke Murfid">
                  <div className="icon icon--webp"><img src="/logos/email.webp" alt="Email" className="icon-img" onError={(e) => (e.currentTarget.style.display='none')} /></div>
                  <span>{CONTACT.email}</span>
                </a>

                {/* WA - logo dari /logos/wa.webp */}
                <a href={waHref} target="_blank" rel="noreferrer" className="info-item info-item--link hover-zoom" title="Chat WhatsApp">
                  <div className="icon icon--webp" style={{ background: '#fff' }}><img src="/logos/wa.webp" alt="WhatsApp" className="icon-img" onError={(e) => (e.currentTarget.style.display='none')} /></div>
                  <span>{CONTACT.waDisplay} (WhatsApp)</span>
                </a>

                {/* KAMPUS - arahkan ke website resmi UNIKOM */}
                <a href={CONTACT.unikomUrl} target="_blank" rel="noreferrer" className="info-item info-item--link hover-zoom" title="Buka website UNIKOM">
                  <div className="icon" style={{ background: '#1e3a8a' }}><GraduationIcon /></div>
                  <span>S1 Teknik Informatika — UNIKOM Bandung</span>
                </a>
              </div>

              <div className="social-row">
                <a href={CONTACT.github} target="_blank" rel="noreferrer" className="social-btn">GitHub</a>
                <a href={CONTACT.instagram} target="_blank" rel="noreferrer" className="social-btn">Instagram</a>
                <a href={CONTACT.twitter} target="_blank" rel="noreferrer" className="social-btn">X / Twitter</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="section">
        <div className="section-header reveal-down">
          <h5>Tentang Saya</h5>
          <h2>Profil dan Tujuan Karir</h2>
          <p>Perpaduan logic programming dan kreativitas visual untuk karya yang fungsional dan estetik</p>
        </div>

        <div className="about-grid">
          <div className="about-card hover-zoom reveal delay-1">
            <h3>Halo, Saya Murfid</h3>
            <p>
              Saya mahasiswa <strong>S1 Teknik Informatika di Universitas Komputer Indonesia (UNIKOM) Bandung</strong>, kelahiran 29 Desember 2003.
              Memiliki ketertarikan besar pada teknologi, desain grafis, dan editing video.
            </p>
            <p style={{ marginTop: 12 }}>
              Website CV ini dibuat khusus untuk <strong>melamar pekerjaan</strong> dengan desain modern agar mudah dilihat HRD dan rekruter. Saya siap belajar cepat, bekerja dalam tim, dan berkontribusi secara profesional.
            </p>
            <div className="chip-row">
              <span className="chip">Disiplin</span>
              <span className="chip">Kreatif</span>
              <span className="chip">Cepat Belajar</span>
              <span className="chip">Teamwork</span>
            </div>
          </div>

          <div className="about-card hover-zoom reveal-down delay-2">
            <h3>Apa yang Saya Cari</h3>
            <p>
              Mencari kesempatan sebagai <strong>Staff Admin, Creative, IT Support, Designer, atau posisi entry-level</strong> yang memungkinkan saya mengaplikasikan kemampuan JavaScript, desain, dan multimedia.
            </p>
            <div className="highlight-box">
              <div className="highlight-title">Keunggulan Saya</div>
              <ul className="highlight-list">
                <li>Menguasai tools kreatif lengkap (Photoshop, After Effects, Alight Motion, Blender, Live2D)</li>
                <li>Dasar programming JavaScript — siap kembangkan ke front-end</li>
                <li>Mahir Word dan Excel untuk administrasi dan laporan</li>
                <li>Terbiasa deadline tugas kuliah dan project pribadi</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* SKILLS */}
      <section id="skills" className="section" style={{ paddingTop: 20 }}>
        <div className="section-header reveal-down">
          <h5>Keahlian</h5>
          <h2>Skill dan Tools</h2>
          <p>Logo resmi tiap aplikasi, level terukur, dan deskripsi singkat yang jujur</p>
        </div>

        <div className="skills-grid">
          {SKILLS.map((skill, i) => (
            <article key={skill.title} className={`skill-card hover-zoom ${i % 2 === 0 ? 'reveal' : 'reveal-down'} delay-${(i % 3) + 1}`}>
              <div className="skill-logo-wrap">
                <img
                  src={skill.logo}
                  alt={`Logo ${skill.title}`}
                  className="skill-logo"
                  loading="lazy"
                  onError={(e) => (e.currentTarget.style.display = 'none')}
                />
              </div>
              <h4>{skill.title}</h4>
              <div className="level">{skill.level}</div>
              <p>{skill.desc}</p>
              <div className="progress" aria-hidden="true">
                <div className="progress-bar" style={{ width: skill.pct + '%' }}></div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* EDUCATION */}
      <section id="education" className="section" style={{ paddingTop: 20 }}>
        <div className="section-header reveal">
          <h5>Riwayat</h5>
          <h2>Pendidikan</h2>
        </div>

        <div className="timeline">
          <div className="timeline-item reveal">
            <div className="timeline-dot" />
            <div className="timeline-card hover-zoom">
              <div className="year">2022 — Sekarang</div>
              <h4>S1 Teknik Informatika</h4>
              <h5><a href={CONTACT.unikomUrl} target="_blank" rel="noreferrer" className="link-unikom">Universitas Komputer Indonesia (UNIKOM) — Bandung</a></h5>
              <p>Mempelajari algoritma, struktur data, JavaScript, basis data, dan pengembangan perangkat lunak.</p>
            </div>
          </div>

          <div className="timeline-item reveal delay-1">
            <div className="timeline-dot" style={{ background: '#64748b' }} />
            <div className="timeline-card hover-zoom">
              <div className="year">2019 — 2022</div>
              <h4>Sekolah Menengah Atas</h4>
              <h5>Lulus SMA — Fokus Pengembangan Diri</h5>
              <p>Mendalami editing (Alight Motion, Photoshop) dan membangun personal branding di media sosial.</p>
            </div>
          </div>

          <div className="timeline-item reveal delay-2">
            <div className="timeline-dot" style={{ background: '#3b82f6' }} />
            <div className="timeline-card hover-zoom">
              <div className="year">Self Learning • Ongoing</div>
              <h4>Otodidak — Creative Tools</h4>
              <h5>Blender 3D • Live2D Cubism • After Effects • Alight Motion</h5>
              <p>Belajar mandiri via komunitas dan eksperimen project AMV, rigging Live2D, dan modeling 3D.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="section">
        <div className="section-header reveal">
          <h5>Kontak</h5>
          <h2>Mari Terhubung</h2>
          <p>Tertarik merekrut saya? Hubungi langsung via email, WA, atau sosial media — respons cepat</p>
        </div>

        <div className="contact-grid">
          <div className="contact-info">
            <a href={mailToHref} className="contact-item hover-zoom reveal">
              <div className="c-icon c-icon--webp"><img src="/logos/email.webp" alt="Email" className="c-icon-img" onError={(e) => (e.currentTarget.style.display='none')} /></div>
              <div><h4>Email</h4><p>{CONTACT.email}</p></div>
            </a>
            <a href={waHref} target="_blank" rel="noreferrer" className="contact-item hover-zoom reveal delay-1">
              <div className="c-icon c-icon--webp" style={{ background: '#fff' }}><img src="/logos/wa.webp" alt="WhatsApp" className="c-icon-img" onError={(e) => (e.currentTarget.style.display='none')} /></div>
              <div><h4>WhatsApp</h4><p>{CONTACT.waDisplay} — Chat Sekarang</p></div>
            </a>
            <a href={CONTACT.github} target="_blank" rel="noreferrer" className="contact-item hover-zoom reveal delay-2">
              <div className="c-icon c-icon--webp" style={{ background: '#fff' }}><img src="/logos/github.webp" alt="GitHub" className="c-icon-img" onError={(e) => (e.currentTarget.style.display='none')} /></div>
              <div><h4>GitHub</h4><p>github.com/murfidnurhadi</p></div>
            </a>
            <a href={CONTACT.instagram} target="_blank" rel="noreferrer" className="contact-item hover-zoom reveal delay-3">
              <div className="c-icon c-icon--webp" style={{ background: '#fff' }}><img src="/logos/instagram.webp" alt="Instagram" className="c-icon-img" onError={(e) => (e.currentTarget.style.display='none')} /></div>
              <div><h4>Instagram</h4><p>@mur.fidznx</p></div>
            </a>
            <a href={CONTACT.twitter} target="_blank" rel="noreferrer" className="contact-item hover-zoom reveal delay-3">
              <div className="c-icon c-icon--webp" style={{ background: '#fff' }}><img src="/logos/x.webp" alt="X" className="c-icon-img" onError={(e) => (e.currentTarget.style.display='none')} /></div>
              <div><h4>X / Twitter</h4><p>@fidznx</p></div>
            </a>
          </div>

          <form className="contact-form hover-zoom reveal delay-2" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Nama Lengkap</label>
              <input id="name" name="name" type="text" placeholder="Nama perusahaan / perekrut" required />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input id="email" name="email" type="email" placeholder="email@perusahaan.com" required />
            </div>
            <div className="form-group">
              <label htmlFor="message">Pesan</label>
              <textarea id="message" name="message" placeholder="Halo Murfid, kami tertarik untuk mengundang interview..." required />
            </div>
            <button type="submit" className="btn-primary" style={{ width: '100%', justifyContent: 'center' }}>
              Kirim via Email
            </button>
            {formStatus && <p className="form-status">{formStatus}</p>}
            <p className="form-hint">Form akan membuka aplikasi email dengan alamat {CONTACT.email} terisi otomatis</p>
          </form>
        </div>
      </section>

      <footer className="footer">
        <div>© 2026 <strong>Muhammad Murfid Nurhadi</strong> — Website CV ini dibuat untuk <strong style={{ color: '#fff' }}>melamar pekerjaan</strong></div>
        <div className="footer-sub">Mahasiswa S1 Teknik Informatika UNIKOM Bandung • Lahir 29-12-2003 • Siap berkontribusi secara profesional</div>
      </footer>

      {/* Lightbox Preview Foto */}
      {lightbox && !profileFailed && (
        <div className="lightbox" onClick={() => setLightbox(false)} role="dialog" aria-modal="true">
          <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
            <button className="lightbox-close" onClick={() => setLightbox(false)} aria-label="Tutup">×</button>
            <img src="/profile.webp" alt="Preview Foto Muhammad Murfid Nurhadi" className="lightbox-img" />
            <p className="lightbox-caption">Muhammad Murfid Nurhadi — 29 Desember 2003 • UNIKOM Teknik Informatika</p>
          </div>
        </div>
      )}
    </>
  )
}
