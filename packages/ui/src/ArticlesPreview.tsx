'use client'
import { YStack } from 'tamagui'
import { ArticlePreview } from './ArticlePreview'
import { Article } from './Article'

export type ArticlesPreviewProps = {
  readonly articles: Article[]
}

export const ArticlesPreview = ({ articles }: ArticlesPreviewProps) => {
  return (
    <YStack borderRadius="$4" flex={1} width="100%" p="$5" gap="$4">
      <YStack
        display="grid"
        gridTemplateColumns="repeat(3, minmax(0, 1fr))" // 3 colonnes
        gap="$4" // espace entre cartes
        width="100%"
      >
        {articles.map((article, idx) => (
          <ArticlePreview key={idx} article={article} />
        ))}
      </YStack>
    </YStack>
  )
}
