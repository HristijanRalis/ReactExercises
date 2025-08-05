export const Input = ({
  handleChangeInput,
}: {
  handleChangeInput: (char: string) => void;
}) => {
  return (
    <input
      type="text"
      onChange={(e) => {
        handleChangeInput(e.target.value);
      }}
    />
  );
};
