import React from 'react'
import {Bookmark} from 'lucide-react'
const Cards = (props) =>{
  return (
    <>
    <div className='Container'>
        <div className='Header'>
            <img className="logo" src={props.brandLogo}></img>
            <Bookmark size={40}/>
        </div>
        <div className='Center'>
             <div className="desc">
                <div className="com">{props.company}</div>
                <div className="date">{props.datePosted}</div>
             </div>
             <p className='exp'>{props.post}</p>
             <div className="req">
                <button disabled>{props.tag1}</button>
                <button disabled>{props.tag2}</button>
             </div>

        </div>
        <div className='Footer'>
            <div className='jobdesc'>
                <p className='sal'>{props.pay}</p>
                <p className='loc'>{props.location}</p>
            </div>
            <button className="apply">Apply Now</button>
        </div>
    </div>
    </>
  )
}

export default Cards
