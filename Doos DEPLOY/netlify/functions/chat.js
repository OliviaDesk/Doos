// netlify/functions/chat.js
exports.handler = async (event) => {
  const response = await fetch("https://api-inference.huggingface.co/models/mistralai/Mistral-7B-Instruct-v0.1", {
    method: "POST",
    headers: { 
      "Authorization": "Bearer " + process.env.HF_TOKEN,
      "Content-Type": "application/json"
    },
    body: event.body
  });
  return { statusCode: 200, body: JSON.stringify(await response.json()) };
};