const iplTeams = [
  {
    team: 'Mumbai Indians',
    city: 'Mumbai',
    captain: 'Hardik Pandya',
    primaryColor: '#004BA0',
    secondaryColor: '#FFD700',
  }, // Blue & Gold
  {
    team: 'Chennai Super Kings',
    city: 'Chennai',
    captain: 'Ruturaj Gaikwad',
    primaryColor: '#FFCB05',
    secondaryColor: '#1C2C5B',
  }, // Yellow & Navy Blue
  {
    team: 'Royal Challengers Bengaluru',
    city: 'Bengaluru',
    captain: 'Faf du Plessis',
    primaryColor: '#DA291C',
    secondaryColor: '#FFD700',
  }, // Red & Gold
  {
    team: 'Kolkata Knight Riders',
    city: 'Kolkata',
    captain: 'Shreyas Iyer',
    primaryColor: '#3A225D',
    secondaryColor: '#FFD700',
  }, // Purple & Gold
  {
    team: 'Delhi Capitals',
    city: 'Delhi',
    captain: 'Rishabh Pant',
    primaryColor: '#1746A2',
    secondaryColor: '#E30613',
  }, // Blue & Red
  {
    team: 'Rajasthan Royals',
    city: 'Jaipur',
    captain: 'Sanju Samson',
    primaryColor: '#EA1A8E',
    secondaryColor: '#1C2C5B',
  }, // Pink & Navy Blue
  {
    team: 'Sunrisers Hyderabad',
    city: 'Hyderabad',
    captain: 'Pat Cummins',
    primaryColor: '#F26522',
    secondaryColor: '#FFD700',
  }, // Orange & Gold
  {
    team: 'Lucknow Super Giants',
    city: 'Lucknow',
    captain: 'KL Rahul',
    primaryColor: '#00BFFF',
    secondaryColor: '#FFD700',
  }, // Light Blue & Gold
  {
    team: 'Gujarat Titans',
    city: 'Ahmedabad',
    captain: 'Shubman Gill',
    primaryColor: '#1C2C5B',
    secondaryColor: '#FFD700',
  }, // Navy Blue & Gold
  {
    team: 'Punjab Kings',
    city: 'Mohali',
    captain: 'Shikhar Dhawan',
    primaryColor: '#E30613',
    secondaryColor: '#C0C0C0',
  }, // Red & Silver
];

// let i = Math.floor(Math.random() * iplTeams.length) - random array index

let box = document.querySelector('#box');
let button = document.querySelector('button');
let body = document.querySelector('body');

button.addEventListener('click', () => {
  let i = Math.floor(Math.random() * iplTeams.length);

  // body.style.backgroundColor = `rgb(${r},${g},${b})`
  box.innerText = iplTeams[i].team;
  body.style.backgroundColor = `${iplTeams[i].primaryColor}`;
  box.style.backgroundColor = `${iplTeams[i].secondaryColor}`;
});
