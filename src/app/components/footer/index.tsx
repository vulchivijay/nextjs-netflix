import Link from 'next/link'
import { footerColumns, supportPhone, learnMoreHref } from '@/lib/links'

export default function Footer() {
  return (
    <footer className="relative z-10 bg-black border-t-1 border-gray-200 pt-10 pb-20">
      <div className="max-w-7xl m-auto text-white">
        <p className="text-md pb-8 text-white">
          Questions? Call <Link href={`tel:${supportPhone}`} className="underline">{supportPhone}</Link>
        </p>
        <div className="flex pb-10 gap-4">
          {footerColumns.map(column => (
            <div key={column.id} className="flex-1">
              {column.links.map(link => (
                <div className="flex flex-row py-2" key={link.id}>
                  <Link href={link.href} className="text-sm underline text-white">
                    {link.label}
                  </Link>
                </div>
              ))}
            </div>
          ))}
        </div>
        <p className="text-sm text-gray-500">
          This page is protected by Google reCAPTCHA to ensure you are not a bot. <Link href={learnMoreHref} className="text-blue-700">Learn more.</Link>
        </p>
      </div>
    </footer>
  )
}