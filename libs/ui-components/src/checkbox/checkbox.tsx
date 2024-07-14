import React, { FC, useId } from 'react'
import { CheckboxProps } from './checkbox.types'

const CustomCheckbox: FC<CheckboxProps> = ({
    id,
    label,
    defaultChecked,
    classes = '',
    labelClasses = '',
    inputClasses = '',
    onChange,
}) => {
    const inputId = id ?? useId()

    return (
        <div className={`flex items-center ${classes}`}>
            <input
                id={inputId}
                type="checkbox"
                defaultChecked={defaultChecked}
                onChange={onChange}
                className={`form-checkbox h-5 w-5 text-blue-600 ${inputClasses}`}
            />
            <label htmlFor={inputId} className={`ml-2 input-label-text !mb-0 ${labelClasses}`}>
                {label}
            </label>
        </div>
    )
}

export default CustomCheckbox
