const urlParams = new URLSearchParams(window.location.search);
const TARGET_DATE_PARAM = urlParams.get('date'); 
const TARGET_TITLE_PARAM = urlParams.get('title');

if (TARGET_TITLE_PARAM) {
  document.getElementById('event-title').textContent = TARGET_TITLE_PARAM.toUpperCase();
}

let targetDate;
if (TARGET_DATE_PARAM) {
  targetDate = new Date(TARGET_DATE_PARAM);
} else {
  // Default fallback: exactly 2 years into the future from today to highlight year metrics
  const defaultFuture = new Date();
  defaultFuture.setFullYear(defaultFuture.getFullYear() + 2);
  targetDate = defaultFuture;
}

function updateCountdown() {
  const now = new Date();
  
  if (targetDate - now <= 0) {
    document.getElementById('years-val').textContent = "00";
    document.getElementById('months-val').textContent = "00";
    document.getElementById('days-val').textContent = "00";
    document.getElementById('hours-val').textContent = "00";
    document.getElementById('minutes-val').textContent = "00";
    document.getElementById('seconds-val').textContent = "00";
    return;
  }

  // Set structural calendar baselines
  let currentYear = now.getFullYear();
  let currentMonth = now.getMonth();
  let currentDate = now.getDate();

  let targetYear = targetDate.getFullYear();
  let targetMonth = targetDate.getMonth();
  let targetDay = targetDate.getDate();

  // 1. Calculate relative differences for macro boundaries (Years and Months)
  let diffYears = targetYear - currentYear;
  let diffMonths = targetMonth - currentMonth;

  if (diffMonths < 0) {
    diffYears--;
    diffMonths += 12;
  }

  // 2. Calculate remaining Day thresholds
  let diffDays = targetDay - currentDate;
  if (diffDays < 0) {
    diffMonths--;
    if (diffMonths < 0) {
      diffYears--;
      diffMonths += 12;
    }
    // Pull actual length of the preceding month to align the wrapping days correctly
    const previousMonthObject = new Date(targetYear, targetMonth, 0);
    diffDays += previousMonthObject.getDate();
  }

  // 3. Compute micro clock adjustments (Hours, Minutes, Seconds)
  const msDifference = targetDate.getTime() - now.getTime();
  const totalSeconds = Math.floor(msDifference / 1000);
  const totalMinutes = Math.floor(totalSeconds / 60);
  const totalHours = Math.floor(totalMinutes / 60);

  // Synchronize remaining time across structural elements
  const finalHours = totalHours % 24;
  const finalMinutes = totalMinutes % 60;
  const finalSeconds = totalSeconds % 60;

  // Render variables cleanly onto target interface containers
  document.getElementById('years-val').textContent = String(diffYears).padStart(2, '0');
  document.getElementById('months-val').textContent = String(diffMonths).padStart(2, '0');
  document.getElementById('days-val').textContent = String(diffDays).padStart(2, '0');
  document.getElementById('hours-val').textContent = String(finalHours).padStart(2, '0');
  document.getElementById('minutes-val').textContent = String(finalMinutes).padStart(2, '0');
  document.getElementById('seconds-val').textContent = String(finalSeconds).padStart(2, '0');
}

// Anti-white flicker framework injection code layer
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

updateCountdown();
setInterval(updateCountdown, 1000);
