import { CASES, NEXT_CASE, PROFILE } from "../data/cases";

function findCase(query) {
  const q = query.toLowerCase();
  return CASES.find(
    (c) =>
      q.includes(c.title.toLowerCase()) ||
      c.tags.some((t) => q.includes(t.toLowerCase())) ||
      q.includes(c.id.replace(/-/g, " "))
  );
}

export function localReply(query) {
  const q = query.toLowerCase();

  const matched = findCase(q);
  if (matched) {
    return {
      text: `${matched.title}\n\nProblem: ${matched.problem}\n\nWhat I did: ${matched.whatIDid}\n\nWhat came of it: ${matched.whatCameOfIt}`,
      link: matched.links?.repo ?? null,
    };
  }

  if (/\b(built|so far|projects|work)\b/.test(q)) {
    return {
      text: `So far: ${CASES.map((c) => c.title).join(
        ", "
      )}. Ask me about any of them by name for the full breakdown.`,
    };
  }

  if (/\b(next|queue|upcoming)\b/.test(q)) {
    return {
      text: `The next case queued to be added is: ${NEXT_CASE}. It'll follow the same problem → what I did → what came of it structure once it's written up.`,
    };
  }

  if (/\b(stack|tech|tools)\b/.test(q)) {
    return {
      text: `EcoSense AI: Python, scikit-learn, Streamlit. Campus Management System: Java, OOP. This site: React, deployed on GitHub Pages.`,
    };
  }

  if (/\b(who|hania)\b/.test(q)) {
    return { text: PROFILE.bio };
  }

  return {
    text: `I don't have a written answer for that yet. Try asking about a project by name (e.g. "EcoSense AI"), what's next, or the stack.`,
  };
}
