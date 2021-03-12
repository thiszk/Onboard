export function setTitleDescription(RaMQuery) {
    const RaMInfo = RaMQuery.data.data.episodes.info;

    document.getElementById("numberOfEpisodes").innerHTML = "No. of Episodes : " + RaMInfo.count;
    document.getElementById("titleDescription").innerHTML = 
        `Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`;
}
  