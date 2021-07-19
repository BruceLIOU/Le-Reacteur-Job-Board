const Jobs = (props) => {
  return (
    <div>
      <div className={props.className}>
        <h2>{props.title}</h2>
        <div>
          {props.contractType} - {props.country} - {props.city}
        </div>
      </div>
    </div>
  );
};

export default Jobs;
