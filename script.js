const input = document.getElementById('input')
const output = document.getElementById('output')

const sampleCode = `; Some brackets in a comment that will be ignored )]}{[(
(write-line "Some ))( parens in a string }}} literal for  \\"No ))( Reason\\"")

(defun csg-intersection-intersect-all (obj-a obj-b)
(lambda (ray)
  (flet ((inside-p (obj) (lambda (d) (inside-p obj (ray-point ray d)))))
    (merge 'fvector
           (remove-if-not (inside-p obj-b) (intersect-all obj-a ray))
           (remove-if-not (inside-p obj-a) (intersect-all obj-b ray))
           #'<))))`

const hasBalancedBrackets = (str) => {
  str = str.replace(/;.*/, '') // strip LISP comments
  const stack = []
  const map = {
    '(': ')',
    '[': ']',
    '{': '}',
  }
  let isInQuote = false

  for (let i = 0; i < str.length; i++) {
    const char = str[i]
    // account for LISP double quote string literals
    if (char === '"' && str[i - 1] !== '\\') isInQuote = !isInQuote
    if (char in map && !isInQuote) stack.push(char)
    else if (Object.values(map).indexOf(char) > -1 && !isInQuote) {
      if (char === map[stack.slice(-1)]) stack.pop()
      else return false
    }
  }

  return stack.length !== 0 ? false : true
}

const updateValue = () => {
  const valid = hasBalancedBrackets(input.value)
  output.innerText = valid
    ? '✌️ Piece and happiness ✌️'
    : '🔥 WHOA!! Bad code alert! 🔥'
  if (valid) output.classList.remove('invalid')
  else output.classList.add('invalid')
}

input.value = sampleCode
updateValue()

window.addEventListener('input', updateValue)
