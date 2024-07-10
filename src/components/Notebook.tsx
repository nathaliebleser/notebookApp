import HTMLFlipBook from 'react-pageflip'
import Chapter from './Chapter'
import usePageFlip from './hooks/usePageFlip'
import WeekSpread from './WeekSpread'
import Page from './Page'
import { FC } from 'react'
import { useAdaptedSizes } from './hooks/useWindowSize'

export const Notebook: FC = () => {
  const { notebookPageWidth, notebookHeight } = useAdaptedSizes()
  const { bookRef, flipFunctions } = usePageFlip()

  return (
    <HTMLFlipBook
      className="bg-amber-100"
      width={500}
      height={600}
      minWidth={250}
      useMouseEvents={false}
      ref={bookRef}
      size={'stretch'}
    >
      <Page pageNumber={0} shownNumber={1} flipFunctions={flipFunctions} />
      <WeekSpread startPageNumber={1} daysPerPage={4} flipFunctions={flipFunctions} />
      <Chapter startPage={3} flipFunctions={flipFunctions} />
    </HTMLFlipBook>
  )
}
