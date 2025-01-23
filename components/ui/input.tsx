'use client'
import { cn } from '@/lib/utils';
import { VariantProps, cva } from 'class-variance-authority';
import { InputHTMLAttributes, forwardRef } from 'react';

const inputVariants = cva(
  'form-input focus-visible:outline-none w-full',
  // 'flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 ouline:none',
  {
    variants: {
      variant: {
        default: '',
        main: ' hover:border-kb-main focus:border-kb-main',
        sub: ' hover:border-kb-sub focus:border-kb-sub',
        gray: ' hover:border-kb-gray focus:border-kb-gray',
      },
      state: {
        main:
          'border-main border-2 focus:none hover:none placeholder:text-main',
          sub:
          'border-sub border-2 focus:none hover:none placeholder:text-sub',
          gray:
          'border-gray border-2 focus:none hover:none placeholder:text-gray',
          warning:
          'border-warning border-2 focus:none hover:none placeholder:text-warning'
      },
      psize: {
        sm: 'px-2 py-1 text-xs',
        lg: 'px-4 py-3 text-xl',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  }
);

export interface InputProps
  extends InputHTMLAttributes<HTMLInputElement>,
    VariantProps<typeof inputVariants> {
  label?: boolean;
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    { className, type, variant, state, label, placeholder, psize, ...props },
    ref
  ) => {
    const labelColor = state ? `text-${state}` : `text-slate-500`;
    return (
      <label className={`inline-block relative `}>
        <input
          type={type}
          className={cn(
            inputVariants({ variant, state, psize, className }),
            'peer',
            'm-0'
          )}
          ref={ref}
          placeholder={label ? '' : placeholder}
          {...props}
        />
        {label && (
          <span
            className={cn(
              `form-label ${labelColor} rounded peer-focus:top-0 peer-focus:left-[5px] peer-focus:text-[80%] peer-focus:text-${variant}`
            )}
          >
            {placeholder}
          </span>
        )}
      </label>
    );
  }
);
Input.displayName = 'Input';

export { Input };
