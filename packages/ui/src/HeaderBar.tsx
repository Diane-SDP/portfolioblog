import { useRouter } from 'next/navigation'
import { Spacer, SwitchThemeButton } from '.'
import { XStack, Button, PopperArrow } from 'tamagui'
import { Home } from '@tamagui/lucide-icons'

export type HeaderBarProps = {
  readonly title?: string
}

export const HeaderBar = ({ title }: HeaderBarProps) => {
  const router = useRouter()
  const isBlog = title === 'Blog'
  const isAbout = title === 'about'
  const isNotHome = isBlog || isAbout
  return (
    <XStack
      bg="$background1"
      mt="$6"
      mr="$6"
      alignItems="center"
      justifyContent="flex-end"
      gap={12}
      zIndex={1000}
      position="fixed"
      top={0}
      borderRadius={10}
      right={0}
    >
      <Button chromeless onPress={() => router.push('/')} borderRadius={10} icon={Home} size="$5" />
      <Button
        chromeless
        onPress={() => router.push('/blog')}
        fontWeight="600"
        borderRadius={10}
        fontSize={20}
        size="$5"
        scale={isBlog ? 1.4 : 1}
      >
        Blog
      </Button>

      <Button
        chromeless
        onPress={() => router.push('/about')}
        fontWeight="600"
        borderRadius={10}
        fontSize={20}
        size="$5"
        scale={isAbout ? 1.4 : 1}
      >
        À propos
      </Button>

      <Spacer size="$2" />

      <SwitchThemeButton />
    </XStack>
  )
}
