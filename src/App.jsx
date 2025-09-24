import { useState, useEffect } from 'react';
import { CheckCircle, Clock, Users, Play, RotateCcw } from 'lucide-react';

// Components
import DrillCard from './components/DrillCard';
import RoutineCard from './components/RoutineCard';
import WeekSelector from './components/WeekSelector';
import ProgressTracker from './components/ProgressTracker';
import AuthComponent from './components/AuthComponent';

// Data and utilities
import { trainingProgram, warmupRoutine, cooldownRoutine } from './data/trainingProgram';
import {
  saveCompletedDrills,
  loadCompletedDrills,
  saveCurrentWeek,
  loadCurrentWeek,
  saveCurrentSession,
  loadCurrentSession,
  saveUserInfo,
  loadUserInfo
} from './utils/localStorage';

function App() {
  // State management with localStorage persistence
  const [currentWeek, setCurrentWeek] = useState(() => loadCurrentWeek());
  const [currentSession, setCurrentSession] = useState(() => loadCurrentSession());
  const [completedDrills, setCompletedDrills] = useState(() => loadCompletedDrills());
  const [activeTab, setActiveTab] = useState('program');
  const [user, setUser] = useState(() => loadUserInfo());

  // Save state changes to localStorage
  useEffect(() => {
    saveCurrentWeek(currentWeek);
  }, [currentWeek]);

  useEffect(() => {
    saveCurrentSession(currentSession);
  }, [currentSession]);

  useEffect(() => {
    saveCompletedDrills(completedDrills);
  }, [completedDrills]);

  // Utility functions
  const getWeekKey = () => {
    if (currentWeek <= 2) return "1-2";
    if (currentWeek <= 4) return "3-4"; 
    if (currentWeek <= 6) return "5-6";
    return "7-8";
  };

  const getCurrentWeekData = () => trainingProgram[getWeekKey()];
  
  const getCurrentSession = () => {
    const weekData = getCurrentWeekData();
    return weekData.sessions.find(s => s.id === currentSession) || weekData.sessions[0];
  };

  const getCompletedPercentage = () => {
    const session = getCurrentSession();
    if (!session) return 0;
    const total = session.drills.length;
    const completed = session.drills.filter(drill => completedDrills.has(drill.id)).length;
    return Math.round((completed / total) * 100);
  };

  // Event handlers
  const handleWeekChange = (week) => {
    setCurrentWeek(week);
    // Reset to first session when changing weeks
    const weekData = trainingProgram[getWeekKey()];
    if (weekData && weekData.sessions.length > 0) {
      setCurrentSession(weekData.sessions[0].id);
    }
  };

  const toggleDrillComplete = (drillId) => {
    const newCompleted = new Set(completedDrills);
    if (newCompleted.has(drillId)) {
      newCompleted.delete(drillId);
    } else {
      newCompleted.add(drillId);
    }
    setCompletedDrills(newCompleted);
  };

  const resetSession = () => {
    setCompletedDrills(new Set());
  };

  const handleLogin = (userInfo) => {
    setUser(userInfo);
    saveUserInfo(userInfo);
  };

  const handleLogout = () => {
    setUser(null);
    saveUserInfo(null);
  };

  // Render warmup/cooldown view
  if (activeTab === 'warmup') {
    return (
      <div className="min-h-screen bg-gray-50 p-4">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="bg-white rounded-lg shadow-md p-6 mb-6">
            <div className="flex items-center justify-between mb-4 flex-wrap gap-4">
              <h1 className="text-2xl sm:text-3xl font-bold text-gray-800">
                Pickleball Training App
              </h1>
              <div className="flex items-center gap-2">
                <AuthComponent 
                  user={user} 
                  onLogin={handleLogin} 
                  onLogout={handleLogout} 
                />
                <button 
                  onClick={() => setActiveTab('program')}
                  className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
                >
                  Back to Program
                </button>
              </div>
            </div>
          </div>

          {/* Routines */}
          <div className="grid md:grid-cols-2 gap-6">
            <RoutineCard 
              routine={warmupRoutine} 
              title="Warm-up Routine (10 min)" 
              icon={<Play className="text-green-500" size={24} />} 
            />
            <RoutineCard 
              routine={cooldownRoutine} 
              title="Cool-down Routine (5 min)" 
              icon={<RotateCcw className="text-blue-500" size={24} />} 
            />
          </div>
        </div>
      </div>
    );
  }

  // Main program view
  const weekData = getCurrentWeekData();
  const sessionData = getCurrentSession();

  return (
    <div className="min-h-screen bg-gray-50 p-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-6">
          <div className="flex items-center justify-between mb-4 flex-wrap gap-4">
            <h1 className="text-2xl sm:text-3xl font-bold text-gray-800">
              Pickleball Training App
            </h1>
            <div className="flex items-center gap-2">
              <AuthComponent 
                user={user} 
                onLogin={handleLogin} 
                onLogout={handleLogout} 
              />
              <button 
                onClick={() => setActiveTab('warmup')}
                className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors whitespace-nowrap"
              >
                Warm-up/Cool-down
              </button>
            </div>
          </div>
          
          {/* Controls Grid */}
          <div className="grid md:grid-cols-3 gap-4 mb-4">
            <WeekSelector 
              currentWeek={currentWeek} 
              onWeekChange={handleWeekChange} 
            />
            <ProgressTracker 
              completedPercentage={getCompletedPercentage()} 
              phaseFocus={weekData.focus} 
            />
          </div>
        </div>

        {/* Week Overview */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-6">
          <h2 className="text-xl sm:text-2xl font-bold mb-2">
            Week {currentWeek}: {weekData.title}
          </h2>
          <p className="text-gray-600 mb-4">{weekData.focus}</p>
          
          {/* Session Selector */}
          <div className="flex gap-2 mb-4 overflow-x-auto">
            {weekData.sessions.map(session => (
              <button
                key={session.id}
                onClick={() => setCurrentSession(session.id)}
                className={`px-4 py-2 rounded-lg font-medium whitespace-nowrap transition-colors ${
                  currentSession === session.id
                    ? 'bg-blue-500 text-white'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                {session.name}
              </button>
            ))}
          </div>
        </div>

        {/* Current Session */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-6">
          <div className="flex items-center justify-between mb-4 flex-wrap gap-4">
            <div>
              <h3 className="text-xl font-bold text-gray-900">{sessionData.name}</h3>
              <div className="flex items-center gap-2 text-gray-600 flex-wrap">
                <Clock size={16} />
                <span>{sessionData.duration}</span>
                <Users size={16} className="ml-2" />
                <span>{sessionData.drills.length} drills</span>
              </div>
            </div>
            <button
              onClick={resetSession}
              className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 flex items-center gap-2 transition-colors"
            >
              <RotateCcw size={16} />
              Reset Session
            </button>
          </div>
        </div>

        {/* Drills */}
        <div className="space-y-4">
          {sessionData.drills.map(drill => (
            <DrillCard 
              key={drill.id} 
              drill={drill} 
              isCompleted={completedDrills.has(drill.id)}
              onToggleComplete={toggleDrillComplete}
            />
          ))}
        </div>

        {/* Completion Message */}
        {getCompletedPercentage() === 100 && (
          <div className="mt-6 bg-green-100 border border-green-300 rounded-lg p-4">
            <div className="flex items-center gap-2">
              <CheckCircle className="text-green-500" size={20} />
              <span className="font-medium text-green-800">
                Session Complete! Great work on finishing all drills.
                {user && ` Keep it up, ${user.name}!`}
              </span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
