// joke-categories.tsx
import axios from "axios";
import { useEffect, useState } from "react";
import { Link, Outlet } from "react-router-dom";

export function JokeCategories() {
    const [categories, setCategories] = useState<string[]>([]);

    useEffect(() => {
        axios<string[]>("https://api.chucknorris.io/jokes/categories").then(
            (response) => setCategories(response.data)
        );
    }, []);

    return <ul>
        {categories.map(category => 
            <li key={category}>
                <Link to={category}>{category}</Link>
            </li>
        )}
        <div>
            <Outlet />
        </div>
    </ul>;
}