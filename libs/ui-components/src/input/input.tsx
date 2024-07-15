import React, { FC, useId } from 'react'
import { InputFieldProps } from './input.types'

const InputField: FC<InputFieldProps> = ({
    id,
    type,
    name,
    label,
    defaultValue,
    placeholder,
    classes = '',
    labelClasses = '',
    inputClasses = '',
    onChange,
}) => {
    const inputId = id ?? useId()

    const inputStyles =
        'appearance-none 3xl:text-xl text-base primary-shadow border primary-border-color rounded-sm w-full py-3 3xl:py-5 px-3 3xl:px-5 primary-text-color leading-tight focus:border-blue-900 focus:outline-none hover:border-blue-900 transition duration-300'

    return (
        <div className={`mb-4 w-full position-relative ${classes}`}>
            {label && (
                <label htmlFor={inputId} className={`block input-label-text text-base ${labelClasses}`}>
                    {label}
                </label>
            )}
            <input
                type={type}
                name={name}
                id={inputId}
                placeholder={placeholder}
                defaultValue={defaultValue}
                className={`${inputStyles} ${inputClasses}`}
                onChange={onChange}
            />
        </div>
    )
}

export default InputField
