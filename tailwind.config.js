/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html",
  "./src/**/*.{vue,js,ts,jsx,tsx}",],
  theme: {
    extend: {
      colors:{
        's-red' : 'hsl(7, 99%, 70%)',
        'yellow' : 'hsl(51, 100%, 49%)',
        'd-d-cyan' : 'hsl(167, 40%, 24%)',
        'd-blue' : 'hsl(198, 62%, 26%)',
        'd-m-cyan' : 'hsl(168, 34%, 41%)',
        'v-d-d-blue' : 'hsl(212, 27%, 19%)',
        'v-f-g-blue' : 'hsl(213, 9%, 39%)',
        'd-g-blue' : 'hsl(232, 10%, 55%)',
        'g-blue' : 'hsl(210, 4%, 67%)',
        'white' : 'hsl(0, 0%, 100%)',
        'ccyan' : '#86CDBF',
      },
      fontFamily :
      {
        'barlow' :'Barlow , sans-serif',
        'fraunces' : 'Fraunces , sans-serif'
      },
    },
  },
  plugins: [],
}
