type ContentRequiredProps = {
  label: string;
};

/**
 * Visible dev-only placeholder for content that has not been supplied yet
 * (hero copy, About narrative, contact details, etc).
 *
 * Per Phase 9 §26 (Content Placeholder Policy): this must never be mistaken
 * for real content, and must be trivial to find and replace. Search the
 * codebase for "ContentRequired" to locate every remaining gap before launch.
 */
export function ContentRequired({ label }: ContentRequiredProps) {
  return <span className="content-required">[CONTENT REQUIRED — {label}]</span>;
}
