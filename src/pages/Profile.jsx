import { useState } from "react";
import { LogOut, Settings, UserRound } from "lucide-react";
import PageTitle from "../components/PageTitle";

function Field({ label, value }) {
  return (
    <label className="block">
      <span className="text-xs text-slate-500">{label}</span>
      <input
        defaultValue={value}
        className="mt-1.5 w-full rounded-xl border border-white/10 bg-white/5 px-3 py-2.5 text-sm outline-none focus:border-violet-400/40"
      />
    </label>
  );
}

export default function Profile() {
  const [saved, setSaved] = useState(false);
  const [preferences, setPreferences] = useState({
    reminders: true,
    explanations: true,
    weeklyEmail: false,
  });

  const toggle = (key) => {
    setPreferences((current) => ({
      ...current,
      [key]: !current[key],
    }));
  };

  return (
    <div>
      <PageTitle
        eyebrow="Account"
        title="Your profile"
        description="Manage your learning preferences and account settings."
      />

      <div className="grid gap-5 lg:grid-cols-[280px_1fr]">
        <aside className="glass h-fit rounded-2xl p-6 text-center">
          <div className="mx-auto grid h-24 w-24 place-items-center rounded-3xl bg-gradient-to-br from-indigo-400 to-cyan-300 text-2xl font-black text-slate-950">
            AR
          </div>
          <h2 className="mt-4 text-xl font-black">Alex Rivera</h2>
          <p className="text-sm text-slate-500">Pro learner</p>

          <div className="mt-5 grid grid-cols-2 gap-4 border-t border-white/10 pt-5">
            <div>
              <div className="font-black">2.8k</div>
              <div className="text-[10px] uppercase text-slate-500">XP</div>
            </div>
            <div>
              <div className="font-black">7</div>
              <div className="text-[10px] uppercase text-slate-500">Courses</div>
            </div>
          </div>
        </aside>

        <div className="space-y-5">
          <div className="glass rounded-2xl p-6">
            <div className="mb-5 flex items-center gap-3">
              <UserRound size={19} />
              <h3 className="font-black">Personal information</h3>
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              <Field label="First name" value="Alex" />
              <Field label="Last name" value="Rivera" />
              <Field label="Email" value="alex@example.com" />
              <Field label="Role" value="Product Designer" />
            </div>

            <button
              onClick={() => setSaved(true)}
              className="mt-5 rounded-xl bg-white px-4 py-2.5 text-sm font-bold text-slate-950"
            >
              {saved ? "Saved ✓" : "Save changes"}
            </button>
          </div>

          <div className="glass rounded-2xl p-6">
            <div className="mb-5 flex items-center gap-3">
              <Settings size={19} />
              <h3 className="font-black">Learning preferences</h3>
            </div>

            <div className="space-y-4">
              <PreferenceRow
                title="Daily reminders"
                description="Get a reminder when you haven’t learned today."
                enabled={preferences.reminders}
                onClick={() => toggle("reminders")}
              />
              <PreferenceRow
                title="AI explanations"
                description="Adapt explanations to your current skill level."
                enabled={preferences.explanations}
                onClick={() => toggle("explanations")}
              />
              <PreferenceRow
                title="Weekly progress email"
                description="Receive a summary every Sunday."
                enabled={preferences.weeklyEmail}
                onClick={() => toggle("weeklyEmail")}
              />
            </div>
          </div>

          <button className="flex items-center gap-2 text-sm text-slate-500 hover:text-red-300">
            <LogOut size={16} /> Sign out
          </button>
        </div>
      </div>
    </div>
  );
}

function PreferenceRow({ title, description, enabled, onClick }) {
  return (
    <div className="flex items-center justify-between gap-5">
      <div>
        <div className="text-sm font-bold">{title}</div>
        <div className="mt-1 text-xs text-slate-500">{description}</div>
      </div>
      <button
        onClick={onClick}
        className={`h-6 w-11 rounded-full p-1 transition ${
          enabled ? "bg-violet-500" : "bg-white/10"
        }`}
        aria-label={`Toggle ${title}`}
      >
        <div
          className={`h-4 w-4 rounded-full bg-white transition ${
            enabled ? "translate-x-5" : "translate-x-0"
          }`}
        />
      </button>
    </div>
  );
}
