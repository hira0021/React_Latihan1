import React, {useState, useEffect} from 'react';

const TestCounter = () => {
    const [number, setNumber] = useState(0);

    // useEffect(() => {
    //     console.log("useEffect Mount")
    //     return (() => {
    //         console.log("useEffect Dismount");
    //     });
    // }, [number]);

    useEffect(() => {
        // Mount
        console.log("useEffect Mount")

        //Dismount or cleanup jika array ada isinya
        return () => {
            console.log("useEffect Dismount");
        };
    }, 
    // Update, useEffect aktif setiap variabel di array berubah. jika array kosong maka useEffect hanya aktif setiap Mounting.
    [number]);

    return (
        <div>
            <h3>Hitungan Sekarang : {number}</h3>
            <button onClick={() => setNumber(number - 1)}>Kurang</button>
            <button onClick={() => setNumber(number + 1)}>Tambah</button>
        </div>
    )
};

export default TestCounter;