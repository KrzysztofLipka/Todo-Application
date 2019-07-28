import * as React from 'react';
//import './Header.css';




interface IDashboardView{
    name: string;
    timerCycles: number;
}

class HeaderView extends React.Component<{}>
{
    constructor(props: {}) {
        super(props);
    }

    render(){
        return (
          <div className="HeaderContainer">
                header
                         
          </div>
        );
      }
 
}

export default HeaderView;