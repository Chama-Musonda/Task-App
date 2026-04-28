type BadgeVariant = 'priority' | 'status' | 'category' | 'meta';
type BadgeSize = 'sm' | 'md';

interface BadgeProps  {
  label: string
  variant?: BadgeVariant
  size: BadgeSize
  colorScheme?: 'indigo' | 'slate' | 'blue' | 'gray'
  className?: string
}

const Badge = ({ label, variant, size, colorScheme, className }: BadgeProps) => {
  let style = ''
  if (variant === 'priority') {
    if (label === 'High') {
      style = 'bg-primary-container text-[#4d44e3]'
    } else if (label === 'Medium') {
      style = 'bg-primary-container text-[#4d44e3]'
    } else if (label === 'Low') {
      style = 'bg-primary-container text-[#4d44e3]'
    } else if (label !== 'High' && label !== 'Medium' && label !== 'Low') {
      if (colorScheme === 'indigo') {
        style = 'bg-primary-container text-[#4d44e3]'
      } else if (colorScheme === 'slate') {
        style = 'bg-primary-container text-[#4d44e3]'
      } else if (colorScheme === 'blue') {
        style = 'bg-primary-container text-[#4d44e3]'
      } else if (colorScheme === 'gray') {
        style = 'bg-primary-container text-[#4d44e3]'
    }
    }
    
  } else if (variant === 'status') {
    style = 'bg-primary-container text-[#4d44e3]'
  } else if (variant === 'category') {
    if (colorScheme === 'gray') {
      style = 'text-on-surface-variant/30 border border-outline-variant/20'
    }
  } else if (variant === 'meta') {
    style = 'bg-primary-container text-[#4d44e3]'
  }

  return (
    <span className={`${style} text-${size === 'sm' ? '[10px]' : '[15px]'} ${className} font-bold px-2 py-0.5 rounded-full uppercase tracking-tighter`}>
      {label}
    </span>
  )
}

export default Badge