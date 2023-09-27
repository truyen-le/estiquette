import ErrorPage from "@presentation/pages/Error";
import EventDetailPage from "@presentation/pages/EventDetail";
import HomePage from "@presentation/pages/Home";
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import App from "./root";

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route
      path="/"
      element={<App />}
      errorElement={<ErrorPage />}
    >
      <Route path="" element={<HomePage />} />
      <Route path="event/:eventId" element={<EventDetailPage />} />
    </Route>
  )
);
