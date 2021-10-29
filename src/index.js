import React from 'react';
import ReactDom from 'react-dom';
import Sidebar from "./Components/Sidebar";
import Topbar from "./Components/Topbar";
import "./index.css";
//statesless functional component
//always return JSX

function Greeting(){//capitalizing is important so react knows its a component
  return (
    <div className="Greeting">
      <Topbar />
      <Sidebar />
    </div>
    ); //this is called jsx.
}
// const Greeting = () => {
//   return React.createElement(
//     'div', 
//     {},
//     React.createElement('h1',{}, 'helloworld')
//   );
// }

ReactDom.render(<Greeting/>, document.getElementById('root'));

/* 
JSX rules:
return single element
camelCase for htlm attributes
clasName instead of class
close every element, even ones which are excused in html.
good idea to use parenthesis for return.
*/

/* arrow functions
implicit and explicit return */