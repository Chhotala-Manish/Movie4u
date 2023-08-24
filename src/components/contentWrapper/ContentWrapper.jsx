import React from 'react'

const ContentWrapper = ({Children}) => {
  return (
    <>
      <div className="contentWrapper w-full max-w-[1200px] px-5 mx-auto">{Children}</div>
    </>
  )
}

export default ContentWrapper