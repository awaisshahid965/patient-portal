import React, { FC } from 'react'
import { HomeFilledIcon, GarageIcon, HamburgerIcon, MedflowLogo } from '@medflow/icons'
import Link from 'next/link'
import Image from 'next/image'
interface TopbarProps {
    portalName?: string
    pageName: string
    userName: string
    isSidebarOpen: boolean
    handleClickHamburger: () => void
}
const Topbar: FC<TopbarProps> = ({ portalName, pageName, userName, isSidebarOpen, handleClickHamburger }) => {
    return (
        <section className="flex items-center md:relative fixed top-0 w-full z-10 bg-white md:bg-transparent">
            <div className="bg-white flex justify-center items-center px-5 py-4 max-w-[260px] w-[260px]">
                <div className="block md:hidden pr-3">
                    <HamburgerIcon handleClick={handleClickHamburger} isSidebarOpen={isSidebarOpen} />
                </div>
                <MedflowLogo secondLayer="#26335a" width={180} />
            </div>
            <div className="py-4 px-5 justify-between w-full flex-1 hidden md:flex">
                <div className="flex items-center text-lg 3xl:text-xl flex-1 ">
                    <p className="pg mb-0">{portalName}</p>
                    <div className="inline-flex ml-6 space-x-3 items-center">
                        <HomeFilledIcon fill="#26335a" />
                        <span>{pageName}</span>
                    </div>
                </div>
                <div className="flex items-center space-x-4">
                    <Image src="/assets/images/user.jpg" alt="user" width={40} height={40} className="object-contain" />
                    <span className="relative text-lg 3xl:text-xl pr-4 before:content-[''] before:right-0 before:absolute before:top-0 before:border-r-2 before:border-gray-400 before:h-full">
                        {userName}
                    </span>

                    <Link href="auth/login" className="text-gray-400 text-lg 3xl:text-xl focus:outline-none">
                        Logout
                    </Link>
                    <div className="pl-4">
                        <GarageIcon />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Topbar
