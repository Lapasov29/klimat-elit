const counterUp = window.counterUp.default

const callback = entries => {
	entries.forEach( entry => {
		const el = entry.target
		if ( entry.isIntersecting && ! el.classList.contains("is-visible") ) {
			counterUp( el, {
				duration: 2000,
				delay: 5,
			} )
			el.classList.add("is-visible")
		}
	} )
}

const IO = new IntersectionObserver( callback, { threshold: 1 } )

const elF = document.querySelector(".counter-F")
const elS = document.querySelector(".counter-S")
const elT = document.querySelector(".counter-T")

IO.observe( elF)
IO.observe( elS)
IO.observe( elT)