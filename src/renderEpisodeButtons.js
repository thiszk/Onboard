import { renderElementIntoTarget } from './genericFunctions';
import { loadEpisodeInfo } from './renderEpisodeCard';

const blank = '';

export function renderEpisodeButtons(RaMQuery) {
    const RaMResults = RaMQuery.data.data.episodes.results;
    renderElementIntoTarget({
        elementId: 'episodeButtonList',
        elementType: 'div', 
        content: blank,
        elementClass: 'episodeButtonList', 
        targetId: 'episodeBox' 
    });
    RaMResults.forEach(episode => renderElementIntoTarget({
        elementId: episode.id,
        elementType: 'button', 
        content: episode.episode,
        elementClass: 'episodeButton', 
        targetId: 'episodeButtonList' 
    }));
    setOnclickAttribute(RaMQuery);
}

function setOnclickAttribute(RaMQuery) {
    const RaMResults = RaMQuery.data.data.episodes.results;
    RaMResults.forEach((button, index) => { 
        loadCard(button, index, RaMResults) });
}

function loadCard(button, index, RaMResults) {
    const episodeId = RaMResults[`${index}`].id;
    document.getElementById(button.id).onclick = () => loadEpisodeInfo(episodeId, button.id);
}

export function renderFilteredEpisodeButtons(RaMQuery) {
    const RaMResults = RaMQuery.data.data.episodes.results;
    renderElementIntoTarget({
        elementId: 'episodeButtonList',
        elementType: 'div', 
        content: blank,
        elementClass: 'episodeButtonList', 
        targetId: 'episodeBox' 
    });
    RaMResults.forEach(episode => renderElementIntoTarget({
        elementId: episode.id,
        elementType: 'button', 
        content: episode.episode,
        elementClass: 'episodeButton', 
        targetId: 'episodeButtonList' 
    }));
    setOnclickAttribute(RaMQuery);
}