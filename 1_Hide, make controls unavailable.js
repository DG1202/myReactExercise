class Inputs extends React.Component {
    constructor(props){
        super(props);
        this.state = {visible: false, enable: false, name: ''}
    }
    changeVisibility = () =>{this.setState({visible: !this.state.visible})}
    changeAccessibility = () =>{this.setState({enable: !this.state.enable})}
    changeName = (e) => {this.setState({name: e.target.value})}
    render(){
        return (
            <div>
               <p>Hide
                  <input type = 'checkbox'
                         checked = {this.state.visible}
                         onChange = {this.changeVisibility}/>
                         {' '}
                         Not available
                         <input type = 'checkbox'
                                checked = {this.state.enable}
                                onChange = {this.changeAccessibility}/>
                </p>
                <p>Name:
                    {!this.state.visible && <input type = 'text'
                                                   value = {this.state.name}
                                                   onChange = {this.changeName}
                                                   disabled ={this.state.enable}
                                            />
                    }
                </p>
            </div>
        );
    }
}

ReactDOM.render(
<Inputs/>,
    document.getElementById('root')
);