import { useNavigate, useParams } from "react-router-dom";
import { Joke } from "../Joke";
import { Suspense } from "react";

export function JokePage() {
    const {category} = useParams();
    const navigate = useNavigate();
    
    if (!category) { 
        navigate('/');
        return null;
    }

    return <Suspense fallback={<div>Joke is loading...</div>}>
        <Joke key={category} category={category} />
    </Suspense>
}