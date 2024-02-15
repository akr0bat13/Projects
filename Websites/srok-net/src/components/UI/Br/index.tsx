import { FC } from "react";

interface IBr {
  color?: string;
}

const Br: FC<IBr> = ({ color }) => (
  <div
    style={{
      border: `0.5px solid ${color}`,
      borderRadius: "50%",
      padding: "10px 0",
    }}
  ></div>
);

export default Br;
