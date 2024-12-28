import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  selectedMenu: 'home',
  isSubMenuOpen: false,
  drawerWidth: 240, // Gunakan angka
};

const uiSlice = createSlice({
  name: 'ui',
  initialState,
  reducers: {
    setSelectedMenu: (state, action) => {
      state.selectedMenu = action.payload;
    },
    toggleSubMenu: (state) => {
      state.isSubMenuOpen = !state.isSubMenuOpen;
    },
    setDrawerWidth: (state, action) => {
      state.drawerWidth = action.payload;
    },
  },
});

export const { setSelectedMenu, toggleSubMenu, setDrawerWidth } = uiSlice.actions;
export const selectUiState = (state) => state.ui;

export default uiSlice.reducer;
