'use client'
import { YStack, XStack, Text, Paragraph, Separator, Image } from 'tamagui'
import { Article } from './Article'
import { useRouter } from 'next/navigation'

export type ArticlePreviewProps = {
  readonly article: Article
}

export const ArticlePreview = ({ article }: ArticlePreviewProps) => {
  const router = useRouter()
  return (
    <YStack
      cursor="pointer"
      role="article"
      bg="$primary3"
      borderRadius="$6"
      p="$5"
      gap="$4"
      width="100%"
      hoverStyle={{ scale: 1.05 }}
      animation="quick"
      onPress={() => router.push('/article/' + article.Id)}
    >
      <YStack height={180} borderRadius="$4" alignItems="center" justifyContent="center">
        <Image
          source={{ uri: `/img/${article.Img}` }}
          style={{ width: '100%', height: '100%' }}
          resizeMode="cover" // ⬅️ équivalent d’object-fit: cover
          accessibilityLabel={article.Title}
          onError={(e) => console.warn('Image error:', e?.nativeEvent)}
        />
      </YStack>

      <YStack gap="$2">
        <Text fontSize={22} fontWeight="800" color="$primary2" flexShrink={1}>
          {article.Title}
        </Text>

        <Text
          color="$primary2"
          fontSize={12}
          fontWeight="700"
          bg="$primary3"
          borderRadius="$10"
          width="min-content"
          px={4}
        >
          {article.Date}
        </Text>

        <Separator my="$2" />

        <Paragraph size="$5" color="$primary2">
          {article.Summary}
        </Paragraph>
      </YStack>
    </YStack>
  )
}
