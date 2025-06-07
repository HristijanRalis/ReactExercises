import { Component } from 'react'

interface PropsI {
    label: string;
   
}

 class Button extends Component<PropsI> {
    constructor(props: PropsI){
        super(props);
        console.log("Button", props)
    }
  render() {
    return (
      <div>{this.props.label}</div>
    )
  }
}
export default Button;