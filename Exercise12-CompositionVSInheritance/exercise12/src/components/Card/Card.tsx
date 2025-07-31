interface CardProps {
  icon?: React.ReactNode;
  children?: React.ReactNode;
  customClassName?: string;
}

export const Card = ({ icon, children, customClassName = "" }: CardProps) => {
  return (
    <div className={`card  ${customClassName}`}>
      <div className="actions">{icon}</div>

      <div className="content">{children}</div>
    </div>
  );
};
