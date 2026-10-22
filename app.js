function countPathCommands(d) {
  const matches = d.match(/[MLHVCSQTAZ]/gi);
  return matches ? matches.length : 0;
}

if (typeof document !== 'undefined') {
  document.addEventListener('DOMContentLoaded', () => {
    const input = document.getElementById('pathInput');
    const path = document.getElementById('svgPath');
    function update() { path.setAttribute('d', input.value); }
    input.addEventListener('input', update);
    update();
  });
}
if (typeof module !== 'undefined') module.exports = { countPathCommands };
