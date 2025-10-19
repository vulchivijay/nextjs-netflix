export default function Loading() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-black text-white">
      <div className="flex flex-col items-center gap-4">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-white" />
        <div className="text-sm">Loading…</div>
      </div>
    </div>
  )
}
