export const calculateAverageValue = (obj: unknown): number => {
	let averageValue: number = 0;

	for (const prop in obj as unknown as object) {
		averageValue += (obj as never)[prop] as unknown as number;
	}

	const objPropertyCount = Object.keys(obj as never).length;

	averageValue = Math.round(averageValue / objPropertyCount);

	return averageValue;
};
