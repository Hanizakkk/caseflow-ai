// Talks to the CaseFlow AI backend (a Vercel serverless function), which
// holds the Groq key server-side. The key never appears anywhere in this
// frontend's code or its built bundle.
// Set this to your deployed Vercel function's full endpoint URL —
// see caseflow-vercel/README.md. Example: "https://caseflow-backend.vercel.app/api/chat"
const BACKEND_URL = "https://YOUR-PROJECT.vercel.app/api/chat";

export async function chatReply(message, history) {
  const res = await fetch(BACKEND_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      message,
      history: history.map((m) => ({ role: m.role, content: m.content })),
    }),
  });

  if (!res.ok) {
    const errBody = await res.text();
    throw new Error(`Backend error ${res.status}: ${errBody.slice(0, 200)}`);
  }

  const data = await res.json();
  return data.reply || "No response text returned.";
}
