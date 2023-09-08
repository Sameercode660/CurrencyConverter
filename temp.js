let value = null || undefined || '' || 'sameer' || null || []

console.log(value)

function sum(a, b)
{
    return null
}

let newValue = sum || 'sameer'

console.log(newValue)

/*
    '' false
    null false
    undefined false
    0 false


*/

if([])
{
    console.log('Hello, Sameer')
}