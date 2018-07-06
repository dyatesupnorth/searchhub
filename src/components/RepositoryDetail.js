import React from 'react'
import {isEmpty} from '../helpers'
const RepositoryDetail = props => ( 
    <div>
       {
            isEmpty(props.item) ? ( <p>No Repository Selected</p>
            ) : (
                <div>
                    <h2><a target="_blank" href={props.item.url}>{props.item.full_name}</a></h2>
                    <p>Open Issues: {props.item.open_issues_count}</p>
                    <p>Number of forks: {props.item.forks_count}</p>
                </div>
            )
        }
    </div>
    
)
export default RepositoryDetail
