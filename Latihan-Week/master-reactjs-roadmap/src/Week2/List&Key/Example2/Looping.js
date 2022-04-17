import React, { useState } from 'react'

const Looping = () => {
  const [state, setState] = useState({
    Students: [
      {
        id: 1,
        name: 'Taufan Ajie Samudro'
      },
      {
        id: 2,
        name: 'Komeng'
      },
      {
        id: 3,
        name: 'Bangkid'
      }
    ]
  })
  return (
    <div>
      {
        state.Students.map((dinamis, key) =>
          <div>
            <h3>{dinamis.id}. {dinamis.name}</h3>
          </div>)
      }
    </div>

  )
}

export default Looping