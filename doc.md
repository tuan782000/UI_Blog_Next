# Tự Học Lập trình NextJS

NextJS là 1 framework. Nó có thể làm được SSR: Server Side Rendering và CSR: Client Side Rendering

Vậy khi nào dùng Server Side Rendering: Dùng cho các trang cần SEO chẳng hạn như HOME, ABOUT,...

Dùng CSR: Server Side Rendering ở các trang Login, Register, Admin,... Nói chung người dùng tương tác với dữ liệu trên web. - Cần Hooks


Cụ thể hơn về Server Side Rendering là mã HTML của trang được tạo trên máy chủ và được gửi đến trình duyệt ở trạng thái đã được hiển thị đầy đủ.


SSR trái ngược với kết xuất phía máy khách (CSR), nơi mã HTML của trang được tạo trong trình duyệt bằng JavaScript. CSR thường được sử dụng cho các ứng dụng web một trang (SPA), là các ứng dụng web tải một trang HTML duy nhất và sau đó cập nhật trang đó một cách động bằng JavaScript.

## Giới thiệu trong thư mục nextJS sau cung cấp ban đâu có gì?

trong thư mục src\app

globals.css - nên chứa màu nền, màu văn bản, hoặc các màu mix... - sử dụng cho toàn bộ ứng dụng

```Css
:root {
    --bg: white;
    --textColor: black;
    --softBg:#f0f0f0;
    --softTextColor: #626262;
}

/* Reset CSS */
* {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
}

...
```

Tạo thư mục Components chia nhỏ các thành phần

Mỗi thành phần sẽ có nằm trong components - mỗi thành phần có 2 file chính nó và file css của nó

Khi tạo các Component xong thì đưa nó vào page.jsx trang chính hiển thị các thành phần

Cha của page.jsx là layout.js, cho nên ta thấy trong file layout.js có 