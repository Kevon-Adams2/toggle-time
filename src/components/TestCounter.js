import { useEffect, useState } from 'react';

export default function TestCounter() {
    const [tracker, setTracker] = useState(0);

    useEffect( () => {
        const interval = setInterval( () => {
            setTracker((tracker) => tracker + 1);
        }, 1000);

        return () => {
            clearInterval(interval);
        };
    }, []);
}