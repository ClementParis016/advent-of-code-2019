var data = $0.textContent.replace('\n', '')

var process = input => {
  var p = input.split(',').map(i => parseInt(i, 10))
  p.splice(1, 1, 12)
  p.splice(2, 1, 2)

  for (var i = 0; i < p.length; i = i + 4) {
    var cs = p.slice(i, i + 4)
    var st = cs[0]

    if (st === 1) {
      var o = cs[3]
      p[o] = p[cs[1]] + p[cs[2]]
    } else if (st === 2) {
      var o = cs[3]
      p[o] = p[cs[1]] * p[cs[2]]
    } else {
      break
    }
  }

  return p
};

var result = process(data)[0]
