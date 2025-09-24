// Local storage utilities for persisting user progress
const STORAGE_KEYS = {
  USER_PROGRESS: 'pickleball_user_progress',
  COMPLETED_DRILLS: 'pickleball_completed_drills',
  CURRENT_WEEK: 'pickleball_current_week',
  CURRENT_SESSION: 'pickleball_current_session',
  USER_INFO: 'pickleball_user_info'
};

/**
 * Save user progress to localStorage
 * @param {Object} progress - User progress data
 */
export const saveUserProgress = (progress) => {
  try {
    localStorage.setItem(STORAGE_KEYS.USER_PROGRESS, JSON.stringify(progress));
  } catch (error) {
    console.warn('Failed to save user progress:', error);
  }
};

/**
 * Load user progress from localStorage
 * @returns {Object} User progress data
 */
export const loadUserProgress = () => {
  try {
    const progress = localStorage.getItem(STORAGE_KEYS.USER_PROGRESS);
    return progress ? JSON.parse(progress) : null;
  } catch (error) {
    console.warn('Failed to load user progress:', error);
    return null;
  }
};

/**
 * Save completed drills to localStorage
 * @param {Set} completedDrills - Set of completed drill IDs
 */
export const saveCompletedDrills = (completedDrills) => {
  try {
    const drillsArray = Array.from(completedDrills);
    localStorage.setItem(STORAGE_KEYS.COMPLETED_DRILLS, JSON.stringify(drillsArray));
  } catch (error) {
    console.warn('Failed to save completed drills:', error);
  }
};

/**
 * Load completed drills from localStorage
 * @returns {Set} Set of completed drill IDs
 */
export const loadCompletedDrills = () => {
  try {
    const drills = localStorage.getItem(STORAGE_KEYS.COMPLETED_DRILLS);
    const drillsArray = drills ? JSON.parse(drills) : [];
    return new Set(drillsArray);
  } catch (error) {
    console.warn('Failed to load completed drills:', error);
    return new Set();
  }
};

/**
 * Save current week to localStorage
 * @param {number} week - Current week number
 */
export const saveCurrentWeek = (week) => {
  try {
    localStorage.setItem(STORAGE_KEYS.CURRENT_WEEK, week.toString());
  } catch (error) {
    console.warn('Failed to save current week:', error);
  }
};

/**
 * Load current week from localStorage
 * @returns {number} Current week number
 */
export const loadCurrentWeek = () => {
  try {
    const week = localStorage.getItem(STORAGE_KEYS.CURRENT_WEEK);
    return week ? parseInt(week, 10) : 1;
  } catch (error) {
    console.warn('Failed to load current week:', error);
    return 1;
  }
};

/**
 * Save current session to localStorage
 * @param {number} session - Current session ID
 */
export const saveCurrentSession = (session) => {
  try {
    localStorage.setItem(STORAGE_KEYS.CURRENT_SESSION, session.toString());
  } catch (error) {
    console.warn('Failed to save current session:', error);
  }
};

/**
 * Load current session from localStorage
 * @returns {number} Current session ID
 */
export const loadCurrentSession = () => {
  try {
    const session = localStorage.getItem(STORAGE_KEYS.CURRENT_SESSION);
    return session ? parseInt(session, 10) : 1;
  } catch (error) {
    console.warn('Failed to load current session:', error);
    return 1;
  }
};

/**
 * Save user info to localStorage
 * @param {Object} userInfo - User information
 */
export const saveUserInfo = (userInfo) => {
  try {
    localStorage.setItem(STORAGE_KEYS.USER_INFO, JSON.stringify(userInfo));
  } catch (error) {
    console.warn('Failed to save user info:', error);
  }
};

/**
 * Load user info from localStorage
 * @returns {Object|null} User information
 */
export const loadUserInfo = () => {
  try {
    const userInfo = localStorage.getItem(STORAGE_KEYS.USER_INFO);
    return userInfo ? JSON.parse(userInfo) : null;
  } catch (error) {
    console.warn('Failed to load user info:', error);
    return null;
  }
};

/**
 * Clear all stored data
 */
export const clearAllData = () => {
  try {
    Object.values(STORAGE_KEYS).forEach(key => {
      localStorage.removeItem(key);
    });
  } catch (error) {
    console.warn('Failed to clear data:', error);
  }
};