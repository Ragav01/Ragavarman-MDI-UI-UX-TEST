import React from 'react'
import { BsArrowRight } from 'react-icons/bs';

export const ButtonOutline = (props) => {
  return (
    <a href='/signup' className='btn btn-lg btn-outline'>
        {props.title}
        {props.icon && <BsArrowRight />}
    </a>
  )
}

export const ButtonFill = (props) => {
    return (
      <a href='/signup' className='btn btn-lg btn-default'>
          {props.title}
          {props.icon && <BsArrowRight />}
      </a>
    )
  }