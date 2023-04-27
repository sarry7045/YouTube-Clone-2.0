import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import "./main.css";
const App = React.lazy(() => import("./App"));

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Suspense fallback={<h4>Loading.....</h4>}>
      <App />
    </Suspense>
  </React.StrictMode>
);


// React Optimization

// ReactLazy - Suspense
// useMemo
// useCallback
// React virtualized for data listing
// try Catch
// async await 
// ===
// Destructure array and object
// Object Chaining - .?
// Nullishing - ??
// Always Create one route of Default page * 
// Try to use useReducer if we need to create more hen 3 useState


// Videos.tsx = remove any and define types
