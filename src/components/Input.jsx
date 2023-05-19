import React from 'react'

Input.propTypes = {
  label: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
}
export default function Input({ label, placeholder, type}) {
  return (
    <div className='flex flex-col gap-2 justify-start items-start w-full'>
      <span className='text-sm text-light-400 font-roboto font-normal'>{label}</span>
      <input type={type} placeholder={placeholder} className='bg-dark-900 w-full py-3.5 h-12 rounded-lg px-3 placeholder:text-light-500 placeholder:text-sm focus:border-light-100 focus:border-1 font-roboto font-normal'></input>
    </div>
  )
}


