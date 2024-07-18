import React from 'react'

const NotAnExistingProvider = () => {
    return (
        <div className="wrapper-class !pt-16">
            <div className="inner-white-bg-class !p-12">
                <div className="max-w-[910px] mx-auto py-24 text-center w-full">
                    <h2 className="mb-10 h1 !text-[#5890FF]">Not an existing provider?</h2>
                    <p className="3xl:[text-1.75rem] text-xl">
                        Please follow the steps in the Create Account process below and provide us with all required
                        documentation to validate your practice and licensing. It will take our team 48-72 hours to
                        review this information and respond. You can always reach out to our support team via email or
                        phone to assist you or answer any questions.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default NotAnExistingProvider
