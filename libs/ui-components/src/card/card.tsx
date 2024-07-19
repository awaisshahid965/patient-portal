import React, { FC } from 'react'
interface CardProps {
    icon: React.ReactNode
    title: string
    description: string
    cardWidth?: string
}

const Card: FC<CardProps> = ({ icon, title, description, cardWidth }) => {
    return (
        <div className={`flex items-center bg-gray-100 p-8 rounded-xl ${cardWidth}`}>
            {icon ?? icon}
            <div className="flex flex-col ml-6">
                <h5 className="h5" title={title}>
                    {title}
                </h5>
                <p className="pg 3xl:text-[1.75rem]" title={description}>
                    {description}
                </p>
            </div>
        </div>
    )
}

export default Card
