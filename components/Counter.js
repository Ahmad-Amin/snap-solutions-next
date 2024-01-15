import CountUp from "react-countup";
import ReactVisibilitySensor from "react-visibility-sensor";
const Counter = ({ end, decimals }) => {
  return (
    <CountUp
      end={end ? end : 100}
      duration={3}
      decimals={decimals ? decimals : 0}
    >
      {({ countUpRef, start }) => (
        <ReactVisibilitySensor onChange={start} delayedCall>
          <span
            data-from="0"
            style={{ fontSize: 45, color: "#1f4583" }}
            ref={countUpRef}
          >
            count
          </span>
        </ReactVisibilitySensor>
      )}
    </CountUp>
  );
};

export default Counter;
