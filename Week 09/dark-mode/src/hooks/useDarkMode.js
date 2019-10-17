import React, { useState, useEffect } from "react"
import { useLocalStorage } from "./useLocalStorage"

export const useDarkMode = () => {
    const [value, setValue] = useLocalStorage('darkMode', false);

    useEffect(() => {
        value 
            ? document.body.classList.add("dark-mode") 
            : document.body.classList.remove("dark-mode")
    }, [value])

    return [value, setValue]

}
