import ProfilePicture from "./assets/grumpy-coder-2.png";

function Card() {
  return (
    <div className="card">
      <img
        className="card-profile-image"
        src={ProfilePicture}
        alt="profile-picture"
      >
      </img>
      <h2 className="card-profile-name">GrumpyCoder</h2>
      <p className="card-profile-description">
        I am software developper and love to learn. <br />
        Be careful, I can be grumpy.
      </p>
    </div>
  );
}

export default Card;
