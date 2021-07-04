/*
//////////////////////////////////////////////////////////////////////////////////////
//                                                                                  //
//                                                                                  //
//                                                                                  //
//            _____               _   _                                             //
//           |  ___| __ __ _  ___| |_(_) ___                                        //
//           | |_ | '__/ _` |/ __| __| |/ _ \                                       //
//           |  _|| | | (_| | (__| |_| | (_) |                                      //
//           |_|  |_|  \__,_|\___|\__|_|\___/                                       //                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              . you done something right . now you know where to look @.
//                                                                                  //
//                                                                                  //
//                                                                                  //
//                                                                                  //
//                                                                                  //
//                                                                                  //
//          @title :: Fractio Framework React App                                   // 
//          @id :: FR-90801                                                         //
//          @versiom :: 1.0.0                                                       //
//                                                                                  //
//          @description ::                                                         //
//          The Factory FR-90801 is Layer Input for the React Frontend.             //
//          It is the initial connection to IPFS for every File on Fractio          //
//                                                                                  //
//                                                                                  //
//          @author :: fractio.xyz                                                  //
//          @b2bContact :: irvin@fractio.xyz                                        //
//          @OpSecContact :: nmisner@fractio.xyz                                    //
//          @DigitalArchitecture :: aron@fractio.xyz                                //
//          @SocialMediaContact :: poblano.daniel@fractio.xyz                       //
//          @CommunityManagement :: louell_sala@fractio.xyz                         //
//                                                                                  //
//                                                                                  //
//                                                                                  //
//////////////////////////////////////////////////////////////////////////////////////
*/
// Imports
import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import {
  getPyeAssets,
  getPyeData,
  createPye,
  updateWPname,
  updateWPsym,
  updateWPdesc,
} from "../../action/pyeActions";
import { Button, InputGroup, Input, Form } from "reactstrap";
class MaskOne extends Component {
  static propTypes = {
    pyes: PropTypes.array,
    workingPYE: PropTypes.object,
    updateWPname: PropTypes.func,
    updateWPsym: PropTypes.func,
    updateWPdesc: PropTypes.func,
  };
  state = {
    formatX: 800,
    formatY: 800,
    name: "",
    desc: "",
    symbol: "",
    VRF: false,
    JSRN: Math.random() * 10 ** 18,
    bg: "#9f95c3",
    col: "lightgrey",
    booly: true,
    layers: [],
    // "#9fe6c3"
    // "#9f95c3"
  };
  onChangeName = (e) => {
    //e.preventDefault();
    console.log(e.target.value);
    this.setState({ name: document.getElementById(e.target.id).value });
    // this.props.updateWPname(document.getElementById(e.target.id).value);
    // console.log(this.state);
  };
  onChangeDesc = (e) => {
    //e.preventDefault();
    console.log(e.target.value);
    this.setState({ desc: document.getElementById(e.target.id).value });
    // this.props.updateWPdesc(document.getElementById(e.target.id).value);
    console.log(this.state);
  };

