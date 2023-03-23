import "./App.css";
import {
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Vans, { loader as vansLoader } from "./Pages/Vans/Vans";
import VanDetail, { loader as vanDetailLoader } from "./Pages/Vans/VanDetail";
import Dashboard, { loader as hostDeshboard } from "./Pages/Host/Dashboard";
import Income from "./Pages/Host/Income";
import Reviews from "./Pages/Host/Reviews";
import HostVans, { loader as hostVansLoader } from "./Pages/Host/HostVans";
import HostVanDetails, {
  loader as hostVanDetailLoader,
} from "./Pages/Host/HostVanDetails";
import HostVanInfo from "./Pages/Host/HostVanInfo";
import HostVanPricing from "./Pages/Host/HostVanPricing";
import HostVanPhotos from "./Pages/Host/HostVanPhotos";
import Layout from "./Components/Layout";
import HostLayout from "./Components/HostLayout";

import "./server";
import NotFound from "./Pages/NotFound";
import Error from "./Components/Error";
import Login, { action as loginAction } from "./Pages/Login";
import AuthRequired from "./Components/AuthRequired";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<Home />} />
      <Route path="About" element={<About />} />
      <Route path="login" element={<Login />} action={loginAction} />

      <Route
        path="Vans"
        element={<Vans />}
        errorElement={<Error />}
        loader={vansLoader}
      />
      <Route
        path="vans/:id"
        element={<VanDetail />}
        errorElement={<Error />}
        loader={vanDetailLoader}
      />

      <Route element={<AuthRequired />}>
        <Route path="Host" element={<HostLayout />}>
          <Route
            index
            element={<Dashboard />}
            errorElement={<Error />}
            loader={hostDeshboard}
          />
          <Route path="reviews" element={<Reviews />} />
          <Route path="income" element={<Income />} />
          <Route
            path="vans"
            element={<HostVans />}
            errorElement={<Error />}
            loader={hostVansLoader}
          />

          <Route
            path="vans/:id"
            element={<HostVanDetails />}
            errorElement={<Error />}
            loader={hostVanDetailLoader}
          >
            <Route index element={<HostVanInfo />} />
            <Route path="pricing" element={<HostVanPricing />} />
            <Route path="photos" element={<HostVanPhotos />} />
          </Route>
        </Route>
      </Route>
      <Route path="*" element={<NotFound />} />
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
