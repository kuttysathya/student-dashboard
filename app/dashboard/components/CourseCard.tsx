type CourseCardProps = {
  title: string;
  progress: number;
  icon?: React.ReactNode;
};

export default function CourseCard({
  title,
  progress,
  icon,
}: CourseCardProps) {
  return (
    <article className="bg-zinc-900 border border-zinc-800 rounded-2xl p-4 hover:border-zinc-700 transition-colors">
      
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="text-zinc-400">
          {icon || "📘"}
        </div>

        <span className="text-xs text-zinc-500">
          {progress}%
        </span>
      </div>

      {/* Title */}
      <h3 className="mt-3 text-white font-medium">
        {title}
      </h3>

      {/* Progress bar background */}
      <div className="mt-4 w-full h-2 bg-zinc-800 rounded-full overflow-hidden">
        <div
          className="h-full bg-emerald-500 rounded-full transition-all duration-700"
          style={{ width: `${progress}%` }}
        />
      </div>
    </article>
  );
}