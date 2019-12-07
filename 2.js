var data = $0.textContent.replace('\n', '')

var process = (input, noun, verb) => {
  var p = input.split(',').map(i => parseInt(i, 10))
  p.splice(1, 1, noun)
  p.splice(2, 1, verb)

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

  return p[0]
};

// Part 1
var result = process(data, 12, 2)

// Part 2
// With trial an error I found out that the increasing/decrasing the verb by 1 increased/decreased the result by 1.
// So, I put the verb at 0 and started playing with noun and found out that the result increase/decrease was correlated to it.
// I tried some values for verb until I found the first value that would give a result higher than expected.
// I picked that value minus 1, calculated the difference with the expected result: that difference is actually the verb.
var noun = 53;
var verb = 98;
var result = process(data, noun, verb) // -> 19690720
var answer = 100 * noun + verb // -> 5398
