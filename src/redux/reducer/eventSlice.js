import { createSlice } from "@reduxjs/toolkit";
import {
  getEvents as getEventsAPI,
  getEvent as getEventAPI,
  getEventParticipants as getEventParticipantsAPI,
  addEvent as addEventAPI,
  editEvent as editEventAPI,
  deleteEvent as deleteEventAPI,
  signUpEvent as signUpEventAPI,
  cancelSignUpEvent as cancelSignUpEventAPI,
} from "../../WebAPI";

export const eventReducer = createSlice({
  name: "event",
  initialState: {
    isLoadingEvent: false,
    isAttendEvent: false,
    isWorkLimit: false,
    isPresentLimit: false,
    events: null,
    event: null,
    eventParticipants: null,
    newEventResponse: null,
    deleteEventResponse: null,
    signUpEventResponse: null,
  },
  reducers: {
    setIsLoadingEvent: (state, action) => {
      state.isLoadingEvent = action.payload;
    },

    setIsAttendEvent: (state, action) => {
      state.isAttendEvent = action.payload;
    },

    setIsWorkLimit: (state, action) => {
      state.isWorkLimit = action.payload;
    },

    setIsPresentLimit: (state, action) => {
      state.isPresentLimit = action.payload;
    },

    setEvents: (state, action) => {
      state.events = action.payload;
    },

    setEvent: (state, action) => {
      state.event = action.payload;
    },

    setEventParticipants: (state, action) => {
      state.eventParticipants = action.payload;
    },

    setNewEventResponse: (state, action) => {
      state.newEventResponse = action.payload;
    },

    setDeleteEventResponse: (state, action) => {
      state.deleteEventResponse = action.payload;
    },

    setSignUpEventReponse: (state, action) => {
      state.signUpEventResponse = action.payload;
    },
  },
});

export const {
  setIsLoadingEvent,
  setIsAttendEvent,
  setIsWorkLimit,
  setIsPresentLimit,
  setEvents,
  setEvent,
  setEventParticipants,
  setNewEventResponse,
  setDeleteEventResponse,
  setSignUpEventReponse,
} = eventReducer.actions;

export const getEvents = () => (dispatch) => {
  dispatch(setIsLoadingEvent(true));
  getEventsAPI()
    .then((res) => {
      dispatch(setEvents(res.events));
      dispatch(setIsLoadingEvent(false));
    })
    .catch((err) => {
      console.log(err);
      dispatch(setIsLoadingEvent(false));
    });
};

export const getEvent = (id) => (dispatch) => {
  dispatch(setIsLoadingEvent(true));
  getEventAPI(id)
    .then((res) => {
      dispatch(setEvent(res.event));
      dispatch(setIsLoadingEvent(false));
    })
    .catch((err) => {
      console.log(err);
      dispatch(setIsLoadingEvent(false));
    });
};

export const getEventParticipants = (id) => (dispatch) => {
  dispatch(setIsLoadingEvent(true));
  getEventParticipantsAPI(id)
    .then((res) => {
      dispatch(setEventParticipants(res.participants));
      dispatch(setIsLoadingEvent(false));
    })
    .catch((err) => {
      console.log(err);
      dispatch(setIsLoadingEvent(false));
    });
};

export const addEvent = (input) => (dispatch) => {
  return addEventAPI(input).then((res) => {
    dispatch(setNewEventResponse(res));
    return res;
  });
};

export const editEvent = (id, input) => (dispatch) => {
  dispatch(setIsLoadingEvent(true));
  return addEventAPI(id, input).then((res) => {
    dispatch(setIsLoadingEvent(false));
    return res;
  });
};

export const deleteEvent = (id) => (dispatch) => {
  return deleteEventAPI(id).then((res) => {
    dispatch(setDeleteEventResponse(res));
  });
};

export const signUpEvent = (id, type) => (dispatch) => {
  return signUpEventAPI(id, type).then((res) => {
    dispatch(setIsAttendEvent(true));
    return res;
  });
};

export const cancelSignUpEvent = (id) => (dispatch) => {
  return cancelSignUpEventAPI(id).then((res) => {
    dispatch(setIsAttendEvent(false));
    return res;
  });
};

export const checkAttend = (attendBoolean) => (dispatch) => {
  dispatch(setIsAttendEvent(attendBoolean));
};

export const checkPresentNum = (presentLimitBoolean) => (dispatch) => {
  dispatch(setIsPresentLimit(presentLimitBoolean));
};

export const checkWorkNum = (workLimitBoolean) => (dispatch) => {
  dispatch(setIsWorkLimit(workLimitBoolean));
};

export default eventReducer.reducer;
