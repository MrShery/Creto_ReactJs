import React from 'react'

function Heading({color,content}) {
  return (
    <h2 className={`" selection:bg-yellow-400 uppercase   "`}>
      {content}
    </h2>
  )
}

export default Heading
