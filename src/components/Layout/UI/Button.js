import React from 'react'

export default function Button(props) {
  return (
    <button className={`btn ${props.color ? `btn-${props.color}` : 'btn-primary'} ${props.className}`}>
       {props.text}<i className={props.icon}></i>
    </button>
  )
}