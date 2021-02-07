import { SERVER_URL } from "../utils/consts";

export const getCharacters = async (params) => {
  const searchParams = new URLSearchParams(params);
  const response = await fetch(`${SERVER_URL}/character?${searchParams.toString()}`);
  return response.json();
};

export const getCharacter = async (id) => {
  const response = await fetch(`${SERVER_URL}/character/${id.toString()}`);
  return response.json();
};

export const getAllCharacters = async () => {
  let i = 1;
  let urllist = [];
  for (i; i < 35; i++) {
    const response = await fetch(`${SERVER_URL}/character?page=${i}`);
    const json = await response.json();
    urllist.push(...json.results);
  }
  return urllist;
};

export const getEpisodes = async () => {
  const [response, response_second, response_third] = await Promise.all([
    fetch(`${SERVER_URL}/episode`).then((res) => res.json()),
    fetch(`${SERVER_URL}/episode?page=2`).then((res) => res.json()),
    fetch(`${SERVER_URL}/episode?page=3`).then((res) => res.json()),
  ]);

  return [...response.results, ...response_second.results, ...response_third.results];
};

export const getEpisode = async (id) => {
  const response = await fetch(`${SERVER_URL}/episode/${id.toString()}`);
  return response.json();
};

export const getEpisodeByUrl = async (url) => {
  const response = await fetch(url);
  return response.json();
};
