import React from 'react'

interface CardProps {
  children: React.ReactNode;
}

const Card: React.FC<CardProps> = ({ children }) => {
  return (
    <div className="bg-white p-4 shadow rounded-2xl w-full max-w-md mb-4">{children}</div>
  )
}

export default Card