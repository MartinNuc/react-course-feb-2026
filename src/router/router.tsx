import { createBrowserRouter, Outlet } from "react-router-dom";
import { Layout } from "./Layout";
import { HomePage } from "../HomePage";
import { JokeCategoriesPage } from "./JokeCategoriesPage";
import { JokePage } from "./JokePage";
import { IsLoggedInGuard } from "./guards/IsLoggedInGuard";
import React from "react";

const VendingAdministrationPageLazy = React.lazy(() => 
    import('./VedingAdministrationPage')
        .then(({ VendingAdministrationPage }) => ({ default: VendingAdministrationPage })
    )
);

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
            },
            {
                path: 'admin',
                element: <Outlet />,
                children: [
                    {
                        index: true,
                        element: <IsLoggedInGuard><VendingAdministrationPageLazy /></IsLoggedInGuard>
                    },
                    {
                        path: 'login',
                        lazy: () => import('./LoginPage').then(({LoginPage}) => ({Component: LoginPage}))
                    },
                ]
            }
        ]
    }
]);