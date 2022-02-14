const baseUrl = process.env.REACT_APP_API_URL;

const fetchAllProjects = (endpoint) => {
  const url = `${baseUrl}/${endpoint}`;

  return fetch(url);
};

const fetchSendEmail = (endpoint, data) => {
  const url = `${baseUrl}/${endpoint}`;

  return fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
};

export { fetchAllProjects, fetchSendEmail };
