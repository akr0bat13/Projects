import React, { useEffect, useMemo } from 'react'
import { createPortal } from 'react-dom'
import './style.css'

const modalRootElement = document.querySelector('#modal')

const Modal = (props: any) => {
  const { opened, onClose} = props
  const element = useMemo(() => document.createElement('div'), [])

  useEffect(() => {
    if (opened) {
      modalRootElement?.appendChild(element)

      return () => {modalRootElement?.removeChild(element)}
    }

  });

  if (opened) {
    return createPortal(
      <div className='modal_background' onClick={onClose}>
        <div className='modal_card'>{props.children}</div>
      </div>
      , element)
  }

  return null
}

export default Modal