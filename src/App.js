import './App.css';
import Spinner from './components/spinner.js';
import Form from './components/form.js';
// importing useState to make it available to the top of the component heiarchy
import { useState } from 'react';

//! LET ME KNOW IF THERE IS ANYTHING ABOUT MY CODE YOU DONT LIKE PLEASE
//? IF YOU WNAT THESE COMMENTS COLOR CODED THEN DOWNLOAD THE "BETTER COMMENTS" EXTENSION IN VSCODE
//* ANY STYLING IVE DONE YOU ARE MORE THAN WELCOME TO UNDO, I KNOW YOU SAID YOU WERE ON THE STYLING.
//* SO YOU DONT HAVE TO GO LOOKING: Added display:flex; to .App in App.css, added inline styling on my error rending in the form component,
//* added inline styling to the h1 in the form component.

function App() {
    // This is the starting point for our list of names for the wheel
    // I put it here in the main app so that all components can have access to it if need be
    const [nameList, setNameList] = useState([])


  return (
    <div className="App">
        {/* Passing the name list down to the Spinner and Form components so it can be used as needed */}
        <Spinner nameList={nameList} />
        <Form nameList={nameList} setNameList={setNameList}/>
    </div>
  );
}

export default App;