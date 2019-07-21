


const Column = styled.div`
@media only screen and (min-width: 768px) {    
      width: ${ props => {props.span ? props.span /12 *100: "8.33"}}%;
    }
    `;

export default {Row, Column};
