# Project Specification: Dr. Jeffrey Roh Digital Platform

**Version:** 1.0
**Theme:** Bio-Futurism / Dual-Core Identity
**Target Outcome:** A highly interactive, award-winning portfolio that bridges Clinical Excellence and Venture Capital.

---

## 1. The Technology Stack & Design System

### **Core Stack**
* **Framework:** Next.js 14+ (App Router)
* **Styling:** Tailwind CSS (for utility-first layout and typography)
* **Animations:** Framer Motion (complex sequenced animations)
* **Smooth Scroll:** Lenis or Locomotive Scroll (CRITICAL for the "luxury" feel)
* **3D Elements (Optional):** React Three Fiber (for floating spine/abstract elements)

### **Typography Strategy**
* **Headings (The Human Element):** *Canela* or *Editorial New*. (Serif, high contrast, elegant). Used for "The Surgeon," "The Founder," and emotional quotes.
* **Body/Data (The Precision Element):** *Inter* or *Satoshi*. (Sans-serif, clean, highly readable). Used for medical data, patent numbers, and UI elements.

### **Color Palette**
* **Primary Light (Clinical):** `#F8F9FA` (Off-White/Vapor), `#FFFFFF` (Pure White).
* **Primary Dark (Executive):** `#0A192F` (Deep Navy), `#020C1B` (Void Black).
* **Accents:**
    * *Proliance Blue:* `#005EB8` (Trust/Medical).
    * *Gold Foil:* `#D4AF37` (Premium/Awards - Use sparingly).
    * *Text Grey:* `#4B5563` (Softer than black for readability).

---

---

## 2. Global Layout & 80/20 Grid Standards

### **Task 1.0: Global Container (The 80% Rule)**
* **Requirement:** To maintain a "Luxury/Art Gallery" feel, all main content must be constrained to a centered container.
* **Breakpoints:**
    * **Desktop (lg):** `max-w-[80%]`.
    * **Tablet (md):** `max-w-[85%]`.
    * **Mobile:** `max-w-[95%]`.
* **Alignment:** Content edges across all 8 sections must align vertically with the Navbar brand text and CTA.

### **Task 1.1: The "Morphing" Navbar**
* **Requirement:** The navbar must adapt based on the scroll position (Light Mode for Clinical, Dark Mode for Executive).
* **Left Component:** `Dr. Jeffrey Roh` (Serif).
* **Right Component (Menu):**
    * Links: *Clinical*, *Ventures*, *Patents*, *About*.
    * **CTA Button:** Dynamic text.
        * *Scroll 0-40%:* "Book Consultation" (Blue pill shape).
        * *Scroll 40-100%:* "Partner with IntuitiveX" (Gold outline).
* **Animation:** `AnimatePresence` fade-in/out on scroll thresholds. Backdrop blur `backdrop-blur-md` always active.

### **Task 1.2: Smooth Scroll Setup**
* **Action:** Install `@studio-freight/lenis`.
* **Config:** Set `lerp: 0.1` for a buttery smooth, slightly heavy scroll feel common in Awwwards-winning sites.

---

## 3. Section Implementation Breakdown

### **Section I: The Hero (The Dual-Threat)**
*A split-screen interface that establishes the two personas.*

* **Structure:** `div.grid.grid-cols-2.h-screen`
* **Left Column (Surgeon):**
    * **Bg:** Light grey/white.
    * **Media:** `[PLACEHOLDER: Cutout Image of Dr. Roh in Scrubs - Looking Right]`
    * **Text:** "Restoring Motion." (Large Serif).
    * **Interaction:** On hover, this side expands to 60% width; Right side dims to 50% opacity.
* **Right Column (Executive):**
    * **Bg:** Soft Navy/Grey.
    * **Media:** `[PLACEHOLDER: Cutout Image of Dr. Roh in Suit - Looking Left]`
    * **Text:** "Incubating Innovation." (Large Serif).
    * **Interaction:** On hover, expands to 60%; Left side dims.
* **Center Overlay:**
    * **Element:** Absolute centered circle with text "Dr. Jeffrey Roh".
    * **Animation:** Rotates slowly. Explodes outwards on scroll.

### **Section II: Clinical Excellence (The Kaizen Engine)**
*Focus: Intellectual depth, Japanese minimalism, and medical-grade precision. Light Theme.*

