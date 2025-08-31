'use client'

import { Text, YStack } from 'tamagui'

interface ContentFormatterProps {
  content: string
}

const parseInline = (text: string) => {
  const regex = /(\*\*([^*]+)\*\*|\*([^*]+)\*|__([^_]+)__|\^([^^]+)\^)/g
  const parts: { type: 'normal' | 'bold' | 'italic' | 'underline' | 'code'; text: string }[] = []
  let lastIndex = 0
  let match: RegExpExecArray | null

  while ((match = regex.exec(text)) !== null) {
    if (match.index > lastIndex) {
      parts.push({ type: 'normal', text: text.slice(lastIndex, match.index) })
    }
    if (match[2]) parts.push({ type: 'bold', text: match[2] })
    else if (match[3]) parts.push({ type: 'italic', text: match[3] })
    else if (match[4]) parts.push({ type: 'underline', text: match[4] })
    else if (match[5]) parts.push({ type: 'code', text: match[5] })
    lastIndex = regex.lastIndex
  }
  if (lastIndex < text.length) parts.push({ type: 'normal', text: text.slice(lastIndex) })
  return parts
}

export default function ContentFormatter({ content }: ContentFormatterProps) {
  const formatContent = (text: string) => {
    const paragraphs = text.split('\n\n').filter((p) => p.trim() !== '')

    return paragraphs.map((paragraph, index) => {
      // Titre h2
      if (paragraph.startsWith('## ')) {
        const title = paragraph.replace('## ', '')
        return (
          <Text key={index} fontSize={30} fontWeight="600" color="$primary2" mb="$3">
            {title}
          </Text>
        )
      }

      // Listes : seulement si au moins une ligne commence par "- "
      const lines = paragraph.split('\n').filter((line) => line.trim() !== '')
      const hasList = lines.some((l) => l.trim().startsWith('- '))

      if (hasList) {
        return (
          <YStack key={index} ml="$4" mb="$4" gap="$2">
            {lines.map((line, lineIndex) => {
              const isBullet = line.trim().startsWith('- ')
              const item = isBullet ? line.trim().replace(/^- /, '') : line

              return (
                <Text key={lineIndex} color="$color1" lineHeight={30} fontSize={20}>
                  {isBullet && '• '}
                  {parseInline(item).map((part, i) => (
                    <Text
                      key={i}
                      fontWeight={part.type === 'bold' ? '700' : '400'}
                      fontStyle={part.type === 'italic' ? 'italic' : 'normal'}
                      textDecorationLine={part.type === 'underline' ? 'underline' : 'none'}
                      bg={part.type === 'code' ? '$primary1' : 'transparent'}
                      color={part.type === 'code' ? '$background1' : undefined}
                      px={part.type === 'code' ? '$2' : undefined}
                      py={part.type === 'code' ? '$1' : undefined}
                      borderRadius={part.type === 'code' ? '$2' : undefined}
                    >
                      {part.text}
                    </Text>
                  ))}
                </Text>
              )
            })}
          </YStack>
        )
      }

      // Paragraphe normal (avec styles inline)
      return (
        <Text key={index} color="$color1" lineHeight={25} mb="$4" fontSize={20}>
          {parseInline(paragraph).map((part, i) => (
            <Text
              key={i}
              fontWeight={part.type === 'bold' ? '700' : '400'}
              fontStyle={part.type === 'italic' ? 'italic' : 'normal'}
              textDecorationLine={part.type === 'underline' ? 'underline' : 'none'}
              bg={part.type === 'code' ? '$primary1' : 'transparent'}
              color={part.type === 'code' ? '$background1' : undefined}
              px={part.type === 'code' ? '$2' : undefined}
              py={part.type === 'code' ? '$1' : undefined}
              borderRadius={part.type === 'code' ? '$2' : undefined}
            >
              {part.text}
            </Text>
          ))}
        </Text>
      )
    })
  }

  return <YStack gap="$2">{formatContent(content)}</YStack>
}
