import PhotoCart from "./PhotoCart";

function PhotoList({ photos }) {
  return (
    <div className="img-grid">
      {photos.map((photo) => (
        <PhotoCart photo={photo} key={photo.id} />
      ))}
    </div>
  );
}

export default PhotoList;
