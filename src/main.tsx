import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import "./index.css"
const App = React.lazy(() => import("./App"));

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Suspense fallback={<h4>Loading.....</h4>}>
      <App />
    </Suspense>
  </React.StrictMode>
);
