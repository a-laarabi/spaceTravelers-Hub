const FETCH_MISSION = 'spacetravelers/missions/FETCH_MISSION';

const initialState = [];

const missionReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_MISSION:
      return action.mission;
    default:
      return state;
  }
};

export const fetchMission = (mission) => ({
  type: FETCH_MISSION,
  mission,
});

export const LoadMissions = () => async (dispatch) => {
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

export default missionReducer;
