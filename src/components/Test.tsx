import { Card, Flex, Metric, BadgeDelta, Text } from "@tremor/react";

const Test = () => (
  <Card className="max-w-sm">
    <Flex justifyContent="between" alignItems="center">
      <Text>Sales</Text>
      <BadgeDelta
        deltaType="moderateIncrease"
        isIncreasePositive={true}
        size="xs"
      >
        +12.3%
      </BadgeDelta>
    </Flex>
    <Metric>$ 23,456</Metric>
  </Card>
);

export default Test;
