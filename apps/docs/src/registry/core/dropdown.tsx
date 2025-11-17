import { cn } from '@/utils/cn';
import type { ComponentProps } from 'react';
import {
  Button,
  type ButtonProps,
  Menu,
  MenuItem,
  type MenuItemProps,
  MenuTrigger,
  type MenuTriggerProps,
  Popover,
  type PopoverProps,
  Separator,
} from 'react-aria-components';

export function DropdownMenu(props: MenuTriggerProps) {
  return <MenuTrigger {...props} />;
}

export function DropdownMenuTrigger({ className, ...props }: ButtonProps) {
  return <Button className={cn('outline-none', className)} {...props} />;
}

type DropdownContentProps = PopoverProps;

export function DropdownMenuContent({
  children,
  ...props
}: DropdownContentProps) {
  return (
    <Popover {...props}>
      <Menu className="outline-hidden">{children}</Menu>
    </Popover>
  );
}

type DropdownMenuItemProps = MenuItemProps;

export function DropdownMenuItem(props: DropdownMenuItemProps) {
  return (
    <MenuItem
      {...props}
      className="group text-dropdown-foreground focus:bg-dropdown-item-hover flex w-full cursor-default items-center gap-3 rounded-md px-3 py-2.5 outline-hidden"
    />
  );
}

export function DropdownMenuSeparator({
  className,
  ...props
}: ComponentProps<'hr'>) {
  return (
    <Separator
      className={cn('bg-dropdown-separator h-px border-none', className)}
      {...props}
    />
  );
}
