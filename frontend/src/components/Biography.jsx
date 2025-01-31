import React from 'react'

const Biography = ({imageUrl}) => {
  return (
    <div className="container biography">
      <div className="banner">
        <img src={imageUrl} alt="aboutImg" />
      </div>
      <div className="banner">
        <p>Biography</p>
        <h3>Who We Are</h3>
        <p>
        At Dr. Ally, we provide an AI-assisted healthcare system for easy appointment bookings, personalized health dashboards, and seamless connections with qualified doctors from anywhere.
        </p>
        <p>Our mission is to enhance your healthcare journey through innovation and convenience.</p>
        <p>Dr. Ally leverages cutting-edge AI technology to simplify your healthcare experience, ensuring you receive timely assistance and personalized support whenever you need it.</p>
        <p>Experience personalized health management tailored just for you.</p>
        <p>Dr. Ally: The Future of Healthcare</p>
      </div>
    </div>
  )
}

export default Biography