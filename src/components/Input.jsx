import React from 'react'

export const Input = ({label, value,handleValueChange, type, className, blurHandleChange}) => {
    return (
        <>
        <div>
            <label>{label}</label>
        </div>
        <input className={className} type={type} value={value} onChange={handleValueChange} onBlur={blurHandleChange}/>
        </>
    )
}