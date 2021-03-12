import { renderElementIntoTarget, changeInnerHTML, loadState, removeLoadState } from './genericFunctions';
import { getCardInfo } from './queries';

const blank = '';

export function renderEpisodeCard() {
    renderElementIntoTarget({
        elementId: 'episodeCard',
        elementType: 'div', 
        content: blank,
        elementClass: 'episodeCard', 
        targetId: 'episodeBox' 
    });
    const cardInfo = ['episodeName', 'episodeCodeNumber', 'exibitionDate', 'characterList'];
    cardInfo.forEach( item => { renderElementIntoTarget({
        elementId: item,
        elementType: 'p', 
        content: blank,
        elementClass: item, 
        targetId: 'episodeCard' 
    }); });
}

export function renderCard(RaMQuery, episodeIndex) {
    const cardInfo = ['episodeName', 'episodeCodeNumber', 'exibitionDate', 'characterList'];
    const RaM = RaMQuery.data.data.episodes.results[`${episodeIndex}`];
    let charactersList = 'Character List: ';
    let characterSeparationMark = ', ';
    RaM.characters.forEach((characterName, index) => { 
        if (index == RaM.characters.length - 1) {
            characterSeparationMark = '.';
        }
        charactersList += characterName.name + characterSeparationMark;
        });
    const episode = {
        episodeName: 'Episode Title: ' + RaM.name,
        episodeCodeNumber: 'Episode Code: ' + RaM.episode,
        exibitionDate: 'Exibition Date: ' + RaM.air_date,
        characterList: charactersList
    }
    Object.keys(episode).forEach(key => {
        changeInnerHTML(key, episode[key]);
    });
    removeLoadState(cardInfo);
}

export function loadEpisodeInfo(query, episodeIndex) {
    const cardInfo = ['episodeName', 'episodeCodeNumber', 'exibitionDate', 'characterList'];
    loadState(cardInfo);
    getCardInfo(query, episodeIndex);
}
