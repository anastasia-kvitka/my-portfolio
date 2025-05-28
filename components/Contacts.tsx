import Image from "next/image";
import logo from "./assets/logo.png";

export const Contacts = () => {
  return (
    <section
      id="contacts"
      className="container text-center m-auto py-24 sm:py-32 px-6 md:px-12"
    >
      <h2 className="text-3xl md:text-4xl font-bold ">
        <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
          Contact{" "}
        </span>
        Us
      </h2>
      <div className="bg-muted/70 border rounded-lg py-12 mt-8">
        <div className="px-6 flex flex-col md:flex-row gap-8 md:gap-12">
          <Image
            src={logo}
            alt=""
            className="w-[256px] object-contain rounded-lg mx-auto md:mx-0"
          />
          <div className="bg-green-0 flex flex-col justify-center text-center md:text-left items-center md:items-start">
            <p className="text-xl text-muted-foreground pb-8">+380636912177</p>
            <p className="text-xl text-muted-foreground pb-8">
              <a href="mailto:warptechnologiestech@google.com">
                warptechnologiestech@google.com
              </a>
            </p>
            <p className="text-xl text-muted-foreground pb-8">
              <a
                href="https://www.linkedin.com/company/warp-technologies/"
                target="_blank"
              >
                linkedin.com/company/warp-technologies/
              </a>
            </p>
            <p className="text-xl text-muted-foreground">
              <a
                href="https://www.crunchbase.com/organization/warp-technologies"
                target="_blank"
              >
                crunchbase.com/organization/warp-technologies
              </a>
            </p>

            {/*<Statistics />*/}
          </div>
        </div>
      </div>
    </section>
  );
};
