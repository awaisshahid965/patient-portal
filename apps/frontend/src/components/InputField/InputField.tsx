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
    customStyle = '',
    customCss = '',
    label,
}) => {
    return (
        <div className={`mb-3 w-full position-relative ${customCss}`}>
            {label && (
                <label htmlFor={id} className="block input-label-text text-base">
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
                className={`appearance-none 3xl:text-xl text-base primary-shadow border primary-border-color rounded-sm w-full py-3 3xl:py-5 px-3 3xl:px-5 primary-text-color leading-tight focus:border-blue-900 focus:outline-none hover:border-blue-900 transition duration-300 ${customStyle}`}
            />
            {/* <span className="primary-text-color absolute right-5 top-[50%] translate-y-[-50%]">
                <i className="fa-solid fa-chevron-down"></i>
            </span> */}
        </div>
    )
}

export default InputField
