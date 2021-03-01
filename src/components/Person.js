import React from 'react'

const Person = ({persons, nameFilter}) => {
    console.log(persons)
    return (
        <div>
            {persons
            .filter(person => nameFilter === '' ? true : person.name.toLowerCase().includes(nameFilter.toLowerCase()) )
            .map(person => {
                return(
                    <p key={person.id}>{person.name} {person.number}</p>
                )
            })}
        </div>
    )

}

export default Person