import { HomeFilledIcon, MedflowLogo } from '@medflow/icons'
import { Breadcrumb } from '@medflow/ui-components'
import React, { FC } from 'react'

interface AuthHeaderProps {
    screenTitle: string
}

const AuthHeader: FC<AuthHeaderProps> = ({ screenTitle }) => {
    return (
        <div className="bg-[#26335A] py-7 px-14 flex items-center gap-7">
            <MedflowLogo />
            <Breadcrumb items={[{ icon: <HomeFilledIcon />, title: '' }, { title: screenTitle }]} />
        </div>
    )
}

export default AuthHeader
