import React from 'react'

const PersonFrom = ({func, v1, h1, v2, h2, v3, h3}) => (
    <form onSubmit={addPerson}>
        <div>
            filter shown with: <input value={myFilter} onChange={handleFilterChange}/>
        </div>
        <div>
            name: <input value={newName} onChange={handleNameChange}/>
        </div>
        <div>
            number: <input value={newNumber} onChange={handleNumberChange}/>
        </div>
        <div>
            <button type="submit">add</button>
        </div>
    </form>
)