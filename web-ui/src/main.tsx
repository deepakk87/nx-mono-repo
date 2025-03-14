import {deact, Deact} from '@deepakk87/deact';

/* React application is a tree of react elements 
   React Element follows a tree structure 
    - type, props and list of children 
*/ 

const rootElement = Deact.createElement('div', {className: 'header'}, 
  Deact.createElement('div', {className: 'title'}, "Deact Library"), 
  Deact.createElement('div', {className: 'body'}, "An attempt at build a react clone"));

console.log(rootElement);

/**
 {
    "type": "div",
    "props": {
        "className": "header",
        "children": [
            {
                "type": "div",
                "props": {
                    "className": "title",
                    "children": [
                        {
                            "type": "TEXT_ELEMENT",
                            "props": {
                                "nodeValue": "Deact Library",
                                "children": []
                            }
                        }
                    ]
                }
            },
            {
                "type": "div",
                "props": {
                    "className": "body",
                    "children": [
                        {
                            "type": "TEXT_ELEMENT",
                            "props": {
                                "nodeValue": "An attempt at build a react clone",
                                "children": []
                            }
                        }
                    ]
                }
            }
        ]
    }
} 
*/

Deact.render(rootElement, document.getElementById('root') as HTMLElement);
console.log (deact());