import React from "react";
import Constants from "../../constant.json";
import "./input.css";

class Input extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: this.props.name ? this.props.name : "",
      age:  this.props.age ? this.props.age : "",
      dob:  this.props.dob ? this.props.dob : "",
      sum:  this.props.sum ? this.props.sum : "",
      occ:  "",
      errMsg: false,
      occList:"",
      ageError:false

    };
  }
  //trigger event when user enters any values in the input fields.
  handler = event => {
    this.setState({ [event.target.name]: event.target.value });
  };
  //to validate the age when user inputs.
  ageHandler=event =>{
    if(event<=100 && event>=0 )
        return true
    else{
        this.setState({
          ageError:true,age:""
        })
        return false
      }

  };

  formSubmission = event => {
   
    let list=event.target.value.split('|')
    let factor=list[0];
    let occName=list[1];
    if (
            (this.state.name === "" ||
            this.state.age === "" ||
            this.state.dob === "" ||
            this.state.sum === "") && (this.state.occList==="")
      ) 
      {
      
        this.setState({ errMsg: true });
      }
    else if(this.state.occList !== factor){
       this.props.formSubmitCallback(
                        factor,
                        this.state.age,           
                        this.state.sum,
                        this.state.dob,
                        this.state.name,
                        occName
                      );
    }
    else {
      
      this.props.formSubmitCallback(
        factor,
        this.state.age,
        this.state.sum,
        this.state.dob,
        this.state.name,
        occName
      );
      this.setState({...this.state,occList:factor});
    }
  };
  render() {
    let date = new Date();
    date = date.toISOString().substr(0, 10);
    date = date.toString();

    return (
      <div className={"mainDiv"}>
        <div className={"wrapDiv"}>
          <label className={"labelDiv"}>
            {Constants[0].labelName}: <font color="red">* </font>
          </label> <br/>
          <input
            className={"inputDiv"}
            type={Constants[0].type}
            placeholder={Constants[0].placeHolder}
            required
            value={this.state.name === "" ? this.props.name : this.state.name}
            name={Constants[0].id}
            maxLength="40"
            onChange={e => this.handler(e)}
          />

          {this.state.name.length < 1 && this.state.errMsg ? (
            <div className={"warningDiv"}>
              {"*" + Constants[0].errorMessage}
            </div>
          ) : null}
        </div>
        <div className={"wrapDiv"}>
          <label className={"labelDiv"}>
            {Constants[1].labelName}: <font color="red">* </font>
          </label> <br/>
          <input
            className={"inputDiv"}
            type={Constants[1].type}
            maxLength="3"
            placeholder={Constants[1].placeHolder}
            value={this.state.age === "" ? this.props.age : this.state.age}
            required
            min="0"
            max="100"
            onKeyPress={(e)=>this.ageHandler(e.target.value)}
            name={Constants[1].id}
            onChange={e => this.handler(e)}
          />
                {this.state.age.length < 1 && this.state.errMsg ? (
                  <div className={"warningDiv"}>
                    {"*" + Constants[1].errorMessage}
                  </div>
                ) : this.state.ageError && this.state.age.length>3 ? 
                    <div className={"warningDiv"}>
                      {"*" + Constants[1].errorMessage}
                    </div> : null
                  }
        </div>
        <div className={"wrapDiv"}>
          <label className={"labelDiv"}>
            {Constants[2].labelName}: <font color="red">*</font>
          </label> <br/>
          <input
            className={"inputDiv"}
            type={Constants[2].type}
            placeholder={Constants[2].placeHolder}
            max={date}
            value={this.state.dob === "" ? this.props.dob : this.state.dob}
            required
            name={Constants[2].id}
            onChange={e => this.handler(e)}
          />
          {this.state.dob.length < 1 && this.state.errMsg ? (
            <div className={"warningDiv"}>
              {"*" + Constants[2].errorMessage}
            </div>
          ) : null}
        </div>
        <div className={"wrapDiv"}>
          <label className={"labelDiv"}>
            {Constants[3].labelName}: <font color="red">* </font>
          </label> <br/>
          <input
            className={"inputDiv"}
            type={Constants[3].type}
            placeholder={Constants[3].placeHolder}
            value={this.state.sum === "" ? this.props.sum : this.state.sum}
            min="0"
            max="100000"
            required
            name={Constants[3].id}
            onChange={e => this.handler(e)}
          />
          {this.state.sum.length < 1 && this.state.errMsg ? (
            <div className={"warningDiv"}>
              {"*" + Constants[3].errorMessage}
            </div>
          ) : null}
        </div>

        <div style={{ marginTop: "20px", textAlign: "left" }}>
          <label className={"labelDiv"}>
            {Constants[4].labelName}: <font color="red">* </font>
          </label>
          <br/>
          <select
            className={"inputDiv"}
            name="list"
            id="list"
            onChange={this.formSubmission}
          >
            {this.props.listName &&
              this.props.listName.length > 0 &&
              this.props.listName.map((value, index) => (
                <option key={index}  value={value.factor + '|' + value.occupationName }>
                  {value.occupationName}
                </option>
              ))}
          </select>
        </div>
      </div>
    );
  }
}

export default Input;
