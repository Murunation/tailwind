import axios from "axios";

import React from "react";

export default function AxiosConfig({ children }) {
  axios.interceptors.request.use(
    function (request) {
      console.log("intercepting request: ", request);
      const url = request.url;
      switch (url) {
        case "http://locahost:3002/user": {
          console.log("user request ");
          break;
        }
      }
      return request;
    },
    //Doing something with req error
    function (error) {
      return Promise.reject(error);
    }
  );

  //add responce interceptors

  axios.interceptors.response.use(
    function (responce) {
      // Any status code that lie within the range of 2xx cause this function to trigger
      // Do something with response data
      console.log("intercepting response: ", responce);
      return responce;
    },
    function (error) {
      return Promise.reject(error);
    }
  );

  return <>{children}</>;
}
