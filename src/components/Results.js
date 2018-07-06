import React from 'react'
const Results = props => (
    <div className="flex items-center justify-center w-full p-4">
        <div className="overflow-hidden bg-white  max-w-xs w-full shadow-lg  leading-normal">
            {
                props.results.items.length === 0 ? ( <p className="text-center m-4"> No Github Repo's Found</p>
                ) : (
                    props.results.items.map((item) => 
                        <span key = {item.id} className={item === props.selectedItem ? 'bg-blue color-white block group cursor-pointer hover:bg-blue p-4 border-b' : 'bg-white block group cursor-pointer hover:bg-blue p-4 border-b'} onClick={() => props.selectItem(item)}>
                            <p className="font-bold text-lg mb-1 text-black group-hover:text-white">{item.full_name}</p>
                            <p className="text-grey-darker mb-2 group-hover:text-white">
                                Open Issues: <strong>{item.open_issues_count}</strong> <br />
                                Forks: <strong>{item.forks_count}</strong>
                            </p>
                        </span>
                    )
            )
        }
        </div>
    </div>    
)


export default Results
