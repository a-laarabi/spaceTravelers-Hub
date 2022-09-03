import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { LoadMissions } from '../../redux/missions/mission';
import MissionProp from './MissionProp';
import '../../styles/mission.css';

const Missions = () => {
  const missions = useSelector((state) => state.missions);
  const dispatch = useDispatch();

  useEffect(() => {
    if (missions.length === 0) {
      dispatch(LoadMissions());
    }
  }, []);

  return (
    <div className="missionTable">
      <table>
        <tbody>
          <tr>
            <th>Mission</th>
            <th>Description</th>
            <th>Status</th>
            <th> </th>
          </tr>
          {missions.map((mission) => (
            <MissionProp
              key={mission.id}
              id={mission.id}
              name={mission.name}
              description={mission.description}
              reserved={mission.reserved}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Missions;
