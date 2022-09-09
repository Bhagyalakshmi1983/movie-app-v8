import Image from "next/image";
import React from "react";
import HeaderIcon from "./HeaderIcon";
import { HomeIcon,UserIcon,PhoneIcon,InformationCircleIcon } from '@heroicons/react/24/solid'

export default function Header() {
  return (
    <div>
      <div className="">
        <HeaderIcon Icon={HomeIcon} title="HOME" />
        <HeaderIcon Icon={UserIcon} title="ACCOUNT" />
        <HeaderIcon Icon={PhoneIcon} title="CONTACT" />
        <HeaderIcon Icon={InformationCircleIcon} title="ABOUT" />
      </div>
      <Image
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/IMDB_Logo_2016.svg/640px-IMDB_Logo_2016.svg.png"
        width={100}
        height={100}
      />
    </div>
  )
}
