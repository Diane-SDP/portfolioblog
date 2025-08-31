'use client'

import { useMemo } from 'react'
import { useParams } from 'solito/navigation'
import { Theme, YStack, HeaderBar, Text, Paragraph, Separator, Image } from '@my/ui'
import data from '../../blog/json/data.json'
import ContentFormatter from '@my/ui/src/ContentFormatter'

interface Article {
  Id: string
  Title: string
  Content: string
  Date: string
  Summary: string
  Img?: string
}

export default function Page() {
  const { id } = useParams()

  const { article, categoryLabel } = useMemo(() => {
    let found: Article | null = null
    let label = ''

    for (const [_, cat] of Object.entries(data)) {
      const articles = cat?.articles as Article[]
      if (articles) {
        const a = articles.find((it: Article) => String(it.Id) === String(id))
        if (a) {
          found = a
          label = cat?.label ?? ''
          break
        }
      }
    }

    return { article: found, categoryLabel: label }
  }, [id])

  if (!article) {
    return (
      <Theme>
        <YStack bg="$background1" minHeight="100vh" width="100%">
          <HeaderBar title="Blog" />
          <YStack pt="$12" flex={1}>
            <YStack px="$10" py="$8" gap="$3" justifyContent="center">
              <Text fontSize={40} fontWeight="800" color="$primary1">
                Article introuvable
              </Text>
            </YStack>
          </YStack>
        </YStack>
      </Theme>
    )
  }

  return (
    <Theme>
      <YStack bg="$background1" minHeight="100vh" width="100%">
        <HeaderBar title="Blog" />
        <YStack pt="$10" flex={1}>
          <YStack px="$10" py="$8" gap="$6" maxWidth={1200} alignSelf="center" width="100%">
            {/* En-tête de l'article */}
            <YStack gap="$2" alignItems="center">
              {/* Catégorie */}
              {categoryLabel && (
                <Text
                  color="$primary2"
                  fontSize={14}
                  fontWeight="600"
                  bg="$primary3"
                  borderRadius="$10"
                  px="$4"
                  py="$2"
                  textTransform="uppercase"
                  letterSpacing={1}
                >
                  {categoryLabel}
                </Text>
              )}

              {/* Titre */}
              <Text fontSize={48} fontWeight="800" color="$primary1">
                {article.Title}
              </Text>

              {/* Date */}
              <Text color="$primary2" fontSize={16} fontWeight="500" opacity={0.8}>
                {article.Date}
              </Text>

              <Text color="$primary2" fontSize={16} fontWeight="700">
                {article.Summary}
              </Text>
            </YStack>

            {/* Image de l'article */}
            {article.Img && (
              <YStack alignItems="center">
                <YStack
                  height={400}
                  width="100%"
                  maxWidth={800}
                  borderRadius="$6"
                  overflow="hidden"
                  shadowColor="$primary2"
                  shadowOffset={{ width: 0, height: 4 }}
                  shadowOpacity={0.1}
                  shadowRadius={12}
                  elevation={8}
                >
                  <Image
                    source={{ uri: `/img/${article.Img}` }}
                    style={{ width: '100%', height: '100%' }}
                    resizeMode="cover"
                    accessibilityLabel={article.Title}
                    onError={(e) => console.warn('Image error:', e?.nativeEvent)}
                  />
                </YStack>
              </YStack>
            )}

            <Separator marginVertical={15} borderColor={'$color1'} />

            <ContentFormatter content={article.Content} />

            {/* Pied de page */}
            <YStack bg="$primary1" p="$6" borderRadius="$6" mt="$8" alignItems="center" gap="$3">
              <Text fontSize={16} fontWeight="600" color="$color1">
                Merci de votre lecture !
              </Text>
              <Text fontSize={14} color="$color1" opacity={0.8}>
                Cet article fait partie de la catégorie "{categoryLabel}"
              </Text>
            </YStack>
          </YStack>
        </YStack>
      </YStack>
    </Theme>
  )
}
