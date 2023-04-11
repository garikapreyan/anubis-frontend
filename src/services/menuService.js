import axios from 'axios';

const url = 'https://anubis.am/api/v1';

function getLanguageList() {
  return axios.get(`${url}/menu/language/list`).then((res) => res.data);
}

function getMenusAndSubmenus(languageId) {
  return axios.get(`${url}/menu/list?language_id=${languageId}`).then((res) => res.data);
}

export const menuService = {
  getLanguageList,
  getMenusAndSubmenus,
};
