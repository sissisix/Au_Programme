import { NavLink } from 'react-router-dom';
import './FullButton.css';

const FullButton = (props) => {
  return (
    <div>
        <NavLink
          key={ props.name }
          to={ props.to }
          state={ props.message }
          className={ props.color == 'darkBlue' ? 'container blue' : 'container red' }>
          { props.txt }
          <span></span><span></span><span></span><span></span>
        </NavLink>
    </div>
  )
}

export default FullButton