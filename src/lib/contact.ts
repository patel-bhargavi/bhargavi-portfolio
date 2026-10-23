export type ContactPayload = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

export type ContactResult =
  | { status: "sent" }
  | { status: "draft" }
  | { status: "error"; message: string };

const EMAIL = "patelbhargavi1624@gmail.com";

export function mailtoHref(payload?: Partial<ContactPayload>) {
  const subject = payload?.subject?.trim() || "Project inquiry";
  const body = [
    payload?.name ? `Name: ${payload.name}` : "",
    payload?.email ? `Email: ${payload.email}` : "",
    "",
    payload?.message?.trim() || "",
  ]
    .filter((line, index, all) => line !== "" || all[index - 1] !== "")
    .join("\n");

  return `mailto:${EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}

export async function submitContact(payload: ContactPayload): Promise<ContactResult> {
  const endpoint = import.meta.env.VITE_CONTACT_ENDPOINT?.trim();

  if (!endpoint) {
    window.location.href = mailtoHref(payload);
    return { status: "draft" };
  }

  try {
    const response = await fetch(endpoint, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(payload),
    });

    if (!response.ok) {
      return {
        status: "error",
        message: "The contact service could not accept the message. Please email me directly.",
      };
    }

    return { status: "sent" };
  } catch {
    return {
      status: "error",
      message: "The message could not be sent. Please email me directly.",
    };
  }
}
