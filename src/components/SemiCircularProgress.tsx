import {
  CircularProgressbarWithChildren,
} from "react-circular-progressbar";

import '../styles.css';

interface SemiCircularProgressBarProps {
  stats?: {
    score?: number;
  };
}

const SemiCircularProgressBar: React.FC<SemiCircularProgressBarProps> = ({
  stats,
}) => {
  return (
    <>
      <CircularProgressbarWithChildren value={Math.round(Number(stats?.score))}>
        {/* Put any JSX content in here that you'd like. It'll be vertically and horizontally centered. */}
        <img
          style={{ width: 80, marginTop: -5 }}
          src="https://i.imgur.com/b9NyUGm.png"
          alt="doge"
        />
        <div style={{ fontSize: 20, marginTop: -5 }}>
          <strong>{Math.round(Number(stats?.score))}%</strong>
        </div>
      </CircularProgressbarWithChildren>
    </>
  );
};

export default SemiCircularProgressBar;