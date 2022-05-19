import React, { FC, useEffect, useMemo, useState } from "react";
import cn from 'classnames';

import { generateData } from "../../helper/generateData";
import { transformData } from "../../helper/transformData";

import styles from './rows.module.scss'

interface IRowsProps {
	width: number,
	height: number,
	nextTick: number,
}

export const Rows:FC<IRowsProps> = ({ width, height, nextTick }) => {
	const [data, setData] = useState([[0]]);

	useEffect(() => {
		if (nextTick === 0) {
			setData(generateData(width, height));
		}

		if (nextTick > 0) {
			setData(prevData => transformData(prevData));
		}
	}, [height, width, nextTick]);

	const rows = useMemo(() => {
		return data.map(
			(row, i) => {
				const cells = row.map((value, j) => <td key={j} className={cn(styles.dead, value && styles.alive)}/>);
				return <tr key={i} >{cells}</tr>
			}
		)
	}, [data]);

	return <>{rows}</>
}
