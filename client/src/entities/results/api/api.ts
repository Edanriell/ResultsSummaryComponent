export const getResultQuery = async () => {
	const response = await fetch("https://localhost:7137/result", {
		method: "GET"
	});

	if (response.status === 404) {
		throw new Error("Result data not found");
	}

	if (!response.ok) {
		throw new Error(`HTTP error! Status: ${response.status}`);
	}

	const contentType = response.headers.get("content-type");
	if (!contentType || !contentType.includes("application/json")) {
		throw new Error("Response is not in JSON format");
	}

	return response.json();
};
