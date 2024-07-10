import { FC } from 'react'
import { StyledBox } from './StyledBox'
import { TaskBox } from './TaskBox'

interface DayProps {
  day: string
}

const Day: FC<DayProps> = ({ day }) => {
  return (
    <StyledBox>
      <div className="h-full flex divide-x divide-dashed divide-black">
        <div className="h-full w-10 flex items-center">
          <p className="w-10 text-center rotate-[270deg]">{day}</p>
        </div>
        <div className="flex h-full w-full divide-black divide-x divide-solid">
          <TaskBox />
          <TaskBox />
          <TaskBox />
        </div>
        <div className="h-full w-6 flex justify-center items-center">
          <p>+</p>
        </div>
      </div>
    </StyledBox>
  )
}

export default Day
