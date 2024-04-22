import React from 'react'

function Heading () {
    console.log("heading...")
  return (
    <h1>Form</h1>
  )
}

export default React.memo(Heading)