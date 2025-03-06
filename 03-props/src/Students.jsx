import React from 'react'
import './Students.css'

function Students(props) {
  return (
    <div>
       
    <div class="card">
        <img src="https://via.placeholder.com/100" alt="Student Photo"/>
        <h2>John Doe</h2>
        <p>Computer Science</p>
        <div class="info">
            <p><span>Roll No:</span> {props.rollno}</p>
            <p><span>Email:</span> {props.gmail}</p>
            <p><span>Phone:</span> {props.number}</p>
        </div>
    </div>

    </div>
  )
}

export default Students
