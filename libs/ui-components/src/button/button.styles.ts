import { ButtonVariant } from './button.types'

const btnBaseStyles =
    'w-full px-3 py-3 3xl:py-4 3xl:text-xl text-base flex justify-center align-center text-center focus:outline-none focus:ring-2 focus:ring-opacity-50 leading-[1]'

const btnVariantStyles = {
    [ButtonVariant.PRIMARY]: 'bg-primary-btn text-white',
    [ButtonVariant.SECONDARY]: 'bg-secondary-btn text-white',
}

export { btnBaseStyles, btnVariantStyles }