* **Task 2.1: The Kaizen Definition (改善)**
    * **Requirement:** Large Serif title with Japanese Kanji.
    * **Animation:** Kanji characters draw themselves on scroll.
* **Task 2.2: The Three Pillars Grid**
    1. **Muda (改善):** Elimination of Waste (500cc -> 50cc story).
    2. **Gemba (現場):** The Real Place (OR-led innovation).
    3. **Jidoka (自働化):** The Human Touch (Empathy in automation).
* **Task 2.3: The Innovation Loop (Interactive SVG)**
    * **Logic:** 4-stage cycle (Identify -> Invent -> Incubate -> Impact).
    * **Interaction:** Clicking stages rotates the mechanical shutter diagram.
* **Task 2.4: The Family Test Manifesto**
    * **Design:** Heavy left gold border with italicized large serif.
* **Task 2.5: The 2025 Vision (Excel Health)**
    * **Design:** Glassmorphic card detailing the Outpatient transition.

<!-- 
### SECTION REMOVED: Section IV: IntuitiveX (The Executive Engine)
*Decision: Merged Innovation Loop into the Kaizen Engine for high-impact flow.*

### SECTION REMOVED: Section V: Authority (The Switzerland Strategy)
*Decision: Narrative focus shifted to Kaizen and Origin storytelling.*
-->

### **Section IV: Dr. Roh AI (The Companion)**
*Focus: Premium, Dark Mode, High-Tech. Switch global theme to Dark here.*

* **Task 4.1: The Concept Header**
    * **Bg:** `#0A192F` (Deep Navy).
    * **Copy:** "Crossing the Valley of Death."
    * **Graphic:** A subtle SVG line animation drawing a bridge between "Clinical Need" and "Commercial Exit."
* **Task 4.2: The "Flywheel" Horizontal Scroll**
    * **Interaction:** Sticky parent container. Horizontal movement based on vertical scroll (`useScroll` hook).
    * **Cards (400px width, glassmorphism style):**
        1.  **Amplify Surgical:** Image of `dualX` cage. "1,400+ Surgeries."
        2.  **Carlsmed:** Image of 3D spine model. "FDA Breakthrough."
        3.  **AltPep:** Abstract molecule visual. "Series A Funded."
        4.  **Chiral Surgical:** Image of surgical tool. "Acquired."
    * **Animation:** Cards tilt 3D on hover.

### **Section V: Authority (The "Switzerland Strategy")**
*Focus: Validation through association.*

* **Task 5.1: The Partner Marquee**
    * **Component:** Infinite scrolling loop (Marquee).
    * **Logos (Greyscale to White on hover):** Stryker, J&J, Intuitive Surgical, Bioventus, UW Foster.
* **Task 5.2: The Patent Wall (Masonry Grid)**
    * **Design:** Thin white lines forming a grid on a dark background.
    * **Content:**
        * **Cell 1 (Large):** **Patent US10874464B2**. Title: "AI Guidance for Robotic Surgery."
        * **Cell 2:** **Patent US20140277145A1**. Title: "Percutaneous Cross Link."
        * **Cell 3:** "30+ Additional Patents Filed."
    * **Interaction:** Hovering a cell lights up the border (glow effect).

### **Section VI: The Bridge (Sizzle Reel)**
*A visual palate cleanser. Final transition.*
*Focus: Storytelling, Warmth, Return to softer dark tones.*

* **Task 6.1: The Timeline**
    * **Style:** A vertical line down the center. Nodes appear on scroll.
    * **Nodes:**
        * *1970s:* "Seattle Grocery Store" (Icon: Shopping Bag).
        * *1998:* "Medical College of Wisconsin" (Icon: Caduceus).
        * *2016:* "Founded IntuitiveX" (Icon: Rocket).
        * *Now:* "AAPI Victory Fund Board" (Icon: Laurel Wreath).
* **Task 6.2: Philanthropy Callout**
    * **Card:** "The Roh Family MBA Diversity Fellowship."
    * **Visual:** `[PLACEHOLDER: Photo of Dr. Roh with Students]`

### **Section VII: Dr. Roh AI (The Finale)**
*A full-screen interactive destination.*

