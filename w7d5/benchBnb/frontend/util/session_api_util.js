export const signup = () => (
  $.ajax({
    method: "POST",
    url: "/api/users"
  })
);

export const login = () => (
  $.ajax({
    method: "POST",
    url: "/api/session"
  })
);

export const logout = (id) => (
  $.ajax({
    method: "DELETE",
    url: `/api/session/${id}`
  })
);
