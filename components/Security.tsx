"use client"

import Link from "next/link"
import { useState } from "react"
import { ChevronDown, Menu } from 'lucide-react'
import Image from "next/image"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Button } from "@/components/ui/button"
import { Space_Mono, IBM_Plex_Sans } from "next/font/google"

const spaceMono = Space_Mono({ subsets: ['latin'], weight: ['400', '700'] })
const ibmPlexSans = IBM_Plex_Sans({ subsets: ['latin'], weight: ['400', '700'] })

export const Security = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [expandedSections, setExpandedSections] = useState<string[]>([]);

  const toggleSection = (title: string) => {
    setExpandedSections(prev => 
      prev.includes(title) 
        ? prev.filter(t => t !== title)
        : [...prev, title]
    );
  };

  return (
    <div className={`min-h-screen flex flex-col ${spaceMono.className}`}>
      <header className="fixed w-full top-0 z-[100] shadow-lg after:absolute after:inset-0 after:shadow-[0_4px_12px_rgba(0,0,0,0.2)] after:pointer-events-none">
        <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#FFC700] to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#FFC700]/5 to-transparent pointer-events-none" />
        <nav className="bg-[#F5F1E6] px-2 py-3 flex flex-row items-center justify-between w-full relative min-h-[48px] z-50">
          <div className="flex items-center">
            <Link href="https://collab.land" className="transform transition-transform hover:scale-105">
              {/* Desktop logo */}
              <Image
                src="/Logo-Color.png"
                alt="Collab.Land"
                width={180}
                height={36}
                className="h-8 w-auto hover:brightness-110 transition-all hidden md:block"
                priority
              />
              {/* Mobile logo */}
              <Image
                src="/LogoIconColor.svg"
                alt="Collab.Land"
                width={32}
                height={32}
                className="h-8 w-auto hover:brightness-110 transition-all md:hidden"
                priority
              />
            </Link>
          </div>
          
          {/* Mobile menu button */}
          <Button 
            variant="ghost"
            className="md:hidden text-[#1A1A40]"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <Menu className="h-6 w-6" />
          </Button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-2">
            <Popover>
              <PopoverTrigger asChild>
                <Button 
                  variant="ghost" 
                  className={`
                    text-base h-8 px-3 py-1 
                    text-[#1A1A40] hover:text-[#FFB800] 
                    transition-all duration-300 
                    ${spaceMono.className} 
                    font-bold
                    relative
                    group
                    hover:bg-[#FFC700]/10
                    data-[state=open]:bg-[#FFC700]/10
                  `}
                >
                  <div className="absolute bottom-0 left-0 w-full h-[2px] bg-[#FFB800] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
                  About <ChevronDown className="ml-4 h-4 w-4 transition-transform duration-300" />
                </Button>
              </PopoverTrigger>
              <PopoverContent 
                className={`
                  w-48 bg-[#FFC700] 
                  border-none rounded-lg shadow-lg 
                  ${spaceMono.className}
                  backdrop-blur-sm
                  relative
                  z-[200]
                  before:absolute before:inset-0 
                  before:border-2 before:border-black/10 
                  before:rounded-lg
                  after:absolute after:inset-0 
                  after:bg-gradient-to-b after:from-white/10 after:to-transparent 
                  after:rounded-lg after:pointer-events-none
                `}
                sideOffset={4}
                align="center"
                side="bottom"
              >
                <div className="grid gap-1 relative z-10">
                  {[
                    { href: "https://collab.land/overview", label: "Overview" },
                    { href: "https://collab.land/team", label: "Team" },
                    { href: "https://docs.collab.land/help-docs/key-features/token/", label: "$COLLAB" }
                  ].map((item) => (
                    <Link 
                      key={item.href}
                      href={item.href} 
                      className="
                        block px-4 py-2 
                        text-[#1A1A40] 
                        text-base
                        font-bold
                        hover:bg-[#FFC700]/80 
                        hover:translate-x-1
                        transition-all duration-200
                        relative
                        group
                        rounded-md
                        overflow-hidden
                      "
                    >
                      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-0 bg-[#1A1A40] group-hover:h-1/2 transition-all duration-200" />
                      {item.label}
                    </Link>
                  ))}
                </div>
              </PopoverContent>
            </Popover>
            <Popover>
              <PopoverTrigger asChild>
                <Button 
                  variant="ghost" 
                  className={`
                    text-base h-8 px-3 py-1 
                    text-[#1A1A40] hover:text-[#FFB800] 
                    transition-all duration-300 
                    ${spaceMono.className} 
                    font-bold
                    relative
                    group
                    hover:bg-[#FFC700]/10
                    data-[state=open]:bg-[#FFC700]/10
                  `}
                >
                  <div className="absolute bottom-0 left-0 w-full h-[2px] bg-[#FFB800] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
                  Admins <ChevronDown className="ml-4 h-4 w-4 transition-transform duration-300" />
                </Button>
              </PopoverTrigger>
              <PopoverContent 
                className={`
                  w-48 bg-[#FFC700] 
                  border-none rounded-lg shadow-lg 
                  ${spaceMono.className}
                  backdrop-blur-sm
                  relative
                  z-[200]
                  before:absolute before:inset-0 
                  before:border-2 before:border-black/10 
                  before:rounded-lg
                  after:absolute after:inset-0 
                  after:bg-gradient-to-b after:from-white/10 after:to-transparent 
                  after:rounded-lg after:pointer-events-none
                `}
                sideOffset={4}
                align="center"
                side="bottom"
              >
                <div className="grid gap-1 relative z-10">
                  {[
                    { href: "https://cc.collab.land", label: "Command Center" },
                    { href: "https://docs.collab.land", label: "Docs" },
                    { href: "https://invite.collab.land", label: "Invite" },
                    { href: "https://bit.ly/3M5lIAo", label: "Integrations" },
                    { href: "https://pricing.collab.land", label: "Premium" }
                  ].map((item) => (
                    <Link 
                      key={item.href}
                      href={item.href} 
                      className="
                        block px-4 py-2 
                        text-[#1A1A40] 
                        text-base
                        font-bold
                        hover:bg-[#FFC700]/80 
                        hover:translate-x-1
                        transition-all duration-200
                        relative
                        group
                        rounded-md
                        overflow-hidden
                      "
                    >
                      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-0 bg-[#1A1A40] group-hover:h-1/2 transition-all duration-200" />
                      {item.label}
                    </Link>
                  ))}
                </div>
              </PopoverContent>
            </Popover>
            <Popover>
              <PopoverTrigger asChild>
                <Button 
                  variant="ghost" 
                  className={`
                    text-base h-8 px-3 py-1 
                    text-[#1A1A40] hover:text-[#FFB800] 
                    transition-all duration-300 
                    ${spaceMono.className} 
                    font-bold
                    relative
                    group
                    hover:bg-[#FFC700]/10
                    data-[state=open]:bg-[#FFC700]/10
                  `}
                >
                  <div className="absolute bottom-0 left-0 w-full h-[2px] bg-[#FFB800] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
                  Resources <ChevronDown className="ml-4 h-4 w-4 transition-transform duration-300" />
                </Button>
              </PopoverTrigger>
              <PopoverContent 
                className={`
                  w-48 bg-[#FFC700] 
                  border-none rounded-lg shadow-lg 
                  ${spaceMono.className}
                  backdrop-blur-sm
                  relative
                  z-[200]
                  before:absolute before:inset-0 
                  before:border-2 before:border-black/10 
                  before:rounded-lg
                  after:absolute after:inset-0 
                  after:bg-gradient-to-b after:from-white/10 after:to-transparent 
                  after:rounded-lg after:pointer-events-none
                `}
                sideOffset={4}
                align="center"
                side="bottom"
              >
                <div className="grid gap-1 relative z-10">
                  {[
                    { href: "https://docs.collab.land", label: "Docs" },
                    { href: "https://bit.ly/3M5lIAo", label: "Integrations" },
                    { href: "https://collabland.substack.com/", label: "Newsletter" },
                    { href: "https://collab.land/security", label: "Security" },
                    { href: "https://collabland.freshdesk.com/support/tickets/new", label: "Support" },
                    { href: "https://medium.com/collab-land", label: "Updates" },
                    { href: "https://www.youtube.com/channel/UCmyt5i7JmBPd03r2eJ-EaMA", label: "YouTube" }
                  ].map((item) => (
                    <Link 
                      key={item.href}
                      href={item.href} 
                      className="
                        block px-4 py-2 
                        text-[#1A1A40] 
                        text-base
                        font-bold
                        hover:bg-[#FFC700]/80 
                        hover:translate-x-1
                        transition-all duration-200
                        relative
                        group
                        rounded-md
                        overflow-hidden
                      "
                    >
                      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-0 bg-[#1A1A40] group-hover:h-1/2 transition-all duration-200" />
                      {item.label}
                    </Link>
                  ))}
                </div>
              </PopoverContent>
            </Popover>
            <Popover>
              <PopoverTrigger asChild>
                <Button 
                  variant="ghost" 
                  className={`
                    text-base h-8 px-3 py-1 
                    text-[#1A1A40] hover:text-[#FFB800] 
                    transition-all duration-300 
                    ${spaceMono.className} 
                    font-bold
                    relative
                    group
                    hover:bg-[#FFC700]/10
                    data-[state=open]:bg-[#FFC700]/10
                  `}
                >
                  <div className="absolute bottom-0 left-0 w-full h-[2px] bg-[#FFB800] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
                  Socials <ChevronDown className="ml-4 h-4 w-4 transition-transform duration-300" />
                </Button>
              </PopoverTrigger>
              <PopoverContent 
                className={`
                  w-48 bg-[#FFC700] 
                  border-none rounded-lg shadow-lg 
                  ${spaceMono.className}
                  backdrop-blur-sm
                  relative
                  z-[200]
                  before:absolute before:inset-0 
                  before:border-2 before:border-black/10 
                  before:rounded-lg
                  after:absolute after:inset-0 
                  after:bg-gradient-to-b after:from-white/10 after:to-transparent 
                  after:rounded-lg after:pointer-events-none
                `}
                sideOffset={4}
                align="center"
                side="bottom"
              >
                <div className="grid gap-1 relative z-10">
                  {[
                    { href: "https://discord.gg/collabland", label: "Discord" },
                    { href: "https://www.instagram.com/collab_land_", label: "Instagram" },
                    { href: "https://linktr.ee/collab_land_", label: "Linktree" },
                    { href: "https://twitter.com/Collab_Land_", label: "X" }
                  ].map((item) => (
                    <Link 
                      key={item.href}
                      href={item.href} 
                      className="
                        block px-4 py-2 
                        text-[#1A1A40] 
                        text-base
                        font-bold
                        hover:bg-[#FFC700]/80 
                        hover:translate-x-1
                        transition-all duration-200
                        relative
                        group
                        rounded-md
                        overflow-hidden
                      "
                    >
                      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-0 bg-[#1A1A40] group-hover:h-1/2 transition-all duration-200" />
                      {item.label}
                    </Link>
                  ))}
                </div>
              </PopoverContent>
            </Popover>
          </div>
        </nav>

        {/* Mobile menu overlay */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-[#F5F1E6] border-t border-[#FFC700]/20 shadow-lg">
            <div className="p-4 space-y-4">
              {[
                {
                  title: "About",
                  links: [
                    { href: "https://collab.land/overview", label: "Overview" },
                    { href: "https://collab.land/team", label: "Team" },
                    { href: "https://docs.collab.land/help-docs/key-features/token/", label: "$COLLAB" }
                  ]
                },
                {
                  title: "Admins",
                  links: [
                    { href: "https://cc.collab.land", label: "Command Center" },
                    { href: "https://docs.collab.land", label: "Docs" },
                    { href: "https://invite.collab.land", label: "Invite" },
                    { href: "https://bit.ly/3M5lIAo", label: "Integrations" },
                    { href: "https://pricing.collab.land", label: "Premium" }
                  ]
                },
                {
                  title: "Resources",
                  links: [
                    { href: "https://docs.collab.land", label: "Docs" },
                    { href: "https://bit.ly/3M5lIAo", label: "Integrations" },
                    { href: "https://collabland.substack.com/", label: "Newsletter" },
                    { href: "https://collab.land/security", label: "Security" },
                    { href: "https://collabland.freshdesk.com/support/tickets/new", label: "Support" },
                    { href: "https://medium.com/collab-land", label: "Updates" },
                    { href: "https://www.youtube.com/channel/UCmyt5i7JmBPd03r2eJ-EaMA", label: "YouTube" }
                  ]
                },
                {
                  title: "Socials",
                  links: [
                    { href: "https://discord.gg/collabland", label: "Discord" },
                    { href: "https://www.instagram.com/collab_land_", label: "Instagram" },
                    { href: "https://linktr.ee/collab_land_", label: "Linktree" },
                    { href: "https://twitter.com/Collab_Land_", label: "X" }
                  ]
                }
              ].map((section) => (
                <div key={section.title} className="border-b border-[#FFC700]/20 last:border-b-0">
                  <button
                    onClick={() => toggleSection(section.title)}
                    className="w-full py-2 px-4 flex justify-between items-center text-[#1A1A40] font-bold"
                  >
                    {section.title}
                    <ChevronDown 
                      className={`h-4 w-4 transition-transform duration-200 ${
                        expandedSections.includes(section.title) ? 'rotate-180' : ''
                      }`}
                    />
                  </button>
                  {expandedSections.includes(section.title) && (
                    <div className="py-2 space-y-2">
                      {section.links.map((link) => (
                        <Link
                          key={link.href}
                          href={link.href}
                          className="block px-6 py-2 text-[#1A1A40] hover:bg-[#FFC700]/20"
                        >
                          {link.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}
      </header>

      <main className="flex-1 bg-[#1A1A40]">
        <div className="container mx-auto px-4 py-12 md:py-16 mt-6 md:mt-10">
          <div className="max-w-4xl mx-auto text-center space-y-4">
            <h1 className={`text-xl md:text-2xl lg:text-3xl font-bold text-[#fbbf24] ${ibmPlexSans.className}`}>
              Security and Safety
            </h1>
            
            <p className={`text-[#F5F1E6] text-sm md:text-base leading-relaxed max-w-5xl mx-auto ${spaceMono.className}`}>
              For over four years, Collab.Land has been the most trusted name in crypto communities. As the first to introduce token verification, our read-only application and robust verification measures continue to set the standard for protecting millions. Trust and safety are at the core of everything we do.
            </p>
          </div>
          <div className="flex flex-col gap-4 md:gap-6 max-w-4xl mx-auto py-8 md:py-12">
            {[
              {
                title: "Recognizing Collab.Land",
                content: (
                  <ul className={`list-none pl-3 md:pl-5 space-y-3 md:space-y-4 text-sm md:text-base ${spaceMono.className}`}>
                    <li>
                    <span className="font-bold text-base md:text-lg">1.</span> <span className="font-bold">Check social links:</span> Access verified Collab.Land links <Link href="https://linktr.ee/collab_land_" className="text-[#1A1A40] underline hover:opacity-70 transition-opacity duration-200">here</Link>.
                    </li>
                    <li>
                      <span className="font-bold text-base md:text-lg">2.</span> <span className="font-bold">Recognize Collab.Land accounts:</span>
                      <ul className="list-disc pl-8 md:pl-12 mt-2 space-y-2 md:space-y-3">
                        <li className={spaceMono.className}>Discord: <span className="font-bold">Collab.Land #6374</span></li>
                        <li className={spaceMono.className}>Telegram: <span className="font-bold">@collablandbot</span></li>
                        <li className={spaceMono.className}>
                          See images and details below:
                          <div className="flex flex-col md:flex-row gap-4 mt-4 justify-center">
                            <div className="relative w-full md:w-auto">
                              <Image
                                src="/DiscordBotInfo.png"
                                alt="Discord Bot Information"
                                width={300}
                                height={180}
                                className="w-full md:w-[300px] h-auto rounded-lg shadow-[0_4px_12px_rgba(0,0,0,0.2)] border-2 border-[#1A1A40]/10"
                              />
                            </div>
                            <div className="relative w-full md:w-auto">
                              <Image
                                src="/TGBotInfo.png"
                                alt="Telegram Bot Information"
                                width={300}
                                height={180}
                                className="w-full md:w-[300px] h-auto rounded-lg shadow-[0_4px_12px_rgba(0,0,0,0.2)] border-2 border-[#1A1A40]/10"
                              />
                            </div>
                          </div>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <span className="font-bold text-base md:text-lg">3.</span> <span className="font-bold">Verify website domains:</span> All Collab.Land websites end in collab.land (e.g., connect.collab.land, docs.collab.land).
                    </li>
                    <li>
                      <span className="font-bold text-base md:text-lg">4.</span> <span className="font-bold">Stay informed:</span> Follow Collab.Land's socials and subscribe to the newsletter for the latest news.
                    </li>
                  </ul>
                )
              },
              { 
                title: "Better Practices",
                content: (
                  <ul className={`list-none pl-5 space-y-4 text-sm md:text-base ${spaceMono.className}`}>
                    <li>
                      <span className="font-bold text-base md:text-lg">1.</span> <span className="font-bold">Keep your seed phrase secure:</span> Store it in a safe place and never save it online.
                    </li>
                    <li>
                      <span className="font-bold text-base md:text-lg">2.</span> <span className="font-bold">DYOR (Do Your Own Research):</span> Always investigate thoroughly before engaging with any project or token.
                    </li>
                    <li>
                      <span className="font-bold text-base md:text-lg">3.</span> <span className="font-bold">Use trusted tools and platforms:</span> Stick to reputable wallets, exchanges, and applications to reduce risks.
                    </li>
                    <li>
                      <span className="font-bold text-base md:text-lg">4.</span> <span className="font-bold">Beware of scams:</span> Double-check links, accounts, and communications to ensure legitimacy before taking any action.
                    </li>
                    <li>
                      <span className="font-bold text-base md:text-lg">5.</span> <span className="font-bold">Stay alert:</span> Avoid handling crypto when tired, sick, or in a compromised mental state.
                    </li>
                  </ul>
                )
              },
              { 
                title: "Reporting Crypto Scams",
                content: (
                  <div className={`space-y-4 text-sm md:text-base ${spaceMono.className}`}>
                    <p>Scammers often impersonate trusted brands to deceive users. Whenever we become aware of impersonation attempts, we report them to Discord and relevant platforms. For your protection, we recommend immediately revoking any permissions you may have granted to suspicious entities.</p>
                    <p className="font-bold">If you encounter a fake Collab.Land bot, please report it to Discord using the instructions provided here: <Link href="https://docs.collab.land/help-docs/FAQ/report-scams" className="text-[#1A1A40] underline">How to Report Scams</Link>.</p>
                  </div>
                )
              },
              { 
                title: "Submitting a Support Ticket",
                content: (
                  <ol className={`list-decimal pl-5 space-y-3 text-sm md:text-base ${spaceMono.className}`}>
                    <li>
                      <span className="font-bold">Submit a ticket:</span> If you are having an issue that cannot be solved by reading the docs, submit a ticket <Link href="https://collabland.freshdesk.com/support/tickets/new" className="text-[#1A1A40] underline">here</Link>.
                    </li>
                    <li>
                      <span className="font-bold">Review the Dos and Don'ts:</span> Familiarize yourself with the support guidelines <Link href="https://docs.collab.land/help-docs/FAQ/support-tickets" className="text-[#1A1A40] underline">here</Link>.
                    </li>
                    <li>
                      <span className="font-bold">Stay secure:</span> Do not use any other method or communicate with anyone claiming to be from Collab.Land support.
                    </li>
                  </ol>
                )
              }
            ].map((card, index) => (
              <Card 
                key={index} 
                className="bg-[#F5F1E6] hover:bg-[#FFC700] transition-colors duration-300 ease-in-out border-none group px-3 md:px-4 py-2 md:py-3 w-full"
              >
                <CardHeader className="pb-2 md:pb-3">
                  <CardTitle className={`text-[#1A1A40] text-center group-hover:text-[#1A1A40] text-base md:text-lg lg:text-xl font-bold ${ibmPlexSans.className}`}>
                    {card.title}
                  </CardTitle>
                </CardHeader>
                {card.content && (
                  <CardContent className="text-[#1A1A40] px-2 md:px-3 pt-1 md:pt-2">
                    {card.content}
                  </CardContent>
                )}
              </Card>
            ))}
          </div>
        </div>
      </main>

      <footer className="bg-[#FFC700] py-4 md:py-2">
        <div className="w-full px-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 md:gap-0 max-w-[1920px] mx-auto">
            <nav className="flex space-x-6 md:space-x-4 order-2 md:order-1">
              <Link 
                href="https://www.collab.land/privacy-policy" 
                className={`text-sm font-bold text-[#1A1A40] hover:text-[#1A1A40]/80 ${spaceMono.className}`}
              >
                Privacy Policy
              </Link>
              <Link 
                href="https://www.collab.land/terms-of-service" 
                className={`text-sm font-bold text-[#1A1A40] hover:text-[#1A1A40]/80 ${spaceMono.className}`}
              >
                Terms
              </Link>
            </nav>
            
            <div className="flex items-center space-x-4 order-1 md:order-2">
              <Link href="https://linktr.ee/collab_land_" target="_blank">
                <Button size="sm" variant="ghost" className="h-8 w-8 p-1 hover:bg-transparent group">
                  <Image 
                    src="/LinktreeIcon.svg" 
                    alt="Linktree" 
                    width={20} 
                    height={20} 
                    className="transition-all duration-200 group-hover:scale-110 group-hover:brightness-75"
                  />
                </Button>
              </Link>
              <Link href="https://discord.gg/collabland" target="_blank">
                <Button size="sm" variant="ghost" className="h-8 w-8 p-1 hover:bg-transparent group">
                  <Image 
                    src="/DiscordIcon.svg" 
                    alt="Discord" 
                    width={20} 
                    height={20}
                    className="transition-all duration-200 group-hover:scale-110 group-hover:brightness-75" 
                  />
                </Button>
              </Link>
              <Link href="https://x.com/collab_land_" target="_blank">
                <Button size="sm" variant="ghost" className="h-8 w-8 p-1 hover:bg-transparent group">
                  <Image 
                    src="/XIcon.svg" 
                    alt="X (formerly Twitter)" 
                    width={20} 
                    height={20}
                    className="transition-all duration-200 group-hover:scale-110 group-hover:brightness-75"
                  />
                </Button>
              </Link>
            </div>

            <p className={`text-sm font-bold flex items-center gap-1.5 text-[#1A1A40] order-3 ${spaceMono.className}`}>
              <Image 
                src="/LogoIcon.svg" 
                alt="Collab.Land Logo" 
                width={18} 
                height={18} 
                className="inline-block"
              />
              Collab.Land® 2024
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Security; 