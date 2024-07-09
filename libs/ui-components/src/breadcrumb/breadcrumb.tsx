import React, { FC } from 'react'
import { BreadcrumbProps } from './breadcrumb.types'

const Breadcrumb: FC<BreadcrumbProps> = ({ items, classes = '', titleClasses = '' }) => {
    return (
        <div className={`${classes} flex flex-row`}>
            {items.map(({ title, icon }, index) => (
                <div className="flex flex-row gap-4" key={`${title}-${index}`}>
                    {icon}
                    <span className={`${titleClasses}`}>{title}</span>
                </div>
            ))}
        </div>
    )
}

export default Breadcrumb
