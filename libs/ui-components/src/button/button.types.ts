import { PropsWithChildren } from 'react'

export enum ButtonVariant {
    PRIMARY = 'primary',
    SECONDARY = 'secondary',
}

export interface ButtonProps extends PropsWithChildren {
    variant: ButtonVariant
    disabled?: boolean
    classes?: string
    onClick?: () => void
}
