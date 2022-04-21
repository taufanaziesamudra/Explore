import React, { useEffect, useState } from 'react'

const MyFunc = () => {
  console.log('-> Fucntion Init')
  const [count, setCount] = useState(0)
  const handleCount = () => {
    setCount(prevState => {
      return prevState + 1
    })
  }

  useEffect(() => {
    //TODO dieksekusi disetiap render atau running terus
    console.log('-> My First Effect')
    // handleCount()
  })

  // componentDidMount equivalent
  //! Saat merender
  useEffect(() => {
    console.log('-> componentDidMount equivalent')
    //TODO menambahkan dependency agar tidak merender teruse menerus
  }, [])

  // componentDidUpdate equivalent
  //! Saat mengupdate ataub ada perubahan pada props makan componentnya akan mereder ulang
  useEffect(() => {
    if (count > 0) { //TODO agar tidak mengupdate
      console.log('-> componentDidUpdate equivalent')
    }
  }, [count])

  // ComponentWillunmount equivalent
  //! Component dihapus atau dimusnahkan dari DOM
  useEffect(() => {
    //TODO Clenup function
    return (
      () => {
        console.log('-> ComponentWillUnmount equivalent')
      }
    )
  }, []) //TODO Menambhakan array agar tidak dieksekusi saat pertama kali merender

  console.log(`-> Start Render (${count})`)
  return (
    <div>
      <h1>Functional Component</h1>
      <p>
        <button onClick={handleCount}>Count</button>
        {count}
      </p>
    </div>
  )
}

export default MyFunc