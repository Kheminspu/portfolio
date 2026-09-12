// แก้ไขข้อมูลของคุณตรงนี้ที่เดียว ไม่ต้องไล่แก้หลายไฟล์
import avatar from "./assets/profile.png";

export const profile = {
  photo: avatar,
  name: "เขมินท์ แสนแซ่",
  nameEn: "Khemin Saensae",
  handle: "How",
  target: "Junior Full-Stack Developer",
  eyebrow: "นักศึกษาวิทยาการคอมพิวเตอร์ · มหาวิทยาลัยศรีปทุม (บางเขน)",
  birthdate: "4 เมษายน 2546 · อายุ 23 ปี",
  address: "กรุงเทพมหานคร",
  studying:
    "สาขาวิทยาการคอมพิวเตอร์และนวัตกรรมการพัฒนาซอฟต์แวร์ · มหาวิทยาลัยศรีปทุม (บางเขน)",
  goal: "Junior Full-Stack / Backend Developer (Python · TypeScript) — สนใจเรียนรู้การทำงานจริงเป็นยังไง",
  tagline:
    "นักศึกษาวิทยาการคอมพิวเตอร์ที่ชอบแตะทุกชั้นของระบบ ตั้งแต่ออกแบบฐานข้อมูลไปจนถึงหน้าจอที่ผู้ใช้เห็นจริง",
  about: `ผมเป็นนักศึกษามหาวิทยาลัยศรีปทุม (บางเขน) คณะเทคโนโลยีสารสนเทศ
สาขาวิทยาการคอมพิวเตอร์ กำลังเตรียมตัวสมัครงาน/ฝึกงานในตำแหน่ง Junior Full-Stack Developer สนใจงานฝั่ง Backend และระบบที่ใช้ AI ช่วยแก้ปัญหาจริง เคยร่วมพัฒนาเอกสารสถาปัตยกรรม ระบบและนำเสนอโปรเจกต์ทั้งเดี่ยวและกลุ่ม โดยให้ความสำคัญกับความเข้าใจที่มาที่ไปของโค้ด มากกว่าการให้ AI สร้างให้แล้วส่งอย่างเดียว`,
  resumeUrl: "/Khemin-Saensae-CV.pdf",
  email: "khemin.sae@spumail.net",
  phone: "099-237-5464",
  github: "https://github.com/Kheminspu",
  linkedin: "https://www.linkedin.com/in/khemin-saensae-199416436",
};

export const skills = [
  {
    category: "Languages",
    items: ["Python", "JavaScript", "SQL", "HTML / CSS"],
  },
  {
    category: "Frontend",
    items: ["React", "Tailwind CSS", "Streamlit"],
  },
  {
    category: "Backend & API",
    items: ["FastAPI", "REST API design"],
  },
  {
    category: "AI / LLM",
    items: [
      "Claude API (Claude Haiku)",
      "RAG",
      "Prompt design",
      "Vision API (OCR)",
      "Embeddings (paraphrase-multilingual-MiniLM-L12-v2)",
      "Groq Whisper large-v3",
    ],
  },
  {
    category: "Database",
    items: ["PostgreSQL", "ChromaDB (vector DB)"],
  },
  {
    category: "เอกสาร & แผนภาพ",
    items: [
      "Flowchart / DFD (Gane & Sarson)",
      "Mermaid",
      "draw.io",
      "ReportLab (PDF ภาษาไทย)",
      "Word documentation",
    ],
  },
  {
    category: "Tools",
    items: ["Git / GitHub", "Vercel", "Figma"],
  },
];

