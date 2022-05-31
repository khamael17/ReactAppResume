import React, { useState, useEffect } from 'react'
import Loading from './Loading'
import Tours from './Tours'
import Navy from'./Navbare'

// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
//const url = 'https://course-api.com/react-tours-project'
const url = 'https://resumeapi17.azurewebsites.net/api/ResumeInfoApi?'

function App() {
  const [loading, setLoading] = useState(true)
  const [tours, setTours] = useState([])

  const removeTour = (id) => {
    const newTours = tours.filter((tour) => tour.id !== id)
    setTours(newTours)
  }

  const fetchTours = async () => {
    setLoading(true)
    try {
      const response = await fetch(url)
    
      const tours = await response.json()
      const ty= response.text
    console.log(ty)
      setLoading(false)
      setTours(tours)
    } catch (error) {
      setLoading(false)
      console.log(error)
    }
  }
  useEffect(() => {
    fetchTours()
  }, [])
  if (loading) {
    return (
      <main>
        <Loading />
      </main>
    )
  }
  if (tours.length === 0) {
    return (
      <main>
        <div className='title'>
          <h2 color='red'>All Gone</h2>
          <button className='btn' onClick={() => fetchTours()}>
            refresh
          </button>
        </div>
      </main>
    )
  }
  return (
    <div>
    <main >
       <section >
        <div >       
        </div>
        <Navy />
      </section>
       </main>
      <Tours tours={tours}  />
   </div>
  )
}

export default App
