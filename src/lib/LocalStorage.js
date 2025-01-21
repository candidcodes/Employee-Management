export const employee = [
  {
    "id": "emp001",
    "email": "john.doe@example.com",
    "password": "password123",
    "name": "John Doe",
    "tasks": [
      {
        "taskTitle": "Prepare Presentation",
        "taskDescription": "Create detailed slides for the upcoming quarterly review meeting, highlighting key performance indicators, upcoming goals, and challenges faced during the last quarter.",
        "taskDate": "2024-12-18",
        "active": false,
        "newTask": true,
        "completed": false,
        "failed": false,
        "urgency": "high"
      },
      {
        "taskTitle": "Team Meeting",
        "taskDescription": "Attend the weekly sync-up with the project team to discuss the progress of ongoing tasks, address blockers, and plan for the next sprint.",
        "taskDate": "2024-12-20",
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false,
        "urgency": "medium"
      },
      {
        "taskTitle": "Debug API Issue",
        "taskDescription": "Investigate and fix the 500 error occurring on the production API, which has been affecting user interactions. The goal is to ensure that all endpoints return the correct responses without crashing the system.",
        "taskDate": "2024-12-21",
        "active": false,
        "newTask": true,
        "completed": false,
        "failed": false,
        "urgency": "high"
      },
      {
        "taskTitle": "Code Refactoring",
        "taskDescription": "Refactor legacy code in the authentication module to improve readability and performance, and to implement modern JavaScript features.",
        "taskDate": "2024-12-22",
        "active": false,
        "newTask": true,
        "completed": false,
        "failed": false,
        "urgency": "medium"
      }
    ]
  },
  {
    "id": "emp002",
    "email": "jane.smith@example.com",
    "password": "password123",
    "name": "Jane Smith",
    "tasks": [
      {
        "taskTitle": "Update Documentation",
        "taskDescription": "Revise and update the user manual to reflect the changes made in the new software update, including new features, bug fixes, and interface improvements.",
        "taskDate": "2024-12-17",
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false,
        "urgency": "medium"
      },
      {
        "taskTitle": "Data Migration",
        "taskDescription": "Migrate all relevant data from the old database system to the new, more efficient database system. Ensure no data is lost in the process and test the migration thoroughly before completion.",
        "taskDate": "2024-12-19",
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false,
        "urgency": "high"
      },
      {
        "taskTitle": "Client Feedback",
        "taskDescription": "Compile feedback from recent client surveys and summarize the findings into a comprehensive report that highlights key trends, concerns, and suggestions for future improvements.",
        "taskDate": "2024-12-20",
        "active": false,
        "newTask": false,
        "completed": false,
        "failed": true,
        "urgency": "low"
      },
      {
        "taskTitle": "Prepare Annual Report",
        "taskDescription": "Prepare the annual performance report, including financial overviews, key business achievements, and recommendations for the next year. This will be shared with top management for decision-making.",
        "taskDate": "2024-12-22",
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false,
        "urgency": "high"
      }
    ]
  },
  {
    "id": "emp003",
    "email": "mike.johnson@example.com",
    "password": "password123",
    "name": "Mike Johnson",
    "tasks": [
      {
        "taskTitle": "Server Maintenance",
        "taskDescription": "Ensure all servers are up-to-date and running smoothly by applying necessary patches, monitoring server performance, and checking for potential security vulnerabilities.",
        "taskDate": "2024-12-15",
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false,
        "urgency": "medium"
      },
      {
        "taskTitle": "Bug Fixing",
        "taskDescription": "Resolve the reported bugs in the new feature module, which includes both minor UI glitches and critical backend errors that prevent users from accessing certain functionalities.",
        "taskDate": "2024-12-18",
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false,
        "urgency": "high"
      },
      {
        "taskTitle": "Design Review",
        "taskDescription": "Participate in the design review session for the new user interface (UI), providing feedback on the layout, usability, and functionality to ensure the design meets user needs and business goals.",
        "taskDate": "2024-12-20",
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false,
        "urgency": "medium"
      },
      {
        "taskTitle": "Code Optimization",
        "taskDescription": "Optimize database queries to improve performance, reduce load times, and enhance the user experience. Focus on queries that are executed frequently and impact page load times.",
        "taskDate": "2024-12-21",
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false,
        "urgency": "medium"
      }
    ]
  },
  {
    "id": "emp004",
    "email": "emma.brown@example.com",
    "password": "password123",
    "name": "Emma Brown",
    "tasks": [
      {
        "taskTitle": "Plan Team Outing",
        "taskDescription": "Organize a team outing for the end of the year celebration, coordinating logistics, transportation, and activities to ensure a memorable experience for all team members.",
        "taskDate": "2024-12-19",
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false,
        "urgency": "medium"
      },
      {
        "taskTitle": "Create Marketing Report",
        "taskDescription": "Compile a detailed report on the latest marketing campaigns, including performance metrics, ROI, and recommendations for future strategies based on the analysis of past campaigns.",
        "taskDate": "2024-12-18",
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false,
        "urgency": "low"
      },
      {
        "taskTitle": "Prepare Budget",
        "taskDescription": "Draft the budget proposal for the next quarter, factoring in projected expenses, anticipated revenue, and the overall financial strategy for the company. This will be presented to upper management for approval.",
        "taskDate": "2024-12-22",
        "active": false,
        "newTask": false,
        "completed": false,
        "failed": true,
        "urgency": "high"
      },
      {
        "taskTitle": "Client Proposal",
        "taskDescription": "Prepare a comprehensive proposal for a potential client, including product offerings, pricing options, and a roadmap for implementation. The proposal must be submitted by the end of the week.",
        "taskDate": "2024-12-23",
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false,
        "urgency": "high"
      }
    ]
  }
];


export const admin = [{
    "id": "admin001",
    "email": "admin@example.com",
    "password": "admin123",
    "name": "Admin User"
  }
]

export const setLocalStorage = () => {
    localStorage.clear();
    localStorage.setItem('employees', JSON.stringify(employee))
    localStorage.setItem('admin', JSON.stringify(admin))
}

export const getLocalStorage = () => {
    const emps = JSON.parse(localStorage.getItem('employees'))
    const ad = JSON.parse(localStorage.getItem('admin'))

    return { ad, emps}
}