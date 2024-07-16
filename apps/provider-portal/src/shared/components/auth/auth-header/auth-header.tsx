import { HomeFilledIcon, MedflowLogo } from '@medflow/icons'
import { Breadcrumb } from '@medflow/ui-components'
import React, { FC } from 'react'

interface AuthHeaderProps {
    screenTitle: string
}

const AuthHeader: FC<AuthHeaderProps> = ({ screenTitle }) => {
    return (
        <div className="bg-[#26335A] py-3 px-8 flex items-center gap-4 fixed top-0 z-[1] w-full">
            <MedflowLogo />
            <Breadcrumb items={[{ icon: <HomeFilledIcon />, title: '' }, { title: screenTitle }]} />
        </div>
    )
}

export default AuthHeader
