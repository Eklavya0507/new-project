import { Bell, Camera, CheckCircle2, Mail, Shield, UserCircle } from "lucide-react";

export default function Profile() {
  return (
    <section className="container-page py-12 sm:py-16">
      <div className="max-w-3xl">
        <p className="font-semibold text-blue-600">Account</p>
        <h1 className="mt-2 text-4xl font-black tracking-tight">Your profile</h1>
        <p className="mt-3 text-slate-500">
          Manage your learner profile and preferences.
        </p>
      </div>

      <div className="mt-10 grid gap-8 lg:grid-cols-[0.7fr_1.3fr]">
        <div className="card p-7 text-center">
          <div className="relative mx-auto w-fit">
            <div className="grid h-28 w-28 place-items-center rounded-full bg-blue-100 text-blue-700">
              <UserCircle size={72} strokeWidth={1.4} />
            </div>
            <button className="absolute bottom-0 right-0 grid h-10 w-10 place-items-center rounded-full bg-blue-600 text-white shadow-lg">
              <Camera size={17} />
            </button>
          </div>

          <h2 className="mt-5 text-xl font-bold">Alex Morgan</h2>
          <p className="mt-1 text-sm text-slate-500">Frontend Developer</p>

          <div className="mt-6 flex items-center justify-center gap-2 text-sm font-semibold text-emerald-600">
            <CheckCircle2 size={17} />
            Profile complete
          </div>
        </div>

        <div className="card p-6 sm:p-8">
          <h2 className="text-xl font-bold">Personal information</h2>

          <div className="mt-6 grid gap-5 sm:grid-cols-2">
            <Field label="Full name" value="Alex Morgan" />
            <Field label="Email" value="alex@example.com" icon={Mail} />
            <Field label="Learning goal" value="Frontend development" />
            <Field label="Experience" value="Intermediate" />
          </div>

          <button className="btn-primary mt-7">Save changes</button>

          <div className="mt-10 border-t border-slate-100 pt-7">
            <h2 className="text-xl font-bold">Preferences</h2>
            <div className="mt-5 space-y-3">
              <Preference
                icon={Bell}
                title="Learning reminders"
                description="Get reminders when it is time to study."
              />
              <Preference
                icon={Shield}
                title="Personalized learning"
                description="Allow NeuraLearn to adapt recommendations to your progress."
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Field({ label, value, icon: Icon }) {
  return (
    <label>
      <span className="mb-2 block text-sm font-semibold text-slate-700">{label}</span>
      <div className="relative">
        {Icon && (
          <Icon
            size={17}
            className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
          />
        )}
        <input
          defaultValue={value}
          className={`w-full rounded-xl border border-slate-200 py-3 outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-100 ${
            Icon ? "pl-10 pr-3" : "px-3"
          }`}
        />
      </div>
    </label>
  );
}

function Preference({ icon: Icon, title, description }) {
  return (
    <div className="flex items-center justify-between gap-4 rounded-xl border border-slate-200 p-4">
      <div className="flex gap-3">
        <div className="grid h-10 w-10 shrink-0 place-items-center rounded-lg bg-slate-100 text-slate-600">
          <Icon size={18} />
        </div>
        <div>
          <h3 className="font-semibold text-slate-900">{title}</h3>
          <p className="mt-1 text-sm text-slate-500">{description}</p>
        </div>
      </div>
      <div className="h-6 w-11 rounded-full bg-blue-600 p-1">
        <div className="ml-auto h-4 w-4 rounded-full bg-white" />
      </div>
    </div>
  );
}
