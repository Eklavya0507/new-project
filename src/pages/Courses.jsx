import { useMemo, useState } from "react";
import { Search, SlidersHorizontal } from "lucide-react";
import PageTitle from "../components/PageTitle";
import CourseCard from "../components/CourseCard";
import { categories, courses } from "../data/courses";

export default function Courses() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("All");

  const filteredCourses = useMemo(() => {
    return courses.filter((course) => {
      const matchesCategory = category === "All" || course.category === category;
      const searchText = `${course.title} ${course.description} ${course.category}`.toLowerCase();
      return matchesCategory && searchText.includes(query.toLowerCase());
    });
  }, [category, query]);

  return (
    <div>
      <PageTitle
        eyebrow="Explore"
        title="Learn something new"
        description="Choose a course and build practical AI skills at your own pace."
      />

      <div className="mb-6 flex flex-col gap-3 lg:flex-row">
        <div className="flex flex-1 items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-3 py-3">
          <Search size={18} className="text-slate-500" />
          <input
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Search courses..."
            className="w-full bg-transparent text-sm outline-none placeholder:text-slate-600"
          />
        </div>
        <button className="flex items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm font-bold">
          <SlidersHorizontal size={17} /> Filters
        </button>
      </div>

      <div className="mb-7 flex gap-2 overflow-x-auto pb-1 scrollbar-hidden">
        {categories.map((item) => (
          <button
            key={item}
            onClick={() => setCategory(item)}
            className={`whitespace-nowrap rounded-full px-4 py-2 text-xs font-bold transition ${
              category === item
                ? "bg-white text-slate-950"
                : "bg-white/5 text-slate-400 hover:bg-white/10 hover:text-white"
            }`}
          >
            {item}
          </button>
        ))}
      </div>

      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {filteredCourses.map((course) => (
          <CourseCard key={course.id} course={course} />
        ))}
      </div>

      {filteredCourses.length === 0 && (
        <div className="glass rounded-2xl p-10 text-center text-slate-400">
          No courses match your search.
        </div>
      )}
    </div>
  );
}
