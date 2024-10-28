import icons from '../../assets/icons.svg';

const Icon = ({ name, width = 20, height = 20, className }) => (
  <svg width={width} height={height} className={className}>
    <use href={`${icons}#${name}`} />
  </svg>
);

export default Icon;
