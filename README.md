# My Project CV - Muhammad Murfid Nurhadi

> Website CV personal untuk **melamar pekerjaan** - tema **Grey & Dark Blue**, animasi slide up/down, fully responsive (Android & Desktop), React + TypeScript.

**Live Demo (Vercel):** 
> **https://my-project-cv.vercel.app/** 

**Repository:** https://github.com/murfidnurhadi/My-Project-CV

---

## Tentang Saya

**Muhammad Murfid Nurhadi** - Lahir **29 Desember 2003**
Mahasiswa **S1 Teknik Informatika, Universitas Komputer Indonesia (UNIKOM) Bandung** - [unikom.ac.id](https://www.unikom.ac.id)

Antusias di dunia kreatif & teknologi - dari coding **JavaScript** hingga desain, motion graphic, dan 3D. Website ini dibuat khusus untuk **melamar pekerjaan** dengan tampilan profesional, menarik, dan mudah dilihat HRD/rekruter.

**Kontak aktif:**
- Email: [murfidnurhadi8@gmail.com](mailto:murfidnurhadi8@gmail.com?subject=Lamaran%20Kerja%20-%20Tertarik%20merekrut%20Anda)
- WhatsApp: [0813-9478-4696](https://wa.me/6281394784696?text=Halo%20Murfid%2C%20saya%20tertarik%20dengan%20CV%20Anda)
- GitHub: [github.com/murfidnurhadi](https://github.com/murfidnurhadi)
- Instagram: [@mur.fidznx](https://www.instagram.com/mur.fidznx/)
- X / Twitter: [@fidznx](https://x.com/fidznx)

**Keahlian:**
`JavaScript` • `Adobe Photoshop` • `After Effects` • `Blender 3D` • `Live2D Cubism` • `Alight Motion` • `Microsoft Word 2010` • `Microsoft Excel 2010`

---

## Fitur

- **Navbar Dark Blue** fixed + hamburger responsive
- **Hero** dengan kartu profil (`/profile.webp` klik untuk preview lightbox) — email/WA/kampus langsung klik (`mailto:` & `wa.me`)
- **Profil & Tujuan Karir** — animasi **swipe up** (`reveal`) & **swipe down** (`reveal-down`) bergantian saat scroll
- **Skill & Tools** — 8 kartu logo lokal `public/logos/*.webp` (zoom out `scale(0.97)` saat hover, animasi up/down selang-seling)
- **Pendidikan** timeline UNIKOM
- **Kontak** — semua icon dari `public/logos/email.webp`, `wa.webp`, `github.webp`, `instagram.webp`, `x.webp` + form `mailto` yang buka Gmail/Email client (Android friendly)
- **Lightbox foto** — klik avatar/logo untuk preview
- **Responsive** — breakpoint 900px / 600px / 400px, tap-target 44px, `font-size:16px` anti-zoom iOS

---

## Tech Stack

- **Vite 5** + **React 18** + **TypeScript 5**
- CSS murni (tanpa framework) — tema Grey `#f1f5f9` & Dark Blue `#0f172a`/`#1e3a8a`
- Animasi: `IntersectionObserver` + `@keyframes slideUp/slideDown` (`src/index.css`)
- Icon & Logo: file lokal `.webp` di `public/`

---

## Struktur

```
public/
  profile.webp              
  logos/
    javascript.webp
    photoshop.webp
    aftereffects.webp
    blender3d.webp
    live2d.webp
    alightmotion.webp
    word2020.webp
    excel2020.webp
    email.webp / wa.webp / github.webp / instagram.webp / x.webp
src/
  App.tsx                   # semua section + logic
  App.css                   # tema grey/dark blue + responsive + hover-zoom
  index.css                 # reveal / reveal-down
  main.tsx
```

> Logo dibaca langsung dari nama file di `public/logos` — ganti file `.webp` (256×256 disarankan) dan rebuild.

---

## Cara Menjalankan Lokal

```bash
# di E:\Project-CV
npm install
npm run dev      # http://localhost:3000
npm run build    # output di dist/
npm run preview  # preview build
```

---

## Deploy ke Vercel (aktifkan link di GitHub)

1. Push sudah ada di `https://github.com/murfidnurhadi/My-Project-CV` (branch `main`)
2. Buka [vercel.com/new](https://vercel.com/new) → **Import** repo `My-Project-CV`
3. Framework: **Vite** — Build Command: `npm run build` — Output: `dist`
4. Deploy → dapat link mis. `https://my-project-cv.vercel.app`
5. **Update README ini:** ganti placeholder di atas dengan link aktifmu, lalu:
   ```bash
   git add README.md
   git commit -m "docs: update vercel live link"
   git push origin main
   ```
6. (Opsional) Tambah badge di atas:
   ```md
   [![Vercel](https://img.shields.io/badge/Live-Vercel-black)](https://my-project-cv.vercel.app)
   ```

> Link Vercel akan otomatis tampil di GitHub sebagai **About → Website** jika di-set di Settings repo.

---

## Preview

- Foto: `public/profile.webp` (klik di navbar/avatar untuk lightbox)
- Warna: Grey `#f1f5f9` background, Dark Blue `#0f172a` navbar

---

