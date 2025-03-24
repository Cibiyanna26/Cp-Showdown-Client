import {
  CircularProgressbar,
  CircularProgressbarWithChildren,
  buildStyles,
} from "react-circular-progressbar";

import '../styles.css';

const SemiCircularProgressBar = () =>{
  return (
    <>
      <CircularProgressbarWithChildren value={66}>
        {/* Put any JSX content in here that you'd like. It'll be vertically and horizonally centered. */}
        <img
          style={{ width: 80, marginTop: -5 }}
          src="https://i.imgur.com/b9NyUGm.png"
          alt="doge"
        />
        <div style={{ fontSize: 20, marginTop: -5 }}>
          <strong>66%</strong> mate
        </div>
      </CircularProgressbarWithChildren>
    </>
  );
}

export default SemiCircularProgressBar;