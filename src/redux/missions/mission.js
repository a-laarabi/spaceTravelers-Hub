const FETCH_MISSION = 'spacetravelers/missions/FETCH_MISSION';
const JOIN_MISSION = 'spacetravelers/missions/JOIN_MISSION';
const LEAVE_MISSION = 'spacetravelers/missions/LEAVE_MISSION';

const initialState = [];

const missionReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_MISSION:
      return action.mission;
    case JOIN_MISSION:
      return state.map((mission) => {
        if (mission.id !== action.payload) {
          return mission;
        }
        return { ...mission, reserved: true };
      });
    case LEAVE_MISSION:
      return state.map((mission) => {
        if (mission.id !== action.payload) {
          return mission;
        }
        return { ...mission, reserved: false };
      });
    default:
      return state;
  }
};

const fetchMission = (mission) => ({
  type: FETCH_MISSION,
  mission,
});

const JoinMissions = (id) => ({
  type: JOIN_MISSION,
  payload: id,
});

const LeaveMission = (id) => ({
  type: LEAVE_MISSION,
  payload: id,
});

const LoadMissions = () => async (dispatch) => {
  const response = await fetch('https://api.spacexdata.com/v3/missions');
  const data = await response.json();
  const missionsFetched = data.map((mission) => ({
    id: mission.mission_id,
    name: mission.mission_name,
    description: mission.description,
    reserved: false,
  }));
  dispatch(fetchMission(missionsFetched));
};

export {
  LoadMissions, fetchMission, JoinMissions, LeaveMission,
};

export default missionReducer;
