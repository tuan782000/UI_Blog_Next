"use client";

// use client phần rõ ra là cái này sử dụng ở phía máy khách.
import { createContext, useEffect, useState } from "react";

export const ThemeContext = createContext();

// Hàm lấy dữ liệu theme sáng tối được trong localStorage
const getFromLocalStorage = () => {
    // vì tất cả các code trong trang này được kết xuất từ phía server mà localStorage là phía client nên đôi khi sẽ có lỗi, phải thêm "if" sau để tránh lỗi
    if(typeof window !== "undefined") {
        const value = localStorage.getItem("theme");
        // Nhưng mà ban đầu đăng nhập vào thì chưa có theme => value nếu chưa có cứ trả về light do dùng logic "hoặc"
        return value || "light";
    }
}

export const ThemeContextProvider = ({ children }) => {
    const [theme, setTheme] = useState(() => {
        return getFromLocalStorage()
    });

    const toggle = () => {
        setTheme(theme === "light" ? "dark" : "light");
    }

    useEffect(() => {
        localStorage.setItem("theme", theme)
    }, [theme])

    return (
    <ThemeContext.Provider value={{ theme, toggle }}>
        {children}
    </ThemeContext.Provider>
)}