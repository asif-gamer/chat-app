import { Route, Routes } from "react-router-dom";
import Layout from "./layouts/Layout";
import Home from "./pages/Home";
import UsersSearch from "./pages/UsersSearch";
import Chat from "./pages/Chat";

const App = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <Layout>
            <Home />
          </Layout>
        }
      />
      <Route
        path="/users"
        element={
          <Layout>
            <UsersSearch />
          </Layout>
        }
      />
      <Route
        path="/chat"
        element={
          <Layout>
            <Chat />
          </Layout>
        }
      />
    </Routes>
  );
};

export default App;
