import React from "react";
import { fetchJSON } from "./fetchJSON.jsx";

export const MenuApiContext = React.createContext({
    async listMenu(dishname){
        return await fetchJSON(`/api/movies?titleSearch=${dishname}`);
    },
    async createMenu(menu){
      fetch("/api/menu", {
          method: "post",
          body: JSON.stringify(menu),
          headers: {
            "content-type": "application/json",
          },
      });
    },
});