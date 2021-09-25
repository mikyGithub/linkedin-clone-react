import React from 'react'
import './Feed.css'
import InputOption from './InputOption'
import PhotoIcon from '../icons/PhotoIcon'
import VideoIcon from '../icons/VideoIcon'
import EventIcon from '../icons/EventIcon'
import WriteArticleIcon from '../icons/WriteArticleIcon'
function Feed() {
    return (
        <>
        <div className="rounded-lg border p-3 bg-white">

        <div className='flex items-center'>
        <img
          className="rounded-full w-12 h-12 border-2 border-white"
          src="https://media-exp1.licdn.com/dms/image/C4E03AQF7ZY2psichZA/profile-displayphoto-shrink_100_100/0/1626602550395?e=1637798400&v=beta&t=KMRkEzcsqt3CwF4kggIWLe-TdCO0javPA-vlmdz2HfM"
          alt=""
        />
        <div className='flex-1'>
            <form className="flex">
                <input type='text' placeholder='Start a post' className="focus:border-blue-500 focus:shadow-md focus:bg-gray-100 ml-3 py-2 px-4 rounded-full w-full border border-gray-400 outline-none bg-gray-200" />
                <button type='submit' className='hidden'>Submit</button>
            </form>
        </div>
        </div> 
        <div className='flex items-center justify-between mt-3 w-full'>
            <InputOption icon={<PhotoIcon/>} text='Photo' />
            <InputOption icon={<VideoIcon/>} text='Video' />
            <InputOption icon={<EventIcon/>} text='Event' />
            <InputOption icon={<WriteArticleIcon/>} text='Write Article' />
        </div>
        </div>
        </>
    )
}

export default Feed
