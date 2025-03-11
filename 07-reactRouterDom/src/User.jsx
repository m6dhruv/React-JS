import React from 'react'
import { useParams } from 'react-router-dom'

function User() {
    const {userid} = useParams()
  return (
    <div className='text-center p-5 bg-gray-800 text-3xl text-white'>
      User :{userid}
    </div>
  )
}

export default User
