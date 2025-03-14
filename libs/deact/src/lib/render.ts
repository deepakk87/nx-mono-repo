import { DeactElement } from "./create-element";

const translatePropsMap: any = {
    
}

export function render ( element: DeactElement ,container: HTMLElement) {
    // Create dom node.
    const node = (element.type === 'TEXT_ELEMENT'? document.createTextNode(""): document.createElement(element.type)) as any;

    // Apply props to the element
    const isProperty = (key: string) => key!== 'children'; // We dont want children to passed to node

    Object.keys(element.props).filter(isProperty).forEach((propName:string) => {
        if (translatePropsMap[propName]) 
            node[translatePropsMap[propName]] = element.props[propName] 
        else  
            node[propName] = element.props[propName]
    })

    // Recursively do for each element with node as new container.
    element.props.children.forEach((element: DeactElement) => {
       render(element, node as HTMLElement);  // If we are here then its a HTMLElement
    });
    container.append(node);
}