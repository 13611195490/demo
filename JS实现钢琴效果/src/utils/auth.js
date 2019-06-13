import Cookies from 'js-cookie'

const TokenKey = 'token'
const PersonnelIdKey = 'Personnel-Id'
const PersonnelNameKey = 'Personnel-Name'

export function getToken() {
  return Cookies.get(TokenKey)
}

export function setToken(token) {
  return Cookies.set(TokenKey, token)
}

export function removeToken() {
  return Cookies.remove(TokenKey)
}

export function getPersonnelName() {
  return Cookies.get(PersonnelNameKey)
}

export function setPersonnelName(personnelname) {
  return Cookies.set(PersonnelNameKey, personnelname)
}

export function removePersonnelName() {
  return Cookies.remove(PersonnelNameKey)
}

export function getPersonnelId() {
  return Cookies.get(PersonnelIdKey)
}

export function setPersonnelId(personnelid) {
  return Cookies.set(PersonnelIdKey, personnelid)
}

export function removePersonnelId() {
  return Cookies.remove(PersonnelIdKey)
}
