export async function fetchMain() {
  const res = await fetch("http://localhost:3001/api/main");
  if (!res.ok) throw new Error("Failed to fetch main data");
  return res.json();
}

export async function createMain(newData) {
  const res = await fetch("http://localhost:3001/api/main", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(newData),
  });
  if (!res.ok) throw new Error("Failed to create main data");
  return res.json();
}

export async function updateMain(id, updatedData) {
  const res = await fetch(`http://localhost:3001/api/main/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(updatedData),
  });
  if (!res.ok) throw new Error("Failed to update main data");
  return res.json();
}

export async function deleteMain(id) {
  const res = await fetch(`http://localhost:3001/api/main/${id}`, {
    method: "DELETE",
  });
  if (!res.ok) throw new Error("Failed to delete main data");
  return res.json();
}