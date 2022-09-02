import React from 'react';
import PropTypes from 'prop-types';
import '../../styles/mission.css';

const MissionProp = (props) => {
  const {
    id, name, description,
  } = props;

  return (
    <tr id={id}>
      <td>{name}</td>
      <td>
        {description}
        {' '}
      </td>
      <td>
        <span>NOT A MEMBER</span>
      </td>
      <td>
        <button type="button">Join Mission</button>
      </td>
    </tr>
  );
};

MissionProp.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default MissionProp;
