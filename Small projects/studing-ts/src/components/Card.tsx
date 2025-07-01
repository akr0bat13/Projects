import React, { FC, useState } from 'react'

export enum CardVariant {
  outlined = 'outlined',
  primary = 'primary',
}

interface CardProps {
  width: string
  height: string
  variant: CardVariant
  children: React.ReactNode | React.ReactChild
  onClick: (num: number) => void
}

const Card: FC<CardProps> = ({ height, onClick, width, variant, children }) => {
  const [state, setState] = useState(0)
  return (
    <div
      style={{
        width,
        height,
        border: variant === CardVariant.outlined ? '1px solid black' : 'none',
      }}
      onClick={() => onClick(state)}
    >
      {children}
    </div>
  )
}

export default Card
