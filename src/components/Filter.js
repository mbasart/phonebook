import React from 'react'

const Filter = ({nameFilter,handleNameFilterChange}) => {
    return (
        <div>
            <p>filter show with</p>
            <input value={nameFilter} 
                onChange={handleNameFilterChange}
            />
        </div>
    )
}

export default Filter