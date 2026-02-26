import { createBrowserRouter } from "react-router-dom";
import { Layout } from "./Layout";
import { HomePage } from "../HomePage";
import { JokeCategories } from "../JokeCategories";
import { Joke } from "../Joke";

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
                element: <JokeCategories />,
                children: [
                    {
                        path: ':category',
                        element: <Joke />
                    }
                ]
            }
        ]
    }
]);