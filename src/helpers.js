import {decode} from 'base-64'

export const isEmpty = (obj) => { 
    for (var x in obj) { return false; }
    return true;
 }

 export const decodeBase64 = (string) => {
   return decode(string)
 }

 export const parseMarkdown = (string) => {
     return string

}