'use client'
import React from 'react'
import AuthHeader from '@/components/auth/auth-header/auth-header'
import Link from 'next/link'
import { Button, ButtonVariant, InputField } from '@medflow/ui-components'

const ForgotPasswordPage = () => {
    const handleChange = () => {
        console.log('Enter email')
    }
    const handleSubmit = () => {
        console.log('submit')
    }
    return (
        <>
            <AuthHeader screenTitle="Forgot Password" />
            <div className="wrapper-class">
                <div className="inner-white-bg-class">
                    <h2 className="3xl:mb-10 text-center h2">Forgot Your Password?</h2>
                    <p className="text-center 3xl:text-xl text-base pg">
                        Enter the email address associated with your account and we&apos;ll send you a link <br /> to
                        <br />
                        reset your password.
                    </p>
                    <div className="max-w-[450px] w-full mx-auto mt-10">
                        <InputField
                            name="email"
                            type="email"
                            onChange={handleChange}
                            placeholder="Enter Email"
                            label="Email"
                        />
                        <Button classes="mt-3" variant={ButtonVariant.PRIMARY} onClick={handleSubmit}>
                            CONTINUE
                        </Button>
                        <p className="mt-10 text-center block underline text-black text-base primary-border-color pg">
                            Don&apos;t have an account?
                            <Link href="/auth/signup" className="underline text-anchor-color text-base">
                                Sign up
                            </Link>
                        </p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ForgotPasswordPage
