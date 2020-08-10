///not optional, in future if we will need to add something new

import { BASE_URL } from "./constants.js";

export const routes = {
  getAllFilms() {
    return `${BASE_URL}/films`;
  },

};
