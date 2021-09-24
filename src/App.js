import React from 'react'
import Header from './components/Header'

function App() {
  return (
    <div className='flex items-center flex-col'>
      {/* Header */}
      <Header/>
      {/* App Body */}
      <div className=' bg-gray-100 w-full flex-1 '>
        <div className='flex mx-auto container pt-8'>

          <div className='w-3/12 rounded-lg border p-3 bg-white'>
{/* Sidebar */}
Sidebar
          </div>
          <div className='w-6/12 rounded-lg border p-3 bg-white mx-3'>
{/* Main Content */}
Main Content
          </div>
          
          <div className='w-3/12 rounded-lg border p-3 bg-white'>
              <div>
                Feeds
              </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
