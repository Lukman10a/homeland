import Image from "next/image";
import transparency from "../../public/assets/transparency.png";
import googleplay from "../../public/svg/googleplay.svg";
import appstore from "../../public/svg/appstore.svg";
import add from "../../public/svg/add.svg";
import recent from "../../public/svg/recent.svg";
import made from "../../public/svg/made.svg";
import iPhone15 from "../../public/assets/iPhone15.png";

export default function Home() {
  const cardData = [
    {
      img: add,
      title: "Add money",
      bg: "bg-blue-300 text-white",
      text: "Top up your wallet for direct landlord communication and virtual property tours before buying or renting.",
    },
    {
      img: recent,
      title: "Add money",
      bg: "bg-white text-[#000929]",
      text: "View your recent transactions, explore options, mark the ones you like, and receive notifications on the latest deals!",
    },
    {
      img: made,
      title: "Make Payment",
      bg: "bg-[#27CD40] text-[#000929]",
      text: "Make payments for your dream house effortlessly using your wallet. Just a few clicks and you’re ready to move!",
    },
  ];

  return (
    <div>
      <section className="bg-[#18191B] p-24 grid grid-cols-2 gap-16 sm:grid-cols-1 md:p-8">
        <div>
          <h2 className="text-white font-bold text-4xl sm:text-3xl pb-6 sm:text-center">
            Pay directly from your{" "}
            <span className="text-[#27CD40] block">Wallet</span>
          </h2>
          <div className="space-y-6">
            {cardData.map(({ img, title, bg, text }, index) => (
              <div
                key={index}
                className={`flex gap-4 items-start p-4 rounded-lg ${bg}`}
              >
                <Image src={img} alt={title} width={40} />
                <div className="space-y-4">
                  <h3 className="font-bold text-xl">{title}</h3>
                  <p>{text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div>
          <p className="text-white">
            Our payment feature enables you to effortlessly add and securely
            store your funds. Conveniently make payments for our services and
            offerings. A secure and convenient way to handle all your property
            transactions.
          </p>
          <Image src={iPhone15} alt="iPhone15" />
        </div>
      </section>

      <section className="bg-[#27CD40] grid grid-cols-2 sm:grid-cols-1 place-items-center lg:gap-6 p-20 md:p-10 sm:p-6">
        <Image src={transparency} alt="transparency" />
        <div className="text-white space-y-8 md:space-y-4 sm:space-y-2">
          <h1 className="font-bold text-4xl md:text-2xl">
            Experience our transparent budget spending process
          </h1>
          <p className="font-medium md:text-lg sm:text-base">
            designed to eliminate waste and promote efficiency. By incorporating
            empiricism and lean thinking, we ensure your budget is optimized and
            effectively managed throughout your project.
          </p>
          <div className="flex gap-4">
            <Image
              src={googleplay}
              alt="googleplay"
              className="md:w-32 sm:w-24"
            />
            <Image src={appstore} alt="appstore" className="md:w-32 sm:w-24" />
          </div>
        </div>
      </section>
    </div>
  );
}
