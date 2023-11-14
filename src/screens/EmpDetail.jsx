


function EmpDetail({employee}) {
    return (
      <div>
        <h1>Helloghdhtdt, I'm {EmpDetail.name}</h1>
        <h2>Position: {EmpDetail.position}</h2>
        <h2>Email: {employee.email}</h2>
        <h2>Phone: {employee.phone}</h2>
        <h2>Department: {employee.department}</h2>
        <h2>Location: {employee.location}</h2>
        <h2>Hire Date: {employee.hire_date}</h2>
        <h2>Salary: {employee.salary}</h2>
        <h2>Skills are/is: {employee.skills}</h2>
        <h2>Education: {employee.education}</h2>
        <h2>Certifications: {employee.certification}</h2>
        <h2>Projects: {employee.projects}</h2>
      </div>
    )
  }
  export default EmpDetail



//   "name": "John Smith",
//   "position": "Project Manager",
//   "email": "john.smith@example.com",
//   "phone": "+1 (555) 123-4567",
//   "department": "Engineering",
//   "location": "New York",
//   "hire_date": "2022-05-15",
//   "salary": 80000,
//   "skills": ["Project Management", "Team Leadership", "Budgeting"],
//   "education": "Bachelor's in Engineering",
//   "certifications": ["PMP", "Scrum Master"],
//   "projects": []
// },