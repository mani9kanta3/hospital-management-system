# MediCare Hospital Management System

A responsive hospital management website built with React and Vite. It covers the full patient side of a hospital site: browsing doctors, viewing a doctor profile, registering as a patient, booking an appointment and viewing a dashboard.

This project started as a plain HTML and Bootstrap site and was rebuilt in React so that shared parts like the navbar and footer are written once and reused everywhere.

**Live demo:** https://hospital-management-system-ashy-beta.vercel.app/

---

## Tech Stack

| Tool | Why |
|---|---|
| React 19 | Component based UI |
| Vite 8 | Dev server and build tool |
| React Router 7 | Client side routing, no page reloads |
| Bootstrap 5.3 | Grid system and base components |
| Axios | Fetching the doctors data |
| Font Awesome | Icons |

Data currently comes from a local `doctors.json` file. There is no backend yet.

---

## Getting Started

You need Node.js 18 or above installed.

```bash
# 1. install the dependencies
npm install

# 2. start the dev server
npm run dev
```

Then open the URL that Vite prints, usually `http://localhost:5173`.

### Other commands

```bash
npm run build      # production build into dist/
npm run preview    # preview the production build locally
npm run lint       # run eslint
```

### Logging in

There is no real authentication yet. The login page saves the user into `localStorage` under the key `userinfo`, and the protected pages check for that key. So any login will work for now. To log yourself out manually, clear `localStorage` in DevTools.

---

## Pages and Routes

| Route | Page | Protected |
|---|---|---|
| `/` | Home page | No |
| `/login` | Login | No |
| `/signup` | Sign up | No |
| `/forgot-password` | Forgot password | No |
| `/contact` | Contact us | No |
| `/doctors` | Doctors listing with search and pagination | Yes |
| `/doctors/:id` | Single doctor profile | Yes |
| `/registration` | New patient registration | Yes |
| `/appointment` | Book an appointment | Yes |
| `/dashboard` | Dashboard | Yes |

Protected routes redirect to `/login` when nobody is logged in.

---

## Project Structure

```
src/
├── App.jsx                 all routes live here
├── main.jsx                entry point
├── App.css                 shared styles + all responsive rules
│
├── Navbar.jsx              shown on every page
├── Footer.jsx              shown on every page
│
├── HomePage.jsx
├── Doctors.jsx             search, pagination, doctor grid
├── SingleDoctor.jsx        one doctor, read from the url param
├── PatientRegistration.jsx
├── Appointment.jsx
├── Dashboard.jsx
├── Contact.jsx
├── LoginPage.jsx
├── SignupPage.jsx
├── ForgotPassword.jsx
├── ProtectedRoute.jsx      redirects to login if not logged in
│
├── useFetch.js             custom hook: data + loading + error
├── useDebounce.js          custom hook: delays a fast changing value
│
├── doctors.json            the doctor data
├── doctorImages.js         maps doctor id to the imported image
│
├── doctor.css              doctors page
├── SingleDoctor.css        doctor profile page
├── patient.css             registration page
├── contact.css             contact page
│
└── assets/                 logo, hero image, doc-1 to doc-6, service icons
```

---

## How It Works

### Component reuse

`Navbar` and `Footer` sit outside `<Routes>` in `App.jsx`, so they render on every page and only the middle section swaps when you navigate. In the old plain HTML version the navbar was copy pasted into nine files and every change had to be made nine times.

### Routing

React Router handles all navigation on the client. Clicking a link swaps the component without asking the server for a new page, so there is no white flash and navigation feels instant.

### Custom hooks

**`useFetch(url)`** returns `{ data, load, error }`. Every page that needs data gets loading and error handling for free instead of repeating the same `useState` and `useEffect` block. When the backend is added, only the URL needs to change.

```js
const { data, load, error } = useFetch(doctorsUrl)
```

**`useDebounce(value, delay)`** returns a value that only updates after the user has stopped changing it for `delay` milliseconds. Used on the doctors search box.

### One source of data

Every place that shows doctors reads from the same `doctors.json`. The home page, the doctors listing and the profile page all use it, so they can never show different information for the same doctor.

Images are imported through `doctorImages.js` so Vite bundles and hashes them properly instead of relying on a raw path.

### Protected routes

`ProtectedRoute` is a wrapper component. It checks `localStorage` for `userinfo` and returns `<Navigate to='/login'/>` if it is missing, otherwise it renders the page.

---

## Performance

**Debouncing on search.** Typing "cardiologist" is twelve keystrokes and would run the filter twelve times. `useDebounce` waits 500ms after the last keystroke so it runs once. With six doctors you will not notice, but once the data comes from a server those twelve filters become twelve network requests.

**useMemo on filtering.** The filtered doctor list is wrapped in `useMemo` with `[debouncedSearch, data]` as dependencies. Without it, the whole list would be filtered again on every re render, including re renders that have nothing to do with the search.

**Pagination.** The doctors page shows 4 per page instead of rendering every doctor at once.

**Array guard.** `Array.isArray(data) ? data : []` before any `.filter()` or `.map()`. If the JSON ever fails to load and the server returns an HTML error page instead, the page shows a proper error message rather than crashing to a blank screen.

---

## Responsive Design

All breakpoints are handled in `App.css` under the `RESPONSIVE` section, using Bootstrap's grid plus a few media queries.

| Width | Layout |
|---|---|
| 1400px and up | Full desktop, 4 doctor cards per row, 6 service cards per row |
| 1200 to 1399 | Slightly reduced heading size so the hero text does not wrap badly |
| 992 to 1199 | 3 service cards per row, navbar still expanded |
| 768 to 991 | Navbar collapses to a hamburger, 2 doctor cards per row |
| 576 to 767 | 2 service cards per row, hero image capped |
| Below 576 | Everything single column, buttons full width |

The dashboard's appointments table is wrapped in `table-responsive`, so on a phone the table scrolls inside its own box instead of pushing the whole page sideways.

Checked at 360, 420, 576, 768, 991, 1024, 1200 and 1400 pixels. No horizontal page scrolling at any width.

---

## Known Limitations

- No backend. All data is static and forms do not save anywhere.
- Login is not real authentication. The state lives in `localStorage` and can be edited from DevTools.
- Only 6 doctors in the dataset.
- The dashboard numbers and the recent appointments table are hardcoded sample data.

---

## Future Scope

- Build the backend with Python using Flask or Django
- Move the doctor data into a real database such as MySQL or PostgreSQL
- Proper authentication with the server issuing and verifying tokens
- Make the appointment and registration forms actually save
- Admin panel for the hospital to add and edit doctors
- Email or SMS confirmation after booking an appointment
