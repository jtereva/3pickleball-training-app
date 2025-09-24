import { Calendar } from 'lucide-react';

/**
 * WeekSelector component for selecting the current training week
 * @param {number} currentWeek - Currently selected week
 * @param {Function} onWeekChange - Function to handle week changes
 */
const WeekSelector = ({ currentWeek, onWeekChange }) => {
  const weeks = [1, 2, 3, 4, 5, 6, 7, 8];

  return (
    <div className="bg-blue-50 p-4 rounded-lg">
      <div className="flex items-center gap-2 mb-2">
        <Calendar className="text-blue-500" size={20} />
        <span className="font-medium text-gray-900">Current Week</span>
      </div>
      <div className="flex gap-2 flex-wrap">
        {weeks.map(week => (
          <button
            key={week}
            onClick={() => onWeekChange(week)}
            className={`w-8 h-8 sm:w-10 sm:h-10 rounded-full text-sm font-medium transition-all duration-200 ${
              currentWeek === week 
                ? 'bg-blue-500 text-white shadow-md transform scale-105' 
                : 'bg-white text-gray-600 hover:bg-blue-100 hover:text-blue-700'
            }`}
            aria-label={`Select week ${week}`}
          >
            {week}
          </button>
        ))}
      </div>
    </div>
  );
};

export default WeekSelector;