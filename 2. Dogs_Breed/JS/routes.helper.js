import { BASE_URL } from "./constants.js";

export const routes = {
  getDogBybreed(name) {
    return `${BASE_URL}${name}/images`;
  },
};
