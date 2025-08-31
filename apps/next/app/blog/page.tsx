'use client'
import { useState } from 'react'
import { Theme, YStack, Tabs, HeaderBar, Text, ArticlesPreview } from '@my/ui'
import data from './json/data.json'

const categories = Object.entries(data).map(([key, value]) => ({
  key,
  label: value.label,
  articles: value.articles,
}))

export default function BlogPage() {
  const [activeTab, setActiveTab] = useState(categories[0]?.key ?? '')

  return (
    <Theme>
      <YStack bg="$background1" minHeight="100vh" width="100%">
        <HeaderBar title="Blog" />
        <YStack pt="$12" flex={1}>
          <YStack px="$10" py="$4" gap="$6" alignItems="flex-start" width="100%" flex={1}>
            <Tabs
              flex={1}
              flexDirection="column"
              value={activeTab}
              onValueChange={setActiveTab}
              orientation="horizontal"
              activationMode="manual"
            >
              <Tabs.List p="$2" alignItems="center">
                {categories.map((cat) => (
                  <Tabs.Tab
                    cursor="pointer"
                    unstyled
                    borderRightWidth={'$0.25'}
                    borderRightColor={'$primary2'}
                    key={cat.key}
                    value={cat.key}
                    px="$4"
                    py="$2"
                    bg={activeTab === cat.key ? '$primary3' : '$primary1'}
                    hoverStyle={{ bg: activeTab === cat.key ? null : '$primary2' }}
                  >
                    <Text
                      fontSize={22}
                      fontWeight={activeTab === cat.key ? '600' : '300'}
                      fontFamily="$body"
                      color={activeTab === cat.key ? '$primary2' : '$background1'}
                      style={{ transition: 'color 0.2s ease' }}
                    >
                      {cat.label}
                    </Text>
                  </Tabs.Tab>
                ))}
              </Tabs.List>
              {categories.map((cat) => (
                <Tabs.Content
                  key={cat.key}
                  value={cat.key}
                  width="92vw"
                  my="$4"
                  flex={1}
                  alignSelf="stretch"
                >
                  <ArticlesPreview articles={cat.articles} />
                </Tabs.Content>
              ))}
            </Tabs>
          </YStack>
        </YStack>
      </YStack>
    </Theme>
  )
}
