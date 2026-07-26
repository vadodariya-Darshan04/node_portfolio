import { NextResponse } from 'next/server'
import OpenAI from 'openai'
import { siteData } from '@/data/portfolio'

function buildContext() {
  const d = siteData
  const lines = []

  lines.push(`Name: ${d.name}`)
  lines.push(`Tagline: ${d.tagline}`)
  lines.push(`Bio: ${d.heroDescription}`)
  lines.push(`About: ${d.about.bio1}`)
  lines.push(`More: ${d.about.bio2}`)
  lines.push(`Location: ${d.location}`)
  lines.push(`Email: ${d.email}`)
  lines.push(`Years of experience: ${d.yearsExperience}`)
  lines.push(`Availability: ${d.availability ? d.availabilityText : 'Not available'}`)

  // Skills
  d.skills.forEach(cat => {
    lines.push(`${cat.category} skills: ${cat.items.map(i => i.name).join(', ')}`)
  })

  // Projects
  d.projects.forEach(p => {
    lines.push(`Project '${p.title}' (${p.tagline}): ${p.description} Tech: ${p.tech.join(', ')}. Status: ${p.status}. ${p.github ? `GitHub: ${p.github}` : ''} ${p.live ? `Live: ${p.live}` : ''}`)
  })

  // Experience
  d.experience.forEach(e => {
    lines.push(`Work: ${e.title} at ${e.company}, ${e.location} (${e.period}). ${e.description} Highlights: ${e.highlights.join(', ')}`)
  })

  // Education
  d.education.forEach(e => {
    lines.push(`Education: ${e.degree} from ${e.institution} (${e.period}). Status: ${e.status}`)
  })

  // Achievements
  d.achievements.forEach(group => {
    group.items.forEach(a => {
      lines.push(`Achievement: ${a.title} (${a.category}) — ${a.prizeLabel} at ${group.event}. ${a.description}`)
    })
  })

  // Socials
  d.socials.forEach(s => {
    lines.push(`${s.label}: ${s.url}`)
  })

  return lines.join('\n')
}

export async function POST(request) {
  try {
    const { message } = await request.json()

    if (!message?.trim()) {
      return NextResponse.json({ error: 'Empty message' }, { status: 400 })
    }

    const apiKey = process.env.GROQ_API_KEY
    if (!apiKey) {
      return NextResponse.json({ error: 'GROQ_API_KEY not configured' }, { status: 500 })
    }

    const context = buildContext()

    const systemPrompt = `You are a helpful AI assistant for ${siteData.name}'s personal portfolio website.
Answer questions about ${siteData.name} based ONLY on the information below.
Be friendly, conversational and concise. Max 3-4 sentences unless asked for more detail.
If something is not in the data, say you don't have that information.
Never make up information. Speak naturally as if you know ${siteData.name} personally.

PORTFOLIO DATA:
${context}

User question: ${message}`

    const client = new OpenAI({
      apiKey,
      baseURL: 'https://api.groq.com/openai/v1',
    })

    const response = await client.chat.completions.create({
      model: 'llama-3.3-70b-versatile',
      messages: [{ role: 'user', content: systemPrompt }],
      max_tokens: 500,
      temperature: 0.7,
    })

    return NextResponse.json({ response: response.choices[0].message.content })
  } catch (error) {
    console.error('Chatbot error:', error)
    return NextResponse.json({ error: 'Something went wrong. Please try again.' }, { status: 500 })
  }
}
