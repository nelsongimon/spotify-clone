"use client";

import * as Dialog from '@radix-ui/react-dialog';
import { IoMdClose } from "react-icons/io";

interface ModalProps {
  isOpen: boolean;
  onChange: (open: boolean) => void;
  title: string;
  description: string;
  children: React.ReactNode;
}

export default function Modal({
  isOpen,
  onChange,
  title,
  description,
  children
}: ModalProps) {
  return (
    <Dialog.Root
      open={isOpen}
      defaultOpen={isOpen}
      onOpenChange={onChange}
    >
      <Dialog.Portal>
        <Dialog.Overlay
          className="
            bg-neutral-900/90
            backdrop-blur-sm
            fixed
            inset-0
          "
        />
        <Dialog.Content
          className="
            fixed
            top-[50%]
            left-[50%]
            translate-x-[-50%]
            translate-y-[-50%]
            bg-neutral-800
            p-[25px]
            drop-shadow-md
            border
            border-neutral-700
            max-h-full
            h-full
            md:h-auto
            md:max-h-[85vh]
            w-full
            md:w-[90vw]
            md:max-w-[450px]
            rounded-md
            focus:outline-none

          "
        >
          <Dialog.Title
            className="
              text-xl
              font-bold
              text-center
              mb-4
            "
          >
            {title}
          </Dialog.Title>
          <Dialog.Description
            className="
              mb-5
              leading-normal
              text-sm
              text-center
            "
          >
            {description}
          </Dialog.Description>
          <div>
            {children}
          </div>
          <Dialog.Close asChild>
            <button className="
              absolute
              top-[10px]
              right-[10px]
              text-neutral-400
              hover:text-white
              transition
              inline-flex
              w-[25px]
              h-[25px]
              appearance-none
              items-center
              justify-center
              rounded-full
              focus:outline-none
            ">
              <IoMdClose />
            </button>
          </Dialog.Close>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
