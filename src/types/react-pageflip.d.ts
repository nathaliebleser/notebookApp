declare module 'react-pageflip' {
  import React from 'react'

  interface HTMLFlipBookProps extends React.HTMLAttributes<HTMLDivElement> {
    width: number
    height: number
    size?: string
    minWidth?: number
    maxWidth?: number
    minHeight?: number
    maxHeight?: number
    maxShadowOpacity?: number
    showCover?: boolean
    mobileScrollSupport?: boolean
    useMouseEvents?: boolean
    clickEventForward?: boolean
    swipeDistance?: number
    onFlip?: (e: React.ChangeEvent<HTMLInputElement>) => void
    onChangeOrientation?: (e: React.ChangeEvent<HTMLInputElement>) => void
    onChangeState?: (e: React.ChangeEvent<HTMLInputElement>) => void
    className?: string
    style?: React.CSSProperties
    autoSize?: boolean
  }

  export class HTMLFlipBook extends React.Component<HTMLFlipBookProps> {
    pageFlip: EventObject
  }
  export default HTMLFlipBook
}
