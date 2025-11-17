'use client';

import { cn } from '@/utils/cn';
import { cva } from 'class-variance-authority';

const wrapperStyles = cva(
  'mx-auto flex w-full items-center justify-center max-sm:max-w-82 max-sm:gap-5',
  {
    variants: {
      variant: {
        default: 'max-w-142.5 gap-0.5',
        compact: 'max-w-fit sm:divide-x sm:divide-neutral-300',
      },
    },
  },
);

const sideButtonStyles = cva(
  'flex items-center justify-center gap-2 rounded-lg border border-neutral-300 hover:bg-neutral-100 disabled:pointer-events-none disabled:opacity-50 max-sm:size-10 sm:h-10 [&>svg]:size-5',
  {
    variants: {
      sideLayout: {
        full: 'py-2 pr-4 pl-3.5',
        label: 'px-4 py-2',
        icon: 'p-2',
      },
    },
  },
);

type PropsType = {
  currentPage: number;
  totalPages: number;
  onPageChange?: (page: number) => void;
  variant?: 'default' | 'compact';
  sideLayout?: 'full' | 'label' | 'icon';
};

const MAX_PAGES_SHOWN = 6;

export function Pagination({
  currentPage,
  totalPages,
  onPageChange,
  variant = 'default',
  sideLayout = 'full',
}: PropsType) {
  return (
    <nav
      role="navigation"
      aria-label="Pagination"
      className="w-full text-sm font-medium text-neutral-900"
    >
      <ul className={wrapperStyles({ variant })}>
        <li className="mr-auto">
          <button
            disabled={currentPage === 1}
            aria-label="Previous page"
            onClick={() => onPageChange?.(currentPage - 1)}
            className={cn(sideButtonStyles({ sideLayout }), {
              'sm:rounded-r-none sm:border-r-0': variant === 'compact',
            })}
          >
            <LongArrowLeft
              className={cn('shrink-0', sideLayout === 'label' && 'sm:hidden')}
            />

            {sideLayout !== 'icon' && (
              <span className="max-sm:hidden">Previous</span>
            )}
          </button>
        </li>

        {/* Only for mobile view */}
        <li className="sm:hidden">
          Page {currentPage} of {totalPages}
        </li>

        {Array.from({ length: totalPages }, (_, index) => {
          const isActive = currentPage === index + 1;

          if (totalPages > MAX_PAGES_SHOWN) {
            if (currentPage > 3) {
              if (index + 1 < currentPage) {
                return null;
              }

              if (index + 1 === currentPage + 3) {
                return (
                  <li key={index} className="max-sm:hidden">
                    <PaginationEllipsis paginationVariant={variant} />
                  </li>
                );
              }

              if (index + 1 < currentPage + 3 || index + 1 > totalPages - 2) {
                return (
                  <li key={index} className="max-sm:hidden">
                    <PaginationButton
                      page={index + 1}
                      isActive={isActive}
                      onPageChange={onPageChange}
                      paginationVariant={variant}
                    />
                  </li>
                );
              }
            }

            if (index === 3) {
              return (
                <li key={index} className="max-sm:hidden">
                  <PaginationEllipsis paginationVariant={variant} />
                </li>
              );
            }

            /**
             * This logic ensures pagination buttons from 1-3 and the last 3 pages are visible
             * and the rest in the middle are hidden and replaced with and ellipsis.
             */
            if (index > 2 && index < totalPages - 3) {
              return null;
            }
          }

          return (
            <li key={index} className="max-sm:hidden">
              <PaginationButton
                page={index + 1}
                isActive={isActive}
                onPageChange={onPageChange}
                paginationVariant={variant}
              />
            </li>
          );
        })}

        <li className="ml-auto">
          <button
            disabled={currentPage === totalPages}
            aria-label="Next page"
            onClick={() => onPageChange?.(currentPage + 1)}
            className={cn(sideButtonStyles({ sideLayout }), {
              'sm:rounded-l-none sm:border-l-0': variant === 'compact',
            })}
          >
            {sideLayout !== 'icon' && (
              <span className="max-sm:hidden">Next</span>
            )}

            <LongArrowRight
              className={cn('shrink-0', sideLayout === 'label' && 'sm:hidden')}
            />
          </button>
        </li>
      </ul>
    </nav>
  );
}

function PaginationButton({
  page,
  isActive,
  onPageChange,
  paginationVariant,
}: {
  page: number;
  isActive: boolean;
  onPageChange?: (page: number) => void;
  paginationVariant: PropsType['variant'];
}) {
  return (
    <button
      aria-label={`Go to page ${page}`}
      aria-current={isActive ? 'page' : undefined}
      className={cn(
        'size-10 shrink-0 rounded-lg',
        isActive ? 'bg-neutral-100' : 'hover:bg-neutral-100',
        paginationVariant === 'compact' &&
          'rounded-none border-y border-neutral-300',
      )}
      onClick={() => onPageChange?.(page)}
    >
      {page}
    </button>
  );
}

function PaginationEllipsis({
  paginationVariant,
}: {
  paginationVariant: PropsType['variant'];
}) {
  return (
    <button
      className={cn('pointer-events-none size-10 shrink-0', {
        'border-y border-neutral-300': paginationVariant === 'compact',
      })}
    >
      ...
    </button>
  );
}

type IconProps = React.SVGAttributes<SVGSVGElement>;

function LongArrowLeft(props: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="21"
      height="20"
      viewBox="0 0 21 20"
      fill="none"
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M3.08509 10.0535C3.09575 10.203 3.15104 10.3499 3.25098 10.4727L3.30273 10.5303L8.29883 15.5303C8.59159 15.8232 9.06637 15.823 9.35937 15.5303C9.63408 15.2558 9.65232 14.821 9.41211 14.5264L9.36035 14.4697L5.6394 10.7472L17.167 10.7472C17.5812 10.7472 17.917 10.4114 17.917 9.99715C17.917 9.58294 17.5812 9.24715 17.167 9.24715L5.6451 9.24715L9.36035 5.53027L9.41211 5.47363C9.65231 5.17898 9.63406 4.74424 9.35938 4.46973C9.08481 4.19545 8.6509 4.17797 8.35645 4.41797L8.29883 4.46973L3.34366 9.42877C3.18405 9.56631 3.08301 9.76993 3.08301 9.99715C3.08301 10.0161 3.08371 10.0349 3.08509 10.0535Z"
        fill="currentColor"
      />
    </svg>
  );
}

function LongArrowRight(props: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="21"
      height="20"
      viewBox="0 0 21 20"
      fill="none"
      {...props}
    >
      <path
        d="M16.9351 9.99715L3.60059 9.99715M11.9384 5L16.9351 9.99984L11.9384 15"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
