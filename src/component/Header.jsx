import React from 'react';
import { CiSearch } from "react-icons/ci";


export const Header = () => {
    
    return (<>
        <header>
            <div className="wrapper flex flex-row justify-between items-center w-auto  my-3">
                <div className="person-name">
                    <h6 className='text-base  font-lato font-semibold'>Hello Shahrukh</h6>
                </div>

                <div className="input_warpper bg-white rounded-lg focus:outline-none  flex flex-row items-center border px-1 py-1">
                    <CiSearch size={22} />
                    <input
                        className='font-openSans text-xs text-violet-900  focus:outline-none px-1 py-1 '
                        type='text'
                        placeholder='search'

                    />

                </div>


            </div>
        </header></>

    )
}


