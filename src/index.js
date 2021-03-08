import _ from 'lodash';
import name from './name';
import { name2 } from './name';
import { renderEpisodeButtons } from './renderEpisodeButtons';
import { getSeriesInfo } from './queries';

// var myQuery = `query RaM {
//   episodes {
//     info {
//       count
//     }
//     results {
//       episode
//       name
//       air_date
//       characters {
//         name
//       }
//     }
//   }
// }`;

// function getSeriesInfo() {
//   axios({ url: 'https://rickandmortyapi.com/graphql', method: 'post', data: { query: myQuery } })
//   .then(printSucess)
//   .catch(error => console.log(error));
// }

// function printSucess(myQuery) {
//   const episodes = myQuery.data.data.episodes.results;
//   console.log('episode: ', episodes);
//   episodes.forEach(episode => printEpisodeName(episode.name));
// }

// function printEpisodeName(name) {
//   const element = document.createElement('div');
//   element.innerHTML = name;
//   document.body.appendChild(element);
// }

getSeriesInfo();