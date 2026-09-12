# Portfolio — เขมินท์ แสนแซ่ (How)

Web App Portfolio สำหรับสมัครงาน/ฝึกงานตำแหน่ง Junior Full-Stack Developer
สร้างด้วย React + Vite + Tailwind CSS v4

## ก่อน Deploy ต้องแก้ตรงไหนบ้าง

ทุกจุดที่ต้องแก้อยู่ในไฟล์เดียว: **`src/data.js`**

- `profile.resumeUrl` — ใส่ลิงก์ไฟล์ Resume จริง (แนะนำ: อัปโหลดไฟล์ `.pdf` ไว้ในโฟลเดอร์ `public/` แล้วใส่ path เช่น `/resume.pdf`)
- `profile.email`, `profile.github`, `profile.linkedin` — ใส่ข้อมูลติดต่อจริงของคุณ
- `projects[].githubUrl`, `projects[].demoUrl` — ใส่ลิงก์ repository / demo จริงของแต่ละโปรเจกต์
- `skills` — ปรับให้ตรงกับทักษะจริงที่คุณอธิบายได้ (อย่าใส่ Technology ที่อธิบายไม่ได้จริง ตามโจทย์ Rule of Thumb)

## รันบนเครื่องตัวเอง

```bash
npm install
npm run dev
```

เปิดที่ http://localhost:5173

## Build สำหรับ Production

```bash
npm run build
npm run preview   # ทดสอบ build จริงก่อน deploy
```

## Deploy บน Vercel (แนะนำ)

1. Push โค้ดขึ้น GitHub repository
2. เข้า https://vercel.com → New Project → เลือก repository นี้
3. Framework Preset จะถูกตรวจจับเป็น **Vite** อัตโนมัติ (Build Command: `npm run build`, Output Directory: `dist`)
4. กด Deploy แล้วจะได้ Public URL เช่น `https://yourname.vercel.app`

## Deploy บน GitHub Pages

1. ติดตั้ง `gh-pages`: `npm install -D gh-pages`
2. เพิ่มใน `package.json`:
   ```json
   "homepage": "https://<username>.github.io/<repo-name>",
   "scripts": {
     "predeploy": "npm run build",
     "deploy": "gh-pages -d dist"
   }
   ```
3. เพิ่ม `base: '/<repo-name>/'` ใน `vite.config.js`
4. รัน `npm run deploy`

## ก่อนส่งงาน เช็คตาม Pre-submission Checklist

- [ ] เปิด Public URL ใน Incognito แล้วใช้งานได้จริง
- [ ] กดทุกเมนู / ปุ่ม CTA แล้วทำงานถูกต้อง
- [ ] ลิงก์ Email / GitHub / LinkedIn เปิดได้จริง (ไม่ใช่ `#`)
- [ ] ทดสอบบนมือถือจริง (ไม่ใช่แค่ย่อหน้าต่าง browser)
- [ ] ไม่มี Error ใน Console
- [ ] ไม่มี API Key / Password หลุดอยู่ใน source code
