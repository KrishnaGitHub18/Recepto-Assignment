import { createSlice } from '@reduxjs/toolkit';
import teamData from "../data/teamData.json";

const initialState = {
  team: teamData
};

const teamSlice = createSlice({
  name: 'team',
  initialState,
  reducers: {
    setTeamData: (state, action) => {
      state.team = action.payload;
    },
    updateMember: (state, action) => {
      const { index, updatedData } = action.payload;
      state.team[index] = { ...state.team[index], ...updatedData };
    },
    removeMember: (state, action) => {
      const { index } = action.payload;
      state.team.splice(index, 1); // Remove member from the array by index
    }
  }
});

export const { setTeamData, updateMember, removeMember } = teamSlice.actions;

export default teamSlice.reducer;