import { useEffect, useState } from "react"

type Coordinates = {
    x: number;
    y: number;
}

export function ClicksTracker() {
    
    const [coordinates, setCoordinates] = useState<Coordinates[]>([]);

    useEffect(() => {
        function handleClick(e: MouseEvent) {
            setCoordinates(coordinates => [...coordinates, { x: e.clientX, y: e.clientY}]);
        }
        window.addEventListener('click', handleClick);
        
        return () => window.removeEventListener('click', handleClick);
    }, []);
    

    return <ul>
        {coordinates.map(coordinate => <li>x={coordinate.x} y={coordinate.y}</li>)}
    </ul>

}