import React from 'react'



import './CourseItem.css'

function CourseItem(props) {
    return (
        <li className="goal-item">
            {props.children}
        </li>
    )
}

export default CourseItem
