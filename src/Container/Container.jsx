import React from 'react'
import { Header } from '../component/Header'
import { Sidebar } from '../component/Sidebar'
import Home from '../component/Home'
const Container = () => {
    return (
        <>
            <div className='grid lg:grid-cols-6 grid-cols-1'>

                <div className='col-span-1 '>
                    <Sidebar />
                </div>
                <div className='col-span-5  home_section px-4'>
                    <Home />
                </div>



            </div>
        </>

    )
}

export default Container