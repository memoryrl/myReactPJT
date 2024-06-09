// 2024-06-08 리액트 스터디 1일차
import { Component } from "react";
import "./common.css";

// MyComponent
import MyComponent from "./MyComponent";

// Counter
import Counter from "./Counter";

// Say
import Say from "./Say";

// EventPractice
import EventPractice from "./EventPractice";

// ValidationSample
import ValidationSample from "./ValidationSample";

// ScrollBox
import ScrollBox from "./ScrollBox";

// IterationSample
import IterationSample from "./IterationSample";

// 2024-06-09 리액트 스터디 2일차

// LifeCycleSample, ErrorBoundary
import LifeCycleSample from "./LifeCycleSample";
import ErrorBoundary from "./ErrorBoundary";

// Info
import Info from "./Info";

// Average
import Average from "./Average";

// SassComponent
import SassComponent from "./SassComponent";

// CSSModule
import CSSModule from "./CSSModule";

// StyledComponent
import StyledComponent from "./StyledComponent";

// 랜덤 색상을 생성합니다.
function getRandomColor() {
  return "#" + Math.floor(Math.random() * 16777215).toString(16);
}

class App extends Component {
  state = {
    color: "#000000",
  };

  handleClick = () => {
    this.setState({
      color: getRandomColor(),
    });
  };

  render() {
    return (
      <>
        <section>
          <label>MyComponent</label>
          <MyComponent name="React" favoriteNumber={24}>
            <b>리액트</b>
          </MyComponent>
        </section>
        <section>
          <label>Counter</label>
          <Counter />
        </section>
        <section>
          <label>Say</label>
          <Say />
        </section>
        <section>
          <label>EventPractice</label>
          <EventPractice />
        </section>
        <section>
          <label>ValidationSample</label>
          <ValidationSample />
        </section>
        <section>
          <label>ScrollBox</label>
          <ScrollBox ref={(ref) => (this.scrollBox = ref)} />
          <button onClick={() => this.scrollBox.scrollToBottom()}>
            맨 밑으로
          </button>
        </section>
        <section>
          <label>IterationSample</label>
          <IterationSample />
        </section>
        <section>
          <label>LifeCycleSample</label>
          <button onClick={this.handleClick}>랜덤 색상</button>
          <ErrorBoundary>
            <LifeCycleSample color={this.state.color} />
          </ErrorBoundary>
        </section>
        <section>
          <label>Info</label>
          <Info />
        </section>
        <section>
          <label>Average</label>
          <Average />
        </section>
        <section>
          <label>SassComponent</label>
          <SassComponent />
        </section>
        <section>
          <label>CSSModule</label>
          <CSSModule />
        </section>
        <section>
          <label>StyledComponent</label>
          <StyledComponent />
        </section>
      </>
    );
  }
}

export default App;
