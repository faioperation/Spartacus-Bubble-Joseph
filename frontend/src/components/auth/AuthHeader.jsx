import logo from "../../assets/images/S Logo.png";
import LogoText from "../../assets/images/logoText.png";

export default function AuthHeader({ title, subtitle, desc }) {
  return (
    <div className="mb-6 text-center">
      {/* Logo + Brand Name */}
      <div className="mb-4 flex flex-col items-center">
        <img
          src={logo}
          alt="Spartacus Bubble"
          className="h-18 w-auto object-contain"
        />
        <div className="h-12 w-auto object-contain">
          <img 
            src={LogoText} 
            alt="Logo Tittle" 
            className="h-16 w-auto object-contain" 
            />
        </div>
      </div>

      <h2 
        className="text-4xl font-bold text-[#8BC53F] leading-tight">
        {title}
      </h2>

      {subtitle && (
        <p className="text-[#8BC53F] pt-4 text-2xl font-bold pb-3 leading-tight">{subtitle}</p>
      )}

      {desc && (
        <p className="text-sm font-semibold text-gray-500 mt-2 leading-relaxed">{desc}</p>
      )}
    </div>
  );
}
