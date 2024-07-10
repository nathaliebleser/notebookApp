import { useRef } from 'react'
import HTMLFlipBook from 'react-pageflip'

interface flipFunctionsInt {
  flipToNext: () => void
  flipToPrev: () => void
  flipToPage: (pageNumber: number) => void
}

const usePageFlip = () => {
  const bookRef = useRef<HTMLFlipBook>(null)

  const flipToPage = (pageNumber: number) => {
    if (bookRef && bookRef.current) {
      bookRef.current.pageFlip().flip(pageNumber)
    }
  }

  const flipToNext = () => {
    if (bookRef && bookRef.current) {
      bookRef.current.pageFlip().flipNext()
    }
  }

  const flipToPrev = () => {
    if (bookRef && bookRef.current) {
      bookRef.current.pageFlip().flipPrev()
    }
  }

  const flipFunctions = {
    flipToNext,
    flipToPrev,
    flipToPage
  }

  return { bookRef, flipFunctions }
}

export default usePageFlip

export type { flipFunctionsInt }
