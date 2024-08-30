import React from 'react'
import Button from './Button'

export default function Hero() {
    return (
        <div className='min-h-screen flex flex-col gap-10 items-center justify-center text-center max-w-[800px] w-full mx-auto p-4'>
            <div className='flex flex-col gap-4'>

                <p>IT'S TIME TO Become</p>
                <h1 className='uppercase font-semibold text-4xl sm:text-5xl md:text-6xl lg:text-7xl'>Fit<span className='text-blue-400'>Bro</span></h1>
            </div>
            <p className='text-sm md:text-base font-light'>I understand that I might grow  <span className='text-blue-400 font-medium'> significantly larger</span>and am prepared to face any challenges that come with it, <span className='text-blue-400 font-medium'>Becoming a Muscle Freak</span>,  including potential issues with body image and fitting through doors.</p>
            <Button func={() => {
                window.location.href = '#generate'
            }} text={"Accept & Begin"}></Button>
        </div>
    )
}
