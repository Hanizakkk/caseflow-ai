import { useState, useRef, useEffect } from "react";
import { CASES, NEXT_CASE, PROFILE } from "./data/cases";
import { localReply } from "./lib/localReply";
import { chatReply } from "./lib/chatApi";
import "./App.css";

const SUGGESTIONS = [
  "What has Hania built so far?",
  "Tell me about EcoSense AI",
  "Tell me about the Campus Management System",
  "What's the next case?",
];

export default function App() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [pending, setPending] = useState(false);
  const [error, setError] = useState("");
  const logRef = useRef(null);

  useEffect(() => {
    logRef.current?.scrollTo({ top: logRef.current.scrollHeight, behavior: "smooth" });
  }, [messages, pending]);

  async function send(text) {
    if (!text.trim() || pending) return;
    setError("");
    setMessages((m) => [...m, { role: "user", text }]);
    setInput("");
    setPending(true);

    try {
      const history = messages.map((m) => ({
        role: m.role === "bot" ? "assistant" : "user",
        content: m.text,
      }));
      const replyText = await chatReply(text, history);
      setMessages((m) => [...m, { role: "bot", text: replyText, mode: "ai" }]);
    } catch (e) {
      setError(e.message || "Couldn't reach the AI backend right now.");
      const r = localReply(text);
      setMessages((m) => [...m, { role: "bot", text: r.text, link: r.link, mode: "local" }]);
    } finally {
      setPending(false);
    }
  }

  function reset() {
    setMessages([]);
    setInput("");
    setError("");
  }

  const hasStarted = messages.length > 0;

  return (
    <div className="app">
      <section className="hero-intro">
  <p className="hero-eyebrow">COMPUTER SCIENCE · AI · MACHINE LEARNING</p>

  <h1>Hi, I'm Hania Zaki.</h1>

  <h2>
    I build practical AI, machine learning, and software projects.
  </h2>

  <p className="hero-description">
    I'm a Computer Science student exploring machine learning, AI, and
    software development through hands-on projects. I experiment with
    emerging tools and workflows and turn ideas into working applications.
  </p>

  <div className="hero-tags">
    <span>Machine Learning</span>
    <span>Artificial Intelligence</span>
    <span>Software Development</span>
  </div>
</section>
      <header className="topbar">
        <div className="brand">
          <span className="brand-dot" />
          <div>
            <div className="brand-name">CaseFlow AI</div>
            <div className="brand-sub">{PROFILE.name} — case-study agent</div>
          </div>
        </div>
        <div className="topbar-actions">
          <a className="link" href={PROFILE.github} target="_blank" rel="noopener noreferrer">
            GitHub
          </a>
          <button className="btn-ghost" onClick={reset}>
            Reset chat
          </button>
        </div>
      </header>

      <main className="layout">
        <section className="chat-panel">
          {!hasStarted && (
            <div className="welcome fade-in">
              <div className="profile-name">{PROFILE.name}</div>
              <div className="profile-title">{PROFILE.title}</div>
              <p>{PROFILE.bio}</p>
              <div className="suggestions">
                {SUGGESTIONS.map((q) => (
                  <button key={q} className="chip" onClick={() => send(q)}>
                    {q}
                  </button>
                ))}
              </div>
            </div>
          )}

          <div className="chat-log" ref={logRef} aria-live="polite">
            {messages.map((m, i) => (
              <div key={i} className={`msg ${m.role} slide-in`}>
                {m.text}
                {m.link && (
                  <>
                    <br />
                    <a className="case-link" href={m.link} target="_blank" rel="noopener noreferrer">
                      view repo →
                    </a>
                  </>
                )}
              </div>
            ))}
            {pending && (
              <div className="msg bot slide-in typing">
                <span className="dot" />
                <span className="dot" />
                <span className="dot" />
              </div>
            )}
          </div>

          {error && (
            <div className="error-banner">{error} — showing a local fallback answer instead.</div>
          )}

          <form
            className="chat-input"
            onSubmit={(e) => {
              e.preventDefault();
              send(input);
            }}
          >
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask about a project, the stack, or what's next…"
              autoComplete="off"
            />
            <button type="submit" disabled={pending}>
              Send
            </button>
          </form>
        </section>

        <aside className="side-panel">
          <div className="side-block">
            <div className="side-label">Case studies</div>
            <div className="case-list">
              {CASES.map((c) => (
                <div key={c.id} className="case-item">
                  <div className="status">● {c.status}</div>
                  <h4>{c.title}</h4>
                  <p>{c.problem}</p>
                  {c.links?.repo && (
                    <a href={c.links.repo} target="_blank" rel="noopener noreferrer">
                      repo →
                    </a>
                  )}
                </div>
              ))}
            </div>
          </div>

          <div className="side-block next-case">
            <div className="side-label">Next case — queued</div>
            <div className="next-case-name">{NEXT_CASE}</div>
            <p className="next-case-note">
              Added the same way as every case above: problem → what I did → what came of it,
              appended to <code>src/data/cases.js</code>. No rebuild logic to change.
            </p>
          </div>

          <div className="side-block add-case">
            <div className="side-label">Add the next case</div>
            <ol className="add-case-steps">
              <li>Choose completed work</li>
              <li>Write the Problem</li>
              <li>Write What I Did</li>
              <li>Write What Came Of It</li>
              <li>
                Add the case to <code>src/data/cases.js</code>
              </li>
              <li>Test the chatbot</li>
              <li>Deploy the update</li>
            </ol>
            <p className="next-case-note">
              Full details in <code>NEXT_CASE.md</code>.
            </p>
          </div>
        </aside>
      </main>

      <footer className="foot">CaseFlow AI · React · Groq-powered</footer>
    </div>
  );
}
