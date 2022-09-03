import React from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { JoinMissions, LeaveMission } from '../../redux/missions/mission';
import '../../styles/mission.css';

const MissionProp = (props) => {
  const {
    id, name, description, reserved,
  } = props;

  const dispatch = useDispatch();
  const reserve = () => {
    dispatch(JoinMissions(id));
  };

  const unsubscribe = () => {
    dispatch(LeaveMission(id));
  };

  return (
    <tr id={id} className="tableContent">
      <td className="missionName">{name}</td>
      <td className="description">
        {description}
        {' '}
      </td>
      <td>
        <div className={reserved ? 'yes status' : 'no status'}>{reserved ? 'Active Member' : 'NOT A MEMBER'}</div>
      </td>
      <td>
        {!reserved ? <button type="button" className="join" onClick={reserve}>Join Mission</button>
          : <button type="button" className="leave" onClick={unsubscribe}>Leave Mission </button>}
      </td>
    </tr>
  );
};

MissionProp.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  reserved: PropTypes.bool.isRequired,
};

export default MissionProp;
