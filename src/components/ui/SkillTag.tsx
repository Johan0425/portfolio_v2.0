import React from 'react';

type SkillTagProps = {
  label: string;
};

export const SkillTag = ({ label }: SkillTagProps) => {
  return (
    <div
      className="
        bg-zinc-800/80      /* Fondo semi-transparente gris oscuro */
        backdrop-blur-sm    /* Efecto de desenfoque del fondo (clave para el look) */
        text-zinc-300       /* Color de texto gris claro */
        text-sm             /* Tamaño de texto pequeño */
        font-medium         /* Grosor de fuente medio */
        px-3 py-1           /* Padding horizontal y vertical */
        rounded-md          /* Bordes redondeados */
        border            /* Activa los bordes */
        border-zinc-700/50  /* Color de borde sutil y semi-transparente */
        inline-block        /* Para que solo ocupe el espacio necesario */
      "
    >
      {label}
    </div>
  );
};