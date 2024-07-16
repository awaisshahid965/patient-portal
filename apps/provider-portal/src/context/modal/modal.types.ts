import { PropsWithChildren } from 'react'

export interface ModalOptions extends PropsWithChildren {
    onClose?: () => void
}

export interface IModelContext {
    openModal: (args: ModalOptions) => void
}
