export const createData = async (dataType, data) => {
  const response = await fetch(`http://localhost:8080/${dataType}`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  });
  return response.json();
};

export const updateData = async (dataType, id, data) => {
  const response = await fetch(`http://localhost:8080/${dataType}/${id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  });
  return response.json();
};

export const deleteData = async (dataType, id) => {
  await fetch(`http://localhost:8080/${dataType}/${id}`, { method: 'DELETE' });
};

export const fetchData = async (dataType) => {
  const response = await fetch(`http://localhost:8080/${dataType}`);
  return response.json();
};
