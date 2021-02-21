import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { setAuthToken } from "../../utils";
import {
  login as loginAPI,
  register as registerAPI,
  getMe as getMeAPI,
  updateMe as updateMeAPI,
  updatePassword as updatePasswordAPI,
  getUsers as getUsersAPI,
  getUser as getUserAPI,
  updateUser,
} from "../../WebAPI";

const register = async ({
  username,
  password,
  againPassword,
  nickname,
  email,
  session,
  contact,
}) => {
  const { ok, message, token } = await registerAPI(
    username,
    password,
    againPassword,
    nickname,
    email,
    session,
    contact
  );
  if (!ok) throw new Error(message);
  setAuthToken(token);
};

const login = async ({ username, password }) => {
  const { ok, message, token } = await loginAPI(username, password);
  if (!ok) throw new Error(message);
  setAuthToken(token);
};
const updateMe = async (data) => {
  const { ok, message } = await updateMeAPI(data);
  if (!ok) throw new Error(message);
};

const updatePassword = async ({ oldPassword, newPassword, againPassword }) => {
  const { ok, message } = await updatePasswordAPI({
    oldPassword,
    newPassword,
    againPassword,
  });
  if (!ok) throw new Error(message);
};

export const getMe = createAsyncThunk(
  "user/getMe",
  async (data, { rejectWithValue }) => {
    try {
      switch (data.goal) {
        case "register":
          await register(data);
          break;
        case "login":
          await login(data);
          break;
        case "updateMe":
          await updateMe(data);
          break;
        case "updatePassword":
          await updatePassword(data);
          break;
        default:
          break;
      }
      const { ok, message, user } = await getMeAPI();
      if (!ok) throw new Error(message);
      return { goal: data.goal, data: user };
    } catch (error) {
      return rejectWithValue({
        goal: data.goal,
        message: error.message ? error.message : "失敗",
      });
    }
  }
);

export const getUsers = createAsyncThunk(
  "user/getUsers",
  async (_, { rejectWithValue }) => {
    try {
      const { ok, message, users } = await getUsersAPI();
      if (!ok) throw new Error(message);
      return users;
    } catch (error) {
      return rejectWithValue(error.message ? error.message : "失敗");
    }
  }
);

export const getUser = createAsyncThunk(
  "user/getUser",
  async ({ id, data }, { rejectWithValue }) => {
    try {
      let response = {};
      if (!data) response = await getUserAPI(id);
      else response = await updateUser({ id, data });
      if (!response.ok) throw new Error(response.message);
      return response.user;
    } catch (error) {
      return rejectWithValue(error.message ? error.message : "失敗");
    }
  }
);

export const userReducer = createSlice({
  name: "user",
  initialState: {
    status: {
      getMe: "idle",
      login: "idle",
      register: "idle",
      updateMe: "idle",
      updatePassword: "idle",
      getUsers: "idle",
      getUser: "idle",
    },
    isLoading: false,
    me: null,
    users: [],
    user: null,
    error: null,
  },
  reducers: {},
  extraReducers: {
    [getMe.pending]: (state, action) => {
      state.isLoading = true;
    },
    [getMe.fulfilled]: (state, action) => {
      state.status[action.payload.goal] = "succeeded";
      state.isLoading = false;
      state.me = action.payload.data;
    },
    [getMe.rejected]: (state, action) => {
      state.status[action.payload.goal] = "failed";
      state.isLoading = false;
      state.me = null;
      state.error = action.payload.message;
    },
    [getUsers.pending]: (state, action) => {
      state.isLoading = true;
    },
    [getUsers.fulfilled]: (state, action) => {
      state.status.getUsers = "succeeded";
      state.isLoading = false;
      state.users = action.payload;
    },
    [getUsers.rejected]: (state, action) => {
      state.status.getUsers = "failed";
      state.isLoading = false;
      state.error = action.payload;
    },
    [getUser.pending]: (state, action) => {
      state.isLoading = true;
    },
    [getUser.fulfilled]: (state, action) => {
      state.status.getUser = "succeeded";
      state.isLoading = false;
      state.user = action.payload;
    },
    [getUser.rejected]: (state, action) => {
      state.status.getUser = "failed";
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export const selectMe = (store) => store.user.me;
export const selectIsLogin = (store) => (store.user.me ? true : false);
export const selectUser = (store) => store.user.user;
export const selectUsers = (store) => store.user.users;
export const selectUserStatus = (store) => store.user.status;
export const selectUserIsLoading = (store) => store.user.isLoading;
export const selectUserError = (store) => store.user.error;

export default userReducer.reducer;
