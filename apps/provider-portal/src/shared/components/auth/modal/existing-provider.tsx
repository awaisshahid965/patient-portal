import React from 'react'

const ExistingProvider = () => {
    return (
        <div className="wrapper-class !pt-16">
            <div className="inner-white-bg-class !p-12">
                <div className="max-w-[981px] mx-auto w-full">
                    <h1 className="mb-10 text-center h1">Are you in existing provider?</h1>
                    <div className="display-regular 3xl:text-[1.75rem] text-xl">
                        <p className="mb-3">
                            If you are an existing provider and do not have an active login to the MedFlow portal please
                            contact your account administrator for credentials. Typically, an account administrator is
                            an office manager or front-office staff. As an alternative, you can email or call the
                            MedFlow support team to help you gain access.
                        </p>
                        <p className="mb-3 3xl:text-[1.75rem] text-xl display-sb">What is an Account Administrator</p>
                        <p className="mb-3 3xl:text-[1.75rem] text-xl">
                            • Manages tax ID numbers (TINs) and provider identification numbers (PINs) associated with
                            their organization
                        </p>
                        <p className="mb-3 3xl:text-[1.75rem] text-xl">
                            • Creates user accounts for others in the organization and distributes usernames and
                            passwords
                        </p>
                        <p className="mb-3 3xl:text-[1.75rem] text-xl">
                            • Keeps the organization&apos;s account information up-to-date
                        </p>
                        <p className="3xl:text-[1.75rem] text-xl">
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
