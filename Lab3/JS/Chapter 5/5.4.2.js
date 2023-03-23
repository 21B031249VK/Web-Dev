styles = ['Jazz', 'Blues'];
styles.push('Pock-n-Roll');
styles[Math.floor((styles.length - 1) / 2)] = 'Classics';
alert(styles.shift());
styles.unshift('Rap', 'Reggae');

//Jazz, Blues
// Jazz, Blues, Rock-n-Roll
// Jazz, Classics, Rock-n-Roll
// Classics, Rock-n-Roll
// Rap, Reggae, Classics, Rock-n-Roll