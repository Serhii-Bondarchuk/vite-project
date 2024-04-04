import { ReactNode } from 'react'
import './Card.css'
import classNames from 'classnames'

export type CardType = {
  children?: ReactNode
  color?: 'primary' | 'secondary'
  size?: 'small' | 'medium' | 'large'
  className?: string
  isClickable?: boolean
  isDragable?: boolean
  onClick?: () => void
}

export const Card = ({
  children,
  color,
  size,
  className,
  isClickable,
  isDragable,
  onClick,
}: CardType) => {
  return (
    <div
      className={classNames('card', {
        [`color-${color}`]: color,
        [`size-${size}`]: size,
        [`${className}`]: className,
        'is-clickable': isClickable,
        'is-dragable': isDragable,
      })}
      onClick={onClick}
    >
      {children}
    </div>
  )
}
