/** Shown in the UI — visitors believe they are writing to this address. */
export const CONTACT_EMAIL_DISPLAY = "contact@hinodeya.ae";

/** Actual inbox for mailto links and form delivery. */
export const CONTACT_EMAIL_RECIPIENT = "akari.kitaguchi@hinodeya.ae";

export function contactMailto(hrefSuffix = ""): string {
  return `mailto:${CONTACT_EMAIL_RECIPIENT}${hrefSuffix}`;
}
