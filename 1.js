var modules = $0.textContent.split('\n').slice(0, -1).map(m => parseInt(m, 10))

var getFuel = (m) => {
  var f = Math.floor(m/3) - 2
	return f > 0 ? f : 0
}

// Question 1
var result = modules.reduce((t, m) => {
    return t + getFuel(m);
}, 0)

// Question 2
var result = modules.reduce((t, m) => {
  while (getFuel(m) > 0) {
    t += getFuel(m)
    m = getFuel(m)
  }
	return t
}, 0)
