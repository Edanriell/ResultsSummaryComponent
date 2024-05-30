import type { Result } from "@entities/results/model";

export const calculateAverageScore = (result: Result): number => {
	let averageScore: number = 0;

	for (const score in result) {
		averageScore += (result as never)[score] as unknown as number;
	}

	const resultPropertyCount = Object.keys(result).length;

	averageScore = Math.round(averageScore / resultPropertyCount);

	return averageScore;
};
