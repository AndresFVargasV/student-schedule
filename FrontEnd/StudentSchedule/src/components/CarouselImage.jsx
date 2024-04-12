import Figure from "react-bootstrap/Figure";

function CarouselImage({ url }) {
  return (
    <Figure>
      <Figure.Image alt={url} src={url} />
    </Figure>
  );
}

export default CarouselImage;
