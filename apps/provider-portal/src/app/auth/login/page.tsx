'use client'
import React, { FC, useState } from 'react'
import Link from 'next/link'
import AuthHeader from '@/components/auth/auth-header/auth-header'
import LoginInstructions from './login-instructions/login-instructions'
import { Button, ButtonVariant, Checkbox, InputField } from '@medflow/ui-components'

const LoginPage: FC = () => {
    const [isChecked, setIsChecked] = useState(false)

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
        <>
            <AuthHeader screenTitle="Provider Log in" />
            <section className="p-6">
                <div className="wrapper-class">
                    <div className="inner-white-bg-class">
                        <h2 className="3xl:mb-10">Welcome to Your Provider Portal</h2>
                        <div className="flex">
                            <LoginInstructions />
                            <div className="py-10 max-w-[45%] w-full pl-20 pr-3">
                                <h3 className="display-sb primary-text-color mb-6 tracking-[1.17px] leading-6 primary-text-color 3xl:text-[30px] text-2xl">
                                    Login
                                </h3>
                                <InputField
                                    name="username"
                                    label="Username"
                                    placeholder="Enter Username"
                                    type="text"
                                    onChange={handleChange}
                                />
                                <InputField
                                    name="passowrd"
                                    label="Password"
                                    placeholder="********"
                                    type="password"
                                    onChange={handleChange}
                                />
                                <Checkbox
                                    name="remember_user"
                                    label="Remember my Username"
                                    id="remember"
                                    defaultChecked={isChecked}
                                    onChange={handleCheckboxChange}
                                    classes="mt-7"
                                />
                                <Button classes="mt-7" variant={ButtonVariant.PRIMARY} onClick={handleLogin}>
                                    LOG IN
                                </Button>
                                <div className="text-center mt-10">
                                    <Link
                                        href="/auth/forgot-password"
                                        className="text-anchor-color 3xl:text-lg text-base leading-5 tracking-tight underline"
                                    >
                                        Forgot your password?
                                    </Link>
                                    <span className="text-anchor-color px-4">|</span>
                                    <Link
                                        href="/auth/forgot-password"
                                        className="text-anchor-color 3xl:text-lg text-base leading-5 tracking-tight unerline"
                                    >
                                        Forgot your username?
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default LoginPage
