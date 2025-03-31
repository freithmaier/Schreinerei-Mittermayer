import Link from "next/link";
import Image from "next/image";
import { ChevronRight, Mail, MapPin, Phone } from "lucide-react";

import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur">
        <div className="container flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center gap-2 font-bold text-xl">
            <Image
              src="/placeholder.svg?height=40&width=40"
              alt="Schreinerei Mittermayer Logo"
              width={40}
              height={40}
              className="rounded"
            />
            <span>Schreinerei Mittermayer</span>
          </Link>
          <nav className="hidden md:flex gap-6">
            <Link
              href="/"
              className="font-medium hover:text-primary transition-colors"
            >
              Startseite
            </Link>
            <Link
              href="#leistungen"
              className="font-medium hover:text-primary transition-colors"
            >
              Leistungen
            </Link>
            <Link
              href="#projekte"
              className="font-medium hover:text-primary transition-colors"
            >
              Projekte
            </Link>
            <Link
              href="#über-uns"
              className="font-medium hover:text-primary transition-colors"
            >
              Über uns
            </Link>
            <Link
              href="#kontakt"
              className="font-medium hover:text-primary transition-colors"
            >
              Kontakt
            </Link>
          </nav>
          <Button className="hidden md:flex">
            <Phone className="mr-2 h-4 w-4" /> Anruf vereinbaren
          </Button>
          <Button variant="outline" size="icon" className="md:hidden">
            <span className="sr-only">Menü öffnen</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-6 w-6"
            >
              <line x1="4" x2="20" y1="12" y2="12" />
              <line x1="4" x2="20" y1="6" y2="6" />
              <line x1="4" x2="20" y1="18" y2="18" />
            </svg>
          </Button>
        </div>
      </header>
      <main className="flex-1">
        <section className="relative">
          <div className="absolute inset-0 bg-black/50 z-10" />
          <div className="relative h-[600px]">
            <Image
              src="/placeholder.svg?height=600&width=1200"
              alt="Schreinerei Mittermayer Werkstatt"
              fill
              className="object-cover"
              priority
            />
          </div>
          <div className="absolute inset-0 z-20 flex items-center justify-center">
            <div className="container px-4 md:px-6 text-center">
              <h1 className="text-4xl md:text-6xl font-bold tracking-tighter text-white mb-4">
                Handwerkskunst aus Niederbayern
              </h1>
              <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto">
                Hochwertige Möbel und Holzarbeiten nach Maß aus der Schreinerei
                Mittermayer in Deggendorf
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="text-lg">
                  Kontakt aufnehmen
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="text-lg bg-white/10 text-white border-white/20 hover:bg-white/20"
                >
                  Projekte ansehen
                </Button>
              </div>
            </div>
          </div>
        </section>

        <section id="leistungen" className="py-16 md:py-24 bg-muted/50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold tracking-tighter mb-4">
                Unsere Leistungen
              </h2>
              <p className="text-muted-foreground max-w-3xl">
                Wir bieten maßgeschneiderte Lösungen für Ihr Zuhause und Ihren
                Geschäftsbereich. Jedes Stück wird mit Präzision und Liebe zum
                Detail gefertigt.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-background rounded-lg shadow-sm p-6 flex flex-col items-center text-center">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-8 w-8 text-primary"
                  >
                    <path d="M3 9h18v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V9Z" />
                    <path d="m3 9 2.45-4.9A2 2 0 0 1 7.24 3h9.52a2 2 0 0 1 1.8 1.1L21 9" />
                    <path d="M12 3v6" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2">Möbel nach Maß</h3>
                <p className="text-muted-foreground mb-4">
                  Individuelle Möbelstücke, die perfekt zu Ihren Räumlichkeiten
                  passen und Ihren persönlichen Stil widerspiegeln.
                </p>
                <Link
                  href="#"
                  className="text-primary font-medium inline-flex items-center"
                >
                  Mehr erfahren <ChevronRight className="ml-1 h-4 w-4" />
                </Link>
              </div>
              <div className="bg-background rounded-lg shadow-sm p-6 flex flex-col items-center text-center">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-8 w-8 text-primary"
                  >
                    <path d="M2 3h20" />
                    <path d="M21 3v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V3" />
                    <path d="m7 21 5-5 5 5" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2">Innenausbau</h3>
                <p className="text-muted-foreground mb-4">
                  Kompletter Innenausbau von Wohn- und Geschäftsräumen, von der
                  Planung bis zur Umsetzung.
                </p>
                <Link
                  href="#"
                  className="text-primary font-medium inline-flex items-center"
                >
                  Mehr erfahren <ChevronRight className="ml-1 h-4 w-4" />
                </Link>
              </div>
              <div className="bg-background rounded-lg shadow-sm p-6 flex flex-col items-center text-center">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-8 w-8 text-primary"
                  >
                    <path d="M18 20V6a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v14" />
                    <path d="M2 20h20" />
                    <path d="M14 12v.01" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2">Türen & Fenster</h3>
                <p className="text-muted-foreground mb-4">
                  Hochwertige Türen und Fenster aus Holz, individuell angepasst
                  und fachgerecht eingebaut.
                </p>
                <Link
                  href="#"
                  className="text-primary font-medium inline-flex items-center"
                >
                  Mehr erfahren <ChevronRight className="ml-1 h-4 w-4" />
                </Link>
              </div>
              <div className="bg-background rounded-lg shadow-sm p-6 flex flex-col items-center text-center">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-8 w-8 text-primary"
                  >
                    <rect width="18" height="18" x="3" y="3" rx="2" />
                    <path d="M3 9h18" />
                    <path d="M9 21V9" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2">Küchen</h3>
                <p className="text-muted-foreground mb-4">
                  Funktionale und ästhetische Küchenkonzepte, die Ihre
                  Kochgewohnheiten und Ihren Stil berücksichtigen.
                </p>
                <Link
                  href="#"
                  className="text-primary font-medium inline-flex items-center"
                >
                  Mehr erfahren <ChevronRight className="ml-1 h-4 w-4" />
                </Link>
              </div>
              <div className="bg-background rounded-lg shadow-sm p-6 flex flex-col items-center text-center">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-8 w-8 text-primary"
                  >
                    <path d="M21 7v6h-6" />
                    <path d="M3 17a9 9 0 0 1 9-9 9 9 0 0 1 6 2.3l3 2.7" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2">Restaurierung</h3>
                <p className="text-muted-foreground mb-4">
                  Fachgerechte Restaurierung von Antiquitäten und alten
                  Möbelstücken mit Respekt für das Original.
                </p>
                <Link
                  href="#"
                  className="text-primary font-medium inline-flex items-center"
                >
                  Mehr erfahren <ChevronRight className="ml-1 h-4 w-4" />
                </Link>
              </div>
              <div className="bg-background rounded-lg shadow-sm p-6 flex flex-col items-center text-center">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-8 w-8 text-primary"
                  >
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2">Reparaturen</h3>
                <p className="text-muted-foreground mb-4">
                  Schnelle und zuverlässige Reparaturen von Holzmöbeln, Türen,
                  Fenstern und anderen Holzelementen.
                </p>
                <Link
                  href="#"
                  className="text-primary font-medium inline-flex items-center"
                >
                  Mehr erfahren <ChevronRight className="ml-1 h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section id="projekte" className="py-16 md:py-24">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold tracking-tighter mb-4">
                Unsere Projekte
              </h2>
              <p className="text-muted-foreground max-w-3xl">
                Entdecken Sie eine Auswahl unserer abgeschlossenen Projekte und
                lassen Sie sich von unserer Handwerkskunst inspirieren.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[1, 2, 3, 4, 5, 6].map((item) => (
                <div
                  key={item}
                  className="group relative overflow-hidden rounded-lg"
                >
                  <Image
                    src={`/placeholder.svg?height=400&width=600&text=Projekt%20${item}`}
                    alt={`Projekt ${item}`}
                    width={600}
                    height={400}
                    className="object-cover w-full aspect-[4/3] transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                    <div>
                      <h3 className="text-xl font-bold text-white mb-2">
                        Projekt {item}
                      </h3>
                      <p className="text-white/90 mb-4">
                        Beschreibung des Projekts {item}
                      </p>
                      <Button
                        variant="outline"
                        className="bg-white/10 text-white border-white/20 hover:bg-white/20"
                      >
                        Details ansehen
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="flex justify-center mt-10">
              <Button variant="outline" size="lg">
                Alle Projekte ansehen
              </Button>
            </div>
          </div>
        </section>

        <section id="über-uns" className="py-16 md:py-24 bg-muted/50">
          <div className="container px-4 md:px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold tracking-tighter mb-4">
                  Über die Schreinerei Mittermayer
                </h2>
                <p className="text-muted-foreground mb-6">
                  Seit über 30 Jahren steht die Schreinerei Mittermayer für
                  Qualität, Präzision und Zuverlässigkeit. Als Familienbetrieb
                  in Deggendorf, Niederbayern, verbinden wir traditionelles
                  Handwerk mit modernen Techniken.
                </p>
                <p className="text-muted-foreground mb-6">
                  Unser Team aus erfahrenen Schreinern und talentierten
                  Nachwuchskräften arbeitet mit Leidenschaft daran, Ihre Wünsche
                  und Vorstellungen in hochwertige Holzarbeiten umzusetzen.
                </p>
                <p className="text-muted-foreground mb-8">
                  Wir legen großen Wert auf nachhaltige Materialien und
                  umweltfreundliche Produktionsprozesse, um nicht nur Ihnen,
                  sondern auch der Umwelt gerecht zu werden.
                </p>
                <Button>Mehr über uns erfahren</Button>
              </div>
              <div className="relative">
                <Image
                  src="/placeholder.svg?height=600&width=800&text=Werkstatt"
                  alt="Schreinerei Mittermayer Werkstatt"
                  width={800}
                  height={600}
                  className="rounded-lg shadow-lg object-cover"
                />
                <div className="absolute -bottom-6 -left-6 bg-background p-4 rounded-lg shadow-lg max-w-xs">
                  <p className="italic text-muted-foreground">
                    "Holz ist nicht nur unser Material, sondern unsere
                    Leidenschaft. Jedes Stück erzählt eine Geschichte."
                  </p>
                  <p className="font-bold mt-2">- Familie Mittermayer</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="kontakt" className="py-16 md:py-24">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold tracking-tighter mb-4">
                Kontaktieren Sie uns
              </h2>
              <p className="text-muted-foreground max-w-3xl">
                Haben Sie Fragen oder möchten Sie ein Projekt besprechen?
                Kontaktieren Sie uns gerne per Telefon, E-Mail oder besuchen Sie
                unsere Werkstatt in Deggendorf.
              </p>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="bg-background rounded-lg shadow-sm p-6 flex flex-col items-center text-center">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <Phone className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2">Telefon</h3>
                <p className="text-muted-foreground mb-4">
                  Rufen Sie uns an für eine persönliche Beratung
                </p>
                <a
                  href="tel:+4991112345678"
                  className="text-primary font-medium"
                >
                  +49 (0) 9911 12345678
                </a>
              </div>
              <div className="bg-background rounded-lg shadow-sm p-6 flex flex-col items-center text-center">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <Mail className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2">E-Mail</h3>
                <p className="text-muted-foreground mb-4">
                  Schreiben Sie uns für Anfragen und Informationen
                </p>
                <a
                  href="mailto:info@schreinerei-mittermayer.de"
                  className="text-primary font-medium"
                >
                  info@schreinerei-mittermayer.de
                </a>
              </div>
              <div className="bg-background rounded-lg shadow-sm p-6 flex flex-col items-center text-center">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <MapPin className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2">Adresse</h3>
                <p className="text-muted-foreground mb-4">
                  Besuchen Sie unsere Werkstatt und Ausstellung
                </p>
                <address className="not-italic text-primary font-medium">
                  Handwerkerstraße 123
                  <br />
                  94469 Deggendorf
                  <br />
                  Bayern
                </address>
              </div>
            </div>
            <div className="mt-12 bg-background rounded-lg shadow-sm p-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-2xl font-bold mb-4">Schreiben Sie uns</h3>
                  <form className="space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <label htmlFor="name" className="text-sm font-medium">
                          Name
                        </label>
                        <input
                          id="name"
                          placeholder="Ihr Name"
                          className="w-full px-3 py-2 border rounded-md"
                        />
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="email" className="text-sm font-medium">
                          E-Mail
                        </label>
                        <input
                          id="email"
                          type="email"
                          placeholder="Ihre E-Mail"
                          className="w-full px-3 py-2 border rounded-md"
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="subject" className="text-sm font-medium">
                        Betreff
                      </label>
                      <input
                        id="subject"
                        placeholder="Betreff Ihrer Nachricht"
                        className="w-full px-3 py-2 border rounded-md"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="message" className="text-sm font-medium">
                        Nachricht
                      </label>
                      <textarea
                        id="message"
                        placeholder="Ihre Nachricht"
                        className="w-full px-3 py-2 border rounded-md min-h-[120px]"
                      />
                    </div>
                    <Button type="submit" className="w-full sm:w-auto">
                      Nachricht senden
                    </Button>
                  </form>
                </div>
                <div className="h-[300px] lg:h-auto rounded-lg overflow-hidden">
                  <Image
                    src="/placeholder.svg?height=400&width=600&text=Karte"
                    alt="Standort Karte"
                    width={600}
                    height={400}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="bg-muted py-12">
        <div className="container px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div>
              <Link
                href="/"
                className="flex items-center gap-2 font-bold text-xl mb-4"
              >
                <Image
                  src="/placeholder.svg?height=40&width=40"
                  alt="Schreinerei Mittermayer Logo"
                  width={40}
                  height={40}
                  className="rounded"
                />
                <span>Schreinerei Mittermayer</span>
              </Link>
              <p className="text-muted-foreground mb-4">
                Qualität und Handwerkskunst seit 1990. Ihr Spezialist für Möbel
                nach Maß und Innenausbau in Deggendorf und Umgebung.
              </p>
              <div className="flex space-x-4">
                <a
                  href="#"
                  className="text-muted-foreground hover:text-primary"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-5 w-5"
                  >
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                  </svg>
                  <span className="sr-only">Facebook</span>
                </a>
                <a
                  href="#"
                  className="text-muted-foreground hover:text-primary"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-5 w-5"
                  >
                    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                  </svg>
                  <span className="sr-only">Instagram</span>
                </a>
              </div>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-4">Leistungen</h3>
              <ul className="space-y-2">
                <li>
                  <Link
                    href="#"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    Möbel nach Maß
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    Innenausbau
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    Türen & Fenster
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    Küchen
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    Restaurierung
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    Reparaturen
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-4">Öffnungszeiten</h3>
              <ul className="space-y-2">
                <li className="flex justify-between">
                  <span className="text-muted-foreground">
                    Montag - Freitag
                  </span>
                  <span>8:00 - 17:00 Uhr</span>
                </li>
                <li className="flex justify-between">
                  <span className="text-muted-foreground">Samstag</span>
                  <span>9:00 - 13:00 Uhr</span>
                </li>
                <li className="flex justify-between">
                  <span className="text-muted-foreground">Sonntag</span>
                  <span>Geschlossen</span>
                </li>
              </ul>
              <p className="mt-4 text-sm text-muted-foreground">
                Termine außerhalb der Öffnungszeiten nach Vereinbarung möglich.
              </p>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-4">Kontakt</h3>
              <address className="not-italic space-y-2 text-muted-foreground">
                <p className="flex items-start">
                  <MapPin className="mr-2 h-5 w-5 shrink-0" />
                  <span>
                    Handwerkerstraße 123
                    <br />
                    94469 Deggendorf
                    <br />
                    Bayern
                  </span>
                </p>
                <p className="flex items-center">
                  <Phone className="mr-2 h-5 w-5" />
                  <a href="tel:+4991112345678" className="hover:text-primary">
                    +49 (0) 9911 12345678
                  </a>
                </p>
                <p className="flex items-center">
                  <Mail className="mr-2 h-5 w-5" />
                  <a
                    href="mailto:info@schreinerei-mittermayer.de"
                    className="hover:text-primary"
                  >
                    info@schreinerei-mittermayer.de
                  </a>
                </p>
              </address>
            </div>
          </div>
          <div className="border-t mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} Schreinerei Mittermayer. Alle Rechte
              vorbehalten.
            </p>
            <div className="flex space-x-4 mt-4 md:mt-0">
              <Link
                href="#"
                className="text-sm text-muted-foreground hover:text-primary"
              >
                Impressum
              </Link>
              <Link
                href="#"
                className="text-sm text-muted-foreground hover:text-primary"
              >
                Datenschutz
              </Link>
              <Link
                href="#"
                className="text-sm text-muted-foreground hover:text-primary"
              >
                AGB
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
