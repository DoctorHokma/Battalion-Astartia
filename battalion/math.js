const MathHelper = {};

MathHelper.isRectangleRectangleIntersect = function(x1, y1, width1, height1, x2, y2, width2, height2) {
    return x1 + width1 >= x2 && x1 <= x2 + width2 && y1 + height1 >= y2 && y1 <= y2 + height2;
}

MathHelper.isPointPointIntersect = function(x1, x2, y1, y2) {
    return x1 === x2 && y1 === y2;
}
  
MathHelper.isCircleRectangleIntersect = function(circleX, circleY, circleRadius, rectangleX, rectangleY, rectangleWidth, rectangleHeight) {
    const closestX = Math.max(rectangleX, Math.min(circleX, rectangleX + rectangleWidth));
    const closestY = Math.max(rectangleY, Math.min(circleY, rectangleY + rectangleHeight));
    
    const distanceX = circleX - closestX;
    const distanceY = circleY - closestY;
    
    const distanceSquared = (distanceX * distanceX) + (distanceY * distanceY);
    const radiusSquared = circleRadius * circleRadius;

    return distanceSquared < radiusSquared;
}
  
MathHelper.isCircleCicleIntersect = function(cx1, cy1, r1, cx2, cy2, r2) {
	const distanceX = cx1 - cx2;
	const distanceY = cy1 - cy2;
	const distanceSquared = (distanceX * distanceX) + (distanceY * distanceY);
	const radiiSum = r1 + r2;
  
	return distanceSquared < (radiiSum * radiiSum);
}

MathHelper.toRadian = function(degree) {
  	return degree * Math.PI / 180;
}

MathHelper.toAngle = function(radian) {
	return radian * 180 / Math.PI;
}

MathHelper.normalizeAngle = function(degree) {
	return ((degree % 360) + 360) % 360;
}

MathHelper.normalizeValue = function(value, min, max) {
	return (value - min) / (max - min);
}

MathHelper.lerpValue = function(start, end, factor) {
	return start + (end - start) * factor;
}
  
MathHelper.clampValue = function(value, upperLimit, lowerLimit) {
	if(value > upperLimit) {
		return upperLimit;
	} else if (value < lowerLimit) {
		return lowerLimit;
	}

	return value;
}

MathHelper.getRandomNumber = function(param_minVal, param_maxVal) {
	param_maxVal -= param_minVal;
	param_maxVal++;

	let val = Math.random() * param_maxVal;
	val = Math.floor(val);
	val += param_minVal;

	return val;
}

MathHelper.getDistance = function(x1, y1, x2, y2) {
	return Math.sqrt((x1 - x2) ** 2 + (y1 - y2) ** 2);
}

MathHelper.getRandomElement = function(list) {
	return list[Math.floor(Math.random() * list.length)];
}

MathHelper.loopValue = function(value, upperLimit, lowerLimit) {
	if(value > upperLimit) {
	  return lowerLimit;
	} else if(value < lowerLimit) {
	  return upperLimit;
	}
  
	return value;
}

MathHelper.getRandomChance = function() {
	const random = Math.random() * 100;
	const chance = Math.floor(random) + 1;

	return chance;
}