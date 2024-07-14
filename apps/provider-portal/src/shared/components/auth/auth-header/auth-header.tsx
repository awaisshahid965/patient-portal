import { HomeFilledIcon, MedflowLogo } from '@medflow/icons'
import { Breadcrumb } from '@medflow/ui-components'
import React, { FC } from 'react'

interface AuthHeaderProps {
    screenTitle: string
}

const AuthHeader: FC<AuthHeaderProps> = ({ screenTitle }) => {
    return (
        <div className="bg-[#26335A] py-4 px-8 flex items-center gap-4">
            <MedflowLogo />
            <Breadcrumb items={[{ icon: <HomeFilledIcon />, title: '' }, { title: screenTitle }]} />
        </div>
    )
}

export default AuthHeader
