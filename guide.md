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
- Hiệu ứng spin infinity icon Sun lấy biến hasHydrated từ ThemeContext.jsx để biết client đã đọc xong theme từ localStorage chưa để render hiệu ứng, tránh lỗi khi render trước khi biết user đang ở dark hay light mode.

3. Cài đặt Motion với React: `https://motion.dev/docs/react-quick-start`
>> npm install motion
>> npm run dev
- Bỏ đoạn `import { motion } from "motion/react"` vào bất kì component nào muốn dùng motion
- Nếu thẻ `<div></div>` thì thành `<motion.div></motion.div>`
- `initial={{ scale: 0 }}
    whileInView={{ scale: 1 }}
    transition={{ duration: 0.8, type: "spring", stiffness: 100 }}`
- Thêm các phương thức sau vào thẻ div vừa rồi
4. Cài đặt Vercel
>> npm install -g vercel
>> vercel login
>> vercel
- Cài Vercel vì gh-page ko chạy đc Nextjs, đơn giản hơn thì k cần 2 đoạn mã ở dưới, chỉ cần cài và push lên github rồi vào trang chủ Vercel để kết nối github và import repo vừa push lên để deploy là xong.

5. Chức năng
- NavBar.jsx: navbar responsive + activeLink đồng bộ với window.location.pathname + window.location.hash khi tải trang + darkmode button.
- PageTransition.jsx: để tạo 1 background trùng màu với background của trang web (để có hiệu ứng chuyển trang web) và khi reload lại trang hoặc chuyển trang thì background đó có hiệu ứng mờ dần lộ ra trang web chính, chừa thời gian cho hiệu ứng chuyển trang biến mất.
- Stairs.jsx và StairTransition.jsx: để tạo hiệu ứng bậc thang đi lên và đi xuống khi load trang web.
- ScrollUpButton.jsx: tạo 1 button mà khi nhấn vào thì sẽ tự động scroll lên top của trang web.
- ScrollNavButton.jsx: tạo 5 button trong Home có chức năng khi nhấn vào sẽ tự scroll trang web đến vị trí tương ứng với id của từng components.
- /about/page.js + Education.jsx + CircleIcon.jsx + AboutHeader.jsx: tạo 1page about có hiệu ứng framermotion khi cuộn trang web.
- AnimateText.jsx: tạo 1 animation text pop-up từng chữ khi load trang web.

