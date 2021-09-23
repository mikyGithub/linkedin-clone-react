import React from 'react'
import Header from './components/Header'

function App() {
  return (
    <div className='container mx-auto flex items-center flex-col'>
      {/* Header */}
      <Header/>
      {/* App Body */}
      <div className='flex'>
          <div className='w-2/12'>
{/* Sidebar */}
Sidebar
          </div>
          <div className='w-8/12'>
{/* Main Content */}
Main Content
          </div>
          
          <div className='w-2/12'>
              <div>
                Feeds
              </div>
          </div>
      </div>
    </div>
  )
}

export default App
