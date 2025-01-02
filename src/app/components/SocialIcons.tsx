import Image from "next/image";

interface socail {
  name?: string;
  image?: string;
  about?: string;
  person?: string;
  whatsapp?: string;
  facebook?: string;
  telegram?: string;
  linkedIn?: string;
  github?: string;
  email?: string;
  phone?: string;
}
const SocialIcons = ({
  name,
  image,
  about,
  person,
  whatsapp,
  facebook,
  telegram,
  linkedIn,
  github,
  email,
  phone,
}: socail) => {
  const icons = {
    facebook: "/icons/facebook.png",
    linkedIn: "/icons/linkedin.png",
    telegram: "/icons/telegram.png",
    github: "/icons/github.png",
    whatsapp: "/icons/whatsapp.png",
    phone: "/icons/phone.png",
  };

  return (
    <>
      {/* facebook */}
      {facebook && (
        <a href={facebook} target="_blank">
          <Image
            src={icons.facebook}
            width={40}
            height={40}
            alt={facebook}
            className="cursor-pointer opacity-80 hover:opacity-100 transition-opacity  "
          ></Image>
        </a>
      )}

      {/* telegram */}
      {telegram && (
        <a href={telegram} target="_blank">
          <Image
            src={icons.telegram}
            width={40}
            height={40}
            alt={telegram}
            className="cursor-pointer opacity-80 hover:opacity-100 transition-opacity  "
          ></Image>
        </a>
      )}

      {/*  linedIn*/}
      {linkedIn && (
        <a href={linkedIn} target="_blank">
          <Image
            src={icons.linkedIn}
            width={40}
            height={40}
            alt={linkedIn}
            className="cursor-pointer opacity-80 hover:opacity-100 transition-opacity  "
          ></Image>
        </a>
      )}

      {/*  whatsApp*/}
      {whatsapp && (
        <a href={`https://wa.me/${whatsapp}`} target="_blank">
          <Image
            src={icons.whatsapp}
            width={40}
            height={40}
            alt={whatsapp}
            className="cursor-pointer opacity-80 hover:opacity-100 transition-opacity  "
          ></Image>
        </a>
      )}

      {/*  github*/}
      {github && (
        <a href={github} target="_blank">
          <Image
            src={icons.github}
            width={40}
            height={40}
            alt={github}
            className="cursor-pointer opacity-80 hover:opacity-100 transition-opacity  "
          ></Image>
        </a>
      )}

      {/*  phone*/}
      {phone && (
        <a href={`tel:${phone}`} target="_blank">
          <Image
            src={icons.phone}
            width={40}
            height={40}
            alt={phone}
            className="cursor-pointer opacity-80 hover:opacity-100 transition-opacity  "
          ></Image>
        </a>
      )}
    </>
  );
};

export default SocialIcons;
