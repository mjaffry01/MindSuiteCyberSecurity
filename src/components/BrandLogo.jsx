export function BrandLogo({ onDark = false, compact = false }) {
  return (
    <span className={`brand-logo ${onDark ? "on-dark" : "on-light"} ${compact ? "compact" : ""}`}>
      <img src={`${import.meta.env.BASE_URL}Mindsuite-logo-white.png`} alt="MindSuite" />
    </span>
  );
}
