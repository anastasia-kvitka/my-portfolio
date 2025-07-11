/* eslint-disable @typescript-eslint/no-unused-vars */
import { JSX } from "react";
import { GiftIcon, MapIcon, MedalIcon, PlaneIcon } from "./Icons";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";

interface FeatureProps {
  icon: JSX.Element;
  title: string;
  description: string;
}

const features: FeatureProps[] = [
  {
    icon: <MedalIcon />,
    title: "Deployment & Positioning",
    description:
      "The false target is launched to deceive enemy radar and mislead threats. Scout drones are deployed to gather real-time intelligence and identify targets.",
  },
  {
    icon: <MapIcon />,
    title: "Intelligence Gathering & Data Analysis",
    description:
      "AI-powered reconnaissance analyzes battlefield conditions and detects enemy movements. Data is transmitted securely for real-time decision-making.",
  },
  {
    icon: <PlaneIcon />,
    title: "Target Lock & Tactical Planning",
    description:
      "The system processes gathered intelligence and prioritizes threats. Autonomous or operator-assisted strike planning ensures precision engagement.",
  },
  {
    icon: <GiftIcon />,
    title: "Precision Strike & Mission Completion",
    description:
      "The strike drone executes a highly accurate attack on the designated target. Mission success is confirmed, and the system adapts for the next operation.",
  },
];

export const HowItWorks = () => {
  return (
    <section
      id="howItWorks"
      className="container text-center m-auto py-24 sm:py-32 px-6 md:px-12"
    >
      <h2 className="text-3xl md:text-4xl font-bold">
        How It{" "}
        <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
          Works{" "}
        </span>
        Step-by-Step Guide
      </h2>
      <p className="md:w-3/4 mx-auto mt-4 mb-8 text-xl text-muted-foreground">
        CAT ensures superior battlefield dominance through deception,
        intelligence, and precision strikes.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {features.map(({ icon, title, description }: FeatureProps) => (
          <Card key={title} className="bg-muted/50">
            <CardHeader>
              <CardTitle className="grid gap-4 place-items-center">
                {/*{icon}*/}
                {title}
              </CardTitle>
            </CardHeader>
            <CardContent>{description}</CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};
