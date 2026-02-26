import { createBrowserRouter } from "react-router-dom";
import { Layout } from "./Layout";
import { HomePage } from "../HomePage";
import { JokeCategoriesPage } from "./JokeCategoriesPage";
import { JokePage } from "./JokePage";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout />,
        children: [
            {
                index: true,
                element: <HomePage />
            },
            {
                path: '/categories',
                element: <JokeCategoriesPage />,
                children: [
                    {
                        path: ':category',
                        element: <JokePage />
                    }
                ]
            }
        ]
    }
]);