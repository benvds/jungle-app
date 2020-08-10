import React from "react";
import "./App.css";

import { logVersion, VersionView, versionFormatted } from "ui-lib-pika";

import "ui-lib-pika/src/assets/scss/version-view.css";

function App() {
  logVersion();

  return (
    <div className="App">
      <p>{versionFormatted()}</p>
      <VersionView />
    </div>
  );
}

export default App;
