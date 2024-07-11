'use client'
import React, { FC, useState } from 'react'
import InputField from '@/components/InputField/InputField'
import CustomButton from '@/components/CutomButton/CustomButton'
import Link from 'next/link'
import CustomCheckbox from '@/components/CustomCheckbox/CustomCheckbox'

const Login: FC = () => {
    const [isChecked, setIsChecked] = useState(false)

    const handleRegister = () => {
        console.log('register')
    }
    const handleLogin = () => {
        console.log('login')
    }
    const handleChange = () => {
        console.log('change')
    }

    const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setIsChecked(event.target.checked)
    }
    return (
        <section className="p-6 pt-[90px]">
            <div className="bg-[#26335a] w-full h-[70px] fixed top-0 left-0 flex items-center px-14">
                <div className="flex items-center">
                    <img src="/assets/images/logo.png" alt="logo" className="w-48" />
                    <div className="pl-6 flex items-center">
                        <img
                            src="/assets/images/home-filled-icon.png"
                            className="d-block w-4 mr-2"
                            alt="home-filled-icon"
                        />
                        <span className="text-base text-white">Provider Log in</span>
                    </div>
                </div>
            </div>
            <div className="wrapper-class">
                <div className="inner-white-bg-class">
                    <h2 className="mb-10">Welcome to Your Provider Portal</h2>
                    <div className="flex">
                        <div className="max-w-[55%] w-full pl-2 border-r border-r-[#d8d8d8] pr-8 pt-8 pb-8">
                            <h3 className="display-sb primary-text-color mb-6 tracking-[1.17px] leading-6 primary-text-color text-[30px]">
                                Register as a Verified Provider
                            </h3>
                            <p className="mb-6">Creating your Account Should take about 5 mintues.</p>
                            <h4 className="tracking-wide text-xl leading-6 mb-2 primary-text-color display-sb">
                                To Register you&apos;ll need:
                            </h4>
                            <ul className="pl-4 custom-bullets">
                                <li className="mb-3 text-lg leading-5 primary-text-color tracking-normal">
                                    Your Organization&apos;s text ID number
                                </li>
                                <li className="mb-3 text-lg leading-5 primary-text-color tracking-normal">
                                    The Provider tex IDs you&apos;d like to represent
                                </li>
                                <li className="mb-3 text-lg leading-5 primary-text-color tracking-normal">
                                    Your NPI Number
                                </li>
                            </ul>
                            <h4 className="mt-4 tracking-wide text-xl leading-6 mb-2 primary-text-color display-sb">
                                You may also need:
                            </h4>
                            <ul className="pl-4 custom-bullets">
                                <li className="mb-3 text-lg leading-5 primary-text-color tracking-normal">
                                    A Claim from the last 3 months for the tax ID&apos;s provider
                                </li>

                                <li className="mb-3 text-lg leading-5 primary-text-color tracking-normal">
                                    The Business asscociated agreement (BAA) date for Each Provider
                                </li>
                            </ul>
                            <div className="flex justify-center w-full mt-7">
                                <CustomButton
                                    customStyle="3xl:max-w-[500px] max-w-[400px]"
                                    label="CREATE ACCOUNT"
                                    variant="secondary"
                                    onClick={handleRegister}
                                />
                            </div>
                            <div className="text-center mt-10">
                                <Link href="" className="text-anchor-color text-lg leading-5 tracking-tight underline">
                                    Are you in existing provider?
                                </Link>
                                <span className="text-anchor-color px-4">|</span>
                                <Link href="" className="text-anchor-color text-lg leading-5 tracking-tight unerline">
                                    Not an existing provider?
                                </Link>
                            </div>
                        </div>
                        <div className="py-10 max-w-[45%] w-full pl-20 pr-3">
                            <h3 className="display-sb primary-text-color mb-6 tracking-[1.17px] leading-6 primary-text-color text-[30px]">
                                Login
                            </h3>
                            <InputField
                                label="Username"
                                placeholder="Enter Username"
                                type="text"
                                onChange={handleChange}
                            />
                            <InputField
                                label="Password"
                                placeholder="********"
                                type="password"
                                onChange={handleChange}
                            />
                            <CustomCheckbox
                                label="Remember my Username"
                                id="remember"
                                checked={isChecked}
                                onChange={handleCheckboxChange}
                                customStyle="mt-7"
                            />
                            <CustomButton customStyle="mt-7" label="LOG IN" variant="primary" onClick={handleLogin} />
                            <div className="text-center mt-10">
                                <Link href="" className="text-anchor-color text-lg leading-5 tracking-tight underline">
                                    Forgot your password?
                                </Link>
                                <span className="text-anchor-color px-4">|</span>
                                <Link href="" className="text-anchor-color text-lg leading-5 tracking-tight unerline">
                                    Forgot your username?
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Login
