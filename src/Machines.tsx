import axios from "axios";
import { useEffect, useState } from "react"
import { useUserContext } from "./UserContext";

type Machine = {
    id: string;
    name: string;
}

type MachinesResponse = Machine[];

export const Machines = () => {
    const [machines, setMachines] = useState<Machine[]>([]);
    const { token } = useUserContext();

    useEffect(() => {
        if (token) {
            doWork();
        }

        async function doWork() {
            const response = await axios.get<MachinesResponse>('https://simple-vending-api-demo.onrender.com/machines', {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
            setMachines(response.data);
        }
    }, [token])

    return (
        <div>
            <ul>
                {machines.map(machine => <li>{machine.name}</li>)}
            </ul>
        </div>
    )
}