<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Pickleball Training App</title>
    <script src="https://unpkg.com/react@18/umd/react.development.js"></script>
    <script src="https://unpkg.com/react-dom@18/umd/react-dom.development.js"></script>
    <script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>
    <script src="https://unpkg.com/lucide@latest/dist/umd/lucide.js"></script>
    <script src="https://cdn.tailwindcss.com"></script>
    <style>
        body { margin: 0; padding: 0; }
    </style>
</head>
<body>
    <div id="root"></div>
    
    <script type="text/babel">
        const { useState } = React;
        const { CheckCircle, Clock, Target, Users, Trophy, Calendar, Play, RotateCcw } = lucide;

        const PickleballTrainingApp = () => {
          const [currentWeek, setCurrentWeek] = useState(1);
          const [currentSession, setCurrentSession] = useState(1);
          const [completedDrills, setCompletedDrills] = useState(new Set());
          const [activeTab, setActiveTab] = useState('program');

          const trainingProgram = {
            "1-2": {
              title: "Foundation & Consistency",
              focus: "Building solid fundamentals and consistent execution",
              sessions: [
                {
                  id: 1,
                  name: "Technical Foundation",
                  duration: "90 minutes",
                  drills: [
                    {
                      id: "t1",
                      name: "Third Shot Drop Mastery",
                      duration: "10 min",
                      description: "Hit 20 consecutive third shot drops landing in kitchen",
                      setup: "Partner at net, you at baseline",
                      focus: "Arc trajectory, soft landing, consistent depth"
                    },
                    {
                      id: "t2",
                      name: "Dink Rally Excellence", 
                      duration: "10 min",
                      description: "Sustain 50+ shot rallies focusing on placement",
                      setup: "Both players at kitchen line",
                      focus: "Corners, opponent's feet, short angles"
                    },
                    {
                      id: "t3",
                      name: "Volley Precision",
                      duration: "10 min", 
                      description: "100 volleys without errors, emphasizing placement",
                      setup: "Both at net, rapid-fire volleys",
                      focus: "Compact swing, firm wrist, strategic placement"
                    },
                    {
                      id: "t4",
                      name: "Serve & Return Consistency",
                      duration: "5 min",
                      description: "20 deep serves to each box, 20 deep returns",
                      setup: "Standard serving positions",
                      focus: "90% success rate intermediate, 95% advanced"
                    }
                  ]
                },
                {
                  id: 2,
                  name: "Tactical Development",
                  duration: "90 minutes", 
                  drills: [
                    {
                      id: "ta1",
                      name: "Kitchen Line Battles",
                      duration: "15 min",
                      description: "Cross-court dink rally until attackable ball created",
                      setup: "Both players at kitchen line",
                      focus: "Patience, ball placement, opportunity recognition"
                    },
                    {
                      id: "ta2", 
                      name: "Transition Zone Training",
                      duration: "15 min",
                      description: "Switch positions every 5 shots between baseline/kitchen",
                      setup: "One at baseline, one at kitchen",
                      focus: "Forward/backward movement with good position"
                    }
                  ]
                }
              ]
            },
            "3-4": {
              title: "Power & Placement",
              focus: "Developing offensive capabilities and strategic shot placement",
              sessions: [
                {
                  id: 3,
                  name: "Power Shot Development", 
                  duration: "90 minutes",
                  drills: [
                    {
                      id: "p1",
                      name: "Overhead Smash Training",
                      duration: "12 min",
                      description: "25 consecutive smashes with 80% court success",
                      setup: "Partner feeds high balls",
                      focus: "Timing, follow-through, recovery position"
                    },
                    {
                      id: "p2",
                      name: "Spin Shot Mastery",
                      duration: "10 min", 
                      description: "Topspin drives, slice drops, side spin shots",
                      setup: "Various court positions",
                      focus: "Spin technique and ball control"
                    },
                    {
                      id: "p3",
                      name: "Advanced Dinking Patterns",
                      duration: "13 min",
                      description: "Direction changes, speed/height variations",
                      setup: "Kitchen line positioning",
                      focus: "Pattern disruption and control"
                    }
                  ]
                },
                {
                  id: 4,
                  name: "Formation & Strategy",
                  duration: "90 minutes",
                  drills: [
                    {
                      id: "f1", 
                      name: "Stack Formation Practice",
                      duration: "10 min",
                      description: "Practice right/left stack with transitions",
                      setup: "Doubles play setup",
                      focus: "Communication and court coverage"
                    },
                    {
                      id: "f2",
                      name: "Poaching Drill", 
                      duration: "10 min",
                      description: "Practice intercepting opponent shots",
                      setup: "Doubles with poaching opportunities",
                      focus: "Reading shots, timing intercepts"
                    },
                    {
                      id: "f3",
                      name: "Erne Attack Training",
                      duration: "10 min", 
                      description: "Practice erne footwork and timing",
                      setup: "Create erne opportunities",
                      focus: "Proper technique and safety"
                    }
                  ]
                }
              ]
            },
            "5-6": {
              title: "Advanced Strategy & Match Tactics",
              focus: "Mastering game situations and advanced shot selection",
              sessions: [
                {
                  id: 5,
                  name: "Advanced Shots",
                  duration: "90 minutes",
                  drills: [
                    {
                      id: "a1",
                      name: "Reset Shot Excellence", 
                      duration: "10 min",
                      description: "Reset power shots to kitchen with 15/20 success",
                      setup: "Partner hits drives",
                      focus: "Soft hands, ball control under pressure"
                    },
                    {
                      id: "a2",
                      name: "Lob & Overhead Combination",
                      duration: "12 min",
                      description: "Defensive/offensive lobs with overhead responses", 
                      setup: "Full court positioning",
                      focus: "Court positioning and shot selection"
                    },
                    {
                      id: "a3",
                      name: "Around-the-Post Shots",
                      duration: "8 min",
                      description: "Practice ATP opportunities and technique",
                      setup: "Wide angle shot creation",
                      focus: "Unique swing path and accuracy"
                    }
                  ]
                },
                {
                  id: 6,
                  name: "Pattern & Situational Play",
                  duration: "90 minutes", 
                  drills: [
                    {
                      id: "ps1",
                      name: "Pattern Recognition",
                      duration: "15 min",
                      description: "Practice common sequences and pattern breaking",
                      setup: "Various game scenarios",
                      focus: "Rhythm control and adaptation"
                    },
                    {
                      id: "ps2", 
                      name: "Situational Play",
                      duration: "15 min",
                      description: "Practice pressure scenarios and match situations",
                      setup: "Simulated match conditions",
                      focus: "Mental composure under pressure"
                    }
                  ]
                }
              ]
            },
            "7-8": {
              title: "Competition Preparation", 
              focus: "Tournament readiness and peak performance",
              sessions: [
                {
                  id: 7,
                  name: "Pressure Training",
                  duration: "90 minutes",
                  drills: [
                    {
                      id: "pr1",
                      name: "Consistency Under Pressure",
                      duration: "15 min", 
                      description: "Maintain technique while fatigued and distracted",
                      setup: "Timed challenges with distractions",
                      focus: "Mental resilience and focus"
                    },
                    {
                      id: "pr2",
                      name: "Specialty Shot Refinement",
                      duration: "15 min",
                      description: "Perfect strongest shots, improve weaknesses",
                      setup: "Personalized drill selection", 
                      focus: "Individual skill optimization"
                    }
                  ]
                },
                {
                  id: 8,
                  name: "Match Simulation",
                  duration: "90 minutes",
                  drills: [
                    {
                      id: "ms1",
                      name: "Tournament Format Games", 
                      duration: "20 min",
                      description: "Regulation 11-point games with proper rotation",
                      setup: "Tournament conditions",
                      focus: "Competition preparation"
                    },
                    {
                      id: "ms2",
                      name: "Handicap Matches",
                      duration: "15 min",
                      description: "Practice comebacks and pressure points",
                      setup: "Varied scoring scenarios", 
                      focus: "Mental toughness and adaptation"
                    }
                  ]
                }
              ]
            }
          };

          const warmupRoutine = [
            { name: "Dynamic Stretching", duration: "3 min", activities: ["Arm circles", "Leg swings", "Torso twists"] },
            { name: "Paddle Skills", duration: "4 min", activities: ["Wall practice: 50 hits", "Ball bouncing", "Shadow swings"] },
            { name: "Court Movement", duration: "3 min", activities: ["Lateral shuffles", "Forward/backward", "Split-step practice"] }
          ];

          const cooldownRoutine = [
            { name: "Static Stretching", duration: "3 min", activities: ["Shoulder stretches", "Leg stretches", "Back stretches"] },
            { name: "Mental Review", duration: "2 min", activities: ["Performance reflection", "Next session planning"] }
          ];

          const toggleDrillComplete = (drillId) => {
            const newCompleted = new Set(completedDrills);
            if (newCompleted.has(drillId)) {
              newCompleted.delete(drillId);
            } else {
              newCompleted.add(drillId);
            }
            setCompletedDrills(newCompleted);
          };

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

          const DrillCard = ({ drill }) => (
            <div className={`bg-white rounded-lg shadow-md p-4 border-l-4 ${completedDrills.has(drill.id) ? 'border-green-500 bg-green-50' : 'border-blue-500'}`}>
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <h4 className="font-semibold text-lg">{drill.name}</h4>
                    <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full flex items-center gap-1">
                      <Clock size={12} />
                      {drill.duration}
                    </span>
                  </div>
                  <p className="text-gray-600 mb-2">{drill.description}</p>
                  <div className="text-sm text-gray-500 space-y-1">
                    <p><span className="font-medium">Setup:</span> {drill.setup}</p>
                    <p><span className="font-medium">Focus:</span> {drill.focus}</p>
                  </div>
                </div>
                <button
                  onClick={() => toggleDrillComplete(drill.id)}
                  className={`ml-4 p-2 rounded-full ${completedDrills.has(drill.id) 
                    ? 'bg-green-500 text-white' 
                    : 'bg-gray-200 text-gray-600 hover:bg-gray-300'}`}
                >
                  <CheckCircle size={20} />
                </button>
              </div>
            </div>
          );

          const RoutineCard = ({ routine, title, icon }) => (
            <div className="bg-white rounded-lg shadow-md p-4">
              <div className="flex items-center gap-2 mb-4">
                {icon}
                <h3 className="text-xl font-semibold">{title}</h3>
              </div>
              <div className="space-y-3">
                {routine.map((item, index) => (
                  <div key={index} className="border-l-4 border-blue-300 pl-3">
                    <div className="flex items-center justify-between mb-1">
                      <h4 className="font-medium">{item.name}</h4>
                      <span className="text-sm text-gray-500">{item.duration}</span>
                    </div>
                    <ul className="text-sm text-gray-600 space-y-1">
                      {item.activities.map((activity, idx) => (
                        <li key={idx} className="flex items-center gap-2">
                          <div className="w-1.5 h-1.5 bg-blue-400 rounded-full"></div>
                          {activity}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          );

          if (activeTab === 'warmup') {
            return (
              <div className="min-h-screen bg-gray-50 p-4">
                <div className="max-w-4xl mx-auto">
                  <div className="bg-white rounded-lg shadow-md p-6 mb-6">
                    <div className="flex items-center justify-between mb-4">
                      <h1 className="text-3xl font-bold text-gray-800">Pickleball Training App</h1>
                      <div className="flex gap-2">
                        <button 
                          onClick={() => setActiveTab('program')}
                          className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
                        >
                          Back to Program
                        </button>
                      </div>
                    </div>
                  </div>

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

          const weekData = getCurrentWeekData();
          const sessionData = getCurrentSession();

          return (
            <div className="min-h-screen bg-gray-50 p-4">
              <div className="max-w-6xl mx-auto">
                {/* Header */}
                <div className="bg-white rounded-lg shadow-md p-6 mb-6">
                  <div className="flex items-center justify-between mb-4">
                    <h1 className="text-3xl font-bold text-gray-800">Pickleball Training App</h1>
                    <div className="flex gap-2">
                      <button 
                        onClick={() => setActiveTab('warmup')}
                        className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600"
                      >
                        Warm-up/Cool-down
                      </button>
                    </div>
                  </div>
                  
                  <div className="grid md:grid-cols-3 gap-4 mb-4">
                    <div className="bg-blue-50 p-4 rounded-lg">
                      <div className="flex items-center gap-2 mb-2">
                        <Calendar className="text-blue-500" size={20} />
                        <span className="font-medium">Current Week</span>
                      </div>
                      <div className="flex gap-2">
                        {[1, 2, 3, 4, 5, 6, 7, 8].map(week => (
                          <button
                            key={week}
                            onClick={() => setCurrentWeek(week)}
                            className={`w-8 h-8 rounded-full text-sm font-medium ${
                              currentWeek === week 
                                ? 'bg-blue-500 text-white' 
                                : 'bg-white text-gray-600 hover:bg-blue-100'
                            }`}
                          >
                            {week}
                          </button>
                        ))}
                      </div>
                    </div>
                    
                    <div className="bg-purple-50 p-4 rounded-lg">
                      <div className="flex items-center gap-2 mb-2">
                        <Target className="text-purple-500" size={20} />
                        <span className="font-medium">Session Progress</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="flex-1 bg-gray-200 rounded-full h-2">
                          <div 
                            className="bg-purple-500 h-2 rounded-full transition-all duration-300"
                            style={{ width: `${getCompletedPercentage()}%` }}
                          ></div>
                        </div>
                        <span className="text-sm font-medium">{getCompletedPercentage()}%</span>
                      </div>
                    </div>
                    
                    <div className="bg-green-50 p-4 rounded-lg">
                      <div className="flex items-center gap-2 mb-2">
                        <Trophy className="text-green-500" size={20} />
                        <span className="font-medium">Phase Focus</span>
                      </div>
                      <p className="text-sm text-gray-600">{weekData.focus}</p>
                    </div>
                  </div>
                </div>

                {/* Week Overview */}
                <div className="bg-white rounded-lg shadow-md p-6 mb-6">
                  <h2 className="text-2xl font-bold mb-2">Week {currentWeek}: {weekData.title}</h2>
                  <p className="text-gray-600 mb-4">{weekData.focus}</p>
                  
                  <div className="flex gap-2 mb-4">
                    {weekData.sessions.map(session => (
                      <button
                        key={session.id}
                        onClick={() => setCurrentSession(session.id)}
                        className={`px-4 py-2 rounded-lg font-medium ${
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
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-bold">{sessionData.name}</h3>
                      <div className="flex items-center gap-2 text-gray-600">
                        <Clock size={16} />
                        <span>{sessionData.duration}</span>
                        <Users size={16} className="ml-2" />
                        <span>{sessionData.drills.length} drills</span>
                      </div>
                    </div>
                    <button
                      onClick={() => setCompletedDrills(new Set())}
                      className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 flex items-center gap-2"
                    >
                      <RotateCcw size={16} />
                      Reset Session
                    </button>
                  </div>
                </div>

                {/* Drills */}
                <div className="space-y-4">
                  {sessionData.drills.map(drill => (
                    <DrillCard key={drill.id} drill={drill} />
                  ))}
                </div>

                {/* Completion Message */}
                {getCompletedPercentage() === 100 && (
                  <div className="mt-6 bg-green-100 border border-green-300 rounded-lg p-4">
                    <div className="flex items-center gap-2">
                      <CheckCircle className="text-green-500" size={20} />
                      <span className="font-medium text-green-800">
                        Session Complete! Great work on finishing all drills.
                      </span>
                    </div>
                  </div>
                )}
              </div>
            </div>
          );
        };

        ReactDOM.render(<PickleballTrainingApp />, document.getElementById('root'));
    </script>
</body>
</html>
