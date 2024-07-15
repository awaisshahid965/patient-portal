import Link from 'next/link'
import React from 'react'

const LoginForgotLinks = () => {
    return (
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
    )
}

export default LoginForgotLinks
