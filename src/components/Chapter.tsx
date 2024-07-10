import React from 'react'
import Page from './Page'
import { flipFunctionsInt } from './hooks/usePageFlip'

interface ChapterProps {
  startPage: number
  flipFunctions: flipFunctionsInt
}

const Chapter = React.forwardRef<HTMLDivElement, ChapterProps>(
  ({ startPage, flipFunctions }, ref) => {
    return (
      <>
        <Page pageNumber={startPage} flipFunctions={flipFunctions} ref={ref}>
          This
        </Page>
        <Page pageNumber={startPage + 1} flipFunctions={flipFunctions} ref={ref}>
          This
        </Page>
        <Page pageNumber={startPage + 2} flipFunctions={flipFunctions} ref={ref}>
          This
        </Page>
      </>
    )
  }
)

export default Chapter
