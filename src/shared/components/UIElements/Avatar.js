import './Avatar.css';

const Avatar = props => {
  return (
    <div className={`avatar ${props.className}`} style={props.style}> 
      <img
        src={props.src}
        alt={props.alt}
        style={{ width: 100, height: 100 }}
      />
    </div>
  );
};

export default Avatar;