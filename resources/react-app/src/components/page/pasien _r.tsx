import { useState, useEffect } from 'react';
import Api from "../../api";

const Pasien = () => {
    const [patients, setPatients] = useState([]);

    useEffect(() => {
        Api.get("/api/data/pasien")
            .then(response => {
                setPatients(response.data);
            })
            .catch(error => {
                console.error("There was an error fetching the data!", error);
            });
    }, []);

    const handleRefresh = () => {
        // Trigger fetch data lagi
        setData([]); // Reset state untuk memicu re-fetch
    };

    return (
        <div>
            {patients}
            <button onClick={handleRefresh}>Refresh Data</button>
        </div>
    );
}

export default Pasien;