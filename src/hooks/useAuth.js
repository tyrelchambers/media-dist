import { useMutation } from "react-query";
import { useHistory } from "react-router";
import { login as _login } from "../api/login";

export const useAuth = () => {
  const history = useHistory();
  const login = useMutation((data) => _login(data), {
    onSuccess: (data) => {
      localStorage.setItem("token", data.token);
      history.push("/dashboard");
    },
  });
  return {
    login,
  };
};
