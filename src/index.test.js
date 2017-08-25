it('runs without crashing', () => {
  const div = document.createElement('div')
  div.id = 'root'
  document.body.appendChild(div)
  require('.')
})
