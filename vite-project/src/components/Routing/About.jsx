import React from 'react'
import { useParams } from 'react-router-dom'
function About() {
  const { userId } = useParams();
  return (
  <>
  <h1>userId:{userId}</h1>
  </>
  )
}

export default About