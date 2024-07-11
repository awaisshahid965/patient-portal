import React, { FC, ButtonHTMLAttributes } from 'react'

type ButtonVariant = 'primary' | 'secondary'

interface CustomButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    variant: ButtonVariant
    onClick: () => void
    label: string
    customStyle?: string
}

const CustomButton: FC<CustomButtonProps> = ({ variant, onClick, label, customStyle = '', ...rest }) => {
    const baseStyle =
        'w-full px-2 py-3 3xl:py-4 text-xl flex justify-center align-center text-center focus:outline-none focus:ring-2 focus:ring-opacity-50 leading-[1]'
    const variants = {
        primary: 'bg-btn-primary-bg text-white',
        secondary: 'bg-btn-secondary-bg text-white',

        // success: 'bg-green-500 text-white hover:bg-green-600 focus:ring-green-300',
        // danger: 'bg-red-500 text-white hover:bg-red-600 focus:ring-red-300',
    }

    const className = `${baseStyle} ${variants[variant] || variants.primary} ${customStyle}`

    return (
        <button className={className} onClick={onClick} {...rest}>
            {label}
        </button>
    )
}

export default CustomButton
