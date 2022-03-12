const API_END_POINT = "http://localhost:8080/api";

export const request = async (url, options = {}) => {
  try {
    const fullUrl = `${API_END_POINT}${url}`;
    const response = await fetch(fullUrl, options);

    if (response.ok) {
      const json = await response.json();
      return json;
    }
    throw new Error("API 통신 실패");
  } catch (e) {
    alert(e.message);
  }
};
