import React from 'react'

const BilledByMonthInfo = ({ item }: { item: Record<string, string | number> }) => {
    return (
        <div className="flex justify-between border-b border-gray-200 py-3 px-5">
            <p className="text-gray-500 pg">{item.week}</p>
            <p className="pg">{item.price}</p>
        </div>
    )
}

export default BilledByMonthInfo
