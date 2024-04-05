import { ReactNode } from 'react'
import './Card.css'
import classNames from 'classnames'
import { CSSProperties } from 'react'

export type CardType = {
  children?: ReactNode
  color?: 'primary' | 'secondary'
  size?: 'small' | 'medium' | 'large'
  className?: string
  isClickable?: boolean
  isDragable?: boolean
  onClick?: () => void
  styles?: CSSProperties
  title?: string
}

export const Card = ({
  children,
  color='primary',
  size,
  className,
  isClickable,
  isDragable,
  onClick,
  styles,
  title,
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
      style={styles}
    >
      <p>{title}</p>
      {children}
    </div>
  )
}
