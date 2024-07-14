import React, { FC } from 'react'
import { ButtonProps } from './button.types'
import { btnBaseStyles, btnVariantStyles } from './button.styles'

const Button: FC<ButtonProps> = ({ children, variant, classes = '', disabled = false, onClick }) => {
    const className = `${btnBaseStyles} ${btnVariantStyles[variant]} ${classes}`

    return (
        <button className={className} onClick={onClick} disabled={disabled}>
            {children}
        </button>
    )
}

export default Button
