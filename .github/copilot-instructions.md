# Copilot Instructions for 3pickleball-training-app

## Project Overview
This is a React-based pickleball training application that provides structured training programs, drills, and routines for pickleball players. The app is built as a single-page application using vanilla HTML, React (via CDN), and Tailwind CSS.

## Architecture & Technology Stack
- **Frontend**: React 18 (loaded via CDN)
- **Styling**: Tailwind CSS (via CDN)
- **Icons**: Lucide React icons
- **Build**: No build process - runs directly in the browser via Babel standalone
- **Structure**: Single `index.html` file with embedded React components

## Code Organization

### Main Components
- `PickleballTrainingApp`: Root component managing application state
- `DrillCard`: Individual drill display component
- `RoutineCard`: Warmup/cooldown routine display component
- `WeekSelector`: Training week navigation component

### Key State Management
- `currentWeek`: Current training week (1-12)
- `currentSession`: Current session within week (1-6)
- `completedDrills`: Set of completed drill IDs
- `activeTab`: Current view ('program' or 'routines')

### Data Structure
The `trainingProgram` object contains structured training data:
- Organized by week ranges (e.g., "1-2", "3-4", etc.)
- Each week has multiple sessions with specific drills
- Drills include: id, name, duration, description, setup, focus

## Development Guidelines

### Code Style
- Use functional components with React Hooks
- Follow camelCase for JavaScript variables and functions
- Use descriptive component and variable names
- Maintain consistent indentation (2 spaces)
- Keep components focused and single-purpose

### UI/UX Patterns
- Use Tailwind CSS classes for all styling
- Maintain consistent color scheme:
  - Primary: Blue (bg-blue-500, text-blue-600)
  - Success: Green (bg-green-500, text-green-600)
  - Warning: Orange/Yellow tones
  - Background: Gray scales (bg-gray-50, bg-gray-100)
- Responsive design with `md:` breakpoints
- Card-based layout with shadows and rounded corners
- Consistent button styling with hover effects

### Component Guidelines
- Props should be destructured in component signatures
- Use React hooks appropriately (useState, useEffect if needed)
- Maintain consistent component structure: state, handlers, render
- Use Lucide icons for visual elements
- Implement proper accessibility with semantic HTML

### Data Management
- Training program data should remain immutable during sessions
- Use Set data structure for tracking completed items
- Maintain drill ID consistency across sessions
- Preserve data structure hierarchy: weeks → sessions → drills

### Feature Development
When adding new features:
1. Follow the existing component pattern
2. Maintain consistency with current UI design
3. Ensure responsive behavior on mobile devices
4. Add proper loading states if needed
5. Consider state management implications
6. Test across different drill types and scenarios

### Training Program Structure
- Each drill must have: id, name, duration, description, setup, focus
- Session durations should be realistic (60-90 minutes typical)
- Drill durations should sum appropriately within sessions
- Maintain logical progression across weeks
- Include variety in drill types (technical, tactical, competitive)

### Performance Considerations
- Components should avoid unnecessary re-renders
- Use React.memo() for expensive components if needed
- Keep state updates minimal and focused
- Avoid deeply nested state objects

### Testing Approach
- Test functionality by opening index.html in browser
- Verify responsive behavior at different screen sizes
- Test drill completion tracking
- Ensure smooth navigation between weeks/sessions
- Validate training program data integrity

## Common Patterns

### Adding New Drills
```javascript
{
  id: "unique_id",
  name: "Drill Name",
  duration: "X min",
  description: "Clear description of the drill",
  setup: "Court setup requirements",
  focus: "Key focus points"
}
```

### State Updates
```javascript
// For drill completion
setCompletedDrills(prev => new Set([...prev, drillId]));

// For navigation
setCurrentWeek(weekNumber);
setCurrentSession(sessionNumber);
```

### Component Structure
```javascript
const ComponentName = ({ prop1, prop2 }) => {
  // State declarations
  // Event handlers
  // Render logic with Tailwind classes
};
```

## Maintenance Notes
- External dependencies are loaded via CDN - ensure versions remain compatible
- Single file architecture means changes affect entire application
- No build process simplifies deployment but requires careful testing
- Consider component extraction if file becomes too large (>1000 lines)

## Accessibility
- Use semantic HTML elements
- Provide proper button labels and roles
- Ensure keyboard navigation works properly
- Maintain good color contrast ratios
- Add ARIA labels where needed for screen readers