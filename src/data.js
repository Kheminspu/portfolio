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
  resumeUrl: "#", // TODO: ใส่ลิงก์ไฟล์ Resume ของคุณ (เช่น Google Drive แบบเปิดสาธารณะ หรือไฟล์ .pdf ใน /public)
  email: "khemin.sae@spumail.net",
  github: "https://github.com/Kheminspu",
  linkedin: "https://www.linkedin.com/in/khemin-saensae-199416436",
};

export const skills = [
  {
    category: "Languages",
    items: ["Python", "JavaScript", "SQL", "HTML / CSS"],
  },
  {
    category: "Frameworks & Libraries",
    items: ["FastAPI", "React", "Tailwind CSS", "Streamlit"],
  },
  {
    category: "Data & AI",
    items: ["PostgreSQL", "ChromaDB (RAG)", "Claude API", "Groq Whisper"],
  },
  {
    category: "Tools",
    items: ["Git / GitHub", "Vercel", "Figma", "draw.io / Mermaid"],
  },
];

export const projects = [
  {
    id: "scamguard-ai",
    featured: true,
    name: "ScamGuard AI (HI-Scammer)",
    period: "โปรเจกต์กลุ่ม — วิชา AI",
    problem:
      "มิจฉาชีพออนไลน์ใช้ข้อความ รูปภาพ และเสียงหลอกลวงเป็นภาษาไทยหลากหลายรูปแบบ ทำให้ยากต่อการตรวจจับด้วยการกรองคำแบบเดิม",
    solution:
      "ระบบวิเคราะห์ความเสี่ยงการหลอกลวงแบบ multi-modal (ข้อความ / รูปภาพ / เสียง) โดยผสาน RAG สำหรับเทียบเคียงรูปแบบกลโกงที่เคยพบ ร่วมกับ Blacklist API และ Pattern Matching",
    role: "รับผิดชอบการทำความเข้าใจสถาปัตยกรรมระบบทั้งหมดในเชิงลึก จัดทำ system architecture diagram หลายรูปแบบ (Mermaid, draw.io XML, HTML infographic) เอกสารประกอบการนำเสนอ และสคริปต์ตอบคำถามอาจารย์ ทีมเป็นผู้พัฒนาโค้ดหลักของระบบ",
    tech: [
      "FastAPI",
      "Claude Haiku (Vision OCR)",
      "ChromaDB",
      "Groq Whisper large-v3",
      "PostgreSQL",
      "Streamlit",
    ],
    outcome:
      "เข้าใจสถาปัตยกรรมระบบ AI ระดับ production ตั้งแต่ OCR สองรอบ, การฝัง embedding หลายภาษา (paraphrase-multilingual-MiniLM-L12-v2), ไปจนถึงการจัดเก็บ session และการนำเสนองานเทคนิคให้คนที่ไม่ได้เขียนโค้ดเข้าใจได้",
    githubUrl: "",
    demoUrl: "",
  },
  {
    id: "pizza-ordering-system",
    featured: false,
    name: "Pizza Online Ordering System",
    period: "โปรเจกต์เดี่ยว/กลุ่ม — วิชา CSI402",
    problem:
      "ระบบสั่งพิซซ่าออนไลน์เดิมขาดเอกสารที่สื่อสาร logic การทำงานจริงระหว่างฝั่ง Customer และ Admin ให้ผู้ตรวจงานเข้าใจได้ง่าย",
    solution:
      "จัดทำเอกสารระบบครบวงจร ได้แก่ Flowchart และ Data Flow Diagram ตามหลัก Gane & Sarson notation พร้อมตรวจสอบและแก้ไข diagram ให้ตรงกับ logic จริงของซอร์สโค้ด เช่น การตรวจสอบชื่อผู้ใช้ซ้ำ (ไม่ใช่อีเมล) และการแยกเส้นทางผู้ใช้ระหว่าง Admin กับ Customer",
    role: "ออกแบบและแก้ไข Diagram (Mermaid, draw.io XML, SVG) ให้สอดคล้องกับพฤติกรรมจริงของระบบ และจัดทำรายงาน Word ฉบับสมบูรณ์",
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
