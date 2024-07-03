// Function to determine greeting based on ride distance
function scuberGreetingForFeet(distance) {
  if (distance <= 400) {
    return 'This one is on me!';
  } else if (distance > 400 && distance <= 2000) {
    return 'That will be twenty bucks.';
  } else if (distance > 2000 && distance <= 2500) {
    return 'I will gladly take your thirty bucks.';
  } else {
    return 'No can do.';
  }
}

// Function to check if the destination city is NYC using a ternary operator
function ternaryCheckCity(city) {
  return city === 'NYC' ? 'Ok, sounds good.' : 'No go.';
}

// Function to respond based on tip generosity using a switch statement
function switchOnCharmFromTip(tipDescription) {
  switch (tipDescription) {
    case 'generous':
      return 'Thank you so much.';
    case 'not as generous':
      return 'Thank you.';
    default:
      return 'Bye.';
  }
}