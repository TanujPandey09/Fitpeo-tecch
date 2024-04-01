import React, { useState } from 'react';
import { RiSettingsLine } from 'react-icons/ri';
import { MdOutlineProductionQuantityLimits } from 'react-icons/md';
import { BsPersonSquare } from 'react-icons/bs';
import { LuBadgeHelp, LuBadgePercent } from 'react-icons/lu';
import { IoWalletOutline } from 'react-icons/io5';
import { RxCaretDown } from "react-icons/rx";
import { RxCaretRight } from "react-icons/rx";
import { useLocation } from 'react-router-dom';
import { BrowserRouter as Router } from 'react-router-dom';

const sideBar = [
    { menuName: 'Dashboard', icon: <RiSettingsLine size={20} />, link: "/#" },
    { menuName: 'Product', icon: <MdOutlineProductionQuantityLimits size={20} />, link: "/product" },
    { menuName: 'Customers', icon: <BsPersonSquare size={20} />, link: "/customers" },
    { menuName: 'Income', icon: <IoWalletOutline size={20} />, link: "/income" },
    { menuName: 'Promote', icon: <LuBadgePercent size={20} />, link: "/promote" },
    { menuName: 'Help', icon: <LuBadgeHelp size={20} />, link: "/help" },
];


export default function SidebarItem({ icon, menuName, link }) {
    const location = useLocation();
    return (<>
        <li className="flex flex-row py-2 my-2 items-center justify-between hover:bg-hoverSidebar hover:cursor-pointer rounded-md text-sm font-openSans w-full">
            <a className="flex flex-row items-center gap-2 px-4" href={link}>
                {icon}
                <span>{menuName}</span>

            </a>
            {location.pathname === link ? null : (
                <a href={link}>
                    <RxCaretRight size={20} className='flex' />
                </a>
            )}

        </li>
    </>)

}


export const Sidebar = () => (
    <Router>
  <aside className="sidebar_section h-full">
        <div className='flex justify-between flex-col h-full '>
            <div className="px-2 text-white flex justify-between flex-col">
                <div className="py-5">
                    <div className="flex flex-row gap-2 items-center px-4">
                        <RiSettingsLine size={20} />
                        <h3 className="text-lg font-openSans">Dashboard</h3>
                    </div>
                    <div className="sidebar_menu py-5">
                        <ul>
                            {sideBar.map((item, index) => (
                                <SidebarItem key={index} {...item} />
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
            <div className=' text-white account-setting flex flex-row justify-between bg-hoverSidebar items-center rounded-md shadow-sm px-3 mb-10 py-1 mx-2 font-openSans cursor'>
                <img src='https://picsum.photos/id/237/200/300' className='w-10 h-10 rounded-full' />
                <div className='flex flex-col text-sm text-normal'>
                    <p>Evan</p>
                    <p>Project Manager</p>
                </div>
                <RxCaretDown size={20} />
            </div>
        </div>


    </aside>
    </Router>
  
);

