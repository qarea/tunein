function DefaultButton({ className, type, children, ...rest }) {
  return (
    <button className={className} type={type} {...rest}>
      {children}
    </button>
  );
}

export default DefaultButton;
