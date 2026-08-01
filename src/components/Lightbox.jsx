function Lightbox({ src, alt, onClose }) {
    if (!src) return null

    return (
        <div className="lightbox-backdrop" onClick={onClose}>
            <button className="lightbox-close" onClick={onClose} aria-label="Cerrar">×</button>
            <img
                src={src}
                alt={alt}
                className="lightbox-imagen"
                onClick={(e) => e.stopPropagation()}
            />
        </div>
    )
}

export default Lightbox