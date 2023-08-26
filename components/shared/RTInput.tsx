import React from 'react'
import { Field } from 'formik'
type Props = {
  className?: string
  label?: string
  type?: 'text' | 'password' | 'email' | 'date' | 'datetime' | 'number'
  placeholder?: string
  onChange?: React.ChangeEventHandler<HTMLInputElement>
  id?: string
  formik?: boolean
  inputName: string
}

const RTInput = (props: Props) => {
  return (
    <>
      {props.label ? (
        <label htmlFor={props.id ? props.id : props.label?.replace(/\s/g, '')} className='block mt-3 font-semibold'>
          {' '}
          {props.label}{' '}
        </label>
      ) : (
        <></>
      )}
      {props.formik ? (
        <>
          <Field
            autoComplete='false'
            id={
              props.id
                ? props.id
                : props.label
                ? props.label?.replace(/\s/g, '')
                : Math.random().toString(36).substring(2, 7)
            }
            type={props.type ? props.type : 'text'}
            placeholder={props.placeholder ? props.placeholder : ''}
            name={props.inputName}
            className={`border w-full h-5 px-3 py-5 mt-2 hover:outline-none focus:outline-none focus:ring-indigo-500 focus:ring-1 rounded-md ${props.className}`}
          />
        </>
      ) : (
        <>
          <input
            autoComplete='false'
            id={
              props.id
                ? props.id
                : props.label
                ? props.label?.replace(/\s/g, '')
                : Math.random().toString(36).substring(2, 7)
            }
            onChange={props.onChange ? props.onChange : void 0}
            type={props.type ? props.type : 'text'}
            placeholder={props.placeholder ? props.placeholder : ''}
            className={`border w-full h-5 px-3 py-5 mt-2 hover:outline-none focus:outline-none focus:ring-indigo-500 focus:ring-1 rounded-md text-black dark:text-white ${props.className}`}
            name={props.inputName}
          />
        </>
      )}
    </>
  )
}

export default RTInput
