import React, { FC } from 'react'
import { ArrowDownIcon } from '@medflow/icons'
interface dropdownMenuProps {
    handleOptionClick: (option: string) => void
    toggleDropdown: () => void
    selectedOption: string
    isOpen: boolean
    optionsValues: string[]
}
const DropDownMenu: FC<dropdownMenuProps> = ({
    handleOptionClick,
    toggleDropdown,
    selectedOption,
    isOpen,
    optionsValues,
}) => {
    return (
        <div className="relative inline-block text-left">
            <button
                type="button"
                onClick={toggleDropdown}
                className="flex items-center justify-between font-medium text-lg 3xl:text-xl text-primary-text-color bg-white"
            >
                by {selectedOption}
                <span className="pl-6">
                    <ArrowDownIcon isOpen={isOpen} />
                </span>
            </button>

            {isOpen && (
                <div className="absolute right-0 z-10 mt-2 w-48 bg-white border border-gray-300 rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                    <div className="py-1">
                        {optionsValues.map((item, index) => (
                            <button
                                key={index}
                                onClick={() => handleOptionClick(item)}
                                className="block px-4 py-1 text-lg 3xl:text-xl text-primary-text-color text-left hover:bg-gray-100 w-full"
                            >
                                {item}
                            </button>
                        ))}
                    </div>
                </div>
            )}
        </div>
    )
}

export default DropDownMenu
