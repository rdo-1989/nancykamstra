import type { Metadata } from 'next';
import './globals.css';
export const metadata: Metadata = { title: 'Trouwambtenaar Nancy | BABS in Noordoostpolder', metadataBase: new URL('https://trouwambtenaar-nancy.remkodoorn.chatgpt.site'), alternates: {canonical: '/'}, description: 'Nancy Kamstra: persoonlijke trouwceremonies met humor en gevoel. BABS sinds 2022, vanuit de Noordoostpolder in heel Nederland. Prijzen op aanvraag.', openGraph: {title: 'Trouwambtenaar Nancy | Ja, tegen helemaal jullie.', description: 'Een persoonlijke ceremonie met humor en gevoel. Maak vrijblijvend kennis met Nancy Kamstra.', locale: 'nl_NL', type: 'website'} };
export default function RootLayout({children}: Readonly<{children: React.ReactNode}>) { return <html lang="nl"><body>{children}</body></html>; }

