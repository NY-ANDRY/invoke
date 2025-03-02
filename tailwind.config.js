export default {
  mode: 'jit',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        custom: ['is', 'sans-serif'],
        custom: ['is-i', 'sans-serif'],
        custom: ['is-b', 'sans-serif'],
        custom: ['is-sb', 'sans-serif'],
        custom: ['is-m', 'sans-serif'],
        custom: ['f', 'sans-serif'],
        custom: ['f-i', 'sans-serif'],
        custom: ['f-b', 'sans-serif'],
        custom: ['f-sb', 'sans-serif'],
        custom: ['f-m', 'sans-serif'],
        custom: ['inter', 'sans-serif'],
        custom: ['inter-m', 'sans-serif'],
        custom: ['inter-b', 'sans-serif'],
      }
    },
  },
  plugins: [],
}