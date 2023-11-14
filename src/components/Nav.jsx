import { NavLink } from 'react-router-dom';

function Nav() {
  return (
    <nav>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/EmpMembs">All Employees</NavLink>
      <NavLink to='/add-EmpDetail'>Add New Employee</NavLink>
    </nav>
  )
}

export default Nav