import { forwardRef } from 'react'
import { flipFunctionsInt } from './hooks/usePageFlip'
import WeekPage from './WeekPage'

interface WeekSpreadProps {
  startPageNumber: number
  daysPerPage: number
  flipFunctions: flipFunctionsInt
}

function pagesUsed(daysPerPage: number) {
  const daysInAWeek = 7
  if (daysPerPage > 0 && daysPerPage <= 7) {
    const minPages = Math.ceil(daysInAWeek / daysPerPage)
    if (minPages % 2 !== 0) {
      return minPages + 1
    } else {
      return minPages
    }
  } else {
    return 0
  }
}

const WeekSpread = forwardRef<HTMLDivElement, WeekSpreadProps>(
  ({ startPageNumber, daysPerPage, flipFunctions }, ref) => {
    return (
      <>
        {Array.from({ length: pagesUsed(daysPerPage) }, (_, index) => (
          <WeekPage
            pageNumber={startPageNumber + index}
            daysPerPage={daysPerPage}
            startDay={index * daysPerPage}
            flipFunctions={flipFunctions}
            ref={ref}
            key={startPageNumber + index}
          />
        ))}
      </>
    )
  }
)

export default WeekSpread
