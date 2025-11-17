import { cn } from '@/utils/cn';

type PropsType = {
  items: {
    href: string;
    label: string;
    icon?: React.ReactNode;
  }[];
  dividerType?: 'slash' | 'chevron' | 'dot';
  activeHref?: string;
};

export function Breadcrumbs({ items, dividerType = 'slash' }: PropsType) {
  return (
    <ol
      className={cn(
        'flex items-center gap-1.5',
        dividerType === 'dot' && 'gap-2',
      )}
    >
      {items.map((item, index) => (
        <li
          key={item.href}
          className="contents text-neutral-500 [&_svg]:!text-current"
        >
          {index > 0 && <Divider type={dividerType} />}

          <a
            href={item.href}
            className={cn(
              'flex items-center gap-1 text-sm [&>svg]:size-4',
              index + 1 === items.length && 'text-neutral-800',
            )}
          >
            {item.icon}

            {item.label}
          </a>
        </li>
      ))}
    </ol>
  );
}

function Divider({ type }: { type: PropsType['dividerType'] }) {
  switch (type) {
    case 'chevron':
      return (
        <svg
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M5.83333 12.6665L10 8.49984L5.83333 4.33317"
            stroke="currentColor"
            stroke-width="1.2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      );

    case 'dot':
      return <span className="size-1 rounded-full bg-neutral-400" />;

    default:
      return <span>/</span>;
  }
}
