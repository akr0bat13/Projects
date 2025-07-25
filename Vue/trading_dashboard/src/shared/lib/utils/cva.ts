type TVariants = Record<string, Record<string, string>>

type TDefaultVariants<T extends TVariants> = {
  [K in keyof T]?: keyof T[K]
}

type TBaseClasses = string

type TCvaOptions<T extends TVariants> = {
  variants: T
  defaultVariants: TDefaultVariants<T>
}

export type VariantProps<T> = T extends (props: infer P) => string ? P : never

export function cva<T extends TVariants>(baseClasses: TBaseClasses, options: TCvaOptions<T>) {
  return (props: Partial<{ [K in keyof T]: keyof T[K] }>) => {
    let classes = baseClasses
    const combinedProps = { ...options.defaultVariants }

    for (const key in props) {
      if (props[key] !== undefined) {
        combinedProps[key] = props[key]
      }
    }

    for (const key in combinedProps) {
      const value = combinedProps[key]

      if (value && options.variants[key] && options.variants[key][value]) {
        classes += ` ${options.variants[key][value]}`
      }
    }
    return classes
  }
}
