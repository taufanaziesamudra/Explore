import React from 'react'

const MapLooping = () => {
  const frontEndWorks = [
    'React',
    'Angular',
    'Ember',
    'Knockout',
    'Backbone',
    'Vue'
  ]
  const renderFrameWorks = frontEndWorks.map((item =>
    <li key={item}>{item}</li>))
  return (
    <div>
      <h1>Map MapLooping</h1>
      <ul>
        {renderFrameWorks}
      </ul>
    </div>
  )
}

export default MapLooping