import type { IMetricCardProps } from "../../types/props/ICards";

const IMetricCard: React.FC<IMetricCardProps> = (props) => {
  const {
    title,
    value,
    valueClassName,
    iconClassName,
    Icon,
    subtitle,
    subtitleClassName,
  } = props;

  return (
    <>
      <div
        className="bg-white flex flex-col justify-between px-6 py-4 gap-0 rounded-xl
            border border-black/10"
      >
        <p className="font-ui font-medium text-gray-500">{title}</p>
        <div className="flex justify-between">
          <h1 className={`font-bold text-xl ${valueClassName}`}>{value}</h1>
          <Icon className={iconClassName} />
        </div>
        <p className={`font-ui ${subtitleClassName}`}>{subtitle}</p>
      </div>
    </>
  );
};

export default IMetricCard;
