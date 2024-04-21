export default defineAppConfig({
  ui: {
    primary: 'red',
    gray: 'zinc',
    variables: {
      light: {
        background: 'var(--color-red-50)'
      },
      dark: {
        background: 'var(--color-red-800)'
      }
    },
    button: {
      rounded: 'rounded-full',
      default: {
        size: 'md',
        color: 'red'
      }
    },
    input: {
      rounded: 'rounded-full'
    },
    header: {
      wrapper: 'lg:!border-transparent  dark:bg-red-900',
      links: {
        base: 'py-2 px-4 font-medium transition-colors relative after:absolute after:-bottom-px after:inset-x-2 after:h-px after:rounded-full after:opacity-0 after:bg-red-900 dark:after:bg-white after:transition-opacity',
        active: 'text-red-900 dark:text-white after:opacity-100',
        inactive: 'text-red-500 hover:text-red-700 dark:text-red-400 dark:hover:text-red-200'
      }
    },
    footer: {
      top: {
        wrapper: 'border-t border-red-200 dark:border-red-800',
        container: 'py-8 lg:py-16'
      },
      bottom: {
        wrapper: 'border-t border-red-200 dark:border-red-800'
      }
    },
    pricing: {
      card: {
        highlight: 'ring-red-900 dark:ring-white',
        features: {
          item: {
            icon: {
              base: 'text-red-900 dark:text-white'
            }
          }
        }
      }
    }
  }
})
