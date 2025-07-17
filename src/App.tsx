import "./App.css";
import AppLayout from "./layout/AppLayout";
import useInitTheme from "./hooks/useInitTheme";

function App() {
  const { ready } = useInitTheme();

  if (!ready) return null;

  return <AppLayout />;
}

export default App;
