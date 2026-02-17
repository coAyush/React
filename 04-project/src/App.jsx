import React from 'react'
import Cards from './Components/Cards'
const jobOpenings = [
  {
    brandLogo: "https://1000logos.net/wp-content/uploads/2016/10/Amazon-logo-meaning.jpg",
    company: "Amazon",
    datePosted: "5 days ago",
    post: "Senior UI/UX Designer",
    tag1: "Part-Time",
    tag2: "Senior Level",
    pay: "$120/hr",
    location: "Mumbai, India"
  },
  {
    brandLogo: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Google_%22G%22_logo.svg/500px-Google_%22G%22_logo.svg.png",
    company: "Google",
    datePosted: "2 weeks ago",
    post: "Frontend Engineer",
    tag1: "Full-Time",
    tag2: "Mid Level",
    pay: "$95/hr",
    location: "Bangalore, India"
  },
  {
    brandLogo: "https://1000logos.net/wp-content/uploads/2016/10/Apple-Logo.png",
    company: "Apple",
    datePosted: "1 week ago",
    post: "Product Designer",
    tag1: "Full-Time",
    tag2: "Senior Level",
    pay: "$110/hr",
    location: "Hyderabad, India"
  },
  {
    brandLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfHPyUgCEL64IDo5eElnEFljn7RYcMay4iMg&s",
    company: "Meta",
    datePosted: "3 days ago",
    post: "UX Researcher",
    tag1: "Contract",
    tag2: "Senior Level",
    pay: "$130/hr",
    location: "Remote"
  },
  {
    brandLogo: "https://images.ctfassets.net/y2ske730sjqp/5QQ9SVIdc1tmkqrtFnG9U1/de758bba0f65dcc1c6bc1f31f161003d/BrandAssets_Logos_02-NSymbol.jpg?w=940",
    company: "Netflix",
    datePosted: "10 days ago",
    post: "UI Engineer",
    tag1: "Full-Time",
    tag2: "Mid Level",
    pay: "$105/hr",
    location: "Remote"
  },
  {
    brandLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDiQXGMUd-boRykgZmJXW-MG1JD2x8GHwIyw&s",
    company: "Microsoft",
    datePosted: "4 weeks ago",
    post: "Software Engineer",
    tag1: "Full-Time",
    tag2: "Junior Level",
    pay: "$70/hr",
    location: "Pune, India"
  },
  {
    brandLogo: "https://static.vecteezy.com/system/resources/previews/027/127/501/non_2x/uber-logo-uber-icon-transparent-free-png.png",
    company: "Uber",
    datePosted: "6 days ago",
    post: "Frontend Developer",
    tag1: "Contract",
    tag2: "Mid Level",
    pay: "$90/hr",
    location: "Bangalore, India"
  },
  {
    brandLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8fYsTmR0-TXLa06mx13LRXBgbNyBgylU3cw&s",
    company: "Airbnb",
    datePosted: "2 days ago",
    post: "Junior UI/UX Designer",
    tag1: "Remote",
    tag2: "Junior Level",
    pay: "$60/hr",
    location: "Remote"
  },
  {
    brandLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRc_ly53Sxy2Ge8qkrvXmG447r3ZAl_Hrdufg&s",
    company: "LinkedIn",
    datePosted: "3 weeks ago",
    post: "Product Engineer",
    tag1: "Full-Time",
    tag2: "Senior Level",
    pay: "$115/hr",
    location: "Bangalore, India"
  },
  {
    brandLogo: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e8/Tesla_logo.png/500px-Tesla_logo.png",
    company: "Tesla",
    datePosted: "8 days ago",
    post: "UI Developer",
    tag1: "Full-Time",
    tag2: "Mid Level",
    pay: "$100/hr",
    location: "Remote"
  }
];

const App = () => {
  return (
    <>
    <div className='Parent'>
       {jobOpenings.map((elem,indx)=>{
        return (
          <Cards 
             key={indx}
             brandLogo={elem.brandLogo}
             company={elem.company}
             datePosted={elem.datePosted}
            post={elem.post}
             tag1={elem.tag1}
             tag2={elem.tag2}
              pay={elem.pay}
              location={elem.location}
          />
        )
       })}    
    </div>
    </>
  )
}
export default App
