import React from 'react'

function HeaderOption(props) {
    return (
        <div className='mx-3 cursor-pointer flex items-center justify-center flex-col'>
            {props.icon}
            <p className='text-xs'>{props.title}</p>
            
        </div>
    )
}

export default HeaderOption
