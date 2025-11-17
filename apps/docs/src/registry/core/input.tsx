import { cn } from '@/utils/cn';
import { cva, type VariantProps } from 'class-variance-authority';
import { useId, type ComponentProps } from 'react';

const inputStyles = cva(
  'bg-neutral peer w-full rounded-lg border px-4 py-2.5 text-neutral-800 placeholder:text-neutral-400 focus:ring-4 disabled:border-neutral-200 disabled:text-neutral-300 disabled:placeholder:text-neutral-300',
  {
    variants: {
      state: {
        default:
          'focus:border-primary-300 focus:ring-primary-100 border-neutral-300',
        error: 'border-danger-outline focus:ring-danger-ring',
        success: 'border-success-outline focus:ring-success-ring',
      },
    },
  },
);

const hintStyles = cva('text-sm font-normal peer-disabled:text-neutral-300', {
  variants: {
    state: {
      default: 'text-neutral-700',
      error: 'text-red-500',
      success: 'text-green-500',
    },
  },
});

type PropsType = ComponentProps<'input'> &
  VariantProps<typeof inputStyles> & {
    label?: string;
    hint?: string;
  };

export function Input({
  label,
  state = 'default',
  hint,
  className,
  ...inputProps
}: PropsType) {
  const id = useId();

  return (
    <div className="grid grid-cols-1 gap-2">
      {label && (
        <label
          htmlFor={id}
          className="max-w-fit text-sm font-medium text-neutral-700 select-none"
        >
          {label}
        </label>
      )}

      <input
        id={id}
        className={cn(inputStyles({ state }), className)}
        {...inputProps}
      />

      {hint && <p className={hintStyles({ state })}>{hint}</p>}
    </div>
  );
}
