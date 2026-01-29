import { lazy, Suspense } from "react";
import { Route, Routes, Link, Outlet } from "react-router-dom";
// import { About } from "./Components/About";
// import Home from "./Components/Home";
// import Pricing from "./Components/Pricing";
// import Store from "./Components/Store";
// import Navbar from "./Navbar";

const Home = lazy(() => wait(1000).then(() => import("./Components/Home")));
const Pricing = lazy(() =>
  wait(1500).then(() => import("./Components/Pricing"))
);
const Store = lazy(() => wait(1000).then(() => import("./Components/Store")));
const About = lazy(() =>
  wait(1000)
    .then(() => import("./Components/About"))
    .then((module) => {
      return { default: module.About }; /// iF the imported a named function change the .About to .default to make it a default import
    })
);

function LazyLoading() {
  return (
    <div>
      {/* <Navbar /> */}
      <div className="container">
        <Routes>
          <Route element={<Navbar />}>
            <Route path="/" element={<Home />} />
            <Route path="/store" element={<Store />} />
            <Route path="/pricing" element={<Pricing />} />
            <Route path="/about" element={<About />} />
          </Route>
        </Routes>
      </div>
    </div>
  );
}

function Navbar() {
  return (
    <>
      <nav className="nav">
        <Link to="/">Site Name</Link>
        <ul>
          <li>
            <Link to="/store">Store</Link>
          </li>
          <li>
            <Link to="/pricing">Pricing</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
        </ul>
      </nav>
      <Suspense fallback={<h1>Loading...</h1>}>
        <Outlet />
      </Suspense>
    </>
  );
}

function wait(time) {
  return new Promise((resolve) => {
    setTimeout(resolve, time);
  });
}

export default LazyLoading;
