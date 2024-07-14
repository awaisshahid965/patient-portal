import { ReactNode } from 'react'

type InputType =
    | 'text'
    | 'number'
    | 'email'
    | 'password'
    | 'tel'
    | 'url'
    | 'search'
    | 'date'
    | 'datetime-local'
    | 'month'
    | 'week'
    | 'time'
    | 'color'

export interface InputFieldProps {
    id?: string
    type: InputType
    name: string
    label?: ReactNode
    defaultValue?: string
    placeholder?: string
    classes?: string
    labelClasses?: string
    inputClasses?: string
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void
}
