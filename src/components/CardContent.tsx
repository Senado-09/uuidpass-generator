import React from 'react'

interface CardContentProps {
  children: React.ReactNode;
}

const CardContent: React.FC<CardContentProps> = ({ children }) => {
  return (
    <div className="flex flex-col space-y-2">{children}</div>
  )
}

export default CardContent