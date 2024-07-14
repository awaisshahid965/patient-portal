import { ChangeEvent, ReactNode } from 'react'

export interface CheckboxProps {
    label: ReactNode
    defaultChecked?: boolean
    id?: string
    classes?: string
    labelClasses?: string
    inputClasses?: string
    onChange?: (event: ChangeEvent<HTMLInputElement>) => void
}
