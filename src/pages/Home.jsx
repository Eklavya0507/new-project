import { ArrowRight, Bot, CheckCircle2, Sparkles, Target, Zap } from "lucide-react";
import { Link } from "react-router-dom";
import CourseCard from "../components/CourseCard";
import { courses } from "../data/courses";

export default function Home() {
  return (
    <>
      <section className="overflow-hidden bg-slate-950 text-white">
        <div className="container-page grid min-h-[600px] items-center gap-12 py-20 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-blue-200">
              <Sparkles size={16} />
              AI-powered learning for the real world
            </div>

            <h1 className="max-w-3xl text-5xl font-black tracking-tight sm:text-6xl">
              Learn skills that move your career forward.
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
              Learn with structured courses, practical projects, and an AI tutor
              that adapts explanations to the way you learn.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link to="/courses" className="btn-primary !bg-blue-500 hover:!bg-blue-400">
                Explore courses
                <ArrowRight size={18} />
              </Link>
              <Link
                to="/tutor"
                className="btn-secondary !border-white/15 !bg-white/5 !text-white hover:!bg-white/10"
              >
                <Bot size={18} />
                Ask AI Tutor
              </Link>
            </div>

            <div className="mt-10 flex flex-wrap gap-6 text-sm text-slate-300">
              <span className="flex items-center gap-2">
                <CheckCircle2 className="text-emerald-400" size={17} />
                Project-based
              </span>
              <span className="flex items-center gap-2">
                <CheckCircle2 className="text-emerald-400" size={17} />
                AI assistance
              </span>
              <span className="flex items-center gap-2">
                <CheckCircle2 className="text-emerald-400" size={17} />
                Learn at your pace
              </span>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-8 rounded-full bg-blue-500/20 blur-3xl" />
            <div className="relative rounded-3xl border border-white/10 bg-white/10 p-5 shadow-2xl backdrop-blur">
              <div className="rounded-2xl bg-white p-5 text-slate-900">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-semibold text-slate-500">Your learning plan</p>
                    <h2 className="mt-1 text-xl font-bold">Frontend Developer</h2>
                  </div>
                  <Target className="text-blue-600" />
                </div>
                <div className="mt-7 space-y-5">
                  {[
                    ["React fundamentals", 86],
                    ["JavaScript patterns", 68],
                    ["UI engineering", 42]
                  ].map(([label, value]) => (
                    <div key={label}>
                      <div className="mb-2 flex justify-between text-sm">
                        <span className="font-semibold">{label}</span>
                        <span className="text-slate-500">{value}%</span>
                      </div>
                      <div className="h-2 overflow-hidden rounded-full bg-slate-100">
                        <div
                          className="h-full rounded-full bg-blue-600"
                          style={{ width: `${value}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
                <div className="mt-7 flex items-center gap-3 rounded-xl bg-blue-50 p-4">
                  <Zap className="text-blue-600" size={20} />
                  <p className="text-sm font-semibold text-blue-900">
                    Keep your 7-day learning streak alive.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="container-page py-20">
        <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
          <div>
            <p className="font-semibold text-blue-600">Start learning</p>
            <h2 className="section-title mt-2">Popular courses</h2>
            <p className="mt-3 max-w-2xl text-slate-500">
              Build useful skills through focused lessons and hands-on practice.
            </p>
          </div>
          <Link to="/courses" className="btn-secondary">
            See all courses
            <ArrowRight size={17} />
          </Link>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {courses.map((course) => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>
      </section>
    </>
  );
}
