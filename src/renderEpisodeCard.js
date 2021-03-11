import { renderElementIntoTarget, changeInnerHTML } from './genericFunctions';

const blank = '';

export function renderEpisodeCard(RaMQuery) {
    let page = 1;
    renderElementIntoTarget({
        elementId: 'episodeCard',
        elementType: 'div', 
        content: blank,
        elementClass: 'episodeCard', 
        targetId: 'episodeBox' 
    });
    const cardInfo = ['episodeName', 'episodeCodeNumber', 'exibitionDate', 'characterList', 'characters'];
    cardInfo.forEach( item => { renderElementIntoTarget({
        elementId: item,
        elementType: 'p', 
        content: blank,
        elementClass: item, 
        targetId: 'episodeCard' 
    }) });
    setOnclickAttribute(RaMQuery);
}

export function setOnclickAttribute(RaMQuery) {
    const RaMResults = RaMQuery.data.data.episodes.results;
    RaMResults.forEach(episode => document.getElementById(episode.id).onclick = () => renderCard(RaMResults, episode.id));
}

function renderCard(RaMResults, episodeId) {
    const RaM = RaMResults[`${episodeId}`];
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
}