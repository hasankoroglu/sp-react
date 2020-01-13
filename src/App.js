import React from 'react';
import './App.css';

function App() {
  fetch("http://localhost:8081/_api/web/GetFolderByServerRelativeUrl('/SitePages')/Files", {
    accept: "application/json;odata=verbose"
  })
    .then(r => r.json())
    .then(data => {
      let result = JSON.stringify(data,null,1);
      document.getElementById("result").innerHTML = result;
    })
    .catch(console.log);
  return (
    <div>
      <pre id="result"></pre>
    </div>
  );
}

export default App;