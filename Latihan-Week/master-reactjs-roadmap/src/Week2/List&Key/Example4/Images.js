import React from 'react'
import { stringifImagesSize } from './ImagesSizes'

const Images = () => {
  const imageSizes = [
    { name: "horizontal", width: 600, height: 380 },
    { name: "vertical", width: 400, height: 650 },
    { name: "thumbnail", width: 300, height: 300 },
  ]

  const normalzedImageStrings = stringifImagesSize(imageSizes)
  return (
    <div className='images'>
      {
        normalzedImageStrings.map((s) => (
          <div className='iamge-type'>{s}</div>
        ))
      }
    </div>
  )
}

export default Images