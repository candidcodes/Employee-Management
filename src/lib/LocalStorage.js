export const employee = [
  {
    "id": "emp001",
    "email": "john.doe@example.com",
    "password": "123",
    "name": "John Doe",
    "tasks": [
    ]
  },
  {
    "id": "emp002",
    "email": "jane.smith@example.com",
    "password": "123",
    "name": "Jane Smith",
    "tasks": [
    ]
  },
  {
    "id": "emp003",
    "email": "mike.johnson@example.com",
    "password": "password123",
    "name": "Mike Johnson",
    "tasks": []
  },
  {
    "id": "emp004",
    "email": "emma.brown@example.com",
    "password": "password123",
    "name": "Emma Brown",
    "tasks": []
  }
];


export const admin = [{
    "id": "admin001",
    "email": "admin@example.com",
    "password": "123",
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