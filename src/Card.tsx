import GrumpyCoderPicture from "./assets/grumpy-coder-2.png";
import MichellePicture from "./assets/wife-1.jpg";
import MinouPicture from "./assets/minou-1.jpg";

class Profile {
  private name: string = "";
  private picture: string = "";
  private description: string = "";
  private static totalProfiles = 0;

  constructor(name: string, description: string) {
    this.name = name;
    this.description = description;

    if (name === "GrumpyCoder") {
      this.picture = GrumpyCoderPicture;
    } else if (name === "Michelle Pinar") {
      this.picture = MichellePicture;
    } else if (name === "Minou Montpetit") {
      this.picture = MinouPicture;
    }
    Profile.totalProfiles++;
  }

  public getName() {
    return this.name;
  }
  public setName(name: string) {
    this.name = name;
  }
  public getPicture() {
    return this.picture;
  }
  public setPicture(picture: string) {
    this.picture = picture;
  }
  public getDescription() {
    return this.description;
  }
  public setDescription(description: string) {
    this.description = description;
  }
  public static getTotalProfiles() {
    return this.totalProfiles;
  }
  public static incrementTotalProfiles() {
    return this.totalProfiles++;
  }
}

function Card(props: any) {
  const profile = new Profile(props.name, props.description);
  console.log(profile);
  return (
    <div className="card">
      <img
        className="card-profile-image"
        src={profile.getPicture()}
        alt="profile-picture"
      >
      </img>
      <h2 className="card-profile-name">{profile.getName()}</h2>
      <p className="card-profile-description">
        {profile.getDescription()}
      </p>
    </div>
  );
}

export default Card;
