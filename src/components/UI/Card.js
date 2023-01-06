import styled from "styled-components";

//attacked template literal...df js feature
//card is method on styled object

// Media Query
// const FormCard = styled.div`
//   border-radius: 12px;
//   box-shadow: 0 1px 8px rgba(0, 0, 0, 0.25);

//   @media (min-width: 768px) {
//     width: auto;
//   }
// `;

const FormCard = styled.div`
  border-radius: 12px;
  box-shadow: 0 1px 8px rgba(0, 0, 0, 0.25);
`;

function Card(props) {
  const classes = 'card ' + props.className;
  
  return (
    // <div className={classes}
      <FormCard className={classes}>
        {props.children}
      </FormCard>
      // </div>
    );
}

export default Card;