import React from 'react'
import {isEmpty} from '../helpers'
const RepositoryDetail = props => ( 
    <div>
       {
            isEmpty(props.item) ? ( <p>No Repository Selected</p>
            ) : (
                <div className="p-4">
                    <h2><a target="_blank" href={props.item.url}>{props.item.full_name}</a></h2>
                </div>
            )
        }
    </div>
    
)
export default RepositoryDetail
