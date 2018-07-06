import React from 'react'
import {isEmpty, decodeBase64} from '../helpers'
const ReadMe = props => ( 
    <div>
       {
            isEmpty(props.readme) ? ( <p>No Readme for selected repository</p>
            ) : (
                <div>
                    <p>{decodeBase64(props.readme.content)}</p>
                </div>
            )
        }
    </div>
    
)
export default ReadMe
