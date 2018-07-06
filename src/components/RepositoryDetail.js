import React from 'react'
import {isEmpty} from '../helpers'
const RepositoryDetail = props => (
    
    <div>
       {
            isEmpty(props.item) ? ( <p>No Repository Selected</p>
            ) : (
                <p>Repository Selected </p>
            )
        }
    </div>
    
)


export default RepositoryDetail
