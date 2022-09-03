import React from 'react';
import { useSelector } from 'react-redux';

function MyProfile() {
  const rockets = useSelector((state) => state.rockets.rockets);
  const missions = useSelector((state) => state.missions);
  const joinedMissions = missions.filter((mission) => mission.reserved);
  const reservedRockets = rockets.map((rocket) => (rocket.reserved ? (
    <li key={rocket.id} className="list-group-item">
      {rocket.name}
    </li>
  ) : false));

  return (
    <div className="container d-flex justify-content-center my-5">
      <div>
        <h2 className="ms-5">My Missions</h2>
        <div className="card rocket-cart ms-5">
          <ul className="list-group list-group-flush">
            {joinedMissions.map((mission) => <li className="p-2 text-danger" key={mission.id}>{mission.name}</li>)}
          </ul>
        </div>
      </div>
      <div>
        <h2 className="ms-5">My Rockets</h2>
        <div className="card rocket-cart ms-5">
          <ul className="list-group list-group-flush">
            {reservedRockets.length > 0 ? reservedRockets : <p className="p-2 text-danger">Please reserve a rocket</p>}
          </ul>
        </div>
      </div>
    </div>
  );
}
export default MyProfile;
