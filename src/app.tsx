import React, { useCallback, useEffect, useState } from "react";
import styles from './app.module.scss';
import { Rows } from "./components/rows/rows";

export const App = () => {
    const [nextTick, setNextTick] = useState(0);
    const [tick] = useState(400);

    const handleNextTick = useCallback(() => {
        setNextTick(prevFrame => prevFrame + 1);
    }, []);

    useEffect(() => {
        const id = setInterval(() => handleNextTick(), tick);
        return () => clearInterval(id);
    }, [handleNextTick, tick]);

    return (
        <div className={styles.container}>
            <table>
                <tbody>
                    <Rows width={50} height={50} nextTick={nextTick}/>
                </tbody>
            </table>
        </div>
    );
}
