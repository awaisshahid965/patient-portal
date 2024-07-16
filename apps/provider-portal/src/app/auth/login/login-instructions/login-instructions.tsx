import React from 'react'
import { Button, ButtonVariant } from '@medflow/ui-components'
import { useRouter } from 'next/navigation'
import { useModalContext, withModal } from 'src/context/modal/modal.context'
import NotAnExistingProvider from '@/components/auth/modal/not-an-existing-provider'
import ExistingProvider from '@/components/auth/modal/existing-provider'

const LoginInstructions = () => {
    const router = useRouter()
    const { openModal } = useModalContext()

    const goToSignupPage = () => {
        router.push('/auth/signup')
    }

    function handleExistingProvider() {
        openModal({
            children: <ExistingProvider />,
        })
    }

    function handleNonExistingProvider() {
        openModal({
            children: <NotAnExistingProvider />,
        })
    }

    return (
        <div className="max-w-[55%] w-full pl-2 border-r border-r-[#d8d8d8] pr-8 pt-8 pb-8">
            <h3 className="display-sb primary-text-color mb-6 tracking-[1.17px] leading-6 primary-text-color text-[30px]">
                Register as a Verified Provider
            </h3>
            <p className="mb-6 pg">Creating your Account Should take about 5 mintues.</p>
            <h4 className="tracking-wide text-xl leading-6 mb-2 primary-text-color display-sb">
                To Register you&apos;ll need:
            </h4>
            <ul className="pl-4 custom-bullets">
                <li className="mb-3 3xl:text-lg text-base leading-5 primary-text-color tracking-normal">
                    Your Organization&apos;s text ID number
                </li>
                <li className="mb-3 3xl:text-lg text-base leading-5 primary-text-color tracking-normal">
                    The Provider tex IDs you&apos;d like to represent
                </li>
                <li className="mb-3 3xl:text-lg text-base leading-5 primary-text-color tracking-normal">
                    Your NPI Number
                </li>
            </ul>
            <h4 className="mt-4 tracking-wide text-xl leading-6 mb-2 primary-text-color display-sb">
                You may also need:
            </h4>
            <ul className="pl-4 custom-bullets">
                <li className="mb-3 3xl:text-lg text-base leading-5 primary-text-color tracking-normal">
                    A Claim from the last 3 months for the tax ID&apos;s provider
                </li>

                <li className="mb-3 3xl:text-lg text-base leading-5 primary-text-color tracking-normal">
                    The Business asscociated agreement (BAA) date for Each Provider
                </li>
            </ul>
            <div className="flex justify-center w-full mt-7">
                <Button
                    classes="3xl:max-w-[500px] max-w-[400px]"
                    variant={ButtonVariant.SECONDARY}
                    onClick={goToSignupPage}
                >
                    CREATE ACCOUNT
                </Button>
            </div>
            <div className="text-center mt-10">
                <span
                    className="text-anchor-color 3xl:text-lg text-base leading-5 tracking-tight underline"
                    onClick={handleExistingProvider}
                >
                    Are you in existing provider?
                </span>
                <span className="text-anchor-color px-4">|</span>
                <span
                    className="text-anchor-color 3xl:text-lg text-base leading-5 tracking-tight underline"
                    onClick={handleNonExistingProvider}
                >
                    Not an existing provider?
                </span>
            </div>
        </div>
    )
}

export default withModal(LoginInstructions)
