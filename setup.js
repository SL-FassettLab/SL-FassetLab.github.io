# SL-FassetLab.github.io
function init() {
  Tabletop.init( {
    key: '1YfU6MiCcJvIkKFhukfpL5Mwosh41Cv45MQZdBwbQgec',
    simpleSheet: true }
  ).then(function(data, tabletop) { 
    console.log(data)
  })
}
window.addEventListener('DOMContentLoaded', init)
