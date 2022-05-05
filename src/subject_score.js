
class get_subjects extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <div id = "get_subject">
                <
                <label id = "sno" >{sub_no}</label>
                <input type = "text" id = "sub_name"></input>
                <input type = "text" id = "class"></input>
                <input type = "text" id = "pass_percentage"></input>
                <input type = "text" id = "Sub_average"></input>
            </div>
        )
    }
    
}