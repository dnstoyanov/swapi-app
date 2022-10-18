import axios from "axios";

export const fetchPerson = async (id) =>
  axios.get(`https://swapi.dev/api/people/${id}`).then(({ data }) => data);

export const fetchPlanet = async (id) =>
  axios.get(`https://swapi.dev/api/planets/${id}`).then(({ data }) => data);

export const fetchStarship = async (id) =>
  axios.get(`https://swapi.dev/api/starships/${id}`).then(({ data }) => data);
