import { configureStore } from '@reduxjs/toolkit'
import ThemeSlice from './Reducers/ThemeSlice'

// Store
const store = configureStore({
	reducer: {
		theme: ThemeSlice.reducer
	}
})

// Export
export default store

