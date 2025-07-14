'use client';

import React from 'react';
import Image from 'next/image';

export default function ProfilePhoto() {
  return (
    <section className="max-w-4xl mx-auto p-6 flex justify-center">
      <Image
        src="/fotocurriculum1-Photoroom.jpg"
        alt="Foto de perfil David Pérez"
        width={192} // equivale a w-48 en Tailwind (12rem)
        height={192}
        className="rounded-full border-4 border-teal-500 object-cover"
        priority
      />
    </section>
  );
}
