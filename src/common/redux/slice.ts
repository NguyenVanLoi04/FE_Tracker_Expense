import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState: any = {
  confirmModal: {
    callback: () => {},
    isOpen: false,
    text: "",
  },
};

export const commonModalConfirmSlice = createSlice({
  name: "commomSlice",
  initialState,
  reducers: {
    setConfirmModal: (state, action) => {
      state.confirmModal = action.payload;
    },
    closeConfirmModal: (state) => {
      state.confirmModal = {
        callback: () => {},
        isOpen: false,
        text: "",
      };
    },
  },
});

export const { setConfirmModal, closeConfirmModal } =
  commonModalConfirmSlice.actions;

export default commonModalConfirmSlice.reducer;
