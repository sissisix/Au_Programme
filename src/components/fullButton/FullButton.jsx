import { NavLink } from 'react-router-dom';
import './FullButton.css';

const FullButton = (props) => {
  return (
    <div className='center'>
        <NavLink
          key={ props.name }
          to={ props.to }
          className='container'>
          { props.txt }
          <span></span><span></span><span></span><span></span>
        </NavLink>
    </div>
  )
}

export default FullButton