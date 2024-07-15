'use client'
import React from 'react'
import InputField from '@/components/InputField/InputField'
import CustomButton from '@/components/CutomButton/CustomButton'
import Link from 'next/link'

const ForgotPassword = () => {
    const handleChange = () => {
        console.log('change')
    }
    const handleSubmit = () => {
        console.log('submit')
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
                        <span className="text-base text-white">Forgot Password</span>
                    </div>
                </div>
            </div>
            <div className="wrapper-class">
                <div className="inner-white-bg-class">
                    <h2 className="3xl:mb-10 text-center">Forgot Your Password?</h2>
                    <p className="text-center 3xl:text-xl text-base">
                        Enter the email address associated with your account and we&apos;ll send you a link <br /> to
                        <br />
                        reset your password.
                    </p>
                    <div className="max-w-[450px] w-full mx-auto mt-10">
                        <InputField type="email" onChange={handleChange} placeholder="Enter Email" label="Email" />
                        <CustomButton customStyle="mt-3" label="CONTINUE" variant="primary" onClick={handleSubmit} />
                        <p className="mt-10 text-center block underline text-black text-base primary-border-color">
                            Don&apos;t have an account?
                            <Link href="" className="underline text-anchor-color text-base">
                                Sign up
                            </Link>
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ForgotPassword
