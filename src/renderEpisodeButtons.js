import { renderElementIntoTarget } from './genericFunctions';
import { renderEpisodeCard, setOnclickAttribute } from './renderEpisodeCard';

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
    RaMResults.forEach(episode =>renderElementIntoTarget({
        elementId: episode.id,
        elementType: 'button', 
        content: episode.episode,
        elementClass: 'episodeButton', 
        targetId: 'episodeButtonList' 
    })); 
    renderEpisodeCard();
    setOnclickAttribute(RaMQuery);
}

