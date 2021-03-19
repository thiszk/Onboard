import { getSeriesInfo } from "./queries";

export function setTitleDescription(RaMQuery) {
    const RaMInfo = RaMQuery.data.data.episodes.info;
    document.getElementById('numberOfEpisodes').innerHTML = 'No. of Episodes : ' + RaMInfo.count;
    document.getElementById('titleDescription').innerHTML = 
        `Rick and Morty is an American adult animated science fiction sitcom created by Justin Roiland and Dan Harmon 
        for Cartoon Network's nighttime Adult Swim programming block. The series follows the misadventures of cynical 
        mad scientist Rick Sanchez and his good-hearted but fretful grandson Morty Smith, who split their time between 
        domestic life and interdimensional adventures.`;
}
export function renderTitleDescription() {
    getSeriesInfo().then(query => setTitleDescription(query));
}