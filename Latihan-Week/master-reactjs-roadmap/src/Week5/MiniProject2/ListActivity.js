import React from 'react'

const ListActivity = (todos) => {
  return (
    <div>
      {todos.map((data, key) =>
        <div>{data.id} : {data.name}</div>
      )}
    </div>
  )
}

export default ListActivity