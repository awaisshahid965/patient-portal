import React, { ComponentType, createContext, FC, useState, PropsWithChildren, useContext } from 'react'
import type { IModelContext, ModalOptions } from './modal.types'
import { Modal } from '@medflow/ui-components'

const ModalContext = createContext<IModelContext>({
    openModal() {},
})

const ModalCloseIcon = () => (
    <div className="w-14 h-14">
        <img src="/assets/images/close-filled.png" alt="close-filled" />
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
