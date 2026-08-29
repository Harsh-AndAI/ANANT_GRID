/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { 
  Outlet, 
  RouterProvider, 
  createRouter, 
  createRoute, 
  createRootRoute 
} from "@tanstack/react-router";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { Hero } from "./components/home/Hero";
import { Stats } from "./components/home/Stats";
import { About } from "./components/home/About";
import { VisionMission } from "./components/home/VisionMission";
import { Business } from "./components/home/Business";
import { Pillars } from "./components/home/Pillars";
import { CurrentProject } from "./components/home/CurrentProject";
import { PageHero } from "./components/PageHero";
import { AboutPage } from "./components/pages/AboutPage";
import { BusinessPage } from "./components/pages/BusinessPage";
import { ProjectsPage } from "./components/pages/ProjectsPage";
import { LeadershipPage } from "./components/pages/LeadershipPage";
import { CareersPage } from "./components/pages/CareersPage";
import { ContactPage } from "./components/pages/ContactPage";
import { ScrollToTop } from "@/components/ScrollToTop";
if ("scrollRestoration" in history) {
  history.scrollRestoration = "manual";
}
// Root Route
const rootRoute = createRootRoute({
  component: () => (
    <div className="flex flex-col min-h-screen">
      <ScrollToTop />
      <Header />
      <main className="flex-grow">
        <Outlet />
      </main>
      <Footer />
    </div>
  ),
});

// Index Route
const indexRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/",
  component: function HomePage() {
    return (
      <>
        <Hero />
        <Stats />
        <About />
        <VisionMission />
        <Business />
        <Pillars />
        <CurrentProject />
      </>
    );
  },
});

const aboutRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/about",
  component: AboutPage,
});

const businessRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/business",
  component: BusinessPage,
});

const projectsRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/projects",
  component: ProjectsPage,
});

const leadershipRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/leadership",
  component: LeadershipPage,
});

const careersRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/careers",
  component: CareersPage,
});

const contactRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/contact",
  component: ContactPage,
});

// Route Tree
const routeTree = rootRoute.addChildren([
  indexRoute,
  aboutRoute,
  businessRoute,
  projectsRoute,
  leadershipRoute,
  careersRoute,
  contactRoute,
]);

// Create Router
const router = createRouter({ routeTree });

// Register for Type Safety
declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}

export default function App() {
  return <RouterProvider router={router} />;
}

