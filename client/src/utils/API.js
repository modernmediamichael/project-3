import axios from "axios";

export default {
  logIn:function(email,password) {
    return axios.post("https://ecommerce-app-um.herokuapp.com/api/auth/login",{email,password});
  },
  verifyAuthentication:function() {
    return axios.get("https://ecommerce-app-um.herokuapp.com/api/auth/login",{
      headers: {
        Authorization:localStorage.getItem("authorization-token")
      }
    })
  }
};