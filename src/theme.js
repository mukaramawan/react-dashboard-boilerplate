// Instagram-inspired color palette and gradients
export const theme = {
  colors: {
    primary: {
      yellow: '#feda75',
      orange: '#fa7e1e',
      pink: '#d62976',
      purple: '#962fbf',
      blue: '#4f5bd5',
    },
    background: {
      main: '#fafafa',
      sidebar: '#ffffff',
      card: '#ffffff',
    },
    text: {
      primary: '#262626',
      secondary: '#8e8e8e',
      light: '#ffffff',
    },
    border: {
      light: '#dbdbdb',
      focus: '#a8a8a8',
    }
  },
  gradients: {
    primary: 'linear-gradient(135deg, #feda75 0%, #fa7e1e 25%, #d62976 50%, #962fbf 75%, #4f5bd5 100%)',
    primaryHover: 'linear-gradient(135deg, #feda75 10%, #fa7e1e 30%, #d62976 55%, #962fbf 80%, #4f5bd5 100%)',
    subtle: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    warm: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
  },
  shadows: {
    sm: '0 1px 2px 0 rgb(0 0 0 / 0.05)',
    md: '0 4px 6px -1px rgb(0 0 0 / 0.1)',
    lg: '0 10px 15px -3px rgb(0 0 0 / 0.1)',
    xl: '0 20px 25px -5px rgb(0 0 0 / 0.1)',
  }
};

export default theme;
