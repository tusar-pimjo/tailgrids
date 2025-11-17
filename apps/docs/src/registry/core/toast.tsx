import { cn } from '@/utils/cn';
import { cva, type VariantProps } from 'class-variance-authority';
import { Button } from './button';
import type { ComponentProps } from 'react';
import { Avatar } from './avatar';

const iconWrapperStyle = cva(
  'grid size-9 place-items-center rounded-md [&>svg]:size-6 [&>svg]:text-current',
  {
    variants: {
      variant: {
        success: 'bg-success-muted text-success-muted-body',
        error: 'bg-danger-muted text-danger-muted-body',
        info: 'bg-info-muted text-info-muted-body',
        warning: 'bg-warning-muted text-warning-muted-body',
        message: 'bg-primary-500/10 text-primary-500',
      },
    },
  },
);

type PropsType = VariantProps<typeof iconWrapperStyle> & {
  description: string;
  title?: string;
  undoAction?: () => void;
  actions?: {
    primary: {
      label: string;
      onClick?: ComponentProps<'button'>['onClick'];
    };
    dismiss?: {
      label: string;
      onClick?: ComponentProps<'button'>['onClick'];
    };
  };
};

export function Toast({
  description,
  variant,
  title,
  undoAction,
  actions,
}: PropsType) {
  return (
    <div
      className={cn(
        'flex max-w-112.5 min-w-96.25 items-center gap-3 rounded-lg border border-neutral-200 p-3 shadow-sm',
        title && 'relative items-start',
      )}
    >
      {variant && (
        <div className={iconWrapperStyle({ variant })}>{getIcon(variant)}</div>
      )}

      <div className={cn(!title && 'contents')}>
        {title && <h4 className="mb-1.5 text-lg font-semibold">{title}</h4>}

        <p
          className={cn(
            'text-md text-neutral-500',
            !title && 'font-medium text-neutral-800',
          )}
        >
          {description}
        </p>

        {!title && undoAction && (
          <button className="text-primary-500 ml-auto text-sm font-medium">
            Undo
          </button>
        )}

        {title && actions && (
          <div className="mt-5 flex items-center gap-3">
            <Button
              size="sm"
              variant="primary"
              appearance="fill"
              onClick={actions.primary.onClick}
              className="py-2"
            >
              {actions.primary.label}
            </Button>

            {actions.dismiss && (
              <Button
                size="sm"
                appearance="outline"
                variant="primary"
                onClick={actions.dismiss.onClick}
                className="py-2"
              >
                {actions.dismiss.label}
              </Button>
            )}
          </div>
        )}

        <button
          className={cn({
            'ml-auto': !undoAction,
            'absolute top-2.5 right-2.5': title,
          })}
        >
          <span className="sr-only">Dismiss Toast</span>
          <XIcon />
        </button>
      </div>
    </div>
  );
}

type AvatarToastProps = {
  name: string;
  description: string;
  image: string;
  status: 'none' | 'online' | 'offline' | 'busy';
  time: string;
};

export function AvatarToast({
  name,
  description,
  image,
  status,
  time,
}: AvatarToastProps) {
  return (
    <div className="bg-neutral relative flex min-w-89.5 items-start gap-4 rounded-lg border border-neutral-200 p-5 shadow-sm">
      <Avatar
        src={image}
        alt={'Image of ' + name}
        status={status}
        fallback={name.charAt(0)}
        size={'lg'}
      />

      <div>
        <h4 className="text-sm font-semibold">{name}</h4>
        <p className="text-sm text-neutral-500">{description}</p>

        <p className="text-primary-500 mt-2 text-xs">{time}</p>
      </div>

      <button className="absolute top-2.5 right-2.5">
        <span className="sr-only">Dismiss Toast</span>
        <XIcon />
      </button>
    </div>
  );
}

