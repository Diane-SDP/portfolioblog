'use client'

import { YStack, H2, Paragraph, HeaderBar, Text, XStack, Separator, Button, Blob } from '@my/ui'
import { Mail, MapPin, Github, Linkedin, Calendar, BookOpen, Code, Heart } from '@tamagui/lucide-icons'

export default function AboutPage() {
  return (
    <YStack bg="$background1" minHeight="100vh" width="100%">
      <HeaderBar title="À propos" />
      
      <YStack pt="$12" flex={1}>
        {/* En-tête avec photo et présentation */}
        <YStack px="$10" py="$8" gap="$6" maxWidth={1200} alignSelf="center" width="100%">
          
                                {/* Section principale avec photo et présentation */}
           <XStack gap="$10" alignItems="flex-start" >
             {/* Photo de profil avec blob décoratif */}
             <YStack alignItems="center" width={200} height={200} position="relative" flexShrink={0}>
               <YStack
                 width={180}
                 height={180}
                 borderRadius="$10"
                 bg="$primary1"
                 alignItems="center"
                 justifyContent="center"
                 borderWidth={4}
                 borderColor="$primary2"
                 position="relative"
                 zIndex={1}
               >
                 <Text fontSize={60} color="$primary2" fontWeight="800">
                   👩‍💻
                 </Text>
               </YStack>
             </YStack>

             {/* Présentation */}
             <YStack flex={1} gap="$4"  position="relative" >
              <H2 color="$primary2" fontSize={48} fontWeight="800" >
                Diane, Développeuse Passionnée
              </H2>
              
              <Paragraph color="$primary2" fontSize={20}>
                Passionnée par le développement et la création numérique, j'aime explorer de nouvelles 
                technologies et relever des défis techniques. 
              </Paragraph>

              <XStack gap="$4" flexWrap="wrap">
                <Button
                  bg="$primary3"
                  color="$primary2"
                  borderRadius="$10"
                  px="$6"
                  py="$3"
                  fontWeight="600"
                  onPress={() => window.open('mailto:diane.sautereau@ynov.com')}
                >
                  <Mail size={20} />
                  <Text ml="$2">Me contacter</Text>
                </Button>
                
                <Button
                  bg="$primary2"
                  color="$background1"
                  borderRadius="$10"
                  px="$6"
                  py="$3"
                  fontWeight="600"
                  onPress={() => window.open('/blog')}
                >
                  <BookOpen size={20} />
                  <Text ml="$2">Voir mon blog</Text>
                </Button>
              </XStack>
            </YStack>
          </XStack>

          <Separator my="$8" borderColor="$primary2" />

          {/* Section Parcours */}
          <YStack gap="$6">
            <H2 color="$primary2" fontSize={36} fontWeight="700" textAlign="center">
              Mon Parcours
            </H2>
            
            <XStack gap="$6" flexWrap="wrap" justifyContent="center">
              {/* Étapes du parcours */}
              <YStack
                bg="$primary3"
                p="$6"
                borderRadius="$8"
                width={280}
                alignItems="center"
                gap="$3"
                borderLeftWidth={4}
                borderLeftColor="$primary2"
              >
                <Calendar size={40} color="$primary2" />
                <Text fontSize={20} fontWeight="600" color="$primary2">
                  2023-2028
                </Text>
                <Text fontSize={16} color="$primary2" textAlign="center">
                  Formation en développement à Bordeaux Ynov Campus
                </Text>
              </YStack>

              <YStack
                bg="$primary3"
                p="$6"
                borderRadius="$8"
                width={280}
                alignItems="center"
                gap="$3"
                borderLeftWidth={4}
                borderLeftColor="$primary2"
              >
                <Code size={40} color="$primary2" />
                <Text fontSize={20} fontWeight="600" color="$primary2">
                  2025
                </Text>
                <Text fontSize={16} color="$primary2" textAlign="center">
                  Stage de 4 mois chez Wikodit
                </Text>
              </YStack>

              <YStack
                bg="$primary3"
                p="$6"
                borderRadius="$8"
                width={280}
                alignItems="center"
                gap="$3"
                borderLeftWidth={4}
                borderLeftColor="$primary2"
              >
                <Heart size={40} color="$primary2" />
                <Text fontSize={20} fontWeight="600" color="$primary2">
                  Septembre 2025 
                </Text>
                <Text fontSize={16} color="$primary2" textAlign="center">
                  Alternante au sein de l'équipe Wikodit
                </Text>
              </YStack>
            </XStack>
          </YStack>

          <Separator my="$8" borderColor="$primary2" />

          {/* Section Compétences */}
          <YStack gap="$6">
            <H2 color="$primary2" fontSize={36} fontWeight="700" textAlign="center">
              Mes Compétences
            </H2>
            
            <YStack gap="$4">
              {/* Barres de compétences */}
              <YStack gap="$3">
                <XStack justifyContent="space-between" alignItems="center">
                  <Text color="$primary2" fontSize={18} fontWeight="600">React Native</Text>
                  <Text color="$primary2" fontSize={16}>90%</Text>
                </XStack>
                <YStack height={8} bg="$primary1" borderRadius="$4" overflow="hidden">
                  <YStack height="100%" width="90%" bg="$primary2" borderRadius="$4" />
                </YStack>
              </YStack>

              <YStack gap="$3">
                <XStack justifyContent="space-between" alignItems="center">
                  <Text color="$primary2" fontSize={18} fontWeight="600">TypeScript</Text>
                  <Text color="$primary2" fontSize={16}>85%</Text>
                </XStack>
                <YStack height={8} bg="$primary1" borderRadius="$4" overflow="hidden">
                  <YStack height="100%" width="85%" bg="$primary2" borderRadius="$4" />
                </YStack>
              </YStack>

              <YStack gap="$3">
                <XStack justifyContent="space-between" alignItems="center">
                  <Text color="$primary2" fontSize={18} fontWeight="600">Vue.js</Text>
                  <Text color="$primary2" fontSize={16}>75%</Text>
                </XStack>
                <YStack height={8} bg="$primary1" borderRadius="$4" overflow="hidden">
                  <YStack height="100%" width="75%" bg="$primary2" borderRadius="$4" />
                </YStack>
              </YStack>

              <YStack gap="$3">
                <XStack justifyContent="space-between" alignItems="center">
                  <Text color="$primary2" fontSize={18} fontWeight="600">NestJS</Text>
                  <Text color="$primary2" fontSize={16}>70%</Text>
                </XStack>
                <YStack height={8} bg="$primary1" borderRadius="$4" overflow="hidden">
                  <YStack height="100%" width="70%" bg="$primary2" borderRadius="$4" />
                </YStack>
              </YStack>
            </YStack>
          </YStack>

          <Separator my="$8" borderColor="$primary2" />

          {/* Section Contact */}
          <YStack gap="$6">
            <H2 color="$primary2" fontSize={36} fontWeight="700" textAlign="center">
              Me Contacter
            </H2>
            
            <XStack gap="$6" flexWrap="wrap" justifyContent="center">
              <YStack
                bg="$primary3"
                p="$6"
                borderRadius="$8"
                width={280}
                alignItems="center"
                gap="$3"
                borderTopWidth={4}
                borderTopColor="$primary2"
              >
                <Mail size={40} color="$primary2" />
                <Text fontSize={18} fontWeight="600" color="$primary2">
                  Email
                </Text>
                <Text fontSize={16} color="$primary2" textAlign="center">
                  diane.sautereau@ynov.com
                </Text>
              </YStack>

              <YStack
                bg="$primary3"
                p="$6"
                borderRadius="$8"
                width={280}
                alignItems="center"
                gap="$3"
                borderTopWidth={4}
                borderTopColor="$primary2"
              >
                <MapPin size={40} color="$primary2" />
                <Text fontSize={18} fontWeight="600" color="$primary2">
                  Localisation
                </Text>
                <Text fontSize={16} color="$primary2" textAlign="center">
                  Bordeaux, France
                </Text>
              </YStack>

              <YStack
                bg="$primary3"
                p="$6"
                borderRadius="$8"
                width={280}
                alignItems="center"
                gap="$3"
                borderTopWidth={4}
                borderTopColor="$primary2"
              >
                <Github size={40} color="$primary2" />
                <Text fontSize={18} fontWeight="600" color="$primary2">
                  GitHub
                </Text>
                <Text fontSize={16} color="$primary2" textAlign="center">
                  @Diane-SDP
                </Text>
              </YStack>
            </XStack>

            {/* Réseaux sociaux */}
            <YStack alignItems="center" gap="$4">
              <Text color="$primary2" fontSize={18} fontWeight="600">
                Suivez-moi sur les réseaux sociaux
              </Text>
              <XStack gap="$4">
                <Button
                  bg="$primary2"
                  color="$background1"
                  borderRadius="$10"
                  px="$6"
                  py="$3"
                  onPress={() => window.open('https://github.com/Diane-SDP')}
                >
                  <Github size={20} />
                  <Text ml="$2">GitHub</Text>
                </Button>
                
                <Button
                  bg="$primary2"
                  color="$background1"
                  borderRadius="$10"
                  px="$6"
                  py="$3"
                  onPress={() => window.open('https://www.linkedin.com/in/diane-sautereau-18b9152b2/')}
                >
                  <Linkedin size={20} />
                  <Text ml="$2">LinkedIn</Text>
                </Button>
              </XStack>
            </YStack>
          </YStack>

       
        </YStack>
      </YStack>
    </YStack>
  )
}
