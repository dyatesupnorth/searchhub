import React from 'react'
const Results = props => (
    
    <div>
        {
            props.results.items.length === 0 ? ( <p> No Github Repos'</p>
            ) : (
                props.results.items.map((item) => {
                    {/* console.log('item: ', item); */}

                    return <li key = {item.id}> <a>{item.full_name}</a> </li>
                })
            )
        }
    </div>
    
)


export default Results
