import { forwardRef } from 'react'
import Page from './Page'
import { flipFunctionsInt } from './hooks/usePageFlip'
import Day from './Day'

interface WeekPageProps {
  pageNumber: number
  startDay: number
  daysPerPage: number
  flipFunctions: flipFunctionsInt
}

const WeekPage = forwardRef<HTMLDivElement, WeekPageProps>(
  ({ pageNumber, startDay, daysPerPage, flipFunctions }, ref) => {
    const dayNames = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']

    const daysToRender = Math.min(daysPerPage, Math.max(0, dayNames.length - startDay))

    return (
      <Page pageNumber={pageNumber} flipFunctions={flipFunctions} ref={ref}>
        <ul>
          {Array.from({ length: daysToRender }, (_, index) => (
            <Day
              day={dayNames[startDay + index].slice(0, 3)}
              key={pageNumber + ' ' + (startDay + index)}
            />
          ))}
        </ul>
      </Page>
    )
  }
)

export default WeekPage
