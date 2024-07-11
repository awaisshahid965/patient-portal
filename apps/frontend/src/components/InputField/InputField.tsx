import React, { FC } from 'react'
interface InputFieldProps {
    id?: string
    type?: string
    name?: string
    placeholder?: string
    value?: string
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void
    label?: string
    customStyle?: string
    customCss?: string
}

const InputField: FC<InputFieldProps> = ({
    id,
    type,
    name,
    placeholder,
    value,
    onChange,
    customStyle,
    customCss,
    label,
}) => {
    return (
        <div className={`mb-3 w-full position-relative ${customCss && customCss}`}>
            {label && (
                <label htmlFor={id} className="block input-label-text">
                    {label}
                </label>
            )}
            <input
                type={type || 'text'}
                id={id}
                name={name}
                placeholder={placeholder}
                value={value}
                onChange={onChange}
                className={`appearance-none primary-shadow border primary-border-color rounded-sm w-full py-5 px-5 primary-text-color leading-tight focus:outline-none focus:shadow-outline  ${customStyle && customStyle}`}
            />
            {/* <span className="primary-text-color absolute right-5 top-[50%] translate-y-[-50%]">
                <i className="fa-solid fa-chevron-down"></i>
            </span> */}
        </div>
    )
}

export default InputField
