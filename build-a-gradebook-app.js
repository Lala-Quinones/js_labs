const scores = [];
function getAverage (scores) {
  let sum = 0;
  for (let num of scores) {
    sum += num;
  }
  return sum / scores.length;
}

function getGrade (studentScore) {
  if (studentScore === 100) {
  return "A+"
  } else if (studentScore >= 90 && studentScore <= 99) {
    return "A"
  } else if
(studentScore >= 80 && studentScore <= 89) {
    return "B"
} else if
(studentScore >= 70 && studentScore <= 79) {
    return "C"
} else if
(studentScore >= 60 && studentScore <= 69) {
    return "D"
} else {
  return "F"
}
} 

function hasPassingGrade (studentScore) {
  if(getGrade(studentScore)==="F") {
    return false
  }
  else {
    return true
  }
}

function studentMsg (scores, studentScore) {
  if (hasPassingGrade(studentScore)) {
  return `Class average: ${getAverage(scores)}. Your grade: ${getGrade(studentScore)}. You passed the course.`
  } else {
  return `Class average: ${getAverage(scores)}. Your grade: ${getGrade(studentScore)}. You failed the course.`
  }
}