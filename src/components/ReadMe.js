import React from 'react'
import {isEmpty} from '../helpers'
const ReadMe = props => ( 
    <div>
        {console.log('Readme: ', props)}
       {
            isEmpty(props.readme) ? ( <p>No Readme for selected repository</p>
            ) : (
                <div>
                    <p></p>
                </div>
            )
        }
    </div>
    
)
export default ReadMe
