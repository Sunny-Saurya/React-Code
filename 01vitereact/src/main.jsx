import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

function MyApp() {
    return (
        <div>
            <h1>My App</h1>

        </div>
    )
}

// const reactElement = {
//     type: 'a',
//     props: {
//         href: 'https://www.google.com',
//         target: '_blank'
//     },
//     children: 'Click Me to visit google'
// } 

// kyuki ye custom reactElement hai to wo isse render nhi kr pa rha tha kyuki sb ki koi n koi property hoti hi hai...

const anotherElement = (   // agar hum apne element ko pura html jaise pass krenge toh ye render kar dega or kaam krege
    <a href="https://google.com" target='_blank'>Visit Google</a>

)

const anotherUsername = "sunny saurya"
const reactElement = React.createElement(   
    'a',
    {href:'https://google.com', target: '_blank'},
    'Click Me to visit Google ',
    anotherUsername    

)

ReactDOM.createRoot(document.getElementById('root')).render(
    // <MyApp/> // function~
    // MyApp() // we can also do this but this is not optimise

    reactElement
)
