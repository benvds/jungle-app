import React from "react";
import "./App.css";

import {
  logVersion,
  VersionView,
  versionFormatted,
} from "@benvds/jungle-ui-lib";
// import { VersionView } from "@benvds/jungle-ui-lib/src/version-view";

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
