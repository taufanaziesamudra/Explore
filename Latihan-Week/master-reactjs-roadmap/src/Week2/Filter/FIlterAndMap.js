import React, { useState } from 'react'

const FIlterAndMap = () => {
  const [user, setUser] = useState({
    users: [
      { username: 'Jeff', online: false },
      { username: 'Alan', online: false },
      { username: 'Mary', online: false },
      { username: 'Jim', online: true },
      { username: 'Sara', online: false },
      { username: 'Laura', online: true }
    ]
  }
  )

  const userOnline = user.users.filter(dinamis => dinamis.online)
  const renderOnline = userOnline.map(dinamis =>
    <li key={dinamis.username}>{dinamis.username}</li>)
  return (
    <div>
      <h1>Siapa saja yang Online</h1>
      <ul>{renderOnline}</ul>
    </div>
  )
}

export default FIlterAndMap