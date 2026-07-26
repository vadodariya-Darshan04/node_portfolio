'use client'
import { useState, useRef, useEffect } from 'react'
import { siteData } from '@/data/portfolio'

const BotIcon = () => (
  <svg className="w-3 h-3 text-copper mx-auto" fill="currentColor" viewBox="0 0 20 20">
    <path d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"/>
  </svg>
)

const SendIcon = () => (
  <svg className="w-4 h-4 text-surface-950 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2.5">
    <path strokeLinecap="round" strokeLinejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5"/>
  </svg>
)

const suggestions = [
  'What skills do you have?',
  'Tell me about your projects',
  'Are you available to hire?',
]

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState([])
  const [input, setInput] = useState('')
  const [loading, setLoading] = useState(false)
  const [showSuggestions, setShowSuggestions] = useState(true)
  const messagesEndRef = useRef(null)
  const inputRef = useRef(null)

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages, loading])

  useEffect(() => {
    if (isOpen) setTimeout(() => inputRef.current?.focus(), 300)
  }, [isOpen])

  const sendMessage = async (text) => {
    const msg = (text || input).trim()
    if (!msg) return

    setInput('')
    setShowSuggestions(false)
    setMessages(prev => [...prev, { role: 'user', text: msg }])
    setLoading(true)

    try {
      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: msg }),
      })
      const data = await res.json()
      setMessages(prev => [...prev, { role: 'bot', text: data.response || data.error || 'Something went wrong.' }])
    } catch {
      setMessages(prev => [...prev, { role: 'bot', text: 'Connection error. Please try again.' }])
    } finally {
      setLoading(false)
    }
  }

  const handleKey = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      sendMessage()
    }
  }

  return (
    <>
      {/* Toggle button */}
      <button
        onClick={() => setIsOpen(o => !o)}
        aria-label="Toggle chat"
        className="fixed bottom-6 right-6 z-[200] w-14 h-14 bg-copper rounded-full shadow-2xl
                   flex items-center justify-center hover:bg-copper-light transition-all duration-300
                   hover:scale-110 active:scale-95"
      >
        {isOpen ? (
          <svg className="w-6 h-6 text-surface-950" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12"/>
          </svg>
        ) : (
          <svg className="w-6 h-6 text-surface-950" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"/>
          </svg>
        )}
      </button>

      {/* Chat window */}
      <div
        className={`fixed bottom-24 right-6 z-[199] w-80 md:w-96 bg-surface-800 border border-graphite/40
                    rounded-2xl shadow-2xl flex flex-col overflow-hidden
                    transition-all duration-300
                    ${isOpen ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 translate-y-4 pointer-events-none'}`}
        style={{ height: '480px', boxShadow: '0 24px 60px rgba(0,0,0,0.5),0 0 40px rgba(181,121,74,0.08)' }}
      >

        {/* Header */}
        <div className="flex items-center gap-3 px-4 py-3 border-b border-graphite/40 bg-surface-900 shrink-0">
          <div className="w-8 h-8 rounded-full bg-copper/20 border border-copper/40 flex items-center justify-center">
            <BotIcon />
          </div>
          <div>
            <p className="text-cream text-sm font-display font-semibold">Ask about {siteData.name}</p>
            <p className="text-copper/60 text-xs">AI-powered portfolio assistant</p>
          </div>
          <div className="ml-auto flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-xs text-emerald-400/80">Online</span>
          </div>
        </div>

        {/* Messages */}
        <div className="flex-1 overflow-y-auto p-4 space-y-3">

          {/* Welcome */}
          <div className="flex gap-2.5">
            <div className="w-6 h-6 rounded-full bg-copper/20 flex items-center justify-center shrink-0 mt-0.5">
              <BotIcon />
            </div>
            <div className="bg-surface-700 rounded-2xl rounded-tl-sm px-3.5 py-2.5 max-w-[85%]">
              <p className="text-sm text-sand-muted/90 leading-relaxed">
                Hi! I&apos;m {siteData.name}&apos;s AI assistant. Ask me anything about his skills, projects, experience, or achievements! 👋
              </p>
            </div>
          </div>

          {/* Suggestion pills */}
          {showSuggestions && (
            <div className="flex flex-wrap gap-1.5 pt-1">
              {suggestions.map((s) => (
                <button key={s} onClick={() => sendMessage(s)}
                  className="text-xs text-copper/80 border border-copper/25 bg-copper/5 px-2.5 py-1 rounded-full hover:bg-copper/15 transition-colors">
                  {s}
                </button>
              ))}
            </div>
          )}

          {/* Conversation messages */}
          {messages.map((m, i) => (
            <div key={i} className={`flex gap-2.5 ${m.role === 'user' ? 'justify-end' : ''}`}>
              {m.role === 'bot' && (
                <div className="w-6 h-6 rounded-full bg-copper/20 flex items-center justify-center shrink-0 mt-0.5">
                  <BotIcon />
                </div>
              )}
              <div className={`rounded-2xl px-3.5 py-2.5 max-w-[85%] text-sm leading-relaxed
                ${m.role === 'user'
                  ? 'bg-copper/20 border border-copper/30 rounded-tr-sm text-cream/90'
                  : 'bg-surface-700 rounded-tl-sm text-sand-muted/90'}`}>
                {m.text}
              </div>
            </div>
          ))}

          {/* Typing indicator */}
          {loading && (
            <div className="flex gap-2.5">
              <div className="w-6 h-6 rounded-full bg-copper/20 flex items-center justify-center shrink-0 mt-0.5">
                <BotIcon />
              </div>
              <div className="bg-surface-700 rounded-2xl rounded-tl-sm px-4 py-3">
                <div className="flex gap-1 items-center">
                  {[0, 150, 300].map((delay) => (
                    <span key={delay}
                      className="w-1.5 h-1.5 rounded-full bg-copper/60 animate-bounce"
                      style={{ animationDelay: `${delay}ms` }}
                    />
                  ))}
                </div>
              </div>
            </div>
          )}

          <div ref={messagesEndRef} />
        </div>

        {/* Input */}
        <div className="px-3 py-3 border-t border-graphite/40 shrink-0">
          <div className="flex gap-2 items-end">
            <textarea
              ref={inputRef}
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKey}
              placeholder="Ask anything about me..."
              rows={1}
              className="flex-1 bg-surface-900 border border-graphite/50 rounded-xl px-3.5 py-2.5
                         text-cream text-sm placeholder:text-sand-muted/30 resize-none
                         focus:outline-none focus:border-copper/50 transition-all duration-200 leading-relaxed"
              style={{ maxHeight: '80px' }}
            />
            <button
              onClick={() => sendMessage()}
              disabled={loading || !input.trim()}
              className="w-9 h-9 bg-copper rounded-xl flex items-center justify-center
                         hover:bg-copper-light transition-all duration-200 shrink-0 active:scale-95
                         disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <SendIcon />
            </button>
          </div>
        </div>
      </div>
    </>
  )
}
