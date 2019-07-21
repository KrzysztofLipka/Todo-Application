import * as React from 'react';
import styled from 'styled-components';

const Row = styled.div`
&::after {
    content: "";
    clear: both;
    display: table;
}`;


export default Row;