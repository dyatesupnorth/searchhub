import React from 'react'
import ReactDOM from 'react-dom'
import {isEmpty, decodeBase64} from '../helpers'


test('should return true for an empty object', () => {
    expect(isEmpty({})).toBe(true)
})

test('should return false for a populated object', () => {
    expect(isEmpty({items:{}})).toBe(false)
})

test('should decode base64 string', () => {
    expect(decodeBase64('VGhlIG1hbiBpbiBibGFjayBmbGVkIGFjcm9zcyB0aGUgZGVzZXJ0LCBhbmQgdGhlIGd1bnNsaW5nZXIgZm9sbG93ZWQu')).toBe('The man in black fled across the desert, and the gunslinger followed.')
});