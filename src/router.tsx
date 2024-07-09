import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { createRoot } from 'react-dom/client';

import App from './App.tsx';
import PathConstants from './routes/pathConstants.tsx';
import Homepage from './routes/Homepage.tsx';
import Artefacts from './routes/Artefacts.tsx';
import Characters from './routes/Characters.tsx';
import Info from './routes/Info.tsx';
import Island from './routes/Island.tsx';
import Roleplay from './routes/Roleplay.tsx';
import './index.css'

const router = createBrowserRouter([{
  path: "/",
  element: <App />,
  children: [{
    path: PathConstants.HOME,
    element: <Homepage />
  }, {
    path: PathConstants.ARTEFACTS,
    element: <Artefacts />
  }, {
    path: PathConstants.INFO,
    element: <Info />
  }, {
    path: PathConstants.ISLAND,
    element: <Island />
  }, {
    path: PathConstants.CHARACTERS,
    element: <Characters />
  }, {
    path: PathConstants.ROLEPLAYS,
    element: <Roleplay />
  }]
}]);

createRoot(document.getElementById('root')!).render(
  <RouterProvider router={router} />
);