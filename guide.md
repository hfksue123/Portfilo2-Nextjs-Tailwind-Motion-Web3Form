# PORTFOLIO WITH NEXTJS, TAILWIND
1. Cơ Bản:
>> `npx create-next-app@latest`
>> `npm run dev` để chạy thử
- Trong file layout.js -> sửa metadata thành tên trang web
- Xóa hết mọi thứ trong page.js và sửa lại font nếu cần
- Tạo 1 folder components trong /app và tạo trong đó 1 file Navbar.jsx và gõ `rafce` để tạo nội dung nhanh
- Thiết kế Navbar và import vào page.js
- Nếu muốn scroll smooth khi nhấn vào id để page tự scroll đến vị trí mong muốn trong 1 page thì bỏ `className="scroll-smooth"` vào
thẻ html trong layout.js
2. Cài light/darkmode theo máy người dùng và button switch:
- Bỏ dòng '@custom-variant dark (&:where(.dark, .dark *));' vào đầu file global.css
- Viết js xử lý trong page.js và bỏ props drilling xuống các components con (ex: `<NavBar isDarkMode={isDarkMode}`)
- Qua Navbar.jsx thêm `const NavBar = ({isDarkMode, setIsDarkMode})` và xử lý button là xong.
- Chỉnh sửa lại các ảnh, text cho phù hợp từng theme (ex:`src={isDarkMode ? assets.logo_dark : assets.logo}`)

3. Cài đặt Motion với React: `https://motion.dev/docs/react-quick-start`
>> npm install motion
>> npm run dev
- Bỏ đoạn `import { motion } from "motion/react"` vào bất kì component nào muốn dùng motion
- Nếu thẻ `<div></div>` thì thành `<motion.div></motion.div>`
- `initial={{ scale: 0 }}
    whileInView={{ scale: 1 }}
    transition={{ duration: 0.8, type: "spring", stiffness: 100 }}`
- Thêm các phương thức sau vào thẻ div vừa rồi, hiệu ứng là



