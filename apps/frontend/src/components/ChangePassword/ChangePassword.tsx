'use client'
import React from 'react'
import InputField from '@/components/InputField/InputField'
import CustomButton from '@/components/CutomButton/CustomButton'

const ChangePassword = () => {
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
                        <span className="text-base text-white">Change Password</span>
                    </div>
                </div>
            </div>
            <div className="wrapper-class">
                <div className="inner-white-bg-class">
                    <h2 className="3xl:mb-10 text-center">Enter New Password</h2>
                    <p className="text-center 3xl:text-xl text-base">
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
                        />
                        <InputField
                            type="password"
                            onChange={handleChange}
                            placeholder="Confirm Password"
                            label="Confirm Password"
                        />
                        <CustomButton
                            customStyle="mt-3 uppercase"
                            label="change password"
                            variant="primary"
                            onClick={handleSubmit}
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ChangePassword
