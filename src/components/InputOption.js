import React from 'react'

function InputOption(props) {
    return (
        <div className='mx-3 cursor-pointer flex items-center justify-center '>
            <div className='mr-3'>{props.icon}</div>
            <p className='text-gray-600 font-semibold'>{props.text}</p>
            
        </div>
    )
}

export default InputOption
