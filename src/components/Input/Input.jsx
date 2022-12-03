function Input(props) {
  return (
    <input
      type="text"
      className={`px-3 py-2 rounded-2xl border font-semibold tracking-wider placeholder-gray-400`}
      {...props}
    />
  );
}

export default Input;
