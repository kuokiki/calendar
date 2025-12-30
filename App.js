import React, { useState } from 'react';

const App = () => {
    const [date, setDate] = useState(new Date());

    const handleDateChange = (event) => {
        setDate(new Date(event.target.value));
    };

    return (
        <div>
            <h1>Calendar App</h1>
            <input
                type="date"
                value={date.toISOString().slice(0, 10)}
                onChange={handleDateChange}
            />
            <p>Selected Date: {date.toDateString()}</p>
        </div>
    );
};

export default App;