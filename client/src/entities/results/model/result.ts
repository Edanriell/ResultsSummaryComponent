import { calculateAverageValue } from "@shared/lib/functions";

export type Result = {
	memoryScore: number;
	reactionScore: number;
	verbalScore: number;
	visualScore: number;
};

export const updateResultComponentContent = (averageScore: number) => {
	if (averageScore <= 20) {
		return {
			componentBackgroundColor: "linear-gradient(180deg, #ff7f7f 0%, #ff4c4c 0.01%, #e93f3f 100%)",
			componentResultMessage: "Your performance is below average. Keep practicing!",
			componentScoreResultMessage: "Needs Improvement",
			componentTextColorMain: "#fff",
			componentTextColorAccent: "#ffcac9"
		};
	} else if (averageScore <= 40) {
		return {
			componentBackgroundColor: "linear-gradient(180deg, #ffaf7f 0%, #ff8c4c 0.01%, #e96f3f 100%)",
			componentResultMessage: "Your performance is average. There's room for improvement.",
			componentScoreResultMessage: "Average",
			componentTextColorMain: "#fff",
			componentTextColorAccent: "#ffe5c9"
		};
	} else if (averageScore <= 60) {
		return {
			componentBackgroundColor: "linear-gradient(180deg, #fff75f 0%, #ffd94c 0.01%, #e9b93f 100%)",
			componentResultMessage: "Your performance is above average. Keep up the good work!",
			componentScoreResultMessage: "Great",
			componentTextColorMain: "#fff",
			componentTextColorAccent: "#feffc9"
		};
	} else if (averageScore <= 80) {
		return {
			componentBackgroundColor: "linear-gradient(180deg, #75f 0%, #6943ff 0.01%, #2f2ce9 100%)",
			componentResultMessage:
				"Your performance exceeds 65% of the people conducting the test here!",
			componentScoreResultMessage: "Excellent",
			componentTextColorMain: "#fff",
			componentTextColorAccent: "#cac9ff"
		};
	} else {
		return {
			componentBackgroundColor: "linear-gradient(180deg, #7fffaf 0%, #4cff8c 0.01%, #3fe96f 100%)",
			componentResultMessage: "Your performance is exceptional! You're among the top performers.",
			componentScoreResultMessage: "Outstanding",
			componentTextColorMain: "#fff",
			componentTextColorAccent: "#c9ffca"
		};
	}
};

export const calculateAverageScore = (result: Result): number => {
	return calculateAverageValue(result);
};
