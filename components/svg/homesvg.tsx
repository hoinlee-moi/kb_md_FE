type PropsType = {
  fill?: boolean;
};
export default function HomeSvg({ fill }: PropsType) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="35px" height="35px" viewBox="0 0 24 24" fill={fill ? "#1c274c" : "none"}>
      <path
        d="M4 10L12 3L20 10L20 20H15V16C15 15.2044 14.6839 14.4413 14.1213 13.8787C13.5587 13.3161 12.7957 13 12 13C11.2044 13 10.4413 13.3161 9.87868 13.8787C9.31607 14.4413 9 15.2043 9 16V20H4L4 10Z"
        stroke="#001A72"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
