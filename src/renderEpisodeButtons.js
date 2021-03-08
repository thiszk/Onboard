import { renderElementIntoDestiny } from './genericFunctions';

const blank = '';
const episodesPerPage = 20;

export function renderEpisodeButtons(RaMQuery) {
    const RaMResults = RaMQuery.data.data.episodes.results;
    renderElementIntoDestiny('episodeButtonList', 'div', blank, 'episodeButtonList', 'episodeBox');
    for (let index = 0; index < episodesPerPage; index++) {
        var buttonId = [];
        buttonId[index] = 'button' + index;   
    }
    RaMResults.forEach(episode =>renderElementIntoDestiny(buttonId[episode], 'button', episode.episode, 'episodeButton', 'episodeButtonList'));
}