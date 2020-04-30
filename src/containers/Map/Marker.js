function mapsSelector(name, lat, long) {
  if (
    /* if we're on iOS, open in Apple Maps */
    navigator.platform.indexOf('iPhone') !== -1 ||
    navigator.platform.indexOf('iPod') !== -1 ||
    navigator.platform.indexOf('iPad') !== -1
  ) {
    window.open(`maps://maps.google.com/maps?daddr=${lat},${long}&amp;ll=`);
    /* else use Google */
  } else {
    window.open(`https://maps.google.com/maps/dir/${name}`);
  }
}

// Google maps API InfoWindow cant take html string or node
const Marker = (props) => {
  console.log(props)
  const navigationButton = document.createElement('a');
  navigationButton.classList =
    'f4 no-underline black pointer dim inline-flex items-center pa3 border-box';

  const cardText = document.createElement('span');
  cardText.classList = 'mr2';
  cardText.innerText = props.name;

  const icon = document.createElement('i');
  icon.classList = 'fas fa-directions fa-2x';

  navigationButton.appendChild(cardText);
  navigationButton.appendChild(icon);

  navigationButton.addEventListener('click', () => {
    mapsSelector(props.name, props.latitude, props.longitude);
  });

  return navigationButton;
};

export default Marker;
