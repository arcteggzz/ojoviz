import svgFilePath from "../../../public/svgs/icons-svgs.svg";

const Icon = ({
  width,
  height,
  id,
  ...rest
}: {
  width: string;
  height: string;
  id: string;
}) => {
  return (
    <svg width={width} height={height} {...rest}>
      <use xlinkHref={`${svgFilePath}#${id}`} />
    </svg>
  );
};

export default Icon;
