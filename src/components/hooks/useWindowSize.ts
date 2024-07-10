// inspired by the answers in https://stackoverflow.com/questions/36862334/get-viewport-window-height-in-reactjs

import { useState, useEffect } from 'react'

function getWindowSize() {
  const { innerWidth: width, innerHeight: height } = window
  return {
    width,
    height
  }
}
/* 
function setCSSvars() {
  function setIndividualCSSvar(variable: string, value: string) {
    document.documentElement.style.setProperty(variable, value)
  }
  //Set notebookSize
  //Others update themselves?
}

function getCSSvars() {
  function getIndividualCSSvar(variable: string) {
    return getComputedStyle(document.documentElement).getPropertyValue('--max-sizing')
  }
}

function useCSSVars() {
  const [windowSize, setWindowSize] = useState(getWindowSize())

  useEffect(() => {
    function handleResize() {
      setWindowSize(getWindowSize())
      console.log(getWindowSize())
    }

    window.addEventListener('resize', handleResize)

    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return windowSize
} */

function getAdaptedSizes() {
  function setIndividualCSSvar(variable: string, value: string) {
    document.documentElement.style.setProperty(variable, value)
  }

  const { width, height } = getWindowSize()

  //The notebook width should be 0.8 times the screen width, unless the screen is only 500 px,

  const notebookPageWidth = Math.floor(0.4 * width) //Math.floor(Math.min(500, Math.max((0.8 * width) / 2, 300)))
  const notebookHeight = Math.floor(0.9 * height) //Math.floor(Math.max(0.9 * height, 200))
  const surroundHeight = Math.floor(Math.max((height - notebookHeight) / 2, 0))

  setIndividualCSSvar('--notebook-height', notebookHeight + 'px')
  setIndividualCSSvar('--notebook-width', notebookPageWidth * 2 + 'px')
  setIndividualCSSvar('--max-spacing', 'calc((100vh - var(--notebook-height)) / 2)')

  console.log(notebookPageWidth, notebookHeight, surroundHeight)

  return {
    notebookPageWidth,
    notebookHeight,
    surroundHeight
  }
}

function useAdaptedSizes() {
  const [adaptedSizes, setAdaptedSizes] = useState(getAdaptedSizes())

  useEffect(() => {
    function handleResize() {
      setAdaptedSizes(getAdaptedSizes())
    }

    window.addEventListener('resize', handleResize)

    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return adaptedSizes
}

function useWindowSize() {
  const [windowSize, setWindowSize] = useState(getWindowSize())

  useEffect(() => {
    function handleResize() {
      setWindowSize(getWindowSize())
      console.log(getWindowSize())
    }

    window.addEventListener('resize', handleResize)

    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return windowSize
}

export default useWindowSize
export { useAdaptedSizes }
