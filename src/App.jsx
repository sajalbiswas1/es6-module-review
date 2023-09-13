import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Watch from './component/Watch/Watch'

function App() {
//  const watch = [
//   {
//     id: 1,
//     name: "Apple Watch Series 6",
//     price: 399.99
//   },
//   {
//     id: 2,
//     name: "Samsung Galaxy Watch 4",
//     price: 249.99
//   },
//   {
//     id: 3,
//     name: "Fitbit Versa 3",
//     price: 229.95
//   },
//   {
//     id: 4,
//     name: "Garmin Forerunner 945",
//     price: 599.99
//   },
//   {
//     id: 5,
//     name: "Xiaomi Mi Watch",
//     price: 129.99
//   }
// ]


    const [watch, setWatch] = useState([])

    useEffect(()=>{
      fetch('watch.json')
      .then(res => res.json())
      
      .then(data => setWatch(data))
    },[])

  return (
    <>
      
      <h1>Vite + React</h1>
      {
        watch.map(watch =><Watch key={watch.id} watch={watch}></Watch>)
      }
    </>
  )
}

export default App
