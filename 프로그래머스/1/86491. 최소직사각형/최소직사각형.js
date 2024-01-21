function solution(sizes) {
    var answer = 0;
    const widthArr = [];
    const heightArr = [];

    for(let i = 0 ; i < sizes.length ; i++) {
        let [width, height] = sizes[i];
        
        if(width < height) {
            [width, height] = [height, width];
        }
        widthArr.push(width);
        heightArr.push(height);
    }
    
    const maxWidth = Math.max(...widthArr);
    const maxHeight = Math.max(...heightArr);
    answer = maxWidth * maxHeight;
    return answer;
}