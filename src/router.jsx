import { createBrowserRouter, Outlet } from "react-router-dom";
import Home from "./pages/Home";
import ProjectPage from "./pages/ProjectPage";
import { TransitionProvider } from "./components/TransitionContext";

const router = createBrowserRouter(
    [
        {
            path: "/",
            element: (
                <TransitionProvider>
                    <Outlet />
                </TransitionProvider>
            ),
            children: [
                {
                    path: "",
                    element: <Home />
                },
                {
                    path: "projects/:id",
                    element: <ProjectPage />
                }
            ]
        },
    ],
    {
        basename: "/portfolio/",
    }
);

export default router;