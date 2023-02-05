import { useCallback, useState } from 'react';
import { use1Second } from './use1Second';

export const useTracker = ({
    sales: startingSales = 0,
    running: isRunning = false

} = {}) => {
    const [sales, setSales] = useState(startingSales);
    const [running, setRunning] = useState(isRunning);
    const tick = useCallback(
        () => (running ? setSales((sales) => sales + 1) : undefined),
        [running]
    );
    const start = () => setRunning(true);
    const pause = () => setRunning(false);
    const reset = () => setSales(0);
    const stop = () => {
        pause();
        reset();
    };
    use1Second(tick);

    return { start, pause, reset, stop, sales, running };
};