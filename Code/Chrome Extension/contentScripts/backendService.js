globalThis.fetchDataTest = async () => {
    const response = await fetch("http://localhost:4000/test", {
        method: "GET",
        headers: { "Accept": "application/json" },
    });

    const data = await response.json();
    return data;
};