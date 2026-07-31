import { useEffect, useState } from 'react'

function ScrollTop() {
    const [visible, setVisible] = useState(false)

    useEffect(() => {
        const onScroll = () => setVisible(window.scrollY > 400)
        window.addEventListener('scroll', onScroll, { passive: true })
        return () => window.removeEventListener('scroll', onScroll)
    }, [])

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' })
    }

    return (
        <button
            className={`scrolltop-btn ${visible ? 'visible' : ''}`}
            onClick={scrollToTop}
            aria-label="Subir"
            title="Subir"
        >
            ↑
        </button>
    )
}

export default ScrollTop