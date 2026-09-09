export const config = {
  runtime: 'edge',
};

export default function handler(request) {
  const apiKey = process.env.VITE_GOOGLE_API_KEY;
  const clientId = process.env.VITE_GOOGLE_CLIENT_ID;

  return new Response(
    JSON.stringify({
      apiKey: apiKey,
      clientId: clientId,
    }),
    {
      status: 200,
      headers: {
        'content-type': 'application/json',
      },
    }
  );
}