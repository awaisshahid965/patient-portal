import type { ReactNode } from 'react'

type BreadcrumbItem = {
    title: string
    icon?: ReactNode
}

export interface BreadcrumbProps {
    items: Array<BreadcrumbItem>
    classes?: string
    titleClasses?: string
}
