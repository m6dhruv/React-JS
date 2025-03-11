// import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'

function Github() {
    const data = useLoaderData()
    // const [data, setData] = useState([])
    // useEffect(()=>{
    //     fetch('https://api.github.com/users/m3dhruv')
    //     .then(response  => response.json())
    //     .then(data => {
    //         console.log(data);
    //         setData(data)
             
    //     })
    // }, [])
  return (
    <div className='text-center m-5 bg-gray-700 text-white font-bold text-4xl p-4'>
        Github Followors : {data.followers} 
        <img src={data.avatar_url} alt="git image" width={300}/>
      
    </div>
  )
}

export default Github

export const GithubInfoLoader = async () => {
    const response = await fetch('https://api.github.com/users/m3dhruv')
    return response.json()
}
