export default function Logo({ className = 'h-9' }: { className?: string }) {
  return (
    <img
      src="/Logo.png"
      alt="Delta Capital"
      className={className}
      style={{ objectFit: 'contain' }}
    />
  )
}
