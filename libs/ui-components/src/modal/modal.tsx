import React, { ReactNode } from 'react'
import { Modal as ReactResponsiveModal, ModalProps as ReactResponsiveModalProps } from 'react-responsive-modal'
import 'react-responsive-modal/styles.css'

interface ModalProps extends ReactResponsiveModalProps {
    children: ReactNode
    open: boolean
    onClose: () => void
}

const Modal = (props: ModalProps) => {
    const { children, open, onClose, ...restModalProps } = props

    return (
        <ReactResponsiveModal
            styles={{
                modal: {
                    maxWidth: 'unset',
                    padding: 'unset',
                    background: 'transparent',
                },
            }}
            open={open}
            onClose={onClose}
            showCloseIcon
            {...restModalProps}
            center
        >
            {children}
        </ReactResponsiveModal>
    )
}

export default Modal
