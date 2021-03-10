import { renderElementIntoTarget } from './genericFunctions';

const blank = '';
const episodesPerPage = 20;

export function renderEpisodeButtons(RaMQuery) {
    const RaMResults = RaMQuery.data.data.episodes.results;
    renderElementIntoTarget({
        elementId: 'episodeButtonList',
        elementType: 'div', 
        content: blank,
        elementClass: 'episodeButtonList', 
        targetId: 'episodeBox' 
    });
    for (let index = 0; index < episodesPerPage; index++) {
        var buttonId = [];
        buttonId[index] = 'button' + index;   
    }
    RaMResults.forEach(episode =>renderElementIntoTarget({
        elementId: buttonId[episode],
        elementType: 'button', 
        content: episode.episode,
        elementClass: 'episodeButton', 
        targetId: 'episodeButtonList' 
    }));
}
