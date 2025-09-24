import { CheckCircle, Clock } from 'lucide-react';

/**
 * DrillCard component displays individual drill information with completion toggle
 * @param {Object} drill - Drill data object
 * @param {boolean} isCompleted - Whether the drill is completed
 * @param {Function} onToggleComplete - Function to handle completion toggle
 */
const DrillCard = ({ drill, isCompleted, onToggleComplete }) => {
  return (
    <div className={`bg-white rounded-lg shadow-md p-4 border-l-4 transition-all duration-200 ${
      isCompleted ? 'border-green-500 bg-green-50' : 'border-blue-500'
    }`}>
      <div className="flex items-start justify-between">
        <div className="flex-1">
          <div className="flex items-center gap-2 mb-2 flex-wrap">
            <h4 className="font-semibold text-lg text-gray-900">{drill.name}</h4>
            <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full flex items-center gap-1 whitespace-nowrap">
              <Clock size={12} />
              {drill.duration}
            </span>
          </div>
          <p className="text-gray-600 mb-2 text-sm sm:text-base">{drill.description}</p>
          <div className="text-sm text-gray-500 space-y-1">
            <p><span className="font-medium">Setup:</span> {drill.setup}</p>
            <p><span className="font-medium">Focus:</span> {drill.focus}</p>
          </div>
        </div>
        <button
          onClick={() => onToggleComplete(drill.id)}
          className={`ml-4 p-2 rounded-full transition-all duration-200 ${
            isCompleted 
              ? 'bg-green-500 text-white hover:bg-green-600 shadow-md' 
              : 'bg-gray-200 text-gray-600 hover:bg-gray-300'
          }`}
          aria-label={`Mark ${drill.name} as ${isCompleted ? 'incomplete' : 'complete'}`}
        >
          <CheckCircle size={20} />
        </button>
      </div>
    </div>
  );
};

export default DrillCard;