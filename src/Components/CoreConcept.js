

export default function CoreConcept({title, description ,image}) {
  return (
    <li>
      <img src={image} alt={title} width="100" />
      <h3>{title}</h3>
      <p>{description}</p>
    </li>
  );
}
// function CoreConcept(props) {
//   return (
//     <li>
//       <img src={props.image} alt={props.title} width="100" />
//       <h2>{props.title}</h2>
//       <p>{props.description}</p>
//     </li>
//   );
// }
