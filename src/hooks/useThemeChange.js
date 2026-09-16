import { useEffect, useState } from "react";
import { themeChange } from "theme-change";

export default function useThemeChange() {
    const [theme] = useState(() => {
        if (typeof window !== "undefined") {
            return localStorage.getItem("theme") || "light";
        }
        return "light";
    });

    useEffect(() => {
        themeChange(false);
    }, []);
}