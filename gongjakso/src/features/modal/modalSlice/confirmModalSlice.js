import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    isOpen: false,
    confirmClick: null,
    cancelClick: null,
};

const confirmModalSlice = createSlice({
    name: 'confirmModal',
    initialState,
    reducers: {
        openConfirmModal: (state, action) => {
            state.isOpen = true;
            state.confirmClick = action.payload?.confirmClick;
            state.cancelClick = action.payload?.cancelClick;
        },
        closeConfirmModal: state => {
            state.isOpen = false;
            state.confirmClick = null;
            state.cancelClick = null;
        },
    },
});

export const { openConfirmModal, closeConfirmModal } =
    confirmModalSlice.actions;

export default confirmModalSlice.reducer;
