import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import initialJsonData from "../data/data.json"; 

interface Lead {
  type: string;
  name: string;
  place: string;
  description: string;
  status: string;
  group_name: string;
  points: number;
  liked: boolean;
  unliked: boolean;
}

const getInitialData = (): Lead[] => {
  if (typeof window !== "undefined") {
    const stored = localStorage.getItem("leadsData");
    if (stored) return JSON.parse(stored);
    localStorage.setItem("leadsData", JSON.stringify(initialJsonData)); // 👈 first time only
    return initialJsonData;
  }
  return [];
};

const leadsSlice = createSlice({
  name: "leads",
  initialState: {
    data: getInitialData(),
  },
  reducers: {
    setLeads: (state, action: PayloadAction<Lead[]>) => {
      state.data = action.payload;
      localStorage.setItem("leadsData", JSON.stringify(state.data));
    },
    updateLead: (state, action: PayloadAction<{ index: number; updatedLead: Lead }>) => {
      state.data[action.payload.index] = action.payload.updatedLead;
      localStorage.setItem("leadsData", JSON.stringify(state.data));
    },
    addLead: (state, action: PayloadAction<Lead>) => {
      state.data.push(action.payload);
      localStorage.setItem("leadsData", JSON.stringify(state.data));
    },
  },
});

export const { setLeads, updateLead, addLead } = leadsSlice.actions;
export default leadsSlice.reducer;
