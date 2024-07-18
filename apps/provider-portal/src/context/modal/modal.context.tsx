import React, { ComponentType, createContext, FC, useState, PropsWithChildren, useContext } from 'react'
import type { IModelContext, ModalOptions } from './modal.types'
import { Modal } from '@medflow/ui-components'

const ModalContext = createContext<IModelContext>({
    openModal() {},
})

const ModalCloseIcon = () => (
    <div className="w-10 h-10">
        <img src="/assets/images/close-filled.png" className="object-contain focus:outline:none" alt="close-filled" />
    </div>
)

const ModalProvider: FC<PropsWithChildren> = ({ children }) => {
    const [visibility, setVisibility] = useState<boolean>(false)
    const [modalOptions, setModalOptions] = useState<ModalOptions>({
        children: null,
        onClose() {},
    })

    function onClose() {
        setVisibility(false)
        modalOptions.onClose?.()
    }

    function openModal(args: ModalOptions) {
        setModalOptions(args)
        setVisibility(true)
    }

    return (
        <ModalContext.Provider value={{ openModal }}>
            {children}
            <Modal open={visibility} onClose={onClose} closeIcon={<ModalCloseIcon />}>
                {modalOptions.children}
            </Modal>
        </ModalContext.Provider>
    )
}

export const withModal = <P extends object>(WrappedComponent: ComponentType<P>): FC<P> => {
    const WithModalContext: FC<P> = (props) => {
        return (
            <ModalProvider>
                <WrappedComponent {...props} />
            </ModalProvider>
        )
    }

    return WithModalContext
}

export const useModalContext = () => useContext(ModalContext)
