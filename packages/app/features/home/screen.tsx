'use client'
import * as React from 'react'
import { Theme, YStack, XStack, H1, H2, Text, HeaderBar, Blob } from '@my/ui'

export function HomeScreen() {
  return (
    <Theme>
      <YStack bg="$background1" minHeight="100vh">
        <HeaderBar />
        <YStack pt="$12" flex={1}>
          <XStack alignItems="center" justifyContent="space-between" gap="$8" mr={'$15'} ml={'$15'}>
            <YStack alignItems="flex-start" gap="$6" maxWidth={'50%'}>
              <Text
                fontSize={170}
                lineHeight={112}
                fontWeight="800"
                style={{ transform: 'translateX(-0.03em)' }}
              >
                Diane
              </Text>
              <Text color="$primary1" fontSize={50}>
                Développeuse Full-Stack
              </Text>
              <Text fontSize={26} color="$secondary1">
                Portfolio
              </Text>
            </YStack>
            <Blob />
          </XStack>
        </YStack>
      </YStack>
    </Theme>
  )
}
