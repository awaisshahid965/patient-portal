'use client'
import React, { FC } from 'react'
import InputField from '@/components/InputField/InputField'
import CustomButton from '@/components/CutomButton/CustomButton'

const Signup: FC = () => {
    const handleSearch = () => {
        console.log('register')
    }
    const handleRegister = () => {
        console.log('login')
    }
    const handleChange = () => {
        console.log('change')
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
                    <h2 className="3xl:mb-10 mb-6">Create Your Account</h2>
                    <div className="flex w-full items-center">
                        <div className="w-[80%] mr-6">
                            <InputField
                                // label="Password"
                                placeholder="Look up your NPI number"
                                type="text"
                                onChange={handleChange}
                                customCss="!mb-0"
                            />
                        </div>
                        <div className="w-[20%]">
                            <CustomButton
                                customStyle="3xl:py-5"
                                label="SEARCH"
                                variant="secondary"
                                onClick={handleSearch}
                            />
                        </div>
                    </div>
                    <div className="flex mt-8">
                        <div className="max-w-[55%] w-full pl-2 border-r border-r-[#d8d8d8] pr-8 pt-8 pb-8">
                            <div className="flex items-center flex-wrap gap-4">
                                <InputField
                                    label="First Name"
                                    placeholder="Enter First Name"
                                    type="text"
                                    onChange={handleChange}
                                    customCss="input-custom-width"
                                />
                                <InputField
                                    label="Middle Name"
                                    placeholder="Enter Middle Name"
                                    type="text"
                                    onChange={handleChange}
                                    customCss="input-custom-width"
                                />
                                <InputField
                                    label="Last Name"
                                    placeholder="Enter Last Name"
                                    type="text"
                                    onChange={handleChange}
                                    customCss="input-custom-width"
                                />
                                <InputField
                                    label="Address"
                                    placeholder="Enter Address"
                                    type="text"
                                    onChange={handleChange}
                                    customCss="input-custom-width"
                                />
                                <InputField
                                    label="City"
                                    placeholder="Enter City"
                                    type="text"
                                    onChange={handleChange}
                                    customCss="input-custom-width"
                                />
                                <InputField
                                    label="State"
                                    placeholder="Enter State"
                                    type="text"
                                    onChange={handleChange}
                                    customCss="input-custom-width"
                                />
                                <InputField
                                    label="Zip Code"
                                    placeholder="Enter Zip Code"
                                    type="text"
                                    onChange={handleChange}
                                    customCss="input-custom-width"
                                />
                                <InputField
                                    label="Phone Number"
                                    placeholder="Enter Phone Number"
                                    type="text"
                                    onChange={handleChange}
                                    customCss="input-custom-width"
                                />
                                <InputField
                                    label="Fax Number"
                                    placeholder="Enter Fax Number"
                                    type="text"
                                    onChange={handleChange}
                                    customCss="input-custom-width"
                                />
                                <InputField
                                    label="NPI Type"
                                    placeholder="NPI"
                                    type="text"
                                    onChange={handleChange}
                                    customCss="input-custom-width"
                                />
                                <InputField
                                    label="Taxanomy ID"
                                    placeholder="Enter Taxanomy ID"
                                    type="text"
                                    onChange={handleChange}
                                    customCss="input-custom-width"
                                />
                                <InputField
                                    label="Speciality"
                                    placeholder="Enter Speciality"
                                    type="text"
                                    onChange={handleChange}
                                    customCss="input-custom-width"
                                />
                            </div>
                        </div>
                        <div className="py-10 pt-28 max-w-[45%] w-full pl-20 pr-3">
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

                            <CustomButton
                                customStyle="mt-14"
                                label="CREATE ACCOUNT"
                                variant="primary"
                                onClick={handleRegister}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Signup
