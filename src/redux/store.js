import { configureStore } from '@reduxjs/toolkit';
import {contactsReducer} from './contactsSlice';
// import { persistStore, persistReducer } from 'redux-persist';
// import storage from 'redux-persist/lib/storage';

// const persistConfig = {
//   key: 'root',
//   storage,
// }

// const persistesContactsReducer = persistReducer(persistConfig, contactsReducer)

// export const store = configureStore({
//   reducer: {
//     contacts: persistesContactsReducer,
//   },
// });

export const store = configureStore({
  reducer: {
    contacts: contactsReducer,
  },
});


// export const persistor = persistStore(store);