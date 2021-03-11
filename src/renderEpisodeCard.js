import { renderElementIntoTarget, changeInnerHTML } from './genericFunctions';

const blank = '';

export function renderEpisodeCard() {
    renderElementIntoTarget({
        elementId: 'episodeCard',
        elementType: 'div', 
        content: blank,
        elementClass: 'episodeCard', 
        targetId: 'episodeBox' 
    });
    const cardInfo = ['episodeName', 'episodeCodeNumber', 'exibitionDate', 'characterList', 'characters']
    for (let index = 0; index < cardInfo.length; index++) {
        renderElementIntoTarget({
            elementId: cardInfo[index],
            elementType: 'p', 
            content: blank,
            elementClass: cardInfo[index], 
            targetId: 'episodeCard' 
        });
    }
}

export function setOnclickAttribute(RaMQuery) {
    const RaMResults = RaMQuery.data.data.episodes.results;
    RaMResults.forEach(episode => document.getElementById(episode.id).onclick = renderCard.bind(this, RaMResults));
}

function renderCard(RaMResults) {
    const RaM = RaMResults[`${event.target.id}`];
    let charactersList = 'Character List: ';
    for (let numberOfCharacters = 0; numberOfCharacters < RaM.characters.length; numberOfCharacters++) {
        charactersList += RaM.characters[numberOfCharacters].name + ', ';    
    }
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