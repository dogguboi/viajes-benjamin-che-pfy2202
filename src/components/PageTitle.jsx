export default function PageTitle({ title, subtitle }) {
  return (
    <div className="mb-6">
      <h1 className="font-display text-4xl font-extrabold text-marino">{title}</h1>
      <div className="mt-2 h-1.5 w-14 rounded-full bg-menta" aria-hidden="true" />
      {subtitle && <p className="mt-3 max-w-prose text-marino-soft">{subtitle}</p>}
    </div>
  );
}
