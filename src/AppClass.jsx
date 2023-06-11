import React from "react";
import colors from "./common/colors";
import './app.scss'

class AppClass extends React.Component{

    constructor(props) {
        super();
        this.state = {};
    }

    componentDidMount() {
        const randomIndex = Math.floor(Math.random() * colors.length);
        const color = colors[randomIndex];
        document.body.style.backgroundColor = color;
        this.setState({currentIndexColor: randomIndex})
    }

    render() {

        return(
        <div id="app">
        <h1 id="current-color">{colors[this.state.currentIndexColor]}</h1>
    
        <div class="colors">
            {
                colors.map((color,index) =>
                    <button key={index}
                    style={{backgroundColor: color}}
                    className={index === this.state.currentIndexColor ? 'active' : ''}
                    onClick={() => {
                        document.body.style.backgroundColor = color;
                        this.setState({currentIndexColor: index})
                    }}
                    >
                    {color}
                    </button>
                )
            }
        </div>
      </div>  
        )
    }
}

export default AppClass
