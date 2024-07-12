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
import Campaigns from './routes/Campaigns.tsx';
import './index.css'

const router = createBrowserRouter([{
  path: "/",
  element: <App />,
  children: [{
    path: PathConstants.HOME,
    element: <Homepage />
  }, {
    path: PathConstants.ISLAND.DEF,
    element: <Island />
  }, {
    path: PathConstants.CAMPAIGNS.DEF,
    element: <Campaigns />,
  }, {
    path: PathConstants.CAMPAIGNS.ARTEFACTS,
    element: <Artefacts />
  }, {
    path: PathConstants.INFO.DEF,
    element: <Info />
  }, {
    path: PathConstants.CAMPAIGNS.CHARACTERS,
    element: <Characters />
  }, {
    path: PathConstants.CAMPAIGNS.ROLEPLAYS,
    element: <Roleplay />
  }]
}]);

createRoot(document.getElementById('root')!).render(
  <RouterProvider router={router} />
);