function customRender(reactElement, mainContainer) {
    /*
    const domElement = document.createElement(reactElement.type)

    domElement.innerHTML = reactElement.children
    domElement.setAttribute('href',reactElement.props.href)

    domElement.setAttribute('target',reactElement.props.target)

    mainContainer.appendChild(domElement); 
    */

    const domElement = document.createElement(reactElement.type)

    domElement.innerHTML = reactElement.children

    for (const prop in reactElement.props) {
        if (prop == 'children') continue
        domElement.setAttribute(prop, reactElement.props[prop])
    }
    mainContainer.appendChild(domElement)
}

const reactElement = {
    type: 'a',
    props: {
        href: 'https://www.google.com',
        target: '_blank'
    },
    children: 'Click Me to visit google'
}

function custRender(reactEle, Container) {
    const domElement = document.createElement(reactEle.type);
    for (const child of reactEle.children) {
        if (typeof child === 'string') {
            domElement.innerHTML += child;
        } else {
            custRender(child, domElement); // Recursively render child elements
        }
    }
    for (const prop in reactEle.props) {
        if (prop === 'children') continue;
        domElement.setAttribute(prop, reactEle.props[prop]);
    }
    Container.appendChild(domElement);
}

const reactEle = {
    type: 'div',
    props: {
        className: 'Container'

    },
    children: [
        { type: 'h1', children: ['React']} ,{type : 'p', children: ['hey everyone today i am practicing and understand the react'] } // Convert JSX to a React element object
    ]
};

const Container = document.querySelector("#stem");
custRender(reactEle, Container);
const mainContainer = document.querySelector("#root")

customRender(reactElement, mainContainer)

