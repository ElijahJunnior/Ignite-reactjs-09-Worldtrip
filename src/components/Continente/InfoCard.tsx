import { HStack, Image, Text, VStack, Tooltip } from "@chakra-ui/react"

export type InfoCardProps = {
    counter: number,
    description: string,
    infoText?: string
}

export function InfoCard({ counter, description, infoText = "" }: InfoCardProps) {
    return (
        <VStack>
            <Text
                fontWeight="600" fontSize="48px"
                color="base.highlight" lineHeight="72px"
            >
                {counter}
            </Text>
            <HStack>
                <Text
                    color="dark.text" fontWeight="600" fontSize="24px"
                    lineHeight="36px" whiteSpace="nowrap"
                >
                    {description}
                </Text>
                {
                    !!infoText && (
                        <Tooltip
                            label={infoText} hasArrow
                            bg="dark.text" color="light.text"
                        >
                            <Image src="/images/info.svg" />
                        </Tooltip>
                    )
                }
            </HStack>
        </VStack>
    )
}