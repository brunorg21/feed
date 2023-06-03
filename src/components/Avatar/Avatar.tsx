interface AvatarProps {
  src: string;
}

export function Avatar(props: AvatarProps) {
  return <img src={props.src} />;
}
