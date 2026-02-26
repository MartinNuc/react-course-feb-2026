import { useNavigate, useParams, useSearchParams } from "react-router-dom";
import { Joke } from "../Joke";

export function JokePage() {
    const {category} = useParams();
    const [searchParams] = useSearchParams();

    console.log('searchParams', searchParams.get('page'))

    const navigate = useNavigate();
    
    if (!category) { 
        navigate('/');
        return null;
    }

    return <>
        <Joke key={category} category={category} />
    </>
}