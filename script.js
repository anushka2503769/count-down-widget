// Parse initialization variables straight out of URL parameter chains
const urlParams = new URLSearchParams(window.location.search);
const TARGET_DATE_PARAM = urlParams.get('date'); 
const TARGET_TITLE_PARAM = urlParams.get('title');

// Configure custom title updates safely
if (TARGET_TITLE_PARAM) {
  document.getElementById('event-title').textContent = TARGET_TITLE_PARAM.toUpperCase();
}

// Compute standard fallback target timestamp profiles (Default: Exactly 1 year ahead from today)
let targetDate;
if (TARGET_DATE_PARAM) {
  targetDate = new Date(TARGET_DATE_PARAM).getTime();
} else {
  const oneYearAhead = new Date();
  oneYearAhead.setFullYear(oneYearAhead.getFullYear() + 1);
  targetDate = oneYearAhead.getTime();
}

function updateCountdown() {
  const now = new Date().getTime();
  const timeDifference = targetDate - now;

  // Handle calculation boundaries once dates match up or pass
  if (timeDifference <= 0) {
    document.getElementById('days-val').textContent = "00";
    document.getElementById('hours-val').textContent = "00";
    document.getElementById('minutes-val').textContent = "00";
    document.getElementById('seconds-val').textContent = "00";
    return;
  }

  // Live countdown math conversions down to the second
  const totalSeconds = Math.floor(timeDifference / 1000);
  const totalMinutes = Math.floor(totalSeconds / 60);
  const totalHours = Math.floor(totalMinutes / 60);
  
  const finalDays = Math.floor(totalHours / 24);
  const finalHours = totalHours % 24;
  const finalMinutes = totalMinutes % 60;
  const finalSeconds = totalSeconds % 60;

  // Render values to document nodes with structural padding
  document.getElementById('days-val').textContent = String(finalDays).padStart(2, '0');
  document.getElementById('hours-val').textContent = String(finalHours).padStart(2, '0');
  document.getElementById('minutes-val').textContent = String(finalMinutes).padStart(2, '0');
  document.getElementById('seconds-val').textContent = String(finalSeconds).padStart(2, '0');
}

// Anti-white flicker matching logic block 
(function() {
  function matchNotionTheme() {
    try {
      const isDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
      document.body.style.setProperty('background', isDark ? '#191919' : 'transparent', 'important');
      document.documentElement.style.setProperty('background', isDark ? '#191919' : 'transparent', 'important');
    } catch(e) {
      document.body.style.background = 'transparent';
    }
  }
  if (window.matchMedia) {
    window.matchMedia('(prefers-color-scheme: dark)').addListener(matchNotionTheme);
  }
  matchNotionTheme();
})();

// Initialize countdown update intervals instantly on launch execution loops
updateCountdown();
setInterval(updateCountdown, 1000);
