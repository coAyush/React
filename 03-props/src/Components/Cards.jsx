import React from 'react'

const Cards = (props) => {
   console.log(props.image)
  return (
   <div className='Cards'>
     <img  src={props.image} alt="Profile"></img>
     <h1 className='Name'>{props.name}</h1>
     <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illum sint facilis repellendus necessitatibus doloremque cum, repudiandae odit delectus quaerat quidem. Ab vero aperiam tenetur dignissimos numquam quaerat unde aspernatur totam.</p>
     <button>view profile</button>
    </div>
  )
 
}
export default Cards