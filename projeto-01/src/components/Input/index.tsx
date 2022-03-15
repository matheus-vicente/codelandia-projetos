import React, { InputHTMLAttributes } from "react"

import "./styles.css"

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  icon?: { src: string; alt: string; };
}

export const Input: React.FC<InputProps> = (
  { icon, className, ...props }
) => {
  return (
    <div className={`input-component-container ${className}`}>
      { icon && <img src={icon.src} alt={icon.alt} /> }
      <input type="text" {...props} />
    </div>
  )
}
