globalThis.fetchDataTest = async () => {
    const response = await fetch("http://localhost:4000/test", {
        method: "GET",
        headers: { "Accept": "application/json" },
    });

    const data = await response.json();
    return data;
};

globalThis.classifyArticle = async (text) => {
  try {
    const res = await fetch('http://localhost:8000/', {
      method: 'POST',
      mode: 'cors',                         // optional, but explicit
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ text })        // send an object, not a raw string
    });

    if (!res.ok) throw new Error(await res.text());
    const data = await res.json();
    console.log('Response data:', data);
    return data;
  } catch (err) {
    console.error('Fehler beim Abrufen der Daten:', err);
    return {};
  }
};
