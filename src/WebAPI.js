import { getAuthToken } from "./utils";
const BASE_URL = "http://imaginary-friends.tw:3001/v1";

export const register = async (
  username,
  password,
  passwordAgain,
  nickname,
  email,
  session,
  contact
) => {
  const response = await fetch(`${BASE_URL}/users/register`, {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify({
      username,
      password,
      passwordAgain,
      nickname,
      email,
      session,
      contact,
    }),
  });
  return await response.json();
};

export const login = async (username, password) => {
  const response = await fetch(`${BASE_URL}/users/login`, {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify({ username, password }),
  });
  return await response.json();
};

export const logout = async () => {
  const token = getAuthToken();
  const response = await fetch(`${BASE_URL}/users/logout`, {
    headers: {
      authorization: `Bearer ${token}`,
    },
  });
  return await response.json();
};

export const getUsers = async () => {
  const token = getAuthToken();
  const response = await fetch(`${BASE_URL}/users`, {
    headers: {
      authorization: `Bearer ${token}`,
    },
  });
  return await response.json();
};

export const getMe = async () => {
  const token = getAuthToken();
  const response = await fetch(`${BASE_URL}/users/me`, {
    headers: {
      authorization: `Bearer ${token}`,
    },
  });
  return await response.json();
};

export const updateMe = async (data) => {
  const token = getAuthToken();
  const response = await fetch(`${BASE_URL}/users/me`, {
    method: "PATCH",
    headers: {
      "content-type": "application/json",
      authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(data),
  });
  return await response.json();
};

export const updatePassword = async (
  oldPassword,
  newPassword,
  againPassword
) => {
  const token = getAuthToken();
  const response = await fetch(`${BASE_URL}/users/updatePassword`, {
    method: "PATCH",
    headers: {
      "content-type": "application/json",
      authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({ oldPassword, newPassword, againPassword }),
  });
  return await response.json();
};

export const getUser = async (id) => {
  const token = getAuthToken();
  const response = await fetch(`${BASE_URL}/users/${id}`, {
    headers: {
      authorization: `Bearer ${token}`,
    },
  });
  return await response.json();
};

export const updateUser = async (id, data) => {
  const token = getAuthToken();
  const response = await fetch(`${BASE_URL}/users/${id}`, {
    method: "PATCH",
    headers: {
      "content-type": "application/json",
      authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(data),
  });
  return await response.json();
};

export const getEvents = () => {
  const token = getAuthToken();
  return fetch(`${BASE_URL}/events?_limit=9`, {
    headers: {
      authorization: `Bearer ${token}`,
    },
  }).then(res => res.json());
};

export const getEvent = (id) => {
  const token = getAuthToken();
  return fetch(`${BASE_URL}/events/${id}`, {
    headers: {
      authorization: `Bearer ${token}`,
    },
  }).then(res => res.json());
};

export const getEventParticipants = (id) => {
  const token = getAuthToken();
  return fetch(`${BASE_URL}/events/participants/${id}`, {
    headers: {
      authorization: `Bearer ${token}`,
    },
  }).then(res => res.json());
};

export const addEvent = (input) => {
  const token = getAuthToken();
  return fetch(`${BASE_URL}/events/add`, {
    method: 'POST',
    headers: {
      'content-type': 'application/json',
      authorization: `Bearer ${token}`
    },
    body: JSON.stringify(input)
  }).then(res => res.json());
};

export const editEvent = (id, input) => {
  const token = getAuthToken();
  return fetch(`${BASE_URL}/events/${id}`, {
    method: 'PATCH',
    headers: {
      'content-type': 'application/json',
      authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(input),
  }).then(res => res.json());
};

export const deleteEvent = (id) => {
  const token = getAuthToken();
  return fetch(`${BASE_URL}/events/delete/${id}`, {
    headers: {
      authorization: `Bearer ${token}`,
    },
  }).then(res => res.json());
};

export const signUpEvent = (id, type) => {
  const token = getAuthToken();
  return fetch(`${BASE_URL}/events/sign-up/${id}`, {
    method: 'POST',
    headers: {
      'content-type': 'application/json',
      authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({
      type
    })
  }).then(res => res.json());
};

export const cancelSignUpEvent = (id) => {
  const token = getAuthToken();
  return fetch(`${BASE_URL}/events/cancel-sign-up/${id}`, {
    headers: {
      authorization: `Bearer ${token}`,
    },
  }).then(res => res.json());
};