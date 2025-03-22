import React from 'react'

interface InputProps {
  type: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  readOnly?: boolean;
  placeholder?: string;
  min?: number;
  max?: number;
}

const Input: React.FC<InputProps> = ({ type, value, onChange, readOnly, placeholder, min, max }) => {
  return (
    <input
      type={type}
      value={value}
      onChange={onChange}
      readOnly={readOnly}
      placeholder={placeholder}
      min={min}
      max={max}
      className="border p-2 rounded-xl w-full"
    />
  )
}

export default Input