import { Avatar } from '.';

type PropsType = {
  size?: 'xs' | 'sm' | 'md';
  data: {
    src: string;
    alt: string;
  }[];
};

export function AvatarGroup({ size = 'md', data }: PropsType) {
  return (
    <div className="flex items-center -space-x-2">
      {data.map(({ src, alt }, i) => (
        <Avatar
          size={size}
          src={src}
          alt={alt}
          fallback={alt.charAt(0)}
          className="rounded-full ring-[1.5px] ring-white"
          style={{
            zIndex: i,
          }}
        />
      ))}
    </div>
  );
}
