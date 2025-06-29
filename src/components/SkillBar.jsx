export const SkillBar = ({ skill, percentage }) => {
  return (
    <div>
      <div className="flex subtext justify-between text-white font-medium mb-1">
        <span>{skill}</span>
        <span>{percentage}%</span>
      </div>
      <div className="w-full bg-gray-700 rounded-full h-2">
        <div
          className="bg-blue-400 h-2 rounded-full"
          style={{ width: `${percentage}%` }}
        ></div>
      </div>
    </div>
  );
};
