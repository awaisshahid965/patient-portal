'use client'
import React, { FC } from 'react'
import AuthHeader from '@/components/auth/auth-header/auth-header'
import { Button, ButtonVariant, InputField } from '@medflow/ui-components'

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
        <>
            <AuthHeader screenTitle={'Provider Log in'} />
            <section className="wrapper-class">
                <div className="inner-white-bg-class">
                    <h2 className="3xl:mb-10 mb-6 h2">Create Your Account</h2>
                    <div className="flex w-full items-center">
                        <div className="w-[80%] mr-6">
                            <InputField
                                name="password"
                                placeholder="Look up your NPI number"
                                type="text"
                                onChange={handleChange}
                                classes="!mb-0"
                            />
                        </div>
                        <div className="w-[20%]">
                            <Button variant={ButtonVariant.SECONDARY} onClick={handleSearch} classes="3xl:py-5">
                                SEARCH
                            </Button>
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
                                    classes="input-custom-width"
                                    name="first_name"
                                />
                                <InputField
                                    label="Middle Name"
                                    placeholder="Enter Middle Name"
                                    type="text"
                                    onChange={handleChange}
                                    classes="input-custom-width"
                                    name="middle_name"
                                />
                                <InputField
                                    label="Last Name"
                                    placeholder="Enter Last Name"
                                    type="text"
                                    onChange={handleChange}
                                    classes="input-custom-width"
                                    name="last_name"
                                />
                                <InputField
                                    label="Address"
                                    placeholder="Enter Address"
                                    type="text"
                                    onChange={handleChange}
                                    classes="input-custom-width"
                                    name="address"
                                />
                                <InputField
                                    label="City"
                                    placeholder="Enter City"
                                    type="text"
                                    onChange={handleChange}
                                    classes="input-custom-width"
                                    name="city"
                                />
                                <InputField
                                    label="State"
                                    placeholder="Enter State"
                                    type="text"
                                    onChange={handleChange}
                                    classes="input-custom-width"
                                    name="state"
                                />
                                <InputField
                                    label="Zip Code"
                                    placeholder="Enter Zip Code"
                                    type="text"
                                    onChange={handleChange}
                                    classes="input-custom-width"
                                    name="zip_code"
                                />
                                <InputField
                                    label="Phone Number"
                                    placeholder="Enter Phone Number"
                                    type="text"
                                    onChange={handleChange}
                                    classes="input-custom-width"
                                    name="phone_number"
                                />
                                <InputField
                                    label="Fax Number"
                                    placeholder="Enter Fax Number"
                                    type="text"
                                    onChange={handleChange}
                                    classes="input-custom-width"
                                    name="fax_number"
                                />
                                <InputField
                                    label="NPI Type"
                                    placeholder="NPI"
                                    type="text"
                                    onChange={handleChange}
                                    classes="input-custom-width"
                                    name="npi_type"
                                />
                                <InputField
                                    label="Taxanomy ID"
                                    placeholder="Enter Taxanomy ID"
                                    type="text"
                                    onChange={handleChange}
                                    classes="input-custom-width"
                                    name="taxanomy_id"
                                />
                                <InputField
                                    label="Speciality"
                                    placeholder="Enter Speciality"
                                    type="text"
                                    onChange={handleChange}
                                    classes="input-custom-width"
                                    name="speciality"
                                />
                            </div>
                        </div>
                        <div className="py-10 pt-28 max-w-[45%] w-full pl-20 pr-3">
                            <InputField
                                label="Password"
                                placeholder="********"
                                type="password"
                                onChange={handleChange}
                                name="password"
                            />
                            <InputField
                                label="Confirm Password"
                                placeholder="********"
                                type="password"
                                onChange={handleChange}
                                name="confirm_password"
                            />

                            <Button variant={ButtonVariant.PRIMARY} onClick={handleRegister} classes="mt-14">
                                CREATE ACCOUNT
                            </Button>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Signup
