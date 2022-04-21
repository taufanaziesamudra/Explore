import React from 'react'

const Users = () => {
  const data = [
    { id: 1, name: 'Jhon Doe' },
    { id: 2, name: 'Wayne Victor' },
    { id: 3, name: 'Jane Doe' },
  ]

  return (
    <div className='users'>
      {data.map((user) => (
        <div className='user'>{user.id}. {user.name}</div>
      ))}
    </div>
  )
}

export default Users