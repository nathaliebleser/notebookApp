import { Notebook } from './components/Notebook'

function App() {
  return (
    <>
      <div className="flex flex-col justify-center items-center bg-green-950">
        <div className="h-[var(--max-spacing)]"></div>
        <div className="h-[var(--notebook-height)] w-[var(--notebook-width)]">
          <Notebook />
        </div>
        <div className="h-[var(--max-spacing)]"></div>
      </div>
    </>
  )
}

export default App
