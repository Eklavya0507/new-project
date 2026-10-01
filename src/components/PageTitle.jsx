export default function PageTitle({ eyebrow, title, description }) {
  return (
    <div className="mb-7">
      <div className="mb-2 text-xs font-bold uppercase tracking-[0.22em] text-violet-300">
        {eyebrow}
      </div>
      <h1 className="text-3xl font-black tracking-tight sm:text-4xl">{title}</h1>
      {description && (
        <p className="mt-2 max-w-2xl text-slate-400">{description}</p>
      )}
    </div>
  );
}
