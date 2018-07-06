import React from 'react'
import {isEmpty, decodeBase64, parseMarkdown} from '../helpers'
import Parser from 'html-react-parser';


const ReadMe = props => ( 
    <div>
       {
            isEmpty(props.readme) ? ( <p>No Readme for selected repository</p>
            ) : (
                <div className="p-4">
                     {Parser(parseMarkdown(decodeBase64(props.readme.content)))}
                </div>
            )
        }
    </div>
    
)
export default ReadMe
