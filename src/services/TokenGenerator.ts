export const TokenGeneratorService = async () => {
  const response = await fetch(
    "https://parsa-shaabani-backend.vercel.app/login",
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    },
  );
  const token = await response.json();
  return token;
};
