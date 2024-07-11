import React, { FC, ChangeEvent } from 'react'

interface CustomCheckboxProps {
    id: string
    label: string
    checked: boolean
    customStyle?: string
    onChange: (event: ChangeEvent<HTMLInputElement>) => void
}

const CustomCheckbox: FC<CustomCheckboxProps> = ({ id, label, checked, customStyle, onChange }) => {
    return (
        <div className={`flex items-center ${customStyle && customStyle}`}>
            <input
                id={id}
                type="checkbox"
                checked={checked}
                onChange={onChange}
                className="form-checkbox h-5 w-5 text-blue-600"
            />
            <label htmlFor={id} className={'ml-2 input-label-text !mb-0 '}>
                {label}
            </label>
        </div>
    )
}

export default CustomCheckbox
