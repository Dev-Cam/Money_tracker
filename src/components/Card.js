import './Card.css'

function Card(props) {
  // this classes const allows us to add classNames to custom components we have created, otherwise it would only apply the styles we set in card.css
  const classes= 'card ' + props.className;
  return(
    //If you are creating a custom component and plan to nest divs or other components inside it you must add props.children
    //ensure you pass props to the component where card is being used
    <div className={classes}>{props.children}</div>
  )
}

export default Card;