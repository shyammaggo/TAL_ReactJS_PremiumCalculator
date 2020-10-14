import React from "react";
import styled from "styled-components";
import "./Home.css";
import { Header } from "../Header/headerComponent";
import { convertNumberToWords } from "../Utilites/Numer2Words";
import Input from "../Input/InputComponent";
import { connect } from "react-redux";
import { getOccupationListAction } from "../../redux/getOccupationListAction";
import { formSubmitAction } from "../../redux/formSubmissionAction";

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isSubmit: false,
      name: "",
      age: "",
      sum: "",
      dob: "",
      occName:""
    };
  }
  componentDidMount() {
    this.props.getOccupationList();
  }
  formSubmission = (occList, age, sum, dob, name,occName) => {
    this.props.formSubmitApiCall({
      age: age,
      sumInsured: sum,
      Factor: occList

    });
    this.setState({ isSubmit: true, age, sum, dob, name,occName });
  };
  render() {
    const Wrapper = styled.div`
      text-align: center;
      margin: 10px;
      padding: 10px;
      background-color: #e7e7e7;
      border-radius: 10px;
      @media screen and (min-width: 0px) and (max-width: 639px) {
        width: 100%;
      }
      @media screen and (min-width: 640px) and (max-width: 959px) {
        width: 100%;
      }
      @media screen and (min-width: 960px) and (max-width: 2500px) {
        width: 100%;
      }
    `;
    const MainContainer = styled.div`
      text-align: left;
      border-top: 2px solid lightgrey;
      margin: 15px;
      @media screen and (min-width: 0px) and (max-width: 639px) {
        width: 100%;
      }
      @media screen and (min-width: 640px) and (max-width: 959px) {
        width: 100%;
      }
      @media screen and (min-width: 960px) and (max-width: 2500px) {
        width: 100%;
      }
    `;
    const MandatoryDiv = styled.div`
      font-size: 18px;
      text-align: center;
      color: red;
      margin-top: 20px;
      @media screen and (min-width: 0px) and (max-width: 639px) {
        width: 100%;
        fontsize: 16px;
      }
      @media screen and (min-width: 640px) and (max-width: 959px) {
        width: 100%;
      }
      @media screen and (min-width: 960px) and (max-width: 2500px) {
        width: 100%;
      }
    `;
    const AmountDiv = styled.div`
      font-size: 22px;
      text-align: center;
      margin-top: 20px;
      @media screen and (min-width: 0px) and (max-width: 639px) {
        width: 100%;
        fontsize: 16px;
      }
      @media screen and (min-width: 640px) and (max-width: 959px) {
        width: 100%;
      }
      @media screen and (min-width: 960px) and (max-width: 2500px) {
        width: 100%;
      }
    `;
    return (
      <Wrapper>
        <Header heading={"TAL Premium Calculator"} />
        <Header subHeading={"Calculate Premium"} isSubHeader={true} />
        <MainContainer>
          <MandatoryDiv>* marked fields are mandatory</MandatoryDiv>
          <Input
            listName={this.props.listName}
            formSubmitCallback={this.formSubmission}
            age={this.state.age}
            sum={this.state.sum}
            dob={this.state.dob}
            name={this.state.name}
          />

          <div>
            {this.props.premiumAmount > 0 && this.state.isSubmit ? (
              <AmountDiv>
                {"Premium Amount for " + this.state.occName + " : " + this.props.premiumAmount}
                <AmountDiv>
                  {"Premium Amount in words: " +
                    convertNumberToWords(this.props.premiumAmount)}
                </AmountDiv>
              </AmountDiv>
            ) : this.state.isSubmit ? (
              <MandatoryDiv style={{ textAlign: "center" }}>
                Please enter all the required fields.
              </MandatoryDiv>
            ) : null}
          </div>
        </MainContainer>
      </Wrapper>
    );
  }
}

const mapStateToProps = state => ({
  listName: state.occupationListReducer.occupationList,
  isloading: state.occupationListReducer.isLoad,
  premiumAmount: state.premiumReducer.premiumAmount
});
const mapDisptachToProps = {
  getOccupationList: getOccupationListAction.getOccupationListDataRequest,
  formSubmitApiCall: formSubmitAction.formDataRequest
};

export default connect(mapStateToProps, mapDisptachToProps)(Home);
