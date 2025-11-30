import React, { useState } from "react";

export default function DeleteAccountMailto({
  supportEmail = "support@mealar.in",
  subject = "Mealar account deletion request"
}) {
  const [email, setEmail] = useState("");
  const [accountId, setAccountId] = useState("");
  const [notes, setNotes] = useState("");
  const [status, setStatus] = useState("");

  function buildMailto() {
    const bodyLines = [
      "I request permanent deletion of my Mealar account.",
      "",
      `Registered email: ${email || "(not provided)"}`,
      `Account ID / Username: ${accountId || "(not provided)"}`,
      "",
      "Additional details:",
      notes || "(none)",
      "",
      "Please confirm receipt to this email address."
    ];
    const body = encodeURIComponent(bodyLines.join("\n"));
    return `mailto:${encodeURIComponent(supportEmail)}?subject=${encodeURIComponent(subject)}&body=${body}`;
  }

  function isValidEmail(e) {
    if (!e) return false;
    // simple email check
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e);
  }

  async function handleSubmit(ev) {
    ev.preventDefault();
    setStatus("");

    if (!isValidEmail(email)) {
      setStatus("Please enter a valid registered email address.");
      return;
    }

    const mailto = buildMailto();

    // Try to open user's mail client
    window.location.href = mailto;

    // Provide a copy-to-clipboard fallback and short user guidance
    setTimeout(() => {
      setStatus("Email client opened (or no email client configured). If nothing opened, your browser may not have a mail client — click 'Copy message' and send an email to support@mealar.in.");
    }, 250);
  }

  async function handleCopy(ev) {
    ev.preventDefault();
    const bodyLines = [
      "I request permanent deletion of my Mealar account.",
      "",
      `Registered email: ${email || "(not provided)"}`,
      `Account ID / Username: ${accountId || "(not provided)"}`,
      "",
      "Additional details:",
      notes || "(none)",
      "",
      "Please confirm receipt to this email address."
    ];
    const subjectLine = subject;
    const fullText = `To: ${supportEmail}\nSubject: ${subjectLine}\n\n${bodyLines.join("\n")}`;
    try {
      await navigator.clipboard.writeText(fullText);
      setStatus("Message copied to clipboard. Paste it into an email to support@mealar.in.");
    } catch {
      setStatus(`Unable to copy to clipboard. Please send an email to ${supportEmail} with the details above.`);
    }
  }

  return (
    <div className="delete-form-card" style={{ maxWidth: 640, margin: "28px auto", padding: 20 }}>
      <h2 style={{ color: "#2c2758", marginTop: 0 }}>Request Account Deletion</h2>
      <p style={{ color: "#555", marginTop: 4 }}>
        We will prepare an email to <strong>{supportEmail}</strong>. This opens your email client — if you don't have one, use <em>Copy message</em>.
      </p>

      <form onSubmit={handleSubmit} style={{ display: "grid", gap: 10 }}>
        <label style={{ fontWeight: 600, color: "#2c2758" }}>
          Registered email (required)
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="you@example.com"
            required
            style={{ width: "100%", padding: 10, marginTop: 6, borderRadius: 8, border: "1px solid #e6e6e6" }}
            aria-label="Registered email"
          />
        </label>

        <label style={{ fontWeight: 600, color: "#2c2758" }}>
          Account ID / Username (optional)
          <input
            type="text"
            value={accountId}
            onChange={(e) => setAccountId(e.target.value)}
            placeholder="Optional — helps us locate your account"
            style={{ width: "100%", padding: 10, marginTop: 6, borderRadius: 8, border: "1px solid #e6e6e6" }}
            aria-label="Account ID or username"
          />
        </label>

        <label style={{ fontWeight: 600, color: "#2c2758" }}>
          Additional details (optional)
          <textarea
            value={notes}
            onChange={(e) => setNotes(e.target.value)}
            placeholder="Any helpful information (optional)"
            style={{ width: "100%", padding: 10, marginTop: 6, borderRadius: 8, border: "1px solid #e6e6e6", minHeight: 90 }}
            aria-label="Additional details"
          />
        </label>

        <div style={{ display: "flex", gap: 10, marginTop: 6 }}>
          <button
            type="submit"
            style={{
              flex: 1, background: "#ffb800", border: "none", padding: "12px 14px",
              borderRadius: 10, fontWeight: 700, color: "#2c2758", cursor: "pointer"
            }}
          >
            Open email client
          </button>

          <button
            type="button"
            onClick={handleCopy}
            style={{
              background: "#fff", border: "1px solid #ffd090", padding: "12px 14px",
              borderRadius: 10, fontWeight: 700, color: "#2c2758", cursor: "pointer"
            }}
          >
            Copy message
          </button>
        </div>

        <div style={{ color: "#666", fontSize: 13, marginTop: 6 }}>
          <div><strong>Note:</strong> This form only prepares an email. Mealar will process deletion after we receive your request and verify ownership.</div>
        </div>

        {status && <div role="status" style={{ marginTop: 10, color: "#444" }}>{status}</div>}
      </form>
    </div>
  );
}
