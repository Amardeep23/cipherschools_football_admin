import React from 'react'
import './Featuredinfo.css'
import ArrowDropDownOutlinedIcon from '@mui/icons-material/ArrowDropDownOutlined';
import ArrowDropUpOutlinedIcon from '@mui/icons-material/ArrowDropUpOutlined';

export const Featuredinfo = () => {
  return (
    <div className='featured'>
        <div className="featuredItem">
            <span className="featuredtitle">Revenue</span>
            <div className="featuredMoneyContainer">
                <span className="featuredMoney">$2,415</span>
                <span className="featuredMoneyRate">-11  <ArrowDropDownOutlinedIcon className='featuredIcon negative' style={{color:'red'}}></ArrowDropDownOutlinedIcon> </span>
            </div>
            <div className="featuredSub">
                Compared to last month
            </div>
        </div>
        <div className="featuredItem">
            <span className="featuredTitle">Sales</span>
            <div className="featuredMoneyContainer">
                <span className="featuredMoney">$4,415</span>
                <span className="featuredMoneyRate">-1.4 <ArrowDropDownOutlinedIcon className='featuredIcon negative' style={{color:'red'}}></ArrowDropDownOutlinedIcon> </span>
            </div>
            <div className="featuredSub">
                Compared to last month
            </div>
        </div>
        <div className="featuredItem">
            <span className="featuredTitle">Cost</span>
            <div className="featuredMoneyContainer">
                <span className="featuredMoney">$2,225</span>
                <span className="featuredMoneyRate">+2.5 <ArrowDropUpOutlinedIcon className='featuredIcon positive' style={{color:'green'}}></ArrowDropUpOutlinedIcon> </span>
            </div>
            <div className="featuredSub">
                Compared to last month
            </div>
        </div>
    </div>
  )
}
