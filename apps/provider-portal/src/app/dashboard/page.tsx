import React from 'react'
import { Sidebar } from '@medflow/ui-components'

const DashboardPage = () => {
    return (
        <>
            <div className="flex justify-start w-full min-h-[100vh] bg-body-color">
                <Sidebar />
            </div>
        </>
    )
}

export default DashboardPage
