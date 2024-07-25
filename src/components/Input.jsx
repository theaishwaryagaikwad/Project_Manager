const Input = ({ label, textarea, ...props }) => {

  return (
    <div className="form-group">
      <label className="form-label" htmlFor="">{label}</label>
      {textarea ? (
        <textarea className="form-control" name="" id="" rows="3" {...props}></textarea>
      ) : (
        <input className="form-control" {...props} />
      )}
    </div>
  );
};

export default Input;
