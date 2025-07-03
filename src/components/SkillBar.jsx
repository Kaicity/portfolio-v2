import { motion } from 'framer-motion';

export const SkillBar = ({ skill, percentage }) => {
  return (
    <div>
      <div className="flex subtext justify-between text-white font-medium mb-1">
        <span>{skill}</span>
        <span>{percentage}%</span>
      </div>
      <div className="w-full bg-gray-700 rounded-full h-2 overflow-hidden">
        <motion.div
          className="bg-blue-400 h-2 rounded-full"
          initial={{ width: 0 }}
          animate={{ width: `${percentage}%` }}
          transition={{ duration: 1.5, ease: 'easeOut' }}
        />
      </div>
    </div>
  );
};
