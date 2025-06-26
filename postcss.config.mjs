const config = {
  theme: {
    extend: {
      backgroundImage: {
        'brand-gradient': 'linear-gradient(135deg, rgba(252,133,84,1) 0%, rgba(248,62,101,1) 100%)',
      },
      maxWidth: {
        'container-custom': '1170px',
      },
    },
  },
  plugins: ["@tailwindcss/postcss"],
};

export default config;
