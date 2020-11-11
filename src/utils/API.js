import axios from "axios";

export const login = data => axios.post("/api/sign_in", data);
export const signup = data => axios.post("/api/sign_up", data);
