export default function Logo({ withOpacity = true }: { withOpacity?: boolean }) {
  return (
    <svg viewBox="0 0 40 44" aria-hidden="true" fill="currentColor">
      <path d="M8 0h9v28H40v8H8z" />
      {withOpacity && <path d="M18 8l14 8-14 4z" opacity=".55" />}
    </svg>
  );
}
