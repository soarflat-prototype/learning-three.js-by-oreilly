import Stats from 'stats-js';

const stats = () => {
  const stats = new Stats();

  stats.setMode(0);

  stats.domElement.style.position = 'absolute';
  stats.domElement.style.left = '0px';
  stats.domElement.style.top = '0px';

  document.getElementById('stats-output').appendChild(stats.domElement);

  return stats;
};

export default stats();

