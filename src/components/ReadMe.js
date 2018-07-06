import React from 'react'
import {isEmpty, decodeBase64, parseMarkdown} from '../helpers'


const ReadMe = props => ( 
    <div>
       {
            isEmpty(props.readme) ? ( <p>No Readme for selected repository</p>
            ) : (
                <div>
                    {parseMarkdown(decodeBase64(props.readme.content))}
                </div>
            )
        }
    </div>
    
)
export default ReadMe
