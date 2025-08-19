// Dark/Light mode toggle with system preference default
(function initTheme() {
  const button = document.getElementById('mode-toggle')
  const logoContainer = document.querySelector('.zaykabox-logo-container')

  const hasExplicit = document.body.classList.contains('dark-mode') || document.body.classList.contains('light-mode')
  if (!hasExplicit) {
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
    document.body.classList.add(prefersDark ? 'dark-mode' : 'light-mode')
    logoContainer && (logoContainer.style.background = prefersDark ? '#2c2c2c' : '#181818')
  }

  function updateButtonText() {
    button.textContent = document.body.classList.contains('dark-mode') ? 'Switch to Light Mode' : 'Switch to Dark Mode'
  }

  button.addEventListener('click', () => {
    if (document.body.classList.contains('dark-mode')) {
      document.body.classList.replace('dark-mode', 'light-mode')
      logoContainer && (logoContainer.style.background = '#181818')
    } else {
      document.body.classList.replace('light-mode', 'dark-mode')
      logoContainer && (logoContainer.style.background = '#2c2c2c')
    }
    updateButtonText()
  })

  updateButtonText()
})()

// Food scroll controls
;(function initFoodScroll() {
  const row = document.getElementById('food-scroll-row')
  const left = document.getElementById('left-btn')
  const right = document.getElementById('right-btn')
  if (!row || !left || !right) return

  const step = () => Math.min(360, row.clientWidth * 0.8)
  left.addEventListener('click', () => row.scrollBy({ left: -step(), behavior: 'smooth' }))
  right.addEventListener('click', () => row.scrollBy({ left: step(), behavior: 'smooth' }))
})()

// View more button feedback
;(function initViewMore() {
  const btn = document.getElementById('btnViewMore')
  if (!btn) return
  btn.addEventListener('click', (e) => {
    e.preventDefault()
    btn.disabled = true
    const original = btn.textContent
    btn.textContent = 'Loading more…'
    setTimeout(() => {
      btn.textContent = original
      btn.disabled = false
    }, 1000)
  })
})()

// Basic search demo: highlight matches in food cards
;(function initSearch() {
  const inputLocation = document.getElementById('search-input-location')
  const inputFood = document.getElementById('search-input-food')
  const btnLoc = document.getElementById('search-btn-location')
  const btnFood = document.getElementById('search-btn-food')

  const cards = Array.from(document.querySelectorAll('.food-card h5'))
  function highlight(query) {
    const q = query.trim().toLowerCase()
    cards.forEach(h => {
      const text = h.textContent
      if (!q) { h.innerHTML = text; return }
      const idx = text.toLowerCase().indexOf(q)
      if (idx >= 0) {
        const before = text.slice(0, idx)
        const match = text.slice(idx, idx + q.length)
        const after = text.slice(idx + q.length)
        h.innerHTML = `${before}<mark>${match}</mark>${after}`
      } else {
        h.innerHTML = text
      }
    })
  }

  function onSearchClick(which) {
    const q = which === 'loc' ? inputLocation.value : inputFood.value
    highlight(q)
  }

  btnLoc && btnLoc.addEventListener('click', () => onSearchClick('loc'))
  btnFood && btnFood.addEventListener('click', () => onSearchClick('food'))
})()

// Image fallback in case assets are missing
;(function addImageFallbacks() {
  const fallback = 'https://images.unsplash.com/photo-1504754524776-8f4f37790ca0?q=80&w=800&auto=format&fit=crop'
  document.querySelectorAll('img').forEach(img => {
    img.addEventListener('error', () => { img.src = fallback })
  })
})()


