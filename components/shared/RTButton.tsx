import { LoadderIcon } from '../icons/LoadderIcon'
import React from 'react'

type Props = {
  className?: string
  type?: 'button' | 'submit' | 'reset'
  name: string
  buttonType?: 'sm' | 'md' | 'lg'
  onClick?: React.MouseEventHandler<HTMLButtonElement>
  processing?: boolean
}

const RTButton = (props: Props) => {
  return (
    <>
      <button
        type={props.type ? props.type : 'button'}
        className={`text-white rounded-md ${props.className ? props.className : 'bg-indigo-700 hover:bg-indigo-900'} 
            ${
              props.buttonType === 'sm'
                ? 'text-sm py-1 px-2'
                : props.buttonType === 'lg'
                ? 'py-3 px-8 text-3xl'
                : 'py-2 px-6'
            } 
            `}
        onClick={props.onClick ? props.onClick : void 0}
        disabled={props.processing}
      >
        {props.processing ? (
          <div className='flex items-center'>
            <LoadderIcon />
            Processing...
          </div>
        ) : (
          <>{props.name}</>
        )}
      </button>
    </>
  )
}

export default RTButton
