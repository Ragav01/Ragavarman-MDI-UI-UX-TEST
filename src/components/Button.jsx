import React from 'react'
import { BsArrowRight } from 'react-icons/bs';

export const ButtonOutline = (props) => {
  return (
    <button className='btn btn-lg btn-outline'>
        {props.title}
        {props.icon && <BsArrowRight />}
    </button>
  )
}

export const ButtonFill = (props) => {
    return (
      <button className='btn btn-lg btn-default'>
          {props.title}
          {props.icon && <BsArrowRight />}
      </button>
    )
  }