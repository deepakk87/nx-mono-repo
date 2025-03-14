import {deact} from '@deepakk87/deact';
import React from 'react';
import {createRoot} from 'react-dom/client';

/* React application is a tree of react elements 
   React Element follows a tree structure 
    - type, props and list of children 
*/ 

const rootElement = React.createElement('div', {className: 'header'}, 
  React.createElement('div', {className: 'title'}, "Deact Library"), 
  React.createElement('div', {className: 'body'}, "An attempt at build a react clone"));

console.log(rootElement);

/**
 * Print the following output on console.
 * {
    "type": "div",
    "key": null,
    "props": {
        "className": "header",
        "children": [
            {
                "type": "div",
                "key": null,
                "props": {
                    "className": "title",
                    "children": "Deact Library"
                },
                "_owner": null,
                "_store": {}
            },
            {
                "type": "div",
                "key": null,
                "props": {
                    "className": "body",
                    "children": "An attempt at build a react clone"
                },
                "_owner": null,
                "_store": {}
            }
        ]
    },
    "_owner": null,
    "_store": {}
}
*/

const domNode = document.getElementById('root') as HTMLElement;
const root = createRoot(domNode);
root.render(rootElement);
console.log (deact());