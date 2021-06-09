import React, {useState} from 'react';

const TestCounter = () => {
    const [number, setNumber] = useState(0);
    return (
        <div>
            <h3>Hitungan Sekarang : {number}</h3>
            <button onClick={() => setNumber(number - 1)}>Kurang</button>
            <button onClick={() => setNumber(number + 1)}>Tambah</button>
        </div>
    )
};

export default TestCounter;