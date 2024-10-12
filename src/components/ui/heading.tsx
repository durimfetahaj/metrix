interface HeadingProps {
  title: string;
}

export const Heading: React.FC<HeadingProps> = ({ title }) => {
  return <h2 className="text-2xl">{title}</h2>;
};
