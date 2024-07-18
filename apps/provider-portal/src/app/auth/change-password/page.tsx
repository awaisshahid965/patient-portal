'use client'
import React from 'react'
import AuthHeader from '@/components/auth/auth-header/auth-header'
import { Button, ButtonVariant, InputField } from '@medflow/ui-components'

const ResetPassword = () => {
    const handleChange = () => {
        console.log('change')
    }
    const handleSubmit = () => {
        console.log('submit')
    }
    return (
        <>
            <AuthHeader screenTitle="Change Password" />
            <section className="wrapper-class">
                <div className="inner-white-bg-class">
                    <h2 className="3xl:mb-10 text-center h2">Enter New Password</h2>
                    <p className="text-center pg">
                        To change your password, please fill in the field below. <br /> Your password must contain at
                        least 8 charactors, it must also include at least <br /> one upper case letter, one lower case
                        letter, one number and one special charater
                    </p>
                    <div className="max-w-[450px] w-full mx-auto mt-10">
                        <InputField
                            type="password"
                            onChange={handleChange}
                            placeholder="New Password"
                            label="New Password"
                            name="new_password"
                        />
                        <InputField
                            type="password"
                            onChange={handleChange}
                            placeholder="Confirm Password"
                            label="Confirm Password"
                            name="confirm_password"
                        />
                        <Button variant={ButtonVariant.SECONDARY} classes="mt-3 uppercase" onClick={handleSubmit}>
                            change password
                        </Button>
                    </div>
                </div>
            </section>
        </>
    )
}

export default ResetPassword
