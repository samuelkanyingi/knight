function knightMove(start, end) {
	const moves = [
		[2,1],[1,2],[-1,2],[-2,1],
		[-2,-1],[-1,-2],[1,-2],[2, -1]
	];
	//check if a spot is available
	if(!isValidPosition(start) || !isValidPosition(end)) return "invalid positions. Positions must be  within [0,0] to [7,7].";
	const queue=[[start, [start]]];
	const visited= new Set();
	visited.add(start.toString());
	while(queue.length>0) {
		const [currentPos, path] =  queue.shift();
		// did we find it
		if(currentPos[0] === end[0] && currentPos[1] === end[1])  return formatResult(path);
		for(const [dx,dy] of moves){
			const newX = currentPos[0]+dx;
			const newY= currentPos[1]+dy;
			const newPos=[newX, newY];

			if(isValidPosition(newPos)){
				const newPosKey = newPos.toString();
				if(!visited.has(newPosKey)){
					visited.add(newPosKey);
					queue.push([newPos, [...path, newPos]]);
				}
			}
		}	
	}
	function isValidPosition([x, y]){
		return x>=0 && x<=7 && y>=0 &&y<=7;
	}
	function formatResult(path){
		const moves=path.length-1;
		let result = `You made it in ${moves} move ${moves !==1 ? 's':''}! Here is your path: \n`;
		path.forEach(position => {
			result += ` [${position}]\n`;
		});
		return result;
	}
}
console.log(knightMove([0,0], [7,7]))
