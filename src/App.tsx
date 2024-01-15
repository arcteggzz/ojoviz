import { Route, Routes, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { AppContextProvider } from "./context/AppContext";
import { routePaths } from "./utils/";
import { HomePage, ProjectsPage, ProjectsDetailsPage } from "./pages";

const App = () => {
  const location = useLocation();

  return (
    <>
      <AppContextProvider>
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route path={routePaths.HOME} element={<HomePage />} />
            <Route path={routePaths.PROJECTS} element={<ProjectsPage />} />

            <Route
              path={routePaths.PROJECTSDETAILS}
              element={<ProjectsDetailsPage />}
            />
          </Routes>
        </AnimatePresence>
      </AppContextProvider>
    </>
  );
};

export default App;
