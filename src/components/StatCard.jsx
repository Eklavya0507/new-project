export default function StatCard({ icon: Icon, label, value, hint }) {
  return (
    <div className="glass rounded-2xl p-5">
      <div className="flex items-center gap-4">
        <div className="grid h-11 w-11 place-items-center rounded-xl bg-white/5">
          <Icon size={20} className="text-violet-300" />
        </div>
        <div>
          <p className="text-xs text-slate-500">{label}</p>
          <p className="mt-1 text-2xl font-black">{value}</p>
        </div>
      </div>
      <p className="mt-4 text-xs text-slate-500">{hint}</p>
    </div>
  );
}
