import Image from "next/image";
import logo from "./assets/logo.png";

export const About = () => {
  return (
    <section id="about" className="container py-24 sm:py-32  px-6 md:px-12">
      <div className="bg-muted/70 border rounded-lg py-12">
        <div className="px-6 flex flex-col md:flex-row gap-8 md:gap-12">
          <Image
            src={logo}
            alt=""
            className="w-[256px] object-contain rounded-lg mx-auto md:mx-0"
          />
          <div className="bg-green-0 flex flex-col justify-center text-center md:text-left items-center md:items-start">
            <h2 className="text-3xl md:text-4xl font-bold py-8">
              <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
                About{" "}
              </span>
              Warp Technologies
            </h2>
            <p className="text-xl text-muted-foreground pb-8">
              <b>Warp Technologies</b> is an advanced defense technology company
              developing next-generation autonomous combat systems. Our flagship
              system, <b>CAT (Combat Autonomous Technology)</b>, integrates
              false targets, scout drones, and strike drones, delivering
              superior battlefield dominance through deception, intelligence,
              and precision strikes.
            </p>
            <p className="text-xl text-muted-foreground font-bold">
              Innovating for the Future of Defense.
            </p>

            {/*<Statistics />*/}
          </div>
        </div>
      </div>
    </section>
  );
};
