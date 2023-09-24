import './App.css'

function App() {

  return (
    <>
      <div className='m-24 flex flex-col'>
          <div className='flex'>
            <div className='border-2 border-solid border-black w-4/12 p-5'>
              <b>LOREM IPSUM</b>
            </div>
            <div className='border-2 border-solid border-black w-8/12 p-5 text-right border-l-0'>
              <b>LINK 1</b>
            </div>
          </div>
          <div className='flex border-2 border-solid border-black border-t-0 h-64'>
            <div className='border-r-2 border-solid border-black w-6/12 flex text-center justify-center items-center p-12'>
              <b>THIS IS SOME CONTENT ALIGNED IN THE CENTER VERTICALLY AND HORIZONTALLY</b>
            </div>
            <div className='w-6/12'>
            </div>
          </div>
          <div className='border-2 border-solid border-black flex items-center text-left h-24 border-t-0 p-10'>
            <b>THIS IS THE FOOTER CONTENT WHICH IS ALIGNED LEFT</b>
          </div>
      </div>
    </>
  )
}

export default App