* **Structure:** `div.h-screen.flex.items-end.justify-center`
* **Media:** `[PLACEHOLDER: High-Res 3D Render/Cutout of Dr. Roh Standing]` (positioned bottom-left, taking up 60% height).
* **Chat Interface (Right Side):**
    * **Design:** Floating glass panel (`backdrop-filter: blur(20px)`).
    * **Header:** "Dr. Roh Digital Assistant."
    * **Suggested Prompts (Pills):**
        * "How fast is recovery?"
        * "Tell me about IntuitiveX."
        * "Schedule a Keynote."
    * **Input Field:** Minimalist line input.
    * **Animation:** The avatar subtly breathes/moves (idle animation) using CSS keyframes.

### **Section VIII: The Footer**
* **Layout:** 4 Columns.
    1.  **Brand:** Dr. Jeffrey Roh (Logo).
    2.  **Contact:**
        * Seattle (Address)
        * Hawaii (Address)
    3.  **Socials:** LinkedIn, Doximity, ResearchGate.
    4.  **Legal:** "HIPAA Compliant. © 2025 IntuitiveX."
* **Effect:** A massive "Dr. Jeffrey Roh" watermark text behind the footer content (opacity 0.05).

---

## 4. Animation & Interaction Specifications

### **Global Hover Effects**
* **Buttons:** All buttons should have a `scale: 0.95` on click and a "fill" animation on hover (background color slides in from left).
* **Links:** Underline expands from center `width: 0% -> 100%`.

### **Scroll Triggers**
* **Text Reveal:** Use a "Line Mask" effect. Text is hidden inside a `div` with `overflow: hidden`. The text translates Y from 100% to 0% as the user scrolls.
* **Image Parallax:** All images should have `scale: 1.1` initially and `scale: 1.0` on scroll, creating a subtle "zoom out" effect.

---

## 5. Media Placeholder Manifest
*Use this checklist to gather assets before coding.*

1.  `img_hero_scrubs.png` (Dr. Roh clinical portrait, transparent bg)
2.  `img_hero_suit.png` (Dr. Roh executive portrait, transparent bg)
3.  `video_sizzle_reel.mp4` (15-30s montage)
4.  `img_mri_scan.jpg` (High contrast spine scan)
5.  `img_product_dualx.png` (Device render)
6.  `img_product_carlsmed.png` (Device render)
7.  `logo_stryker.svg`, `logo_bioventus.svg`, `logo_intuitive.svg`
8.  `img_timeline_vintage.jpg` (Old photo of grocery store/early days - optional/texture)

---


---

## 7. Implementation Status (Current Progress)

### **Phase 1: Foundation (COMPLETED)**
- [x] Next.js App Router Setup.
- [x] Tailwind 4.0 Design System (Clinical vs Executive).
- [x] Lenis Smooth Scroll Integration.

### **Phase 2: Section Build (COMPLETED)**
- [x] **Section I-VIII implemented:** Hero, Clinical, Bridge, IntuitiveX, Authority, Origin, RohAI, Footer.
- [x] Dual-Persona interactive hover logic.
- [x] Horizontal scroll "Flywheel" mechanism.
- [x] Glassmorphic AI chat destination.

### **Phase 3: Visual Audit & Refinement (COMPLETED)**
- [x] **80% Grid Standardization:** Unified all containers and Navbar widths.
- [x] **Breathing Room Audit:** Normalized `py-32/48` spacing and increased junction padding.
- [x] **Mobile Optimization:** Scaled containers for 375px+ devices with proper stacking.
- [x] **Alignment Sync:** Perfectly aligned Navbar logo with content edges.

---

## 8. Final Roadmap

1.  **Setup:** Initialize Next.js repo, configure Tailwind `theme.extend`.
2.  **Architecture:** Implement the 80/20 Grid container system across all pages.
3.  **Skeleton:** Build the HTML structure for all 8 Bio-Futurism sections.
4.  **Styling:** Apply Tailwind utility classes for high-contrast typography.
5.  **Motion:** Wrap components in Framer Motion for scroll-reveals.
6.  **Refinement:** Systematic visual audit of margins, junctions, and horizontal alignment.
7.  **Production Readiness:** Asset replacement, performance optimization, and SEO meta-data.