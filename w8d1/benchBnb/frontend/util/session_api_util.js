

export const signup = (user) => (
  $.ajax({
    method: "POST",
    url: "api/users",
    data: user
  })
);

export const login = (user) => (
  $.ajax({
    method: "POST",
    url: "api/sessions"
  })
);

export const logout = () => (
  $.ajax({
    method: "POST",
    url: `api/session`
  })
);
