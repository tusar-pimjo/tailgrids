import { cn } from '@/utils/cn';
import { cva, type VariantProps } from 'class-variance-authority';
import { useId, type ComponentProps } from 'react';
import CheckIcon from '@/assets/check.svg';

const checkboxStyles = cva(
  'peer-focus:border-primary-300 group-hover:border-primary-500 peer-checked:bg-primary-500 peer-checked:!border-primary-500 peer-focus:ring-primary-100 grid place-items-center border border-neutral-300 transition peer-focus:ring-4 peer-disabled:border-neutral-100 [&>svg]:hidden [&>svg]:text-white peer-checked:[&>svg]:block peer-disabled:[&>svg]:text-neutral-100',
  {
    variants: {
      size: {
        sm: 'size-4 rounded [&>svg]:size-3',
        md: 'size-5 rounded-md [&>svg]:size-3.5',
      },
    },
    defaultVariants: {
      size: 'sm',
    },
  },
);

type PropsType = Omit<ComponentProps<'input'>, 'size'> &
  VariantProps<typeof checkboxStyles> & {
    label?: string;
  };

export function Checkbox({
  label,
  id: inputId,
  size,
  disabled,
  ...inputProps
}: PropsType) {
  const id = useId();

  return (
    <label
      htmlFor={id}
      className={cn(
        'group flex cursor-pointer items-center gap-3 select-none aria-disabled:pointer-events-none',
      )}
      aria-disabled={disabled}
    >
      <div>
        <input
          type="checkbox"
          id={id}
          className="peer sr-only"
          disabled={disabled}
          {...inputProps}
        />

        <div className={checkboxStyles({ size })}>
          <CheckIcon />
        </div>
      </div>

      {label && (
        <span
          className={cn(
            'text-sm text-neutral-700',
            disabled && 'text-neutral-300',
          )}
        >
          {label}
        </span>
      )}
    </label>
  );
}
