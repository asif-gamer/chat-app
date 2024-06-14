import { Route, Routes } from "react-router-dom";
import Layout from "./layouts/Layout";
import Home from "./pages/Home";
import UsersSearch from "./pages/UsersSearch";
import Chat from "./pages/Chat";
import Chat2 from "./pages/Chat2";
import Chat3 from "./pages/Chat3";
import CreateGroup from "./pages/CreateGroup";
import DisplayPhoto from "./pages/DisplayPhoto";
import AddUser from "./pages/AddUser";
import Chat4 from "./pages/Chat4";
import Chat5 from "./pages/Chat5";
import Chat6 from "./pages/Chat6";

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
      <Route
        path="/chat2"
        element={
          <Layout>
            <Chat2 />
          </Layout>
        }
      />
      <Route
        path="/chat3"
        element={
          <Layout>
            <Chat3 />
          </Layout>
        }
      />
      <Route
        path="/create-group"
        element={
          <Layout>
            <CreateGroup />
          </Layout>
        }
      />
      <Route
        path="/display-photo"
        element={
          <Layout>
            <DisplayPhoto />
          </Layout>
        }
      />
      <Route
        path="/add-user"
        element={
          <Layout>
            <AddUser />
          </Layout>
        }
      />
      <Route
        path="/chat4"
        element={
          <Layout>
            <Chat4 />
          </Layout>
        }
      />
      <Route
        path="/chat5"
        element={
          <Layout>
            <Chat5 />
          </Layout>
        }
      />
      <Route
        path="/chat6"
        element={
          <Layout>
            <Chat6 />
          </Layout>
        }
      />
    </Routes>
  );
};

export default App;
