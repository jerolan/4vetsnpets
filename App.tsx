import { AuthContextProvider } from "./context/AuthContext";
import { router } from "./router";
import { RouterProvider } from "react-router-dom";

function App() {
  return (
    <main className="app">
      <AuthContextProvider>
        <RouterProvider router={router} />
      </AuthContextProvider>
    </main>
  );
}

export default App;
