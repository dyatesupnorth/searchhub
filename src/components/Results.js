import React from 'react'
const Results = props => (
    
    <div>
    {console.log(props)}
        {
            props.results.items.length === 0 ? ( <p> No Github Repos'</p>
            ) : (
                props.results.items.map((item) => {
                    {/* using () => function is equivalent to using .bind(this, item) */}
                    return <li key = {item.id}> <span onClick={() => props.selectItem(item)}>{item.full_name}</span> </li>
                })
            )
        }
    </div>
    
)


export default Results