  onChangeSym = (e) => {
    //e.preventDefault();
    console.log(e.target.value);
    this.setState({ symbol: document.getElementById(e.target.id).value });
    // this.props.updateWPsym(document.getElementById(e.target.id).value);
    console.log(this.state);
  };
  onSelect = (e) => {
    e.preventDefault();
    const vals = JSON.parse(e.target.value);
    // this.props.createPye({ formatX: vals.x, formatY: vals.y });
    this.setState({ formatX: vals.x, formatY: vals.y });
    document.getElementById("formatX").disabled = true;
    document.getElementById("formatY").disabled = true;
    // console.log(vals.x,vals.y);
  };
  onChangeVRF = (e) => {
    e.preventDefault();
    this.setState({ JSRN: document.getElementsByName(e.target.name).value });
  };
  onChangeFY = (e) => {
    e.preventDefault();
    this.setState({ formatY: document.getElementsByName(e.target.name).value });
  };
  onChangeFX = (e) => {
    e.preventDefault();
    this.setState({ formatX: document.getElementsByName(e.target.name).value });
  };
  onHelp = (e) => {
    e.preventDefault();

    // Help Modal
    alert(
      "A unique VRF ID (verifiaby random number) will be generated by our Chainlink Oracle..."
    );
  };
  onVRF = (e) => {
    e.preventDefault();
    if (this.state.VRF === false) {
      this.setState({
        bg: "#9fe6c3",
        col: "#9f95c3",
        VRF: !this.state.VRF,
      });
      document.getElementById("vrftxt").disabled = true;
      document.getElementById("vrftxt").value = null;
      document.getElementById("vrftxt").placeholder =
        "Your Unique ID will be generated at mint !";
    } else {
      this.setState({
        bg: "#9f95c3",
        col: "lightgrey",
        VRF: !this.state.VRF,
      });
      document.getElementById("vrftxt").disabled = false;
      const jsrn = Math.random() * 10 ** 18;
      document.getElementById("vrftxt").value = jsrn;
      this.setState({ JSRN: jsrn });
    }
  };
  onClick = (e) => {
    e.preventDefault();
    console.log(this.state);
    // dthis.setState({booly: true});
    this.props.createPye(this.state);
  };
  render() {
    return !this.props.workingPYE.booly ? (
      <div>
        <h1 className="m-0 p-0">Create a PYE Token !</h1>
        <Form>
          <hr></hr>

          <Input
            type="text"
            name="pye_name"
            style={{
              fontSize: "2em",
              height: "2em",
              width: "80%",
              float: "left",
            }}
            value={this.props.workingPYE.name}
            id="name"
            placeholder="Token Name"
            onChange={this.onChangeName}
          />

          <Input
            type="text"
            name="pye_name"
            style={{
              fontSize: "2em",
              height: "2em",
              width: "20%",
              float: "left",
            }}
            value={this.state.symbol}
            id="symbol"
            placeholder="$YMBOL"
            onChange={this.onChangeSym}
          />
          <Input
            value={this.state.desc}
            onChange={this.onChangeDesc}
            type="text"
            name="pye_desc"
            id="desc"
            placeholder="Description"
            bssize="lg"
            style={{ fontSize: "2em", height: "2em" }}
          />

          <InputGroup>
            <Input
              onChange={this.onSelect}
              type="select"
              name="pye_format_select"
              bssize="lg"
              style={{ fontSize: "2em", height: "2em" }}
              defaultValue={`{"x":"${this.state.formatX}", "y":"${this.state.formatY}"}`}
            >
              <option name="100x800" value='{"x":"100", "y":"800"}'>
                1:8 Portrait
              </option>

              <option name="300x800" value='{"x":"300", "y":"800"}'>
                3:8 Portrait
              </option>

              <option name="500x800" value='{"x":"500", "y":"800"}'>
                5:8 Portrait
              </option>

              <option name="700x800" value='{"x":"700", "y":"800"}'>
                7:8 Portrait
              </option>

              <option name="800x800" value='{"x":"800", "y":"800"}'>
                8:8 Square
              </option>

              <option name="800x700" value='{"x":"800", "y":"700"}'>
                8:7 Landscape
              </option>

              <option name="800x500" value='{"x":"800", "y":"500"}'>
                8:5 Landscape
              </option>

              <option name="800x300" value='{"x":"800", "y":"300"}'>
                8:3 Landscape
              </option>

              <option name="800x100" value='{"x":"800", "y":"100"}'>
                8:1 Landscape
              </option>
            </Input>
            <Input
              onChange={this.onChangeFX}
              value={this.state.formatX}
              id="formatX"
              disabled
              type="text"
              name="fwidth"
              placeholder="800px"
              bssize="lg"
              style={{ fontSize: "2em", height: "2em" }}
            />
            <Input
              onChange={this.onChangeFY}
              value={this.state.formatY}
              id="formatY"
              disabled
              type="text"
              name="fheight"
              placeholder="800px"
              bssize="lg"
              style={{ fontSize: "2em", height: "2em" }}
            />
          </InputGroup>
          <InputGroup>
            <Input
              type="button"
              style={{
                background: this.state.bg,
                color: this.state.col,
                fontSize: "2em",
                height: "2em",
                width: "10%",
              }}
              onClick={this.onVRF}
              value={this.state.VRF ? "ON" : "OFF"}
            />

            <Input
              type="text"
              id="vrftxt"
              value={this.state.VRF ? "" : this.state.JSRN}
              style={{ fontSize: "2em", height: "2em", width: "80%" }}
              onChange={this.onChangeVRF}
            />
          </InputGroup>
          <label>
            Unique ID (optional)
            <Button
              className="btn btn-info"
              style={{
                borderRadius: "9px",
                height: "18px",
                width: "18px",
                textAlign: "center",
                fontSize: "0.8em",
                color: "ivory",
                padding: "0",
                marginLeft: "1em",
              }}
              onClick={this.onHelp}
            >
              ?
            </Button>
          </label>
          <Button
            onClick={this.onClick}
            bssize="lg"
            style={{
              marginTop: "2em",
              color: "lightgrey",
              background: "#9f95c3",
              fontSize: "2em",
              height: "2em",
              width: "100%",
            }}
          >
            START CREATING{" "}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-bricks"
              viewBox="0 0 16 16"
            >
              <path d="M0 .5A.5.5 0 0 1 .5 0h15a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-.5.5H14v2h1.5a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-.5.5H14v2h1.5a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-.5.5H.5a.5.5 0 0 1-.5-.5v-3a.5.5 0 0 1 .5-.5H2v-2H.5a.5.5 0 0 1-.5-.5v-3A.5.5 0 0 1 .5 6H2V4H.5a.5.5 0 0 1-.5-.5v-3zM3 4v2h4.5V4H3zm5.5 0v2H13V4H8.5zM3 10v2h4.5v-2H3zm5.5 0v2H13v-2H8.5zM1 1v2h3.5V1H1zm4.5 0v2h5V1h-5zm6 0v2H15V1h-3.5zM1 7v2h3.5V7H1zm4.5 0v2h5V7h-5zm6 0v2H15V7h-3.5zM1 13v2h3.5v-2H1zm4.5 0v2h5v-2h-5zm6 0v2H15v-2h-3.5z" />
            </svg>
          </Button>
        </Form>
      </div>
    ) : null;
  }
}
const mapStateToProps = (state) => ({
  pyes: state.pyeState.pyes,
  workingPYE: state.pyeState.workingPYE,
});

export default connect(mapStateToProps, {
  getPyeAssets,
  getPyeData,
  createPye,
  updateWPdesc,
  updateWPname,
  updateWPsym,
})(MaskOne);
