import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  selectedMenu: 'home', // Menu yang dipilih (default ke home)
  isSubMenuOpen: false, // Menyimpan status sub-menu apakah terbuka atau tidak
  drawerWidth: '240', // Lebar drawer (default 64px)
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
