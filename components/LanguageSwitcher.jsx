import Image from "next/image";

function LanguageSwitcher() {
  return (
    <div>
      <div className="relative">
        <button className="flex items-center gap-2">
          <Image
            src="/bd.png"
            className="max-w-8"
            alt="bangla"
            height={100}
            width={165}
          />
          Bangla
        </button>

        {/* DropDown */}
        <div className="absolute right-0 top-full mt-2 w-40 rounded-md bg-white p-2 z-10 shadow-lg">
          <li className="flex items-center gap-2 p-2 rounded-md cursor-pointer hover:bg-gray-100">
            <Image
              className="max-w-8"
              src="/bd.png"
              alt="bangla"
              height={100}
              width={165}
            />
            Bangla
          </li>
          <li className="flex items-center gap-2 p-2 rounded-md cursor-pointer hover:bg-gray-100">
            <Image
              className="max-w-8"
              src="/usa.png"
              alt="bangla"
              height={100}
              width={165}
            />
            English
          </li>
        </div>
      </div>
    </div>
  );
}

export default LanguageSwitcher;
