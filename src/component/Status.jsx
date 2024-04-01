import React from 'react';
import { PiCurrencyCircleDollarLight } from "react-icons/pi";
import { PiNotepad } from "react-icons/pi";
import { CiWallet } from "react-icons/ci";
import { FaBagShopping } from "react-icons/fa6";
import { IoArrowUp } from "react-icons/io5";
import { IoArrowDown } from "react-icons/io5";
import { SlGraph } from "react-icons/sl";


const statusData = [
  { icon: <PiCurrencyCircleDollarLight color="#228b22" />, bgColor: "#DAF7A6", title: 'Earning', amount: '$198K', change: `+37.8%  <b>this month`, trendColor: '#228b22' },
  { icon: <PiNotepad color="purple" />, bgColor: "#FAE6FA", title: 'Orders', amount: '$2.4K', change: '-2% <b>this month', trendColor: '#fd5c63' },
  { icon: <CiWallet color="blue" />, bgColor: "#c6e6fb45", title: 'Balance', amount: '$198K', change: '-2% <b>this month', trendColor: '#fd5c63' },
  { icon: <SlGraph color="#E8AC41" />, bgColor: "#FFFFE0", title: 'Total Sales', amount: '$89K', change: '+11% <b>this month', trendColor: 'green' }
];

const StatusItem = ({ icon, title, amount, change, trendColor, bgColor }) => (
  <a href="#" className="flex flex-col gap-2 flex-wrap  items-center border h-auto px-3 py-5  border-gray-200 rounded-lg shadow md:flex-row w-auto">
    <div className={'lg:p-6 p-5 rounded-full text-5xl'} style={{ backgroundColor: `${bgColor}` }}>


      {icon}
    </div>
    <div className="flex flex-col justify-between  p-2 font-Lato s">
      <h5 className="text-base text-gray-500 font-semibold">{title}</h5>
      <h5 className="text-3xl my-1 font-bold" style={{color:"#4b49ac"}}>{amount}</h5>
      <h5 className="text-xs font-bold flex flex-row flex-wrap items-center">
        {change.includes('+') ? <IoArrowUp color={trendColor} size={14} /> : <IoArrowDown color={trendColor} size={14} />}
       

        <p className="mx-1" style={{ color: `${trendColor}` }}  dangerouslySetInnerHTML={{__html: change}}/>
      </h5>
    </div>
  </a>
);

export default function Status() {
  return (
    <div className='status lg:grid-cols-4 grid-cols-1 grid gap-4  mt-5 card_section'>
      {statusData.map(({ icon, title, amount, change, trendColor, bgColor }, index) => (
        <StatusItem key={index} icon={icon} title={title} amount={amount} change={change} trendColor={trendColor} bgColor={bgColor} />
      ))}
    </div>
  );
}
