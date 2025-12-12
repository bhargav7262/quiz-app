Hi there! This is my submission for the Frontend Development assignment.

The goal was to take the Figma designs provided and turn them into a fully functional, pixel-perfect web application. I focused heavily on getting the visual details right—from the exact gradient colors to the font weights—while keeping the user experience smooth.

Live Demo -(https://frontendqu.netlify.app/)

The Tech Stack

I chose a stack that allowed me to build quickly but keeps the code professional and scalable:

Next.js (App Router): I used this to handle the project structure and routing efficiently.

TypeScript: Using strict types helped me prevent bugs and keep the code clean.

Tailwind CSS: This was essential for the "Pixel Perfect" requirement. It allowed me to match the specific padding, margins, and custom colors from the design.

Framer Motion: I used this for the page transitions and the slide effects between questions.

-- Key Features --

Exact UI Match: I spent time ensuring the typography (Playfair Display & Inter), the segmented progress bar, and the thick blue borders matched the reference screenshots exactly.

Animations: The dashboard fades out while the quiz expands in. Questions slide in from the right. Buttons have a hover "lift" effect.

Quiz Logic: The app validates that you have selected an answer before moving forward. It tracks your score and calculates the final percentage at the end.

Responsive: The card layout adapts to mobile screens while maintaining the correct aspect ratio.

-- Time Spent --

Total: Approx 4 to 5 Hours

1 Hour: Initial setup (Next.js config, fonts, Tailwind theme).

2 Hours: Building the UI. This took the most time because I was comparing my screen to the Figma shots constantly to get the pixels right.

1 Hour: Logic (State management, scoring, navigation).

1 Hour: Polish (Animations, fixing the progress bar, and adding the "Best of Luck" badge).

-- Assumptions --

Since I didn't have a backend API, I created a local data file for the questions. This mimics a real API structure so it can be easily swapped later.

For icons, I used the Lucide-React library as they matched the design style closely without needing to manage SVG files manually.

I noticed the "Test Your Knowledge" text had a color shift in the design, so I added a text gradient to match it.

-- How to Run Locally --

Clone the repository: git clone https://github.com/bhargav7262/quiz-app.git
Install dependencies: npm install
Run the server: npm run dev.
Open http://localhost:3000 in your browser.


Thanks for reviewing my work!
