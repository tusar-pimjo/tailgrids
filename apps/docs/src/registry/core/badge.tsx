import { cn } from '@/utils/cn';
import { cva, type VariantProps } from 'class-variance-authority';
import type { ComponentProps } from 'react';

const badgeStyles = cva(
  'inline-flex items-center gap-2 rounded-full font-medium [&>svg]:size-3',
  {
    variants: {
      size: {
        sm: 'py-0.5 text-xs',
        md: 'py-0.5 text-sm',
        lg: 'py-1 text-sm',
      },
      prefixIcon: { true: '', false: '' },
      suffixIcon: { true: '', false: '' },
      color: {
        gray: 'bg-neutral-100 text-neutral-700 [&>svg]:text-neutral-700',
        primary: 'bg-primary-50 text-primary-500 [&>svg]:text-primary-500',
        error:
          'bg-danger-muted text-danger-muted-body [&>svg]:text-danger-muted-body',
        warning:
          'bg-warning-muted text-warning-muted-body [&>svg]:text-warning-muted-body',
        success:
          'bg-success-muted text-success-muted-body [&>svg]:text-success-muted-body',
        cyan: 'bg-cyan-muted text-cyan-muted-body [&>svg]:text-cyan-muted-body',
        sky: 'bg-sky-muted text-sky-muted-body [&>svg]:text-sky-muted-body',
        blue: 'bg-blue-muted text-blue-muted-body [&>svg]:text-blue-muted-body',
        violet:
          'bg-violet-muted text-violet-muted-body [&>svg]:text-violet-muted-body',
        purple:
          'bg-purple-muted text-purple-muted-body [&>svg]:text-purple-muted-body',
        pink: 'bg-pink-muted text-pink-muted-body [&>svg]:text-pink-muted-body',
        rose: 'bg-rose-muted text-rose-muted-body [&>svg]:text-rose-muted-body',
        orange:
          'bg-orange-muted text-orange-muted-body [&>svg]:text-orange-muted-body',
      },
    },
    compoundVariants: [
      {
        prefixIcon: true,
        suffixIcon: true,
        size: 'sm',
        className: 'px-1.5',
      },
      {
        prefixIcon: true,
        suffixIcon: true,
        size: 'md',
        className: 'px-2',
      },
      {
        prefixIcon: true,
        suffixIcon: true,
        size: 'lg',
        className: 'px-2.5',
      },
      {
        prefixIcon: false,
        suffixIcon: false,
        size: 'sm',
        className: 'px-2',
      },
      {
        prefixIcon: false,
        suffixIcon: false,
        size: 'md',
        className: 'px-2.5',
      },
      {
        prefixIcon: false,
        suffixIcon: false,
        size: 'lg',
        className: 'px-3',
      },
      {
        prefixIcon: true,
        suffixIcon: false,
        size: 'sm',
        className: 'pr-2 pl-1.5',
      },
      {
        prefixIcon: true,
        suffixIcon: false,
        size: 'md',
        className: 'pr-2.5 pl-2',
      },
      {
        prefixIcon: true,
        suffixIcon: false,
        size: 'lg',
        className: 'pr-3 pl-2.5',
      },
      {
        prefixIcon: false,
        suffixIcon: true,
        size: 'sm',
        className: 'pr-1.5 pl-2',
      },
      {
        prefixIcon: false,
        suffixIcon: true,
        size: 'md',
        className: 'pr-2 pl-2.5',
      },
      {
        prefixIcon: false,
        suffixIcon: true,
        size: 'lg',
        className: 'pr-2.5 pl-3',
      },
    ],
    defaultVariants: {
      size: 'sm',
      color: 'primary',
    },
  },
);

type PropsType = ComponentProps<'span'> &
  Omit<VariantProps<typeof badgeStyles>, 'prefixIcon' | 'suffixIcon'> & {
    prefixIcon?: React.ReactNode;
    suffixIcon?: React.ReactNode;
  };

export function Badge({
  color,
  size,
  className,
  prefixIcon,
  suffixIcon,
  children,
  ...props
}: PropsType) {
  return (
    <span
      className={cn(
        badgeStyles({
          color,
          size,
          prefixIcon: Boolean(prefixIcon),
          suffixIcon: Boolean(suffixIcon),
        }),
        className,
      )}
      {...props}
    >
      {prefixIcon}
      {children}
      {suffixIcon}
    </span>
  );
}
