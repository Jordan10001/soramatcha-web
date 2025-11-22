export default function SquareImage({
  src = '',
  alt = '',
} ) {
  return (
    <div>
        <div className="aspect-square" aria-hidden="true">
          <img src={src} alt={alt} className="w-full h-full object-cover block" />
        </div>
    </div>
  )
}