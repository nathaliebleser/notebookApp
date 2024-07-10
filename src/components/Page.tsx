import React, { FC } from 'react'
import { flipFunctionsInt } from './hooks/usePageFlip'

interface PageProps {
  pageNumber: number
  shownNumber?: string | number
  title?: string
  flipFunctions: flipFunctionsInt
  children?: React.ReactNode
}

const Page = React.forwardRef<HTMLDivElement, PageProps>(
  ({ pageNumber, shownNumber, title, flipFunctions, children }, ref) => {
    const { flipToNext, flipToPrev } = flipFunctions

    /* const PageWrapper = React.forwardRef<HTMLDivElement, { children: React.ReactNode }>(
      ({ children }, ref) => {
        return (
          <div ref={ref}>
            <div className="flex flex-row h-full w-full">{children}</div>
          </div>
        )
      }
    ) */
    const PageWrapper: FC<{ children: React.ReactNode }> = ({ children }) => {
      return <div className="flex flex-row h-full w-full">{children}</div>
    }

    const PageContentWrapper: FC<{ children: React.ReactNode }> = ({ children }) => {
      return (
        <div className="flex flex-col h-full w-full justify-items-start items-center">
          {children}
        </div>
      )
    }

    const PageChildrenWrapper: FC<{ children: React.ReactNode }> = ({ children }) => {
      return (
        <div className="flex-grow w-full">
          <div className="flex flex-col h-full w-full">{children}</div>
        </div>
      )
    }

    const PageLeft: FC = () => {
      if (pageNumber !== 0 && pageNumber % 2 === 0) {
        return (
          <button className="justify-self-start w-6" onClick={flipToPrev}>
            {'<'}
          </button>
        )
      } else {
        return <div className="justify-self-start w-6"></div>
      }
    }

    const PageRight: FC = () => {
      if (pageNumber % 2 === 0) {
        return <div className="justify-self-end w-6"></div>
      } else {
        return (
          <button className="justify-self-end w-6" onClick={flipToNext}>
            {'>'}
          </button>
        )
      }
    }

    const Title: FC = () => {
      return (
        <div className="justify-self-start w-full min-h-6">
          <p className="text-center">{title || ''}</p>
        </div>
      )
    }

    const PageNumber: FC = () => {
      return (
        <div className="justify-self-end h-6">
          <p className="text-center">- {shownNumber || ''} -</p>
        </div>
      )
    }

    return (
      <div ref={ref}>
        <PageWrapper>
          <PageLeft />
          <PageContentWrapper>
            <Title />
            <PageChildrenWrapper>{children}</PageChildrenWrapper>
            <PageNumber />
          </PageContentWrapper>
          <PageRight />
        </PageWrapper>
      </div>
    )
  }
)

export default Page
