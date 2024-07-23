import React from 'react'
import DataTable from 'react-data-table-component'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const table = ({ data, columns, customStyles }: any) => {
    return (
        <div id="userDataTable">
            <DataTable
                columns={columns}
                data={data}
                // pagination
                // highlightOnHover
                responsive
                customStyles={customStyles}
            />
        </div>
    )
}

export default table
