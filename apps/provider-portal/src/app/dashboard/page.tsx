import React from 'react'
import { Sidebar, Topbar } from '@medflow/ui-components'

const DashboardPage = () => {
    return (
        <>
            <section className="flex justify-start w-full min-h-[100vh] bg-body-color">
                <Sidebar />
                <main className="flex-1">
                    <Topbar portalName="Portal" pageName="Dashboard" userName="Dr. John Smith" />
                </main>
            </section>
        </>
    )
}

export default DashboardPage
