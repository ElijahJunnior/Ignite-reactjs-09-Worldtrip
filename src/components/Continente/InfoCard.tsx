import { HStack, Image, Text, VStack, Tooltip } from "@chakra-ui/react"

export type InfoCardProps = {
    counter: number,
    description: string,
    infoText?: string
}

export function InfoCard({ counter, description, infoText = "" }: InfoCardProps) {
    return (
        <VStack align={["flex-start", "center", null, null]}>
            <Text
                color="base.highlight" fontWeight="600"
                fontSize={["24px", "32px", "40px", "48px"]}
                lineHeight={["36px", "48px", "60px", "72px"]}
            >
                {counter}
            </Text>
            <HStack>
                <Text
                    color="dark.text" fontWeight="600" whiteSpace="nowrap"
                    fontSize={["18px", "20px", "22px", "24px"]}
                    lineHeight={["27px", "30px", "33px", "36px"]}
                >
                    {description}
                </Text>
                {
                    !!infoText && (
                        <Tooltip
                            label={infoText} hasArrow textAlign="justify"
                            bg="dark.text" color="light.text"
                        >
                            <Image src="/images/info.svg" alt="logo simbolizando informações" />
                        </Tooltip>
                    )
                }
            </HStack>
        </VStack>
    )
}