import Image from "next/image";
import logo from "./assets/brave_logo.png";

export const Grant = () => {
  return (
    <section
      id="about"
      className="container py-24 sm:py-32 m-auto px-6 md:px-12"
    >
      <div className="bg-muted/70 border rounded-lg py-12">
        <div className="px-6 flex flex-col md:flex-row gap-8 md:gap-12">
          <div className="bg-green-0 flex flex-col justify-center text-center md:text-left items-center md:items-start">
            <h2 className="text-3xl md:text-4xl font-bold py-8">
              We received the
              <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
                {" "}
                State Grant{" "}
              </span>
              and are proud of it.
            </h2>
            <p className="text-xl text-muted-foreground pb-8">
              We received a state grant <b>(US$ 50K)</b> from BRAVE1, a
              Ukrainian government platform supporting defense tech innovations.
              This grant recognizes our project’s potential to enhance national
              security and provides critical funding to accelerate its
              development and deployment.
            </p>

            {/*<Statistics />*/}
          </div>
          <Image
            src={logo}
            alt=""
            className="w-[256px] object-contain rounded-lg mx-auto md:mx-0"
          />
        </div>
      </div>
    </section>
  );
};
