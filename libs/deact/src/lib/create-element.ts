/**
 * The fist function we need is createElement
*/

export class DeactElement {
    type!: string;
    props!: any   // Too much effort to fix this any.
}

function createTextElement(str: string): DeactElement {
    return {
        type: 'TEXT_ELEMENT',
        props: {
            nodeValue: str,
            children:[]  // Empty array simplfies code.
        }
    }
}

export function createElement(type: string, props: any, ...children: (DeactElement| string)[]): DeactElement{
    return {type, props: {...props, children: children.map(child => typeof child === 'object' ? child :  createTextElement(child) )}}
}


