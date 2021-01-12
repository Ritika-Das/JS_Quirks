fetch('https://raw.githubusercontent.com/corysimmons/colors.json/master/colors.json')
  .then(response => response.json())
  .then(data => console.log(data));