export const projects = [
  {
    id: "scamguard-ai",
    featured: true,
    name: "ScamGuard AI (HI-Scammer)",
    period: "โปรเจกต์กลุ่ม — AI / LLM + RAG",
    problem:
      "มิจฉาชีพออนไลน์ใช้ข้อความ รูปภาพ และเสียงหลอกลวงเป็นภาษาไทยหลากหลายรูปแบบ ทำให้ยากต่อการตรวจจับด้วยการกรองคำแบบเดิม",
    solution:
      "ระบบใช้ Claude Haiku (claude-haiku-4-5) วิเคราะห์ข้อความ และ OCR ผ่าน Vision API แบบสองรอบ ใช้ paraphrase-multilingual-MiniLM-L12-v2 สร้าง embeddings เก็บบน ChromaDB เป็น RAG (top-k=3, similarity ≥ 0.5) ร่วมกับ Blacklist API และ Pattern Matching เสริมความแม่นยำในการตรวจจับ",
    role: "ร่วมพัฒนาโค้ดบางส่วนของระบบ และรับผิดชอบทำความเข้าใจสถาปัตยกรรมทั้งระบบเพื่อนำเสนอผลงาน จัดทำโปสเตอร์นำเสนอ A4 ด้วย ReportLab (รองรับฟอนต์ไทยและไอคอนเวกเตอร์), ไดอะแกรมสถาปัตยกรรมหลายรูปแบบ (Mermaid, draw.io XML, HTML infographic), เอกสารเทคนิคและสคริปต์ถาม-ตอบสำหรับอาจารย์",
    tech: [
      "Python",
      "FastAPI",
      "Claude API",
      "ChromaDB",
      "Groq Whisper large-v3",
      "PostgreSQL",
      "Streamlit",
      "ReportLab",
    ],
    outcome:
      "เข้าใจสถาปัตยกรรมระบบ AI ระดับ production ตั้งแต่ OCR สองรอบ, การฝัง embedding หลายภาษา, ไปจนถึงการจัดเก็บ session และการนำเสนองานเทคนิคให้คนที่ไม่ได้เขียนโค้ดเข้าใจได้",
    githubUrl: "",
    demoUrl: "",
  },
  {
    id: "pizza-ordering-system",
    featured: false,
    name: "Pizza Online Ordering System",
    period: "โปรเจกต์วิชา CSI402 — System Analysis & Design",
    problem:
      "ระบบสั่งพิซซ่าออนไลน์เดิมขาดเอกสารที่สื่อสาร logic การทำงานจริงระหว่างฝั่ง Customer และ Admin ให้ผู้ตรวจงานเข้าใจได้ง่าย",
    solution:
      "จัดทำเอกสารระบบครบวงจร ได้แก่ Flowchart และ Data Flow Diagram (DFD) ตามหลัก Gane & Sarson notation โดยใช้ทั้งรูปแบบ Mermaid และ draw.io XML พร้อมตรวจสอบและแก้ไข diagram ซ้ำหลายรอบให้ตรงกับ logic จริงของซอร์สโค้ด เช่น การตรวจสอบชื่อผู้ใช้ซ้ำ (ไม่ใช่อีเมล) การจัดเก็บข้อมูล session หลังล็อกอิน และการแยกเส้นทางผู้ใช้ระหว่าง Admin กับ Customer",
    role: "วิเคราะห์และออกแบบ Diagram (Mermaid, draw.io XML) ให้สอดคล้องกับพฤติกรรมจริงของระบบ และจัดทำรายงาน Word ฉบับสมบูรณ์ เวอร์ชันก่อนหน้าของงาน (Pizza Hub) ออกแบบ Flowchart แบบ SVG และ Context Diagram DFD ตามหลัก Gane & Sarson พร้อมยึดหลักการเขียนโฟลว์ชาร์ตเชิงวิชาการ (Sequence, Selection, Iteration)",
    tech: ["Mermaid", "draw.io", "SVG", "Documentation"],
    outcome:
      "ฝึกอ่านโค้ดจริงแล้วแปลงเป็นแผนภาพที่ถูกต้องตามหลักวิชาการ (Sequence, Selection, Iteration) และเรียนรู้การสื่อสารการออกแบบระบบให้ตรงกับพฤติกรรมจริงของโปรแกรม",
    githubUrl: "",
    demoUrl: "",
  },
];

export const navItems = [
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "experience", label: "Experience" },
  { id: "contact", label: "Contact" },
];
