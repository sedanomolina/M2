import React from "react";

class Botones extends React.Component {
    constructor(props) {
        super(props);
    };
    render() {
        const {m1,m2} = this.props.alerts;
        const showAlert1 = () => alert(m1);
        const showAlert2= () => alert(m2);
        return (

            <div>
                <button onClick={showAlert1} >Módulo 1</button>
                <button onClick={showAlert2} >Módulo 2</button>
            </div>
        );
    };
};


export default Botones;