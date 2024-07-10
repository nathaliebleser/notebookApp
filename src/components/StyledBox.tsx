import { FC, ReactNode } from 'react'

interface StyledBoxProps {
  children?: ReactNode
}

export const StyledBox: FC<StyledBoxProps> = ({ children }) => {
  return <div className="border-solid border-black border rounded-md h-16">{children}</div>
}
