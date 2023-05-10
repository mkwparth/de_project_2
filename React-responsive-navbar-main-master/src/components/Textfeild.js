import React from 'react'
import { ErrorMessage, useField } from 'formik';
const Textfeild = ({ label, ...props }) => {
    const [field, meta] = useField(props);
    return (
        <div className='mb-2'>
            <label htmlFor={field.name}>{label}</label>
            <input className={`form-control shadow-none ${meta.touched && meta.error && 'is-invalid'}`} autoComplete='off'

                {...field} {...props}             />
            <ErrorMessage component="div" name={field.name} style={{
                position: "relative", color: 'red',
                fontSize: '1rem', marginBottom: '7px'
            }} />
        </div>
    )
}

export default Textfeild
