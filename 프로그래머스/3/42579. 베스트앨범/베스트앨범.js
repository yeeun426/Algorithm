function solution(genres, plays) {
    var answer = [];
    let albumMap = new Map();
    let albumObj = {};
    
    for(let i = 0 ; i < genres.length ; i++) {
        let [genre, play] = [genres[i], plays[i]];
        albumMap.set(genre, (albumMap.get(genre) || 0 ) + play);
        albumObj[genres[i]] ? albumObj[genres[i]].push(plays[i]) : albumObj[genres[i]] = [plays[i]];
    }
    
    for (const genre in albumObj) {
      if (albumObj.hasOwnProperty(genre)) {
        albumObj[genre].sort((a, b) => b - a);
      }
    }    
    
    const genreArr = Array.from(albumMap.keys()).sort((a, b) => albumMap.get(b) - albumMap.get(a));
    
    for(let i = 0 ; i < genreArr.length ; i++) {
        let sortGenre = genreArr[i];
        let firstPlay = albumObj[sortGenre][0];
        let secondPlay = albumObj[sortGenre][1];
        
        if(firstPlay == secondPlay) {
            answer.push(plays.indexOf(firstPlay), plays.indexOf(secondPlay, plays.indexOf(firstPlay)+1));
        } else {
            firstPlay && answer.push(plays.indexOf(firstPlay));
            secondPlay && answer.push(plays.indexOf(secondPlay));
        }

    }
    return answer;
}