function getIcon(variant: PropsType['variant']) {
  switch (variant) {
    case 'success':
      return (
        <svg
          width={24}
          height={24}
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M12 3.802a8.198 8.198 0 110 16.396 8.198 8.198 0 010-16.396zm0 18.396c5.632 0 10.198-4.566 10.198-10.198 0-5.632-4.566-10.198-10.198-10.198C6.368 1.802 1.802 6.368 1.802 12c0 5.632 4.566 10.198 10.198 10.198zm3.69-12.802a1 1 0 00-1.413 0l-3.087 3.087-1.466-1.466a1 1 0 00-1.414 1.415l2.173 2.172a1 1 0 001.414 0l3.794-3.794a1 1 0 000-1.414z"
            fill="currentColor"
          />
        </svg>
      );
    case 'error':
      return (
        <svg
          width={24}
          height={24}
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M12 1.75c5.66 0 10.25 4.59 10.25 10.25S17.66 22.25 12 22.25 1.75 17.66 1.75 12 6.34 1.75 12 1.75zm0 2a8.25 8.25 0 100 16.5 8.25 8.25 0 000-16.5zm1.977 4.857a1 1 0 011.415 1.415L13.414 12l1.978 1.979a1 1 0 11-1.415 1.414L12 13.414l-1.978 1.979a1.001 1.001 0 01-1.415-1.415L10.585 12l-1.979-1.979a1 1 0 011.415-1.414L12 10.586l1.978-1.979z"
            fill="currentColor"
          />
        </svg>
      );
    case 'warning':
      return (
        <svg
          width={24}
          height={24}
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M12 3.75a8.25 8.25 0 110 16.5 8.25 8.25 0 010-16.5zm0 18.5c5.66 0 10.25-4.59 10.25-10.25S17.66 1.75 12 1.75 1.75 6.34 1.75 12 6.34 22.25 12 22.25zm0-13.475a1.25 1.25 0 000-2.5 1.25 1.25 0 000 2.5zm1 2.17v5.676a1 1 0 11-2 0v-5.676a1 1 0 012 0z"
            fill="currentColor"
          />
        </svg>
      );
    case 'info':
      return (
        <svg
          width={24}
          height={24}
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M12 3.75a8.25 8.25 0 110 16.5 8.25 8.25 0 010-16.5zm0 18.5c5.66 0 10.25-4.59 10.25-10.25S17.66 1.75 12 1.75 1.75 6.34 1.75 12 6.34 22.25 12 22.25zm0-13.475a1.25 1.25 0 000-2.5 1.25 1.25 0 000 2.5zm1 2.17v5.676a1 1 0 11-2 0v-5.676a1 1 0 012 0z"
            fill="currentColor"
          />
        </svg>
      );
    case 'message':
      return (
        <svg
          width={24}
          height={24}
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M20.5 6.248v-.014-.01A.236.236 0 0020.264 6H3.736a.236.236 0 00-.135.429l7.97 5.557c.258.18.6.18.858 0l7.97-5.557a.237.237 0 00.101-.181zm0 1.94l-7.213 5.029c-.773.539-1.8.539-2.574 0L3.5 8.187v9.063c0 .414.336.75.75.75h15.5a.75.75 0 00.75-.75V8.187zm1.5-1.92V17.25a2.25 2.25 0 01-2.25 2.25H4.25A2.25 2.25 0 012 17.25V6.234v-.03A1.736 1.736 0 013.737 4.5h16.528A1.736 1.736 0 0122 6.269z"
            fill="currentColor"
          />
        </svg>
      );
  }
}

function XIcon() {
  return (
    <svg
      width={20}
      height={20}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M15.01 15.01a.9.9 0 01-1.273 0l-3.738-3.737-3.737 3.738a.9.9 0 01-1.274-1.273L8.726 10 4.988 6.263a.9.9 0 011.274-1.274l3.737 3.738 3.738-3.738a.9.9 0 011.273 1.274L11.273 10l3.737 3.738a.9.9 0 010 1.272z"
        fill="#9CA3AF"
      />
    </svg>
  );
}
