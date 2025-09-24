import { Target, Trophy } from 'lucide-react';

/**
 * ProgressTracker component displays session progress and phase focus
 * @param {number} completedPercentage - Percentage of drills completed
 * @param {string} phaseFocus - Current training phase focus
 */
const ProgressTracker = ({ completedPercentage, phaseFocus }) => {
  return (
    <>
      {/* Progress Bar */}
      <div className="bg-purple-50 p-4 rounded-lg">
        <div className="flex items-center gap-2 mb-2">
          <Target className="text-purple-500" size={20} />
          <span className="font-medium text-gray-900">Session Progress</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="flex-1 bg-gray-200 rounded-full h-2">
            <div 
              className="bg-purple-500 h-2 rounded-full transition-all duration-300 ease-out"
              style={{ width: `${completedPercentage}%` }}
            ></div>
          </div>
          <span className="text-sm font-medium text-gray-700 min-w-[3rem] text-right">
            {completedPercentage}%
          </span>
        </div>
      </div>

      {/* Phase Focus */}
      <div className="bg-green-50 p-4 rounded-lg">
        <div className="flex items-center gap-2 mb-2">
          <Trophy className="text-green-500" size={20} />
          <span className="font-medium text-gray-900">Phase Focus</span>
        </div>
        <p className="text-sm text-gray-600">{phaseFocus}</p>
      </div>
    </>
  );
};

export default ProgressTracker;