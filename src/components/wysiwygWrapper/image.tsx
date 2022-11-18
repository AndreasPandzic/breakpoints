import Image from "next/image";

export default function imageWysiwyg(
  props: React.DetailedHTMLProps<
    React.ImgHTMLAttributes<HTMLImageElement>,
    HTMLImageElement
  >
) {
  //TODO: ADD A PLACEHOLDER IMAGE AND ADD props.src to the component
  const src = props.src ? props.src : "/images/placeholder.png";
  const alt = props.alt ? props.alt : "placeholder";

  return (
    <Image
      alt={alt}
      src={`http://localhost:1337${src}`}
    />
  );
}
