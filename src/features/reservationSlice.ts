import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ReservationState {
  value: string[];
}

const initialState: ReservationState = {
  value: ["Lucky"],
};
export const reservationSlice = createSlice({
  name: "reservations",
  initialState,
  reducers: {
    addReservation: (state, action: PayloadAction<string>) => {
      // text
      state.value.push(action.payload);
    },
    removeReservation: (state, action: PayloadAction<number>) => {
      // index
      state.value.splice(action.payload, 1); // splice(idx, howmanyremove, )
    },
  },
});

export const { addReservation, removeReservation } = reservationSlice.actions;

export default reservationSlice.reducer;
