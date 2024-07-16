import React from 'react'

const ExistingProvider = () => {
    return (
        <div className="wrapper-class">
            <div className="inner-white-bg-class">
                <div className="max-w-[981px] mx-auto py-8 w-full">
                    <h2 className="mb-10 text-4xl text-center">Are you in existing provider?</h2>
                    <div className="font-light text-[1.3rem]">
                        <p className="mb-3">
                            If you are an existing provider and do not have an active login to the MedFlow portal please
                            contact your account administrator for credentials. Typically, an account administrator is
                            an office manager or front-office staff. As an alternative, you can email or call the
                            MedFlow support team to help you gain access.
                        </p>
                        <p className="mb-3">What is an Account Administrator</p>
                        <div className="text-[1.4rem]">
                            <p className="mb-3">
                                • Manages tax ID numbers (TINs) and provider identification numbers (PINs) associated
                                with their organization
                            </p>
                            <p className="mb-3">
                                • Creates user accounts for others in the organization and distributes usernames and
                                passwords
                            </p>
                            <p className="mb-3">• Keeps the organization&apos;s account information up-to-date</p>
                        </div>
                        <p>
                            To register as an an account administrator for your practice please call or email MedFlow
                            support.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ExistingProvider
