/**
 * RoutineCard component displays warmup/cooldown routine information
 * @param {Array} routine - Array of routine activities
 * @param {string} title - Title of the routine
 * @param {ReactNode} icon - Icon to display for the routine
 */
const RoutineCard = ({ routine, title, icon }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-4 lg:p-6">
      <div className="flex items-center gap-2 mb-4">
        {icon}
        <h3 className="text-xl font-semibold text-gray-900">{title}</h3>
      </div>
      <div className="space-y-3">
        {routine.map((item, index) => (
          <div key={index} className="border-l-4 border-blue-300 pl-3">
            <div className="flex items-center justify-between mb-1 flex-wrap gap-2">
              <h4 className="font-medium text-gray-900">{item.name}</h4>
              <span className="text-sm text-gray-500 whitespace-nowrap">{item.duration}</span>
            </div>
            <ul className="text-sm text-gray-600 space-y-1">
              {item.activities.map((activity, idx) => (
                <li key={idx} className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-blue-400 rounded-full flex-shrink-0"></div>
                  {activity}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RoutineCard;