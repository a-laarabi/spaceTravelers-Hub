import React from 'react';
import { useSelector } from 'react-redux';

const MyProfile = () => {
  const missions = useSelector((state) => state.missions);
  const joinedMissions = missions.filter((mission) => mission.reserved);

  return (
    <>
      <h1>My Missions</h1>
      <ul>
        {joinedMissions.map((mission) => <li key={mission.id}>{mission.name}</li>)}
      </ul>
    </>
  );
};
export default MyProfile;